import './App.css';
import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

import AdminLogin from './Pages/AdminLoginPage';
import AdminHome from './Pages/AdminHomePage';

function App() {

  const navigate = useNavigate()

  useEffect(() => {
    const sessionToken = localStorage.getItem('adminToken')
    if(!sessionToken){
      navigate('/admin/login')
    }
  },[])

  return (
    <>
      <Routes>
        <Route path='/admin' element={<AdminHome />} />
        <Route path='/admin/login' element={<AdminLogin />} />
        {/* <Route path='/admin/userManagement' element={} /> */}
      </Routes>
    </>
  );
}

export default App;
