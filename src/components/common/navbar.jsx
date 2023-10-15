import React from 'react';
import '../../css/navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <a className="navbar-brand p-3 px-5" href="#"><img src="" />Logo</a>
            <ul className="navbar-nav ms-auto my-2 my-lg-0 px-5  navbar-nav-scroll">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={{ padding: '10px' }}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={{ padding: '10px' }}>Carpool</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={{ padding: '10px' }}>Profile</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
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
