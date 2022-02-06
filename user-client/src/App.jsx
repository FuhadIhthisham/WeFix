import "./App.css";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import UserLogin from "./Pages/UserLoginPage";
import UserSignup from "./Pages/UserSignupPage";
import VerifyOTP from "./Pages/UserOTPVerifyPage";
import UserHome from "./Pages/UserHomePage";

import { useDispatch } from "react-redux";
import { add_user } from "./Redux/userDetails/userDetailsSlice";

import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const sessionToken = localStorage.getItem("sessionToken");
    if (sessionToken) {
      let user = JSON.parse(sessionToken);
      dispatch(
        add_user({
          ...user.data,
        })
      );
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<UserHome />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/signup" element={<UserSignup />} />
      <Route path="/verifyOTP" element={<VerifyOTP />} />
    </Routes>
  );
}

export default App;
