import React, { Fragment } from 'react'
import LoginNavBar from '../Components/LoginNavbar/LoginNavbar'
import OTPVerifyForm from '../Components/VerifyOTP/VerifyOTP'


function UserSignupPage(){

    return(
        <Fragment>
            <LoginNavBar />
            <OTPVerifyForm />
        </Fragment>
    )
}

export default UserSignupPage