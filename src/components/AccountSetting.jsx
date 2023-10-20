import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./common/navbar";
import "../css/accountSetting.css";
import Footer from '../components/common/footer'
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
                <Label><h2 className="aboutAccount">About you</h2></Label>
              </Link>
            </Col>
            <Col className="col">
              <Label><h2 className="account">Account Setting</h2></Label>
            </Col>
          </Row>
        </Container>
        <hr />
        <Container className="settings">
          <ul className="listFLex">
            <li className="list">
              <Link to="/password" className="passwordLink">
                <Label><p>Password</p></Label>
              </Link>
              <i class="fa-solid fa-angles-right"></i>
            </li>
            <li className="list">
              <Label><p>Privacy Policy</p></Label>
              <i class="fa-solid fa-angles-right"></i>
            </li>
            <li className="list">
              <Label><p>Help Centre</p></Label>
              <i class="fa-solid fa-angles-right"></i>
            </li>
            <li className="list">
              <Label><p>Emergency Contact</p></Label>
              <i class="fa-solid fa-angles-right"></i>
            </li>
          </ul>
        </Container>
        <hr />
        <Button type="submit" className="btnLogout">Logout</Button>
      </body>
      <Footer/>
    </>
  );
};

export default AccountSetting;
