import React from 'react';
import LogoC from '../assets/pasabay-orange-logo.png'
import { Container } from 'reactstrap';
import '../css/ConfirmationComponent.css'

const ConfirmationComponent = () => {
  return (
    <Container className="confirmation-container">
        <div className="LogoC-image" style={{paddingLeft: '150px'}}>
        <a href="/">
            <img src={LogoC} alt="Logo" />
        </a>
        </div>
        <div className="centered-content">
      <h1>Thank you for signing up!</h1>
      <p>Your registration is complete.</p>
      </div>
    </Container>
  );
};

export default ConfirmationComponent;

