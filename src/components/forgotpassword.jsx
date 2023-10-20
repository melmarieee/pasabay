import React,{useState} from 'react';
import '../css/forgotpassword.css'
import logo from '../assets/pasabay-orange-logo.png';
import picture from '../assets/forgotpassword-picture.png'
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Forgotpassword = () => {
  
  // Styles
  const formStyle = {
    padding: '20px',
  };

  const formGroupStyle = {
    marginBottom: '15px',
  };

  // State to store the email input
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleForgotPassword = () => {
    // Save the email to local storage
    localStorage.setItem('userEmail', email);

    // Perform the rest of your Forgot Password logic here

    // For example, you can redirect the user to another page
    // window.location.href= '/resetpassword';
  };

  return (
    <Container className='fgp-container'>
      <Row className="align-items-center" >
        <Col className="text-center">
            <img id='picture' src={picture} alt="Your Picture" className="img-fluid" />
        </Col>

        <Col>
          <Form style={formStyle}>
          <Col className="text-center" style={{ padding: '20px' }}>
            <a href="/">
          <img src={logo} alt="Your Logo" width="200" />
          </a>
        </Col>

        <div className='text-center'>
        <Label style={{fontFamily:'Manrope', fontWeight:'600'}}>Forgot Password</Label>
        </div>

            <FormGroup style={formGroupStyle}>
                <Label>Email<span style={{color: 'red'}}>*</span></Label>
              <Input type="email" id="name" value={email} onChange={handleEmailChange} />
            </FormGroup>

              <div className='text-center'>
              <Button style={{backgroundColor: '#ff8811'}} onClick={handleForgotPassword}>Reset Password</Button>
              </div>

          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Forgotpassword;
