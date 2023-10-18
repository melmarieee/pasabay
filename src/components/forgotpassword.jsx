import React from 'react';
import '../css/forgotpassword.css'
import logo from '../assets/pasabay-orange-logo.png';
import picture from '../assets/forgotpassword-picture.png'
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Forgotpassword = () => {
  const formStyle = {
    padding: '20px',
  };

  const formGroupStyle = {
    marginBottom: '15px', // Add margin to separate form groups
  };

  return (
    <Container style={{ paddingTop: '100px'}}>
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
              <Input type="email" id="name" />
            </FormGroup>
            <form action="forgot_password" method='post'>
              <div className='text-center'>
              <Button style={{backgroundColor: '#ff8811'}} href="#!">Forgot password</Button>
              </div>
              </form>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Forgotpassword;
