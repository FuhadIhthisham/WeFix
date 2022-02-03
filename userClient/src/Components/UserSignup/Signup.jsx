import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import signupValidate from "./SignupValidation";

import "./Signup.css";
import Alert from "@mui/material/Alert";

function LoginForm() {
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    email: "",
    password: "",
    retypePass: "",
  };

  const [signupValues, setSignupValues] = useState(initialValues);
  const [signupErrors, setSignupErrors] = useState({});
  const [authError, setAuthError] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupValues({ ...signupValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSignupErrors(signupValidate(signupValues));
    setIsSubmit(true);
  };

  useEffect(async () => {
    if (Object.keys(signupErrors).length === 0 && isSubmit) {
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };

        const { data } = await axios.post(
          "/signup",
          {
            username: signupValues.username,
            email: signupValues.email,
            password: signupValues.password,
          },
          config
        );

        setSignupValues(initialValues);
        navigate("/verifyOTP");
      } catch (err) {
        setAuthError(err.response.data.message);
      }
    }
  }, [signupErrors]);

  return (
    <Fragment>
      <style>{"body { background-color: #093545; }"}</style>
      <div className="d-flex login-form pt-md-5">
        <form className="g-3" onSubmit={handleSubmit}>
          <div className="signinText">Sign Up</div>
          <div className="loginDescription mt-3">
            Sign In and start fixing with WeFix!
          </div>
          <div className="col-md-12 mt-4">
            {authError && <Alert severity="error"> {authError} </Alert>}
            <div className="form-floating mt-3">
              <input
                type="text"
                className="form-control loginInput"
                id="username"
                onChange={handleChange}
                name="username"
                placeholder="Username"
                autoComplete="off"
              />
              <label htmlFor="username" className="loginLabel">
                Username
              </label>
              <p className="errors"> {signupErrors.username} </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control loginInput"
                name="email"
                onChange={handleChange}
                id="floatingInput"
                placeholder="Email"
                autoComplete="off"
              />
              <label htmlFor="Email" className="loginLabel">
                Email
              </label>
              <p className="errors"> {signupErrors.email} </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-floating mb-2">
              <input
                type="password"
                className="form-control loginInput"
                name="password"
                onChange={handleChange}
                id="Password"
                placeholder="Password"
                autoComplete="off"
              />
              <label htmlFor="Password" className="loginLabel">
                Password
              </label>
              <p className="errors"> {signupErrors.password} </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-floating mb-4">
              <input
                type="password"
                className="form-control loginInput"
                name="retypePass"
                onChange={handleChange}
                id="retypePassword"
                placeholder="Retype Password"
              />
              <label htmlFor="retypePassword" className="loginLabel">
                Retype Password
              </label>
              <p className="errors"> {signupErrors.retypePass} </p>
            </div>
          </div>
          <div className="mb-3">
            <div
              className="loginForgot col-8"
              onClick={() => navigate("/login")}
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              Already a WeFix member?
            </div>
          </div>

          <div className="col-12 mb-3">
            <button className="btn btn-primary login-btn">Login</button>
          </div>
          <div className="col-12">
            <button type="button" className="btn btn-primary google-login">
              <img
                src="../images/googleLogo.png"
                className="mb-1 me-2 googleLogoImage"
                alt="google"
              />
              Continue with Google
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default LoginForm;
