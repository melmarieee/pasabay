import React, { useState, useEffect } from 'react';
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

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorLogin, setErrorLogin] = useState('');


  const handleLogin = (e) => {
    e.preventDefault();
  
    axios.post(loginURL, {
      email: email,
      password: password,
    })
    .then(function (response) {
      
      if (response.data.data) {
        const data = {
          "user": response.data.data.user[0],
          "vehicle": response.data.data.vehicle
        }
        window.localStorage.setItem("userLogin", JSON.stringify(data));
        window.location.href = '/';
      }

      if (response.data.data == 0) {
        setErrorLogin(<p class="mx-5 text-danger">Incorrect email or password</p>)
      }
    })
    .catch(function (error) {
      alert(error)
      console.log(error);
    });
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.localStorage.getItem("userLogin")) {
        window.location.href = '/';
      }
   }
  }, [])


  return (
    <div>
      <Row>
        <Col className="text-center image-left-pic-container">
          <img id="picture-login" src={picture} alt="Your Picture" className="img-fluid p-5" />
        </Col>
        <Col className='padding-top-login-signup'>
          <Form style={formStyle} onSubmit={handleLogin}>
            <Col className="text-center mb-5">
            <Button className='btn-close-login' href='/'><i class="fa-solid fa-chevron-left"></i></Button>
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
              <Input required className="input-container mx-5 li-email" type="text" id="name" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
            </FormGroup>

            <FormGroup style={formGroupStyle}>
              <Input required className="input-container mx-5 my-4 li-pass" type="password" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
            </FormGroup>
            {errorLogin}
            <div className="text-center" style={{ padding: '50px' }}>
              <Button className='btn-login-sbmt'>Log in</Button>
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
