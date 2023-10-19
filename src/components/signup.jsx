import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import logo from '../assets/pasabay-orange-logo.png';
import picture from '../assets/signup-picture.png';
import '../css/signup.css';


// Validation Forms
const Signup = () => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

  const [birthday, setBirthday] = useState('');
  const [birthdayError, setBirthdayError] = useState('');

  const [gender, setGender] = useState('');
  const [genderError, setGenderError] = useState('');

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [cpassword, setCpassword] = useState('');
  const [cpasswordError, setCpasswordError] = useState('');

  const [checkbox, setCheckbox] = useState(false);
  const [checkboxError, setCheckboxError] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validation checks
    if (name.trim() === '') {
      setNameError('Name is required');
    } else {
      setNameError('');
    }

    if (birthday.trim() === '') {
      setBirthdayError('Date of Birth is required');
    } else {
      setBirthdayError('');
    }

    if (gender.trim() === '') {
      setGenderError('Gender is required');
    } else {
      setGenderError('');
    }

    if (email.trim() === '') {
      setEmailError('Email is required');
    } else {
      const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!emailPattern.test(email)) {
        setEmailError('Invalid email format');
      } else {
        setEmailError('');
      }
    }

    if (phone.trim() === '') {
      setPhoneError('Phone number is required');
    } else {
      // Phone number format validation
      const phonePattern = /^\+(?:\d{1,4}|\d{1,4}-)\d{1,14}$/;

      if (!phonePattern.test(phone)) {
        setPhoneError('Invalid phone number format');
      } else {
        setPhoneError('');
      }
    }

    if (address.trim() === '') {
      setAddressError('Address is required');
    } else {
      setAddressError('');
    }

    if (password.trim() === '') {
      setPasswordError('Password is required');
    } else {
      // Password strength validation
      const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

      if (!passwordPattern.test(password)) {
        setPasswordError('Password should contain at least 8 characters, including uppercase, lowercase, numbers, and special characters');
      } else {
        setPasswordError('');
      }
    }

    if (cpassword.trim() === '') {
      setCpasswordError('Confirm password is required');
    } else if (cpassword !== password) {
      setCpasswordError('Passwords do not match');
    } else {
      setCpasswordError('');
    }

    if (!checkbox) {
      setCheckboxError('You must agree to the Terms of Service');
    } else {
      setCheckboxError('');
    }

    // If all inputs are valid, store the data in Local Storage
    if (
      !nameError &&
      !birthdayError &&
      !genderError &&
      !emailError &&
      !phoneError &&
      !addressError &&
      !passwordError &&
      !cpasswordError &&
      checkbox
    ) {
      // Create an object to store the user's data
      const userData = {
        name,
        birthday,
        gender,
        email,
        phone,
        address,
      };

      // Store the user's data in localStorage
      localStorage.setItem('userData', JSON.stringify(userData));

      // Redirect to another page, e.g., a confirmation page
      window.location.href = '/confirmation/';
    }
  };

  return (
    <Container style={{ paddingTop: '100px' }}>
      <Row className="align-items-center">
        <Col className="text-center">
          <img id='picture' src={picture} alt="Your Picture" className="img-fluid" />
        </Col>

        <Col>
          <Form style={{ padding: '20px' }} onSubmit={handleFormSubmit}>
            <Col className="text-center" style={{ padding: '20px' }}>
              <a href="/">
                <img src={logo} alt="Your Logo" width="200" />
              </a>
            </Col>

            <div className='text-center'>
              <Label style={{ fontFamily: 'Manrope', fontWeight: '600' }}>Sign up</Label>
            </div>

            <FormGroup style={{ marginBottom: '15px' }}>
              <Input type="text" id="name" placeholder="Your Name" onChange={(e) => setName(e.target.value)} value={name} />
              {nameError && <div style={{ fontSize: '12px', width: '100%', color: 'red' }}>{nameError}</div>}
            </FormGroup>

            <FormGroup style={{ marginBottom: '15px' }}>
              <Row>
                <Col>
                  <Label>Date of Birth</Label>
                  <Input type="date" onChange={(e) => setBirthday(e.target.value)} value={birthday} />
                  {birthdayError && <div style={{ fontSize: '12px', width: '100%', color: 'red' }}>{birthdayError}</div>}
                </Col>
                <Col>
                  <Label>Gender</Label>
                  <Input type="select" onChange={(e) => setGender(e.target.value)} value={gender}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </Input>
                  {genderError && <div style={{ fontSize: '12px', width: '100%', color: 'red' }}>{genderError}</div>}
                </Col>
              </Row>
            </FormGroup>

            <FormGroup style={{ marginBottom: '15px' }}>
              <Input type="email" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
              {emailError && <div style={{ fontSize: '12px', width: '100%', color: 'red' }}>{emailError}</div>}
            </FormGroup>

            <FormGroup style={{ marginBottom: '15px' }}>
              <Input type="tel" id="mobile" placeholder="Phone number" onChange={(e) => setPhone(e.target.value)} value={phone} />
              {phoneError && <div style={{ fontSize: '12px', width: '100%', color: 'red' }}>{phoneError}</div>}
            </FormGroup>

            <FormGroup style={{ marginBottom: '15px' }}>
              <Input type="text" id="address" placeholder="Address" onChange={(e) => setAddress(e.target.value)} value={address} />
              {addressError && <div style={{ fontSize: '12px', width: '100%', color: 'red' }}>{addressError}</div>}
            </FormGroup>

            <FormGroup style={{ marginBottom: '15px' }}>
              <Input type="password" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
              {passwordError && <div style={{ fontSize: '12px', width: '100%', color: 'red' }}>{passwordError}</div>}
            </FormGroup>

            <FormGroup style={{ marginBottom: '15px' }}>
              <Input type="password" id="repeatpassword" placeholder="Confirm password" onChange={(e) => setCpassword(e.target.value)} value={cpassword} />
              {cpasswordError && <div style={{ fontSize: '12px', width: '100%', color: 'red' }}>{cpasswordError}</div>}
            </FormGroup>

            <FormGroup style={{ marginBottom: '15px' }}>
              <Label check>
                <Input type="checkbox" id="termsCheck" onChange={(e) => setCheckbox(e.target.checked)} checked={checkbox} />{' '}
                I have read and agree to the <a href="#!" style={{textDecoration:'none'}}>Privacy Policy</a> and Tracking Policy. Our <a href="#" style={{ textDecoration: 'none' }}>Terms & Condition </a>apply.
              </Label>
              <br />
              {checkboxError && <div style={{ fontSize: '12px', width: '100%', color: 'red' }}>{checkboxError}</div>}
            </FormGroup>

            <div className="text-center">
              <Button style={{ backgroundColor: '#ff8811' }} type="submit">Sign Up</Button>
            </div>
            
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
