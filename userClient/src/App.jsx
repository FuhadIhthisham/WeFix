import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import UserLogin from './Pages/UserLoginPage'
import UserSignup from './Pages/UserSignupPage'

function App() {
  return (
    <Routes>
      <Route path="/login" element={ <UserLogin /> } />
      <Route path="/signup" element={ <UserSignup /> } />
    </Routes>
  );
}

export default App;