import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import picture from "../assets/forgotpassword-picture.png";
import companylogo from "../assets/pasabay-orange-logo.png";
import "../css/forgotpassword.css";

function Forgotpassword() {
  // Styles
  const formStyle = {
    padding: "20px",
  };

  const formGroupStyle = {
    marginBottom: "15px",
  };

  // State to store the email input
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleForgotPassword = () => {
    // Save the email to local storage
    localStorage.setItem("userEmail", email);

    // Perform the rest of your Forgot Password logic here

    // For example, you can redirect the user to another page
    // window.location.href= '/resetpassword';
  };
  return (
    <div>
      <Row>
        <Col className="text-center image-left-pic-container-fgp">
          <img
            src={picture}
            alt="Your Picture"
            className="img-fluid p-5"
          />
        </Col>
        <Col className="padding-top-fgp">
          <Form style={formStyle} className="fgp-form">
            <Button href='/login' style={{float: 'right'}}>X</Button>
            <Col className="text-center mb-5">
              <a href="/">
                <img src={companylogo} alt="Your Logo" width="250" />
              </a>
            </Col>
            <div className="px-5 text-center">
              <h1>
                <b>Forgot Password?</b>
              </h1>
              <p>No worries! Enter your email and we will send you a reset password</p>
            </div>
            <FormGroup style={formGroupStyle}>
              <Input
                type="email"
                id="name"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
            </FormGroup>

            <div className="text-center" style={{ padding: "50px" }}>
              <Button
                style={{ backgroundColor: "#ff8811" }}
                onClick={handleForgotPassword}
              >
                Send Request
              </Button>
              <br />
              <br />
            </div>

          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Forgotpassword;