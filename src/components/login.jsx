import React, { useRef, useState } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useState } from 'react';
import React from 'react';
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import picture from '../assets/login-picture.png'
import companylogo from '../assets/pasabay-orange-logo.png'
import "../css/login.css"

function Login () {
  // Styles
  const formStyle = {
    padding: '20px',
  };

  const formGroupStyle = {
    marginBottom: '15px', 
  };

  // Validation Forms
  const [email, setEmail] = useState ('');
  const [emailError, setEmailError] = useState ('');

  const [password, setPassword] = useState ('');
  const [passwordError, setPasswordError] = useState ('');

  // Validation Checks
  const handleLogin = () => {
  if (email.trim() === '') {
    setEmailError('Email is Required')
  } else {
    setEmailError('');

    // Store the email in local Storage
    localStorage.setItem('userEmail', email);
  }

  if (password.trim() === '') {
    setPasswordError('Password is Required')
  } else {
    setPasswordError('')
  }
  }

  return (

    <Container style={{ paddingTop: '100px'}}>
      <Row className="align-items-center" >

        <Col className="text-center">
            <img id="picture-login" src={picture} alt="Your Picture" className="img-fluid"/>
        </Col>

        <Col>
          <Form style={formStyle}>
          <Col className="text-center" style={{ padding: '20px' }}>
            <a href="/">
          <img src={companylogo} alt="Your Logo" width="200" />
          </a>
        </Col>

        <div className='text-center'>
        <Label style={{fontFamily:'Manrope', fontWeight:'600'}}>Please login to your account</Label>
        </div>

            <FormGroup style={formGroupStyle}>
              <Input type="text" id="name" placeholder="Email"  onChange={(e) =>   setEmail(e.target.value)} value={email} />
              {emailError && <div style={{ fontSize: '12px', width: '100%', color: 'red' }}>{emailError}</div>}

    <div>
      <Row>
        <Col lg={6} className="text-center p-5 image-left-pic-container">
            <img id="picture-login" src={picture} alt="Your Picture" className="img-fluid"/>
        </Col>
        <Col lg={6} className='px-5'>
        <Form style={formStyle} onSubmit={handleFormSubmit}>
          <Col className="text-center" style={{ padding: '20px' }}>
            <a href="/">
              <img className="py-5" src={companylogo} alt="Your Logo" width="250" />
            </a>
          </Col>
          <div className='text-center'>
            <Label style={{fontFamily:'Manrope', fontWeight:'600'}}>Please login to your account</Label>
          </div>
            <FormGroup style={formGroupStyle}>
              <Input type="text" id="name" placeholder="Username" required/>

            </FormGroup>

            <FormGroup style={formGroupStyle}>

              <Input type="password" id="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
              {passwordError && <div style={{ fontSize: '12px', width: '100%', color: 'red' }}>{passwordError}</div>}

              <Input type="password" id="password" placeholder="Password" required/>

            </FormGroup>

            <div className="text-center" style={{padding: '50px'}}>
              <Button onClick={handleLogin} style={{ backgroundColor: '#ff8811'}}>Log in</Button>
              <br></br>
              <a href="/forgotpassword">
                <Label style={{ color:'darkgray', cursor: 'pointer', fontFamily:'Manrope', fontWeight:'400'}}>Forgot password?</Label>
              </a>
              <br></br>
            </div>

            <div className='text-center'>
              <Label style={{fontFamily:'Manrope', fontWeight:'600'}}>Don't have an account? 
              <a href="/signup" style={{textDecoration:'none', color: '#ff8811'}}>Create New</a>
              </Label>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
