import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import picture from '../assets/login-picture.png';
import companylogo from '../assets/pasabay-orange-logo.png';
import '../css/login.css';
import axios from "axios"

const loginURL = "https://powerful-taiga-76725-654b259bda23.herokuapp.com/api/login";

function Login() {

  // Styles
  const formStyle = {
    padding: '20px',
  };

  const formGroupStyle = {
    marginBottom: '15px',
  };

  // Validation Forms
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');


  // Sample User
  const predefinedUserData = [
    { email: 'user1@example.com', password: 'password1' },
    { email: 'user2@example.com', password: 'password2' },
    // Add more user objects as needed
  ];

  // Validation Checks and Local Storage
  const handleLogin = (e) => {
    e.preventDefault();
  
    let emailIsValid = true;
    let passwordIsValid = true;
  
    if (email.trim() === '') {
      setEmailError('Email is required');
      emailIsValid = false;
    } else {
      setEmailError('');
    }
  
    if (password.trim() === '') {
      setPasswordError('Password is required');
      passwordIsValid = false;
    } else {
      setPasswordError('');
    }
  
    if (emailIsValid && passwordIsValid) {
      const user = predefinedUserData.find((userData) => userData.email === email);
  
      if (user) {
        if (user.password === password) {
          // Successful login
          // You can redirect the user to a dashboard or another page
          window.location.href = '/carpool';
        } else {
          // Password is incorrect
          setPasswordError('Incorrect password');
        }
      } else {
        // Email is incorrect
        setEmailError('Incorrect email');
      }
    }
  };

  return (
    <div>
      <Row>
        <Col className="text-center image-left-pic-container">
          <img id="picture-login" src={picture} alt="Your Picture" className="img-fluid p-5" />
        </Col>
        <Col className='padding-top-login-signup'>
          <Form style={formStyle} onSubmit={handleLogin}>
            <Col className="text-center mb-5">
              <a href="/">
                <img src={companylogo} alt="Your Logo" width="250" />
              </a>
            </Col>

            <div className='px-5 text-center'>
              <h1><b>Welcome Back!</b></h1>
            </div>
            <div className='px-5 mb-5'>
              <Label className='text-secondary'>Please enter your details</Label>
            </div>

            <FormGroup style={formGroupStyle}>
              <Input className="input-container mx-5" type="text" id="name" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
              {emailError && <div style={{ fontSize: '12px', width: '100%', color: 'red' }}>{emailError}</div>}
            </FormGroup>

            <FormGroup style={formGroupStyle}>
              <Input className="input-container mx-5 my-4" type="password" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
              {passwordError && <div style={{ fontSize: '12px', width: '100%', color: 'red' }}>{passwordError}</div>}
            </FormGroup>

            <div className="text-center" style={{ padding: '50px' }}>
              <Button style={{ backgroundColor: '#ff8811' }} >Log in</Button>
              <br />
              <a href="/forgotpassword">
                <Label style={{ color: 'darkgray', cursor: 'pointer', fontFamily: 'Manrope', fontWeight: '400' }}>Forgot password?</Label>
              </a>
              <br />
            </div>

            <div className='text-center'>
              <Label>Don't have an account? <a href="/signup" style={{ textDecoration: 'none', color: '#ff8811' }}>Sign up</a></Label>
            </div>

          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
