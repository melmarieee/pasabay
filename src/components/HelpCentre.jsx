import React from "react";
import NavBar from "../components/common/navbar";
import Footer from "../components/common/footer";
import {
  Container,
  Row,
  Col,
  Label,
  FormGroup,
  Button,
  Input,
} from "reactstrap";
import "../css/helpcentre.css";

const HelpCentre = () => {
  return (
    <>
      <NavBar />
      <body className="body">
        <Container>
          <Row>
            <Col className="helpCetre-imgContainer">
              <img
                src="../src/assets/Call center.gif"
                alt=""
                className="img-fluid"
              />
            </Col>
            <Col className="helpCentre-container">
              <Label>
                <h2>Help Centre</h2>
              </Label>
              <FormGroup className="helpForm-container">
                <Col className="helpCentre-heading-container">
                  <Label>
                    <h3 className="helpForm-heading">Hello Hugh!</h3>
                  </Label>
                  <br />
                  <Label>
                    <h3 className="helpForm-heading">
                      We're are here to help you!
                    </h3>
                  </Label>
                </Col>
                <br />
                <Col className="search-btn">
                  <Input
                    type="text"
                    placeholder="search"
                    className="search-helpCentre"
                  />
                  <Button type="submit" className="btnHelpCentre">
                    Search
                  </Button>
                </Col>
              </FormGroup>
              <hr />
              <Row className="commonProblems-container">
                <Col>
                  <h3>Common problems</h3>
                  <p>Look for common solutions</p>
                </Col>
                <Col>
                  <img
                    src="../src/assets/Overwhelmed.png"
                    alt=""
                    className="img-fluid"
                  />
                </Col>
              </Row>
              <Row className="chat-container">
                <Col>
                  <h3>Chat now</h3>
                  <p>Faster way to address your issues</p>
                </Col>
                <Col>
                  <img
                    src="../src/assets/Chat_bot.png"
                    alt=""
                    className="img-fluid"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </body>
      <Footer />
    </>
  );
};

export default HelpCentre;
