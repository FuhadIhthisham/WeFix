import React, { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginNavbar from "../Components/Navbar/Navbar";
import UserHome from "../Components/UserHome/Home";

function UserHomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    const sessionToken = localStorage.getItem("sessionToken");
    if (!sessionToken) {
        navigate("/login");
    }
  }, []);

  return (
    <Fragment>
      <LoginNavbar />
      <UserHome />
    </Fragment>
  );
}

export default UserHomePage;
