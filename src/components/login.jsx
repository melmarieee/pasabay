import { useState } from 'react';
import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import picture from '../assets/login-picture.png'
import companylogo from '../assets/pasabay-orange-logo.png'
import "../css/login.css"

const Login = () => {
  const formStyle = {
    padding: '20px',
  };

  const formGroupStyle = {
    marginBottom: '15px', // Add margin to separate form groups
  };

  // State for form fields and validation
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (formData.username.trim() === '') {
      validationErrors.username = 'Username is required';
    }

    if (formData.password.trim() === '') {
      validationErrors.password = 'Password is required';
    }

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, you can proceed with your login logic
      alert('Form is valid. Implement your login logic here.');
    } else {
      // Update the state with validation errors
      setErrors(validationErrors);
    }
  };

  return (
    <Container style={{ paddingTop: '100px'}}>
      <Row className="align-items-center" >
        <Col className="text-center">
            <img id="picture-login" src={picture} alt="Your Picture" className="img-fluid"/>
        </Col>
        <Col>
          <Form style={formStyle} onSubmit={handleFormSubmit}>
          <Col className="text-center" style={{ padding: '20px' }}>
            <a href="/">
          <img src={companylogo} alt="Your Logo" width="200" />
          </a>
        </Col>
        <div className='text-center'>
        <Label style={{fontFamily:'Manrope', fontWeight:'600'}}>Please login to your account</Label>
        </div>
            <FormGroup style={formGroupStyle}>
              <Input type="text" id="name" placeholder="Username" />
            </FormGroup>
            <FormGroup style={formGroupStyle}>
              <Input type="password" id="password" placeholder="Password" />
            </FormGroup>
            <div className="text-center" style={{padding: '50px'}}>
              <Button style={{ backgroundColor: '#ff8811'}}>Log in</Button>
              <br></br>
              <a href="/forgotpassword">
                <Label style={{ color:'darkgray', cursor: 'pointer', fontFamily:'Manrope', fontWeight:'400'}}>Forgot password?</Label>
              </a>
              <br></br>
              </div>
              <div className='text-center'>
              <Label style={{fontFamily:'Manrope', fontWeight:'600'}}>Don't have an account? <Button style={{backgroundColor: '#ff8811'}} href="signup">Create New</Button></Label>
              </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
