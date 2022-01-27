import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom'
import './Signup.css'

function LoginForm() {

const navigate = useNavigate()

  return (
    <Fragment>
    <style>
          {'body {    background-color: #093545;}'}
    </style>
    <div className="d-flex login-form pt-md-5">
      <form className="g-3">
        <div className="signinText">Sign Up</div>
        <div className="loginDescription mt-3">Sign In and start fixing with WeFix!</div>
        <div className="col-md-12 mt-4">
          <div className="form-floating mb-4">
            <input type="email" className="form-control loginInput" id="username" placeholder="Username" autoComplete='off' />
            <label htmlFor='username' className='loginLabel'>Username</label>
          </div>
        </div>
        <div className="col-md-12 mt-4">
          <div className="form-floating mb-4">
            <input type="email" className="form-control loginInput" id="floatingInput" placeholder="Email" autoComplete='off' />
            <label htmlFor='Email' className='loginLabel'>Email</label>
          </div>
        </div>
        <div className="col-md-12 mt-4">
          <div className="form-floating mb-4">
            <input type="password" className="form-control loginInput" id="Password" placeholder="Password" autoComplete='off' />
            <label htmlFor='Password' className='loginLabel'>Password</label>
          </div>
        </div>
        <div className="col-md-12">
        <div className="form-floating mb-4">
            <input type="password" className="form-control loginInput" id="retypePassword" placeholder="Retype Password" />
            <label htmlFor='retypePassword' className='loginLabel'>Retype Password</label>
          </div>
        </div>
        <div className="mb-3">
          <div className="loginForgot col-8" onClick={()=>navigate('/login')} style={{textDecoration: 'none', cursor: 'pointer'}}>Already a WeFix member?</div>
        </div>
        <div className="col-12 mb-3">
          <button className="btn btn-primary login-btn">Login</button>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary google-login"> 
            <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" width={'30px'} className='mb-1 me-2' alt="googleLogo" /> 
            Continue with Google
          </button>
        </div>
        </form>
    </div>
  
  </Fragment>
  );
}

export default LoginForm;
