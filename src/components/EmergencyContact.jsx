import React from "react";
import NavBar from "../components/common/navbar";
import Footer from "../components/common/footer";
import {
  Container,
  Row,
  Col,
  Label,
  Input,
  FormGroup,
} from "reactstrap";
import "../css/emergencycontact.css";

const EmergencyContact = () => {
  return (
    <>
      <NavBar />
      <body className="body">
        <Container>
          <Row>
            <Col className="img-emergencyContact">
              <img
                src="../src/assets/Emergency call.gif"
                alt=""
                className="img-fluid"
              />
            </Col>
            <Col className="emegergencyContact-container">
              <Label>
                <h2 className="emergencyHeading">Emergency Contact Information!</h2>
              </Label>
              <FormGroup className="emergencyContact-from">
                <Input
                  type="text"
                  placeholder="Emergency Contact Name"
                  className="emergency-input-form"
                />
                <Input
                  type="text"
                  placeholder="Emergency Contact Number"
                  className="emergency-input-form"
                />
                <Input
                  type="text"
                  placeholder="Relationship"
                  className="emergency-input-form"
                />
                <button type="submit" className="btn-emergency">Save Contact</button>
              </FormGroup>
            </Col>
          </Row>
        </Container>
      </body>
      <Footer />
    </>
  );
};

export default EmergencyContact;
