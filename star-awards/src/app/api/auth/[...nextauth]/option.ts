import type { NextAuthOptions, User } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { DefaultSession } from "next-auth"
import { JWT } from "next-auth/jwt"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      access_token: string
    } & DefaultSession["user"]
  }
}

export const authOptions: NextAuthOptions={
	providers:[
	  CredentialsProvider({
		name: 'Credentials',
		credentials: {
		  username: { label: "Username", type: "text", placeholder: "jsmith" },
		  password: { label: "Password", type: "password" }
		},
		async authorize(credentials, req) {

			return  { id: 1, name: 'J Smith', email: 'jsmith@example.com' } as any
		  const res = await fetch(process.env.API_URI+"/login.php", {
			method: 'POST',
			body: JSON.stringify(credentials),
			headers: { "Content-Type": "application/json" }
		  })/*access_token*/
		  
		  const user = await res.json()
		  //console.log(user)
		  if (user.ok && user) {
			console.log(user)
			
			return user as any
		  }
		  return null

		  
		}
	  })
	],callbacks: {
		async session ({ session, token, user }) {
		  const sanitizedToken = Object.keys(token).reduce((p, c) => {
			// strip unnecessary properties
			if (
			  c !== "iat" &&
			  c !== "exp" &&
			  c !== "jti" &&
			  c !== "apiToken"
			) {
			  return { ...p, [c]: token[c] }
			} else {
			  return p
			}
		  }, {})
		  return { ...session, user: sanitizedToken, apiToken: token.apiToken }
		},
		async jwt ({ token, user, account, profile }) {
		  if (typeof user !== "undefined") {
			// user has just signed in so the user object is populated
			return user as unknown as JWT
		  }
		  return token
		}
	  }
	}


