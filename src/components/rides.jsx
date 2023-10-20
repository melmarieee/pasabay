import React from "react";
import { MyTrips } from "./MyTripsArray";
import { Link } from "react-router-dom";
import "../css/rides.css";
import Navbar from "../components/common/navbar";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import { Row, Container, Col, Button, Label } from "reactstrap";

const Rides = () => {
  return (
    <>
      <Navbar />
      <body className="body">
        <Container className="tripHeading-button">
          <Row className="row">
            <Col className="col">
              <Label><h2 className="trips">My Trips</h2></Label>
            </Col>
            <Col className="col">
              <Link to="/rideHistory" className="historyLink">
                <Label><h2 className="history">Ride History</h2></Label>
              </Link>
            </Col>
          </Row>
        </Container>
        <Container>
          <Label><h3 className="tripHeader">Trip Details:</h3></Label>
        </Container>
        <Row>
          {MyTrips.map((trips) => {
            return (
              <MDBAccordion
                flush
                initialActive={1}
                className="accordionContainer"
              >
                <MDBAccordionItem
                  collapseId={1}
                  headerTitle={trips.Date}
                  className="accordionItem"
                >
                  <Container className="container text center">
                    <Row className="row">
                      <Col className="col-7">
                        <p>{trips.Address}</p>
                      </Col>
                      <Col className="col">
                        <p>{trips.Time}</p>
                      </Col>
                      <Col className="col">
                        <p>{trips.Amount}</p>
                      </Col>
                      <Col className="col-3">
                        <Button type="submit" className="btnRides">Edit Booking</Button>
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

// const Trips = ({Address, Date, Time, Amount}) =>{
//     return(
//         <section className="TripContent">
//             <i class="fa-solid fa-van-shuttle"></i>
//             <p>{Address}</p>
//             <p>{Date}</p>
//             <p>{Time}</p>
//             <p>{Amount}</p>
//         </section>
//     )
// }
export default Rides;
