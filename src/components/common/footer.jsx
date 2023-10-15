import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <>
    <MDBFooter bgColor='secondary' className='text-white text-center text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='3' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase text-start py-1'>Carpool Organizer</h5>

            <p className='text-start'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias.
              Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam, est
              atque cumque eum delectus sint!
            </p>
            <ul className='list-unstyled text-start '>
              <li>
                <a href='#!' className='text-white text-decoration-none'>
                  Home
                </a>
              </li>
              <li>
                <a href='#!' className='text-white text-decoration-none'>
                  Benefits of Carpooling
                </a>
              </li>
              <li>
                <a href='#!' className='text-white text-decoration-none'>
                  How does it work
                </a>
              </li>
              <li>
                <a href='#!' className='text-white text-decoration-none'>
                  For who is it
                </a>
              </li>
              <li>
                <a href='#!' className='text-white text-decoration-none'>
                  FAQ
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0 text-start py-1'>Services</h5>

            <ul className='list-unstyled text-start'>
              <li>
                <a href='#!' className='text-white text-decoration-none'>
                  Login
                </a>
              </li>
              <li>
                <a href='#!' className='text-white text-decoration-none'>
                  Register
                </a>
              </li>
              <li>
                <a href='#!' className='text-white text-decoration-none'>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0 text-start py-1'>Contact</h5>

            <ul className='list-unstyled text-start'>
            <li>
                <i class='bx bx-home-alt-2 '>
                  Metro Manila,MN 7000, PH
                </i>
              </li>
              <li>
                <i class='bx bx-envelope '>
                  HughMelFahb@carpool.com
                </i>
              </li>
              <li>
                <i class='bx bx-phone '>
                  +63 932 577 832
                </i>
              </li>
            </ul>
          </MDBCol>
          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>

            <ul className='list-unstyled text-start py-3'>
              <li>
                <a href='#' className='text-white text-decoration-none'>
                  <img src=""/> Applink1
                </a>
              </li>
              <li>
              <a href='#' className='text-white text-decoration-none'>
                  <img src="" /> Applink 2
                  </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className='text-center p-3' style={{ backgroundColor: '#000' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-white text-decoration-none' href='#'>
          Pasabay.com
        </a>
      </div>
    </MDBFooter>
    </>
  );
}

export default Footer;