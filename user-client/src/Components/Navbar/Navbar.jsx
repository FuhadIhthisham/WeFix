import React, { Fragment } from "react";
import "./UserLoginNavbar.css";
import { useNavigate } from "react-router-dom";
import { Badge, Nav, Navbar, NavDropdown } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { add_user } from "../../Redux/userDetails/userDetailsSlice";

function LoginNavbar() {
  const navigate = useNavigate();
  const userName = useSelector((state) => state.userDetails?.user?.username);
  const sessionToken = localStorage.getItem("sessionToken");
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("sessionToken");
    dispatch(
      add_user({
        user: null,
      })
    );
    navigate("/login");
  };

  const gotoHome = () => {
    navigate("/");
  };

  return (
    <Fragment>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="navBackground sticky-md-top"
        variant="dark"
      >
        <Navbar.Brand>
          <img
            src="../images/WeFixLogo2.png"
            onClick={gotoHome}
            alt="Logo"
            className="navLogo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {sessionToken && (
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ms-3 my-2">
              <input
                type="text"
                name="email"
                className="form-control loginInput"
                id="locationInput"
                placeholder="Location"
                autoComplete="off"
              />
            </Nav>
            <input
              type="text"
              name="email"
              className="form-control loginInput ms-3 my-2"
              id="floatingInput"
              placeholder="Search for Work / Worker"
              autoComplete="off"
            />

            <Nav className="me-5">
              <Nav.Link className="post-button px-3 ms-3">Post</Nav.Link>
              <Nav.Link className="ms-3">
                <img
                  src="../images/bell.png"
                  className="notificationIcon"
                  alt=""
                />
                <Badge pill bg="danger" className="notificationCount">
                  1
                </Badge>
              </Nav.Link>
              <NavDropdown
                title={
                  <img
                    src="../images/profile.png"
                    className="profilePic"
                    alt=""
                  />
                }
                className="navDropDown ms-3"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item disabled> {userName} </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Profile</NavDropdown.Item>
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        )}
      </Navbar>

      {sessionToken && (
      <Navbar
        collapseOnSelect
        expand="lg"
        className="categoryNav"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          
          <NavDropdown
              title={'All Categories'}
              className="ms-3"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item className="categoryNavText">Carpenter</NavDropdown.Item>
              <NavDropdown.Item className="categoryNavText">Plumber</NavDropdown.Item>
          </NavDropdown>
          <Nav>
            <Nav.Link className="categories px-3 ms-3">Carpenter</Nav.Link>
            <Nav.Link className="categories px-3 ms-3">Plumber</Nav.Link>
            <Nav.Link className="categories px-3 ms-3">Mason</Nav.Link>
            <Nav.Link className="categories px-3 ms-3">Babysitter</Nav.Link>
            <Nav.Link className="categories px-3 ms-3">House Maid</Nav.Link>
            <Nav.Link className="categories px-3 ms-3">Catering</Nav.Link>
            <Nav.Link className="categories px-3 ms-3">Painter</Nav.Link>
            <Nav.Link className="categories px-3 ms-3">Mechanic</Nav.Link>
            <Nav.Link className="categories px-3 ms-3">Catering</Nav.Link>
            <Nav.Link className="categories px-3 ms-3">Painter</Nav.Link>
            <Nav.Link className="categories px-3 ms-3">Mechanic</Nav.Link>
            <Nav.Link className="categories px-3 ms-3">Catering</Nav.Link>
            <Nav.Link className="categories px-3 ms-3">Painter</Nav.Link>
            <Nav.Link className="categories px-3 ms-3">Mechanic</Nav.Link>
          </Nav>          
        </Navbar.Collapse>
      </Navbar>
        )}
      
    </Fragment>
  );
}

export default LoginNavbar;
