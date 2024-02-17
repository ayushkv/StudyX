// import React from 'react'

// export default function Registrations() {
//   return (
//     <section id="register" className="container my-5">
//       <div className="card text-white bg-primary mb-3">
//         <div className="row card-body ps-lg-5 mb-5">
//           <div className="col-lg-9">
//             <h1 className="card-title mt-4 text-lg-start text-center">Ready to join?</h1>
//             <p className="card-text text-lg-start text-center">
//               Start your career with ProEdu courses and break into a new field like
//               information technology or data science. No prior experience necessary
//               to get started.
//             </p>
//           </div>
//           <div className="col-lg-3 mt-lg-5">
//             <div className="d-flex justify-content-center mt-lg-4 mt-4">
//               <button
//                 type="button"
//                 data-bs-toggle="modal"
//                 data-bs-target="#regModal"
//                 data-bs-whatever="Registration"
//                 className="btn bg-dark text-light px-4 py-2"
//               >
//                 Registration
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }





import React from 'react';
import './registration.css'
export default function Registrations() {
    return (
        <section id="register" className="container my-5">
            <div className="card text-white bg-primary mb-3">
                <div className="row card-body ps-lg-5 mb-5">
                    <div className="col-lg-9">
                        <h1 className="card-title mt-4 text-lg-start text-center">Ready to join?</h1>
                        <p className="card-text text-lg-start text-center">
                            Start your career with ProEdu courses and break into a new field like
                            information technology or data science. No prior experience necessary
                            to get started.
                        </p>
                    </div>
                    <div className="col-lg-3 mt-lg-5">
                        <div className="d-flex justify-content-center mt-lg-4 mt-4">
                            <button
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#regModal"
                                data-bs-whatever="Registration"
                                className="btn bg-dark text-light px-4 py-2"
                            >
                                Registration
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Registration Modal */}
            <div className="modal fade" id="regModal" tabIndex="-1" aria-labelledby="regModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="regModalLabel">
                                Registration Form
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">
                                        Your Name
                                    </label>
                                    <input type="text" className="form-control" id="name" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email Address
                                    </label>
                                    <input type="email" className="form-control" id="email" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">
                                        Password
                                    </label>
                                    <input type="password" className="form-control" id="password" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="confirmPassword" className="form-label">
                                        Confirm Password
                                    </label>
                                    <input type="password" className="form-control" id="confirmPassword" required />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="agreeTerms" required />
                                    <label className="form-check-label" htmlFor="agreeTerms">
                                        I agree to the terms and conditions
                                    </label>
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Register
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
