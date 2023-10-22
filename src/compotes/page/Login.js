import React from 'react';
import {NavLink} from "react-router-dom";
const Login = () => {
    return (
        <section
        className="mt-0 overflow-hidden  vh-100 d-flex justify-content-center align-items-center p-4">
        {/* <!-- Page Content Goes Here --> */}

        {/* <!-- Login Form--> */}
        <div className="col col-md-8 col-lg-6 col-xxl-5">
            {/* <!-- Logo--> */}
            <NavLink className="navbar-brand fw-bold fs-3 flex-shrink-0 order-0 align-self-center justify-content-center d-flex mx-0 px-0" to="/">
                <div className="d-flex align-items-center">
                    <svg className="f-w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 77.53 72.26"><path d="M10.43,54.2h0L0,36.13,10.43,18.06,20.86,0H41.72L10.43,54.2Zm67.1-7.83L73,54.2,68.49,62,45,48.47,31.29,72.26H20.86l-5.22-9L52.15,0H62.58l5.21,9L54.06,32.82,77.53,46.37Z" fill="currentColor" fill-rule="evenodd"/></svg>
                </div>
            </NavLink >
            {/* <!-- / Logo--> */}
            <div className="shadow-xl p-4 p-lg-5 bg-white">
                <h1 className="text-center fw-bold mb-5 fs-2">Login</h1>
                <NavLink to="#" className="btn btn-facebook d-block mb-2"><i className="ri-facebook-circle-fill align-bottom"></i> Login
                    with Facebook</NavLink>
                <NavLink to="#" className="btn btn-twitter d-block mb-2"><i className="ri-twitter-fill align-bottom"></i> Login with
                    Twitter</NavLink>
                <span className="text-muted text-center d-block fw-bolder my-4">OR</span>
                <form>
                    <div className="form-group">
                      <label className="form-label" for="login-email">Email address</label>
                      <input type="email" className="form-control" id="login-email" placeholder="name@email.com"/>
                    </div>
                    <div className="form-group">
                      <label for="login-password" className="form-label d-flex justify-content-between align-items-center">
                        Password
                        <NavLink to="/forgotten-password" className="text-muted small">Forgot your password?</NavLink>
                      </label>
                      <input type="password" className="form-control" id="login-password" placeholder="Enter your password"/>
                    </div>
                    <button type="submit" className="btn btn-dark d-block w-100 my-4">Login</button>
                </form>
                <p className="d-block text-center text-muted">New customer? <NavLink className="text-muted"to="/register">Sign up for an account</NavLink ></p>
            </div>

        </div>
        {/* <!-- / Login Form--> */}

        {/* <!-- /Page Content --> */}
    </section>
    );
};

export default Login;