import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import UserLogin from './Pages/UserLoginPage'
import UserSignup from './Pages/UserSignupPage'
import VerifyOTP from './Pages/UserOTPVerifyPage'

function App() {
  return (
    <Routes>
      <Route path="/login" element={ <UserLogin /> } />
      <Route path="/signup" element={ <UserSignup /> } />
      <Route path="/verifyOTP" element={ <VerifyOTP /> } />
    </Routes>
  );
}

export default App;