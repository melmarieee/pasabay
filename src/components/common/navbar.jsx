import PasabayLogo from '../../assets/pasabay-orange-logo.png'
import '../../css/navbar.css'
import React, {useState} from 'react';
import {  MDBIcon } from "mdb-react-ui-kit";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu,
    UncontrolledDropdown
  } from 'reactstrap';


  
const Header = (props) => {
    const user_session = window.localStorage.getItem("userLogin");

    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState(JSON.parse(user_session));
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropDown = () => setDropdownOpen((prevState) => !prevState);
    
    
    console.log(user)
    const [deviceWidth, _] = useState(0)

    const toggle = () => setIsOpen(!isOpen)

    const toggleLogout = () => {
        localStorage.removeItem("userLogin");

        window.location.href = "/login";
    }

    
    return(
        <>
            <Navbar expand={deviceWidth} className='header py-3' >
                    <a href="/" class="navbar-logo">
                        <img src={PasabayLogo} alt="purrfect-picks-logo" id="navbar-logo1"/>
                    </a>
                    <div className="header-navbar-links">  
                    <NavLink href="/" id='home'>Home</NavLink>
                    <NavLink href="/carpool" id='carpool'>Carpool</NavLink>
                    {user ? 
                    <NavLink className='margin-negative-nav'>
                        <Dropdown className="navbutton-dropdown" isOpen={dropdownOpen} toggle={toggleDropDown} direction={"down"}>
                            <DropdownToggle caret><b>{user.name}</b></DropdownToggle>
                            <DropdownMenu>
                            <DropdownItem>Account</DropdownItem>
                            <DropdownItem>Rides</DropdownItem>
                            <DropdownItem onClick={toggleLogout.bind(this)}>Logout</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </NavLink>
                    :
                    <NavLink href="/login">Login</NavLink>
                    }
                    </div>
                    
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                
                    <Nav className="ms-auto burger-menu" navbar>
                        <div className="burger-menu-container">
                            <NavItem>
                                <NavLink href="/home" id='home'>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink  href="/rides" id='rides'>Rides</NavLink>
                            </NavItem>
                            <NavLink href="/login">Login</NavLink>
                        </div>
                    </Nav>
                
                </Collapse>
            </Navbar>
      </>
    )
}

export default Header;
