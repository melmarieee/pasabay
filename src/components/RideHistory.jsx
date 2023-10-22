import React from "react";
import { History } from "./HistoryArray";
import { Link } from "react-router-dom";
import Navbar from "../components/common/navbar";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import { Container, Row, Col, Button, Label } from "reactstrap";

const RideHistory = () => {
  return (
    <>
      <Navbar />
      <body className="body">
        <Container className="tripHeading-button">
          <Row className="row">
            <Col className="col">
              <Link to="/rides" className="tripLink">
                <Label><h2 className="trips">My Trips</h2></Label>
              </Link>
            </Col>
            <Col className="col">
              <Label><h2 className="history">Ride History</h2></Label>
            </Col>
          </Row>
        </Container>
        <Container>
          <Label>
            <h3 className="tripHeader">History Details:</h3>
          </Label>
        </Container>
        <Row className="tripContainer">
          {History.map((history) => {
            return (
              <MDBAccordion
                flush
                initialActive={1}
                className="accordionContainer"
              >
                <MDBAccordionItem
                  collapseId={1}
                  headerTitle={history.Date}
                  className="accordionItem"
                >
                  <Container className="container text center">
                    <Row className="row">
                      <Col className="col-7">
                        <p>{history.Address}</p>
                      </Col>
                      <Col className="col">
                        <p>{history.Time}</p>
                      </Col>
                      <Col className="col">
                        <p>{history.Amount}</p>
                      </Col>
                      <Col className="col-3">
                        <Button type="submit" className="btnRides">Book Again</Button>
                      </Col>
                    </Row>
                  </Container>
                </MDBAccordionItem>
              </MDBAccordion>
            );
          })}
        </Row>
      </body>
    </>
  );
};

export default RideHistory;
