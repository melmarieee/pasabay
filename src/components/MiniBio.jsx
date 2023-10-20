import React from "react";
import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
import { Container, Row, Col, Label, Input, Button } from "reactstrap";
import "../css/minibio.css";

const MiniBio = () => {
  return (
    <>
      <Navbar />
      <body className="body">
        <Container>
          <Row className="rowBio">
            <Col className="imgBio">
              <img
                src="../src/assets/Social biography.gif"
                alt=""
                className="img-fluid"
              />
            </Col>
            <Col className="textArea-container">
              <Label>
                <h2>What would you like other members to know about you?</h2>
              </Label>
              <Input
                type="textarea"
                rows="10"
                placeholder="What are your interests?"
                className="txtAreaInput"
              ></Input>
              <Button type="submit" className="btnBio">
                Save
              </Button>
            </Col>
          </Row>
        </Container>
      </body>
      <Footer />
    </>
  );
};

export default MiniBio;
