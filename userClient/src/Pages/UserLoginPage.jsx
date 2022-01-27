import React, { Fragment } from 'react';
import LoginNavBar from '../Components/UserLogin/LoginNavbar'
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
