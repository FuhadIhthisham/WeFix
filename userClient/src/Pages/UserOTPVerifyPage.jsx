import React, { Fragment } from 'react'
import LoginNavBar from '../Components/Navbar/Navbar'
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