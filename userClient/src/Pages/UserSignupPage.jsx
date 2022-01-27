import React, { Fragment } from 'react'
import LoginNavBar from '../Components/UserLogin/LoginNavbar'
import SignupForm from '../Components/UserSignup/Signup'


function UserSignupPage(){

    return(
        <Fragment>
            <LoginNavBar />
            <SignupForm />
        </Fragment>
    )
}

export default UserSignupPage