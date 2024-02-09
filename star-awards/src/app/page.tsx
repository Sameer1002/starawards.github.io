"use client"

import Image from 'next/image'
import styles from './page.module.css'
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';


export default function FormValidation() {
  const validationSchema = Yup.object().shape({
    admire_you: Yup.array().min(1, "At least one admire you select").required("At least one admire you select"),
    colleague: Yup.string().required("dummy is required"),
    message: Yup.string().required("Message is required"),
    last_name: Yup.string().required("Last name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string().required("password is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState

  function onSubmit() {
    //Backend API Call operation is handled here.
  }

  return (
    <>
      <section className='mt-3 mb-5'>
        <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-md-6'>
            <h3>Welcome Rahul</h3>
          </div>
          <div className='col-sm-12 col-md-6 text-end'>
          <form action="http://localhost:3000/api/auth/signout" method="POST">
  <input
    type="hidden"
    name="csrfToken"
    defaultValue="5fc5fabae6edef7e71dd7ccaca44c353c0c50b7a07f6e8c0bdd2b792d5a39556"
  />
  <button id="submitButton" type="submit" className='btn btn-lightblue border-0 '>
    Sign out
  </button>
</form>
          </div>
        </div>

          <div className='row'>
            <div className='col-sm-12  d-flex'>
              <div className='text-start text- __className_e66fe9'>
                <p className='align-items-center d-lg-inline-flex d-block fw-bold'>Stars you can donate <span className='fs-3 ms-4 color-yellow d-block'>&#9733; &#9733; &#9733; &#9733; &#9733; &#9733; &#9734; &#9734; &#9734; &#9734; &#9734; &#9734;</span></p>
               
              </div>
              
            </div>
            
            <div className='col-sm-12'>
              <h2 className='fs-4 mb-3'>To the organisation, you may be an aide. But to a colleague, you may be the most helpful/valuable!</h2>
              <p>So, how about we turn those "may be's" to something concrete? Presenting, #StarAwards! An award where you can appreciate the star/s of your day/week/month with a star. Because it is important for all of us to get acquainted with the star in ourselves.</p>
            </div>
          </div>
          <div className='row mb-4'>
            <div className='col-sm-12'>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item rounded-0 border-black">
                  <h2 className="accordion-header border-bottom-black">
                    <button className="accordion-button rounded-0 fw-bold bg-light-blue" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Let’s guide you:</button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p><strong>Step 1: </strong>Select the name of the co-worker you would like to honor with a star</p>
                      <p><strong>Step 2: </strong>Select one (or more) attributes for which you wish to appreciate your colleague from the options given here.</p>
                      <p><strong>Step 3: </strong>Pour your heart out to them with some kind words of appreciation and if you feel like adding the cherry to the cake, share an image/document to help them know what they are really killing at!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='border-black'>
                <div className='bg-light-blue p-3 fw-bold'>Appreciation letter</div>
                <form onSubmit={handleSubmit(onSubmit)} id="reset">
                  <div className='d-flex p-3 pb-0 align-items-center'>
                    <p className='me-4 mb-0'>Dear,</p>
                    <div>
                      <select
                        {...register("colleague")}
                        name="colleague"
                        id='colleague' className='pe-3'>
                        <option value=''>Select colleague</option>
                        <option value='sameer'>Sameer</option>
                        <option value='Rahul'>Rahul</option>
                        <option value='Chetan'>Chetan Sonar</option>
                        <option value='Prafful'>Prafful</option>
                      </select>
                    </div>
                    <div className="text-danger ml-2 ms-2">{errors.colleague?.message}</div>
                  </div>

                  <div className='text-start text- __className_e66fe9 p-3 pt-0'>
                    <p className='align-items-center d-lg-inline-flex d-block fw-bold'><span className='fs-3 color-yellow d-block'>&#9733;</span></p>
                    <p>I admire you for your…</p>
                    <div className="text-danger ml-2 mt-2">{errors.admire_you?.message}</div>
                    <div className="form-check form-check-inline mb-3">
                      <input
                        {...register("admire_you")}
                        name="admire_you[]"
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        defaultValue="option1"
                      />
                      <label className="form-check-label" htmlFor="inlineCheckbox1">
                        Positive attitude
                      </label>
                    </div>
                    <div className="form-check form-check-inline mb-3">
                      <input
                        {...register("admire_you")}
                        name="admire_you[]"
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox2"
                        defaultValue="option2"
                      />
                      <label className="form-check-label" htmlFor="inlineCheckbox2">
                        Helpfulness
                      </label>
                    </div>
                    <div className="form-check form-check-inline mb-3">
                      <input
                        {...register("admire_you")}
                        name="admire_you[]"
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox3"
                        defaultValue="option3"
                      />
                      <label className="form-check-label" htmlFor="inlineCheckbox3">
                        Honesty
                      </label>
                    </div>
                    <div className="form-check form-check-inline mb-3">
                      <input
                        {...register("admire_you")}
                        name="admire_you[]"
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox4"
                        defaultValue="option4"
                      />
                      <label className="form-check-label" htmlFor="inlineCheckbox4">
                        Compassion
                      </label>
                    </div>
                    <div className="form-check form-check-inline mb-3">
                      <input
                        {...register("admire_you")}
                        name="admire_you[]"
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox5"
                        defaultValue="option5"
                      />
                      <label className="form-check-label" htmlFor="inlineCheckbox5">
                        Compassion
                      </label>
                    </div>
                    <div className="form-check form-check-inline mb-3">
                      <input
                        {...register("admire_you")}
                        name="admire_you[]"
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox6"
                        defaultValue="option6"
                      />
                      <label className="form-check-label" htmlFor="inlineCheckbox6">
                        Creativity
                      </label>
                    </div>
                    <div className="form-check form-check-inline mb-3">
                      <input
                        {...register("admire_you")}
                        name="admire_you[]"
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox6"
                        defaultValue="option6"
                      />
                      <label className="form-check-label" htmlFor="inlineCheckbox6">
                        Authenticity
                      </label>
                    </div>
                    <div className="form-check form-check-inline mb-3">
                      <input
                        {...register("admire_you")}
                        name="admire_you[]"
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox7"
                        defaultValue="option7"
                      />
                      <label className="form-check-label" htmlFor="inlineCheckbox7">
                        Promptness
                      </label>
                    </div>
                    <div className="form-check form-check-inline mb-3">
                      <input
                        {...register("admire_you")}
                        name="admire_you[]"
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox8"
                        defaultValue="option8"
                      />
                      <label className="form-check-label" htmlFor="inlineCheckbox8">
                        Cooperativeness
                      </label>
                    </div>
                    <div className="form-check form-check-inline mb-3">
                      <input
                        {...register("admire_you")}
                        name="admire_you[]"
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox9"
                        defaultValue="option9"
                      />
                      <label className="form-check-label" htmlFor="inlineCheckbox9">
                        Communicative skills
                      </label>
                    </div>
                    <div className="form-check form-check-inline mb-3">
                      <input
                        {...register("admire_you")}
                        name="admire_you[]"
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox10"
                        defaultValue="option10"
                      />
                      <label className="form-check-label" htmlFor="inlineCheckbox10">
                        Accountability
                      </label>
                    </div>
                    <p>Because...</p>
                    <div className="mb-3">
                      <textarea
                        {...register("message")}
                        name="message"
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        placeholder='Message'
                        rows={3}
                        defaultValue={""}
                      />
                      <div className="text-danger ml-2 mt-2">{errors.message?.message}</div>
                    </div>
                    <div className="col-lg-8 mt-5 mt-lg-0">
                      <button
                        type="submit"
                        className="btn btn-lightblue border-0 ">
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
