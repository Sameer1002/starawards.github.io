import Image from "next/image"

export default function appreciate() {
    return (
        <>
            <section className="mt-3">
                <div className="container">
                    <div className="row align-items-center mb-4">
                        <div className="col-6">
                            <Image src="/star-logo.png"
                                width={200}
                                height={57}
                                alt={"Star Logo"} />
                        </div>
                        <div className="col-6 text-end">
                            <button className="btn btn-lightblue border-0 ">appreciate now</button>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-sm-12 col-md-4">
                            <p className="fs-5 fw-bold">Header Text</p>
                        </div>
                        <div className="col-sm-12 col-md-8 text-start text-md-end">
                            <div className='text-start text-md-end'>
                                <p className='align-items-center d-lg-inline-flex d-block fw-bold mb-0'>Total stars donated<span className='fs-3 ms-0 ms-md-4 color-yellow d-block'>&#9733; &#9733; &#9733; &#9733; &#9733; &#9733; &#9734; &#9734; &#9734; &#9734; &#9734; &#9734;</span></p>
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-sm-12">
                            <table className="table table-bordered">
                                <thead className="table-bg-lightblue">
                                    <tr>
                                        <th colSpan={4}>Star sent to</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="fw-bold">Name</td>
                                        <td className="fw-bold">Admire you for</td>
                                        <td className="fw-bold">Month</td>
                                        <td className="fw-bold">Comments</td>
                                    </tr>
                                    <tr>
                                        <td>Rohit Salaskar <span className="color-yellow">&#9733;</span></td>
                                        <td>Helpfulness, Honesty, Creativity, Accountability</td>
                                        <td>June</td>
                                        <td>View</td>
                                    </tr>
                                    <tr>
                                        <td>Prafful Gajula <span className="color-yellow">&#9733;</span></td>
                                        <td>Helpfulness, Honesty, Creativity, Accountability</td>
                                        <td>May</td>
                                        <td>View</td>
                                    </tr>
                                    <tr>
                                        <td>Shubham Sharma <span className="color-yellow">&#9733;</span></td>
                                        <td>Helpfulness, Honesty, Creativity, Accountability</td>
                                        <td>April</td>
                                        <td>View</td>
                                    </tr>
                                    <tr>
                                        <td>Chetan Sonar <span className="color-yellow">&#9733;</span></td>
                                        <td>Helpfulness, Honesty, Creativity, Accountability</td>
                                        <td>March</td>
                                        <td>View</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-sm-12 col-md-4">
                            <p className="fs-5 fw-bold">Header Text</p>
                        </div>
                        <div className="col-sm-12 col-md-8 text-start text-md-end">
                            <div className='text-start text-md-end'>
                                <p className='align-items-center d-lg-inline-flex d-block fw-bold mb-0'>Total stars donated<span className='fs-3 ms-0 ms-md-4 color-yellow d-block'>&#9733; &#9733; &#9733; &#9733; &#9733; &#9733; &#9734; &#9734; &#9734; &#9734; &#9734; &#9734;</span></p>
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <table className="table table-bordered">
                                <thead className="table-bg-lightblue">
                                    <tr>
                                        <th colSpan={4}>Star sent to</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="fw-bold">Name</td>
                                        <td className="fw-bold">Admire you for</td>
                                        <td className="fw-bold">Star Count</td>
                                        <td className="fw-bold">Comments</td>
                                    </tr>
                                    <tr>
                                        <td>Rohit Salaskar <span className="color-yellow">&#9733;</span></td>
                                        <td>Helpfulness, Honesty, Creativity, Accountability</td>
                                        <td className="color-yellow">&#9733;</td>
                                        <td data-bs-toggle="modal" data-bs-target="#rohit">View</td>
                                    </tr>
                                    <tr>
                                        <td>Prafful Gajula <span className="color-yellow">&#9733;</span></td>
                                        <td>Helpfulness, Honesty, Creativity, Accountability</td>
                                        <td className="color-yellow">&#9733;</td>
                                        <td>View</td>
                                    </tr>
                                    <tr>
                                        <td>Shubham Sharma <span className="color-yellow">&#9733;</span></td>
                                        <td>Helpfulness, Honesty, Creativity, Accountability</td>
                                        <td className="color-yellow">&#9733;</td>
                                        <td>View</td>
                                    </tr>
                                    <tr>
                                        <td>Chetan Sonar <span className="color-yellow">&#9733;</span></td>
                                        <td>Helpfulness, Honesty, Creativity, Accountability</td>
                                        <td className="color-yellow">&#9733;</td>
                                        <td>View</td>
                                    </tr>
                                </tbody>
                            </table>


                            <div
                                className="modal fade"
                                id="rohit"
                                tabIndex={-1}
                                aria-labelledby="rohitLabel"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog modal-lg modal-dialog-centered">
                                    <div className="modal-content bg-transparent border-0">
                                        <div className="envbox">
                                            <div className="env">
                                                <label htmlFor="open-env">
                                                    <div className="open-env">
                                                        <label className="top" htmlFor="open-env" />
                                                        <div className="content text-start">
                                                            <h2 className="fs-5">Dear Bena Waghela, <span className="color-yellow">&#9733;</span></h2>
                                                            <p>
                                                            I admire you for your...<strong>Positive attitude, Helpfulness, Honesty, Co-operativeness</strong> Because...In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available
                                                            </p>
                                                            <p><strong>From -</strong> Aravind</p>
                                                            <button className="btn btn-lightblue border-0 ">Reply</button>
                                                            <button className="btn btn-outline-dark ms-3">Close</button>
                                                        </div>
                                                        <div className="rest" />
                                                       
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                           


                        </div>
                    </div>
                </div>
                
            </section>
        </>
    )
}