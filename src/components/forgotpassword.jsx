import React, { useState, useEffect } from "react";
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
import "../css/login.css";

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
        <Col className="text-center image-left-pic-container">
          <img
            id="picture-login"
            src={picture}
            alt="Your Picture"
            className="img-fluid p-5"
          />
        </Col>
        <Col className="padding-top-login-signup">
          <Form style={formStyle}>
            <Col className="text-center mb-5">
              <a href="/">
                <img src={companylogo} alt="Your Logo" width="250" />
              </a>
            </Col>
            <div className="px-5 text-center">
              <h1>
                <b>Forgot Password?</b>
              </h1>
              <p>No worries! Enter your email and we will send you a reset</p>
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
