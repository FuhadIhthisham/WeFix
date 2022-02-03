import React, { Fragment, useEffect } from 'react';
import LoginNavBar from '../Components/LoginNavbar/LoginNavbar'
import LoginForm from '../Components/UserLogin/LoginForm'

import { useNavigate } from "react-router-dom";

function UserLoginPage() {

  const navigate = useNavigate();

  useEffect(() => {
    const sessionToken = localStorage.getItem("sessionToken");
    if (sessionToken) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []);
    
  return (
    <Fragment>
      <LoginNavBar />
      <LoginForm />
    </Fragment>
  );
}

export default UserLoginPage;
