import React, { Fragment, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import './UserLoginForm.css'
import validate from './LoginValidation'
import axios from 'axios'

function LoginForm() {

const navigate = useNavigate()

const initialValues = {email:"", password:""}
const [formValues, setformValues] = useState(initialValues);
const [formErrors, setFormErrors] = useState({})
const [isSubmit, setIsSubmit] = useState(false)

const handleChange = (e)=>{
    const { name, value } = e.target
    setformValues({ ...formValues, [name]: value })
}

const handleSubmit = (e) => {
    e.preventDefault()
    setFormErrors(validate(formValues))
    setIsSubmit(true)
}

useEffect( async() => {
    if(Object.keys(formErrors).length === 0 && isSubmit){
            try {
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            }
            const { data } = await axios.post('/login', {
                email: formValues.email,
                password: formValues.password
            },config)

            navigate('/')
        }
        catch (err) {
        }
    }
},[formErrors])


  return (
    <Fragment>
        <div className="d-flex login-form pt-md-5">
            <style>
                {'body { background-color: #093545;}'}
            </style>
            <form className="g-3" onSubmit={handleSubmit}>
                <div className="signinText">Sign In</div>
                <div className="loginDescription mt-3">Sign In and start fixing with WeFix!</div>
                <div className="col-md-12 mt-4">
                <div className="form-floating mb-4">
                    <input 
                        type="text" 
                        name='email' 
                        value={formValues.email}
                        className="form-control loginInput" 
                        id="floatingInput" 
                        onChange={handleChange}
                        placeholder="Username / Email" 
                        autoComplete='off' />
                    <label htmlFor='floatingInput'className='loginLabel'>Username / Email</label>
                    <p className='errors'> { formErrors.email } </p>
                </div>
                </div>
                <div className="col-md-12">
                <div className="form-floating mb-4">
                    <input 
                        type="password" 
                        value={formValues.password}
                        name='password' 
                        onChange={handleChange}
                        className="form-control loginInput" 
                        id="floatingPassword" 
                        placeholder="Password" />
                    <label htmlFor='floatingPassword' className='loginLabel'>Password</label>
                    <p className='errors'> { formErrors.password } </p>
                </div>
                </div>
                <div className="row mb-3">
                <div className="loginForgot col-6" onClick={()=>navigate('/signup')} style={{textDecoration: 'none', cursor: 'pointer'}} >Want to join WeFix?</div>
                <div className="loginForgot col-6">Forgot password?</div>
                </div>
                <div className="col-12 mb-3">
                <button className="btn btn-primary login-btn">Login</button>
                </div>
                <div className="col-12">
                <button type='button' className="btn btn-primary google-login"> 
                    <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                        width={'30px'} 
                        className='mb-1 me-2'
                        alt="googleLogo" /> 
                    Continue with Google
                </button>
                </div>
            </form>
        </div>
  
    </Fragment>
  );
}

export default LoginForm;
