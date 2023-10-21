import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./common/navbar";
import "../css/accountSetting.css";
import Footer from "../components/common/footer";
import { Container, Row, Col, Label, Button } from "reactstrap";

const AccountSetting = () => {
  return (
    <>
      <NavBar />
      <body className="body">
          <Row className="row btn-account-container">
            <Col className="col about-btn-container">
              <Link to="/account" className="aboutLink">
                <Label>
                  <button className="aboutAccount">About you</button>
                </Label>
              </Link>
            </Col>
            <Col className="col account-btn-container">
              <Label>
                <button className="account">Account Setting</button>
              </Label>
            </Col>
          </Row>
        <hr />
        <Container className="settings">
          <ul className="listFLex">
            <li className="list">
              <i class="fa-solid fa-circle-plus"></i>
              <Link to="/password" className="passwordLink">
                <p>Password</p>
              </Link>
            </li>
            <li className="list">
              <i class="fa-solid fa-circle-plus"></i>
              <p>Privacy Policy</p>
            </li>
            <li className="list">
              <i class="fa-solid fa-circle-plus"></i>
              <Link to="/help-centre" className="helpCentreLink">
                <p>Help Centre</p>
              </Link>
            </li>
            <li className="list">
              <i class="fa-solid fa-circle-plus"></i>
              <Link to="/emergency-contact" className="emergencyContactLink">
                <p>Emergency Contact</p>
              </Link>
            </li>
          </ul>
        </Container>
        <hr />
        <Button type="submit" className="btnLogout">
          Logout
        </Button>
      </body>
      <Footer />
    </>
  );
};

export default AccountSetting;
