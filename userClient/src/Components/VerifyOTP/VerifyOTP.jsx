import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Alert from "@mui/material/Alert";

import "./VerifyOTP.css";


function VerifyOTP() {
  
  const [otpNumber, setOtpNumber] = useState({otp: ''});
  
  const handleChange = (e) => {
    setOtpNumber({otp: e.target.value})
  }
  const navigate = useNavigate()

  return (
    <>
      <style>{"body { background-color: #093545; }"}</style>

      <div className="d-flex login-form pt-md-5">
        <form className="g-3">
          <div className="otpHead mx-2">OTP Verification</div>
          <div className="loginDescription mt-3">
            Enter the OTP send to your Email
          </div>
          <div className="mt-3 mx-2">
            <input
                  type="text"
                  name="email"
                  value={otpNumber.otp}
                  onChange={handleChange}
                  className="form-control otpInput"
                  id="floatingInput"
                  maxLength={6}
                  autoComplete="off"
                />
          </div>
          <div className="loginDescription mt-1">
            00:00 
          </div>
            
          <div className="col-12 mt-4">
            <button className="btn btn-primary login-btn">Verify</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default VerifyOTP;
