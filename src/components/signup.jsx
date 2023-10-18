import { useState } from 'react';
import React from 'react';
import '../css/signup.css'
import logo from '../assets/pasabay-orange-logo.png'
import picture from '../assets/signup-picture.png'
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';


const Signup = () => {

  const [values, setValues] = useState({
    username:"",
    birthday:"",
    gender:"",
    email:"",
    address:"",
    password:"",
    confirmPassword:"",
  });
  
  const inputs = [
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"Username",
      label:"Username"
    }
    
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const formStyle = {
    padding: '20px',
  };

  const formGroupStyle = {
    marginBottom: '15px', // Add margin to separate form groups
  };



  return (
    <div className='container-fluid p-5'>
      <Row className="align-items-center" >
        <Col lg={6} className="text-center">
            <img id='picture' src={picture} alt="Your Picture" className="img-fluid" />
        </Col>
        <Col lg={6} className='px-5'>
          <form onSubmit={handleSubmit} style={formStyle}>
          <div className="text-center py-3">
            <a href="/">
              <img src={logo} alt="Your Logo" width="200" />
            </a>
          </div>
        <div className='text-center'>
          <Label style={{fontFamily:'Manrope', fontWeight:'600'}}>Sign up</Label>
        </div>
            <FormGroup style={formGroupStyle}>
              <Input type="text" id="name" placeholder="Your Name" />
            </FormGroup> 
            <FormGroup style={formGroupStyle}>
            <Row>
            <Col>
            <Label style={{paddingLeft:'10px'}}>Date of Birth</Label>
            <Input type="date" id="birthday" className="birthday-input"/>
            </Col>
            <Col style={{textAlign: 'center'}}>
            <Label>Gender</Label>
            <FormGroup check>
            <Input type="select" name="gender" className='gender-input'>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Input>
            </FormGroup>
            </Col>
            </Row>
            </FormGroup>
            <FormGroup style={formGroupStyle}>
              <Input type="text" id="email" placeholder="Your Email" />
            </FormGroup>
            <FormGroup style={formGroupStyle}>
              <Input type="number" id="mobile" placeholder="Phone number" />
            </FormGroup>
            <FormGroup style={formGroupStyle}>
              <Input type="text" id="address" placeholder="Your Address" />
            </FormGroup>
            <FormGroup style={formGroupStyle}>
              <Input type="password" id="password" placeholder="Password" />
            </FormGroup>
            <FormGroup style={formGroupStyle}>
              <Input type="password" id="repeatpassword" placeholder="Repeat your password" />
            </FormGroup>
            <FormGroup style={formGroupStyle}>
              <Label check>
                <Input type="checkbox" id="termsCheck" />{' '}
                I agree all statements in <a href="#" style={{textDecoration:'none'}}>Terms of Service</a>
              </Label>
            </FormGroup>
            <div className="text-center">
              <Button style={{ backgroundColor: '#ff8811' }}>Sign Up</Button>
            </div>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default Signup;
