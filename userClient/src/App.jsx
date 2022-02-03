import './App.css';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import UserLogin from './Pages/UserLoginPage'
import UserSignup from './Pages/UserSignupPage'
import VerifyOTP from './Pages/UserOTPVerifyPage'
import UserHome from './Pages/UserHomePage'

import { useNavigate } from "react-router-dom";


function App() {

  const navigate = useNavigate();


  useEffect(() => {
    const sessionToken = localStorage.getItem("sessionToken");
    if (sessionToken) {
    }
    else{
      navigate("/login");
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={ <UserHome /> } />
      <Route path="/login" element={ <UserLogin /> } />
      <Route path="/signup" element={ <UserSignup /> } />
      <Route path="/verifyOTP" element={ <VerifyOTP /> } />
    </Routes>
  );
}

export default App;