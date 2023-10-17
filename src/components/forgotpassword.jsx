import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Forgotpassword = () => {
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
        <div className='text-center'>
        <Label>Forgot Password</Label>
        </div>
            <FormGroup style={formGroupStyle}>
                <Label>Username<span style={{color: 'red'}}>*</span></Label>
              <Input type="text" id="name" />
            </FormGroup>
            <form action="forgot_password" method='post'>
              <div className='text-center'>
              <Button style={{backgroundColor: '#ff8811', color:'#000'}} href="signup">Forgot password</Button>
              </div>
              </form>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Forgotpassword;
