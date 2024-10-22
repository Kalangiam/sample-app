import React from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AxiosService from '../utils/AxiosService';
import ApiRoutes from '../utils/ApiRoutes';

function Register() {

    let navigate = useNavigate()

    const handleLogin = async (e) => {

        e.preventDefault()

        try {
            const formData = new FormData(e.target);
            const formProps = Object.fromEntries(formData);
            // console.log("Form Data:", formProps);
            let res = await AxiosService.post(ApiRoutes.USER_REGISTER.path, formProps, {
                authenticate: ApiRoutes.USER_REGISTER.authenticate
            })

            if (res.status === 200) {
                navigate('/login')
            }
        } catch (error) {
            console.error("Error Response:", error.response);  // Log detailed error response
            console.error("Error Message:", error.message);    // Log error message
        }

    }


    return (
        <div>
            <section className="vh-100">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="img-fluid" alt="Sample image" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form action='' onSubmit={handleLogin}>
                                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-floating mx-1">
                                        <i className="fab fa-facebook-f"></i>
                                    </button>

                                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-floating mx-1">
                                        <i className="fab fa-twitter"></i>
                                    </button>

                                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-floating mx-1">
                                        <i className="fab fa-linkedin-in"></i>
                                    </button>
                                </div>

                                <div className="divider d-flex align-items-center my-4">
                                    <p className="text-center fw-bold mx-3 mb-0">Or</p>
                                </div>

                                <div data-mdb-input-init className="form-outline mb-4">
                                    <input type="name" id="name" className="form-control form-control-lg"
                                        placeholder="Enter Your Name" name="name" />
                                    <label className="form-label" htmlFor="form3Example3">Name</label>
                                </div>

                                <div data-mdb-input-init className="form-outline mb-4">
                                    <input type="email" id="email" className="form-control form-control-lg"
                                        placeholder="Enter a valid email address" name="email" />
                                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                                </div>

                                <div data-mdb-input-init className="form-outline mb-3">
                                    <input type="password" id="password" className="form-control form-control-lg"
                                        placeholder="Enter password" name="password" />
                                    <label className="form-label" htmlFor="form3Example4">Password</label>
                                </div>

                                <div data-mdb-input-init className="form-outline mb-3">
                                    <input type="password" id="confirmpassword" className="form-control form-control-lg"
                                        placeholder="Confirm password" name="confirmpassword" />
                                    <label className="form-label" htmlFor="form3Example4">Confirm Password</label>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="form-check mb-0">
                                        <label className="form-check-label" htmlFor="form2Example3">
                                        </label>
                                    </div>
                                    <a href="#!" className="text-body">Forgot password?</a>
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg"
                                        style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Register</button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Already have an account? <Link onClick={() => navigate('/login')}
                                        className="link-danger">Login</Link></p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
                <div
                    className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

                    <div className="text-white mb-3 mb-md-0">
                        Copyright © 2020. All rights reserved.
                    </div>



                    <div>
                        <a href="#!" className="text-white me-4">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#!" className="text-white me-4">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#!" className="text-white me-4">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="#!" className="text-white">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Register