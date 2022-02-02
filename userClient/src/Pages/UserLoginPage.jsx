import React, { Fragment } from 'react';
import LoginNavBar from '../Components/LoginNavbar/LoginNavbar'
import LoginForm from '../Components/UserLogin/LoginForm'


function UserLoginPage() {
    
  return (
    <Fragment>
      <LoginNavBar />
      <LoginForm />
    </Fragment>
  );
}

export default UserLoginPage;
