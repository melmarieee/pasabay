import PasabayLogo from "../../assets/pasabay-orange-logo.png";
import "../../css/navbar.css";
import React, { useState } from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  UncontrolledDropdown,
} from "reactstrap";

const Header = (props) => {
  const user_session = window.localStorage.getItem("userLogin");

  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(JSON.parse(user_session) || {});
  const [dropdownOpen, setDropdownOpen] = useState(false);
  

  const toggleDropDown = () => setDropdownOpen((prevState) => !prevState);

  const [deviceWidth, _] = useState(0);

  const toggle = () => setIsOpen(!isOpen);

  const toggleLogout = () => {
    localStorage.removeItem("userLogin");

    window.location.href = "/login";
  };

  return (
    <>
      <Navbar expand={deviceWidth} className="header py-3">
        <a href="/" class="navbar-logo">
          <img src={PasabayLogo} alt="purrfect-picks-logo" id="navbar-logo1" />
        </a>
        <div className="header-navbar-links">
          {/* <NavLink to="/" id='home'className='nav-home'>Home</NavLink> */}
          <NavLink to="/carpool" id="nav-carpool">
            Carpool
          </NavLink>
          {user ? (
            <Nav className="margin-negative-nav">
              <Dropdown
                className="navbutton-dropdown"
                isOpen={dropdownOpen}
                toggle={toggleDropDown}
                direction={"down"}
              >
                <DropdownToggle caret>
                <b>{user && user.user ? user.user.name : ""}</b>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="/account">Account</DropdownItem>
                  <DropdownItem href="/rides">Rides</DropdownItem>
                  <DropdownItem href="/drive">Drives</DropdownItem>
                  <DropdownItem href="/form">Create Ride</DropdownItem>
                  <DropdownItem
                    className="navLogout"
                    onClick={toggleLogout.bind(this)}
                  >
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Nav>
          ) : (
            <NavLink className="nav-login" to="/login">
              Login
            </NavLink>
          )}
        </div>

        <NavbarToggler onClick={toggle} className="burger-menu-box"/>
        <Collapse className="burgerMenu-dropDown" isOpen={isOpen} navbar>
          <Nav className="ms-auto burger-menu" navbar>
            <div className="burger-menu-container">
              <NavItem>
                <NavLink className="burger-menu-NavLink" to='/account'>{user ? user.user.name: ""}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="burger-menu-NavLink" to='/carpool'>Carpool</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="burger-menu-NavLink" to='/rides'>Rides</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="burger-menu-NavLink" to='/form'>Create Ride</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="burger-menu-NavLink" to="/drive">
                  Drives
                </NavLink>
              </NavItem>
              <Nav className="navLogout"
                    onClick={toggleLogout.bind(this)}>Logout</Nav>
            </div>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default Header;
