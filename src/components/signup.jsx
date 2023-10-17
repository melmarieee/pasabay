import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Signup = () => {
  const formStyle = {
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '10px',
  };

  const formGroupStyle = {
    marginBottom: '15px', // Add margin to separate form groups
  };

  return (
    <Container style={{ paddingTop: '100px'}}>
      <Row className="align-items-center pt-5" >
        <Col className="text-center">
            <img src="your-logo.png" alt="Your Picture" width="100" height="100" />
        </Col>
        <Col>
          <Form style={formStyle}>
          <Col className="text-center" style={{ padding: '20px' }}>
            <a href="/">
          <img src="your-logo.png" alt="Your Logo" width="100" height="100" />
          </a>
        </Col>
            <FormGroup style={formGroupStyle}>
              <Input type="text" id="name" placeholder="Your Name" />
            </FormGroup>
            <FormGroup check style={formGroupStyle}>
              <Label>Gender</Label>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="gender" /> Male
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="gender" /> Female
                </Label>
              </FormGroup>
            </FormGroup>
            <FormGroup style={formGroupStyle}>
              <Input type="text" id="email" placeholder="Your Email" />
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
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
