import React, { Fragment } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { Badge, Nav, Navbar, NavDropdown } from "react-bootstrap";


function LoginNavbar() {
  const navigate = useNavigate();
  const sessionToken = localStorage.getItem("adminToken");

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  const gotoHome = () => {
    navigate("/admin");
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
        { sessionToken && (
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ms-3 my-2" /> 
            <Nav className="me-5">
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
                <NavDropdown.Item disabled> ADMIN </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        )}
      </Navbar>
    </Fragment>
  );
}

export default LoginNavbar;
