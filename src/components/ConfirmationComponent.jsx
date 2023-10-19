import React from 'react';
import LogoC from '../assets/pasabay-orange-logo.png';
import { Container } from 'reactstrap';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import '../css/ConfirmationComponent.css';

const ConfirmationComponent = () => {
  return (
    <>
      <Container className="confirmation-container">
        <div className="LogoC-image">
          <a href="/">
            <img src={LogoC} alt="Logo" />
          </a>
        </div>
        <div className="centered-content">
          <h1>Thank you for signing up!</h1>
          <p>Your registration is complete.</p>
          <button style={{ backgroundColor: '#ff8811', color: '#fff', padding: '10px' }}>
            Account
          </button>

          <Link to="/login">
          <button style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px' }}>
            Log In
           </button>
          </Link>
        </div>
      </Container>

      <MDBFooter bgColor='light' className='text-center text-lg-start text-muted' style={{ margin: '0', padding: '0' }}>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>


      {/* Footer Content */}
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{color:'#ff8811'}}>
                <MDBIcon icon="gem" className="me-3" />
                PASABAY
              </h6>
              <h4>
                Travel Together, Save Together with Pasabay.
              </h4>
              <p>Pasabay is a carpooling website that connects drivers and passengers for convenient and cost-effective rides. With just a few taps on your website, you can easily join a carpool or offer a ride to others going your way.</p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Services</h6>
              <p>
                <a href='#!' className='text-reset' style={{textDecoration:'none'}}>
                  Benefits of Carpooling
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{textDecoration:'none'}}>
                  How does it work
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{textDecoration:'none'}}>
                  For who is it
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{textDecoration:'none'}}>
                  FAQ
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Livemap</h6>
              <p>
                <a href='#!' className='text-reset' style={{textDecoration:'none'}}>
                  Search
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{textDecoration:'none'}}>
                  Locations
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{textDecoration:'none'}}>
                  Edit the map
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{textDecoration:'none'}}>
                  Major Events
                </a>
              </p>
            </MDBCol>

            {/* Contact us */}
            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Metro Manila, MNY 7000, Philippines
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                Pasabay@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +63 9234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> +63 9234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' style={{textDecoration:'none'}} href='/'>
          Pasabay.com
        </a>
      </div>
    </MDBFooter>
    </>
  );
};

export default ConfirmationComponent;
