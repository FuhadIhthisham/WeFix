import React, { Fragment, useState, useEffect } from "react";
import "./LoginForm.css";
import validate from "./LoginValidation";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { add_worker } from "../../Redux/workerDetails/workerDetails";

import { verifyLogin } from "../../Helpers/axios";

function LoginForm() {
  const initialValues = { email: "", password: "" };
  const [formValues, setformValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [authError, setAuthError] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(async () => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      verifyLogin(formValues)
        .then((data) => {
          localStorage.setItem("workerToken", JSON.stringify({ data }));
          dispatch(
            add_worker({
              ...data,
            })
          );
          navigate("/worker");
        })
        .catch((err) => {
          setAuthError(err.response.data.message);
        });
    }
  }, [formErrors]);

  return (
    <Fragment>
      <div className="d-flex login-form pt-md-5">
        <style>{"body { background-color: #093545;}"}</style>
        <form className="g-3" onSubmit={handleSubmit}>
          <div className="signinText">Worker Sign In</div>
          <div className="loginDescription mt-3">
            Sign In and start fixing with WeFix!
          </div>
          <div className="col-md-12 mt-4">
            {authError && (
              <div className="my-3">
                <Alert severity="error"> {authError} </Alert>
              </div>
            )}
            <div className="form-floating mb-4">
              <input
                type="text"
                name="email"
                value={formValues.email}
                className="form-control loginInput"
                id="email"
                onChange={handleChange}
                placeholder="Username / Email"
                autoComplete="off"
              />
              <label htmlFor="email" className="loginLabel">
                Username / Email
              </label>
              <p className="errors"> {formErrors.email} </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-floating mb-4">
              <input
                type="password"
                value={formValues.password}
                name="password"
                onChange={handleChange}
                className="form-control loginInput"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword" className="loginLabel">
                Password
              </label>
              <p className="errors"> {formErrors.password} </p>
            </div>
          </div>
          <div className="row mb-3">
            <div
              className="loginForgot col-6"
              onClick={() => navigate("/worker/signup")}
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              Want to join WeFix?
            </div>
            <div className="loginForgot col-6">Forgot password?</div>
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
