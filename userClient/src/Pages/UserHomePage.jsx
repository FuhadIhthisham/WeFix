import React, { Fragment }  from "react";
import LoginNavbar from "../Components/LoginNavbar/LoginNavbar";
import UserHome from '../Components/UserHome/Home'

function UserHomePage () {
    return (
        <Fragment>
            <LoginNavbar />
            <UserHome />
        </Fragment>
    )
}

export default UserHomePage