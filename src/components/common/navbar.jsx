import PasabbayLogo from '../../assets/pasabay-orange-logo.png'
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
    const cart_user = window.localStorage.getItem("user");

    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState(JSON.parse(cart_user));
    const [deviceWidth, _] = useState(0)

    const toggle = () => setIsOpen(!isOpen)

    
    return(
        <>
            <Navbar expand={deviceWidth} className='header py-3' >
                    <a href="/" class="navbar-logo">
                        <img src={PasabbayLogo} alt="purrfect-picks-logo" id="navbar-logo1"/>
                    </a>
                    <div className="header-navbar-links">
                    <NavLink href="/" id='subs'>Home</NavLink>
                    <NavLink href="/carpool" id='prods'>Carpool</NavLink>
                    <NavLink href="/products" id='prods'>Profile</NavLink>
                   
                    {user ? 
                    <NavLink id='my-account'>
                        {user.name}
                        <UncontrolledDropdown group direction="down">
                            <DropdownToggle
                                caret
                                color="#952322"
                                className='buttoncaret'
                            />
                            <DropdownMenu>
                                <DropdownItem header>
                                Profile
                                </DropdownItem>
                                <DropdownItem >
                                    Account
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
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
