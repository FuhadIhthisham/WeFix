import './App.css';
import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import WorkerHome from './Pages/WorkerHomePage';
import WorkerLogin from './Pages/WorkerLoginPage';
import WorkerSignup from './Pages/WorkerSignupPage';
import OTPVerification from './Pages/OTPVerifyPage';

import { useDispatch } from 'react-redux'
import { add_worker } from './Redux/workerDetails/workerDetails';

function App() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const sessionToken = localStorage.getItem('workerToken')
    if(sessionToken){
      let worker = JSON.parse(sessionToken)
      dispatch(add_worker({
        ...worker.data
      }))
    } else {
        navigate('/worker/login')
    }
  }, [])

  return (
    <Routes>
      <Route path='/worker' element={<WorkerHome />}></Route>
      <Route path='/worker/login' element={<WorkerLogin />}></Route>
      <Route path='/worker/signup' element={<WorkerSignup />}></Route>
      <Route path='/worker/verifyOTP' element={<OTPVerification />}></Route>
    </Routes>
  );
}

export default App;
