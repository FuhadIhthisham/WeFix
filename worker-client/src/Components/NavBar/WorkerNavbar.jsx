import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { Badge, Nav, Navbar, NavDropdown } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { add_worker } from "../../Redux/workerDetails/workerDetails";

function WorkerNavbar() {
  const navigate = useNavigate();
  const sessionToken = localStorage.getItem("workerToken");
  const dispatch = useDispatch();

  const username = useSelector((state) => state.workerDetails?.worker?.username)

  const handleLogout = () => {
    localStorage.removeItem("workerToken");

    dispatch(
      add_worker({
        worker: null,
      })
    );

    navigate("/worker/login");
  };

  const gotoHome = () => {
    navigate("/worker");
  };

  return (
    <>
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
                <NavDropdown.Item disabled> {username} </NavDropdown.Item>
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
    </>
  );
}

export default WorkerNavbar;
