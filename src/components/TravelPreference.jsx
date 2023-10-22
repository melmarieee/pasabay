import React from "react";
import NavBar from "../components/common/navbar";
import Footer from "../components/common/footer";
import { Container, Row, Col, Label } from "reactstrap";
import '../css/travelpreference.css'

const TravelPreference = () => {
  return (
    <>
      <NavBar />
      <body className="body">
        <Container>
          <Row className="tp-container">
            <Col className="imgTravel">
              <img src="../src/assets/Positive thinking.gif" alt="" className="img-fluid"/>
            </Col>
            <Col className="preferenceContainer">
            <Label><h2>Tavel Preferences</h2></Label>
              <Row className="rowPreference chattiness">
                <span>Chattiness</span>
                <p>I'm chatty when I feel comfortable</p>
              </Row>
              <Row className="rowPreference music">
                <span>Music</span>
                <p>I'll jam depending on the mood</p>
              </Row>
              <Row className="rowPreference smoking">
                <span>Smoking</span>
                <p>Cigarette breaks outside the car are ok</p>
              </Row>
              <Row className="rowPreference pets">
                <span>Pets</span>
                <p>I'll travel with pets depending on the animal</p>
              </Row>
            </Col>
          </Row>
        </Container>
      </body>
      <Footer />
    </>
  );
};

export default TravelPreference;
