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
        <Container className="container text center">
          <Row className="row">
            <Col className="col">
              <Link to="/account" className="aboutLink">
                <Label>
                  <h2 className="aboutAccount">About you</h2>
                </Label>
              </Link>
            </Col>
            <Col className="col">
              <Label>
                <h2 className="account">Account Setting</h2>
              </Label>
            </Col>
          </Row>
        </Container>
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
