import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";

import "./VerifyOTP.css";
import validateOTP from "./ValidateOTP";
import { verifyOTP } from "../../Helpers/axios";

function VerifyOTP() {
  const [otpNumber, setOtpNumber] = useState({ otp: "" });
  const [otpError, setOtpError] = useState(null);

  const handleChange = (e) => {
    setOtpNumber({ otp: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let err = validateOTP(otpNumber.otp)
    if (!err) {
      
      verifyOTP(parseInt(otpNumber.otp))
        .then((data) => {
          navigate("/login");
        })
        .catch((err) => {
          setOtpError(err.response.data.message)
        });
    }
    else{
      setOtpError(validateOTP(otpNumber.otp));
    }
  }

  const navigate = useNavigate();

  return (
    <>
      <style>{"body { background-color: #093545; }"}</style>

      <div className="d-flex login-form pt-md-5">
        <form className="g-3" onSubmit={handleSubmit}>
          <div className="otpHead mx-2">OTP Verification</div>
          <div className="loginDescription mt-3">
            Enter the OTP send to your Email
          </div>
          { otpError && <Alert severity="error"> {otpError} </Alert>}
          <div className="mt-3 mx-2">
            <input
              type="text"
              name="email"
              value={otpNumber.otp}
              onChange={handleChange}
              className="form-control otpInput"
              id="OtpInput"
              maxLength={6}
              autoComplete="off"
            />
          </div>
          <div className="loginDescription mt-2">00:00</div>

          <div className="col-12 mt-3">
            <button className="btn btn-primary login-btn">Verify</button>
          </div>
          {/* <div className="loginDescription">Resend OTP?</div> */}
        </form>
      </div>
    </>
  );
}

export default VerifyOTP;
