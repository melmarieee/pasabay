import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import picture from '../assets/login-picture.png';
import companylogo from '../assets/pasabay-orange-logo.png';
import '../css/login.css';
import axios from "axios"

const loginURL = "https://powerful-taiga-76725-654b259bda23.herokuapp.com/api/login";

function Login() {
  const formStyle = {
    padding: '20px',
  };

  const formGroupStyle = {
    marginBottom: '15px',
  };

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (email.trim() === '') {
      setEmailError('Email is Required');
    } else {
      setEmailError('');
      localStorage.setItem('userEmail', email);
    }

    if (password.trim() === '') {
      setPasswordError('Password is Required');
    } else {
      setPasswordError('');
    }
  }

  return (
    <div>
      <Row>
        <Col className="text-center image-left-pic-container">
          <img id="picture-login" src={picture} alt="Your Picture" className="img-fluid" />
        </Col>
        <Col>
          <Form style={formStyle} onSubmit={handleLogin}>
            <Col className="text-center">
              <a href="/">
                <img src={companylogo} alt="Your Logo" width="200" className="mt-5 pt-5 mb-3"  />
              </a>
            </Col>
            <div className='text-center pt-4'>
              <Label style={{fontWeight: '600', fontFamily: 'Manrope' }}>Please login to your account</Label>
            </div>
            <FormGroup style={formGroupStyle}>
              <Input className="input-container mx-5" type="text" id="name" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
              {emailError && <div style={{ fontSize: '12px', width: '100%', color: 'red' }}>{emailError}</div>}
            </FormGroup>
            <FormGroup style={formGroupStyle}>
              <Input className="input-container mx-5 my-4" type="password" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
              {passwordError && <div style={{ fontSize: '12px', width: '100%', color: 'red' }}>{passwordError}</div>}
            </FormGroup>
            <div className="text-center p-3">
              <Button className="button-info">Log in</Button>
              <br />
              <a href="/forgotpassword">
                <Label style={{ color: 'darkgray', cursor: 'pointer', fontFamily: 'Manrope', fontWeight: '400' }}>Forgot password?</Label>
              </a>
              <br />
            </div>
            <div className='text-center'>
              <Label style={{ fontFamily: 'Manrope', fontWeight: '600' }}>Don't have an account? <a href="/signup" style={{ textDecoration: 'none', color: '#ff8811' }}>Sign up</a></Label>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
