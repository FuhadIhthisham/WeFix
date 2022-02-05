import React, { Fragment } from 'react'
import LoginNavBar from '../Components/Navbar/Navbar'
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