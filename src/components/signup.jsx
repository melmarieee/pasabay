import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import logo from '../assets/pasabay-orange-logo.png';
import picture from '../assets/signup-picture.png';
import '../css/signup.css';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import axios from "axios"


const Signup = () => {
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState(dayjs('01/01/2005'));
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [formErrors, setFormErrors] = useState({});

    const signupURL = "https://powerful-taiga-76725-654b259bda23.herokuapp.com/api/signup";

    const validateForm = () => {
      const errors = {};

      if (!name) {
        errors.name = "Name is required";
      }
      if (!birthday) {
        errors.birthday = "Birthday is required"
      } else {
        const currentDate = dayjs();
        const birthDate = dayjs(birthday);
        const userAge = currentDate.diff(birthDate, 'year');

        if (userAge < 18) {
          errors.birthday = "You must be at least 18 years old.";
        }
      }
      if (!gender) {
        errors.gender = "Gender is required"
      }
      if (!email) {
        errors.email = "Email is Required"
      }
      if (!phone) {
        errors.phone = "Phone number is Required"
      }
      if (!address) {
        errors.address = "Address is Required"
      }
  
      if (!password) {
        errors.password = "Password is required";
      }
  
      if (!cpassword) {
        errors.cpassword = "Confirm password is required";
      } else if (cpassword !== password) {
        errors.cpassword = "Passwords do not match";
      }
  
      if (!checkbox) {
        errors.checkbox = "You must agree to the terms";
      }
  
      setFormErrors(errors);
      return Object.keys(errors).length === 0;
    };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const isFormValid = validateForm();

    if (isFormValid){
    axios.post(signupURL, {
      name: name,
      birthday: birthday,
      gender: gender,
      email: email,
      phone: phone,
      address: address,
      password: password,
    })
    .then(function (response) {
      console.log("Modal should open now");
      setModalOpen(true);
    })
    .catch(function (error) {
      console.error("Error",error);
    });
   }
  };

  return (
    <div>
      <Row>
        <Col className="text-center image-left-pic-container signup">
          <img id='picture' src={picture} alt="Your Picture" className="img-fluid p-3 mt-3" />
        </Col>
        <Col className='padding-top-login-signup'>
          <Form className='signup-form' onSubmit={handleFormSubmit}>
            <Col className="text-center" style={{ padding: '20px' }}>
            <Button className='btn-close-signup' href='/login'><i class="fa-solid fa-chevron-left"></i></Button>
              <a href="/">
                <img src={logo} alt="Your Logo" width="250"/>
              </a>
            </Col>

            <div className='text-center'>
              <Label>
                <h1><b>Register your account</b></h1>
              </Label>
            </div>

            <FormGroup style={{ marginBottom: '15px' }}>
              <Input required type="text" id="name" placeholder="Your Name" onChange={(e) => setName(e.target.value)} value={name} />
              {formErrors.name && <div className='text-danger'>{formErrors.name}</div>}
            </FormGroup>

            <FormGroup style={{ marginBottom: '15px' }}>
              <Row>
                <Col>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker
                              label="Select Birthday"
                              className="bg-white date"
                              value={birthday}
                              onChange={(newValue) => setBirthday(newValue)}
                              slotProps={{ textField: { size: 'small' } }}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                    {formErrors.birthday && <div className='text-danger'>{formErrors.birthday}</div>}
                </Col>
                <Col className='gender-signup'>
                  <Input required className="mt-2 " type="select" onChange={(e) => setGender(e.target.value)} value={gender}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </Input>
                  {formErrors.gender && <div className='text-danger'>{formErrors.gender}</div>}
                </Col>
              </Row>
            </FormGroup>

            <FormGroup style={{ marginBottom: '15px' }}>
              <Input required type="email" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
              {formErrors.email && <div className='text-danger'>{formErrors.email}</div>}
            </FormGroup>

            <FormGroup style={{ marginBottom: '15px' }}>
              <Input required type="tel" id="mobile" placeholder="Phone number" onChange={(e) => setPhone(e.target.value)} value={phone} />
              {formErrors.phone && <div className='text-danger'>{formErrors.phone}</div>}
            </FormGroup>

            <FormGroup style={{ marginBottom: '15px' }}>
              <Input required type="text" id="address" placeholder="Address" onChange={(e) => setAddress(e.target.value)} value={address} />
              {formErrors.address && <div className='text-danger'>{formErrors.address}</div>}
            </FormGroup>

            <FormGroup style={{ marginBottom: '15px' }}>
              <Input required type="password" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
              {formErrors.password && <div className="text-danger">{formErrors.password}</div>}
            </FormGroup>

            <FormGroup style={{ marginBottom: '15px' }}>
              <Input required type="password" id="repeatpassword" placeholder="Confirm password" onChange={(e) => setCpassword(e.target.value)} value={cpassword} />
              {formErrors.cpassword && <div className="text-danger">{formErrors.cpassword}</div>}
            </FormGroup>

            <FormGroup style={{ marginBottom: '15px' }}>
              <Label check>
                <Input required type="checkbox" id="termsCheck" onChange={(e) => setCheckbox(e.target.checked)} checked={checkbox} />{' '}
                I have read and agree to the <a href="#!" style={{textDecoration:'none'}}>Privacy Policy</a> and Tracking Policy. Our <a href="#" style={{ textDecoration: 'none' }}>Terms & Condition </a>apply.
              </Label>
              {formErrors.checkbox && <div className="text-danger">{formErrors.checkbox}</div>}

            </FormGroup>

            <div className='text-center'>
              <p>Already have an account?<Link to="/login" style={{textDecoration:'none', color:'#ff8811' }}> Log in</Link></p>
            </div>

            <div className="text-center">
              <button style={{ backgroundColor: '#ff8811' }} onClick={handleFormSubmit} type='submit' className='btn-signup'>Sign Up</button>
            </div>
            
          </Form>
        </Col>
      </Row>
      <Modal className="centered-modal-signup modal-signip-container" backdrop="static" isOpen={modalOpen} toggle={() => setModalOpen(false)} fade={true} >
        <ModalHeader className='modal-header-signup' >
        <i class="fa-regular fa-circle-check check"></i>
        </ModalHeader>
        <ModalBody className='modal-body-signup'>
        <h4 className='text-center'>Congratulations {name}  🎉 </h4>
        <p className='text-center'>Your account is successfully created.</p>
        </ModalBody>
        <ModalFooter className='modal-footer-signup modal-btn-container'>
          <button className="btn-modal-signup" onClick={() => (window.location.href = '/login')}>Log in</button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Signup;
