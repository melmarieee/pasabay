import React from "react";
import { MyTrips } from "./MyTripsArray";
import { Link } from "react-router-dom";
import "../css/rides.css";
import Navbar from "../components/common/navbar";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";

const Rides = () => {
  return (
    <>
      <Navbar />
      <body className="body">
        <section className="tripHeading-button">
          <div className="container text center">
            <div className="row">
              <div className="col">
                <h2 className="trips">My Trips</h2>
              </div>
              <div className="col">
                <Link to="/rideHistory" className="historyLink">
                  <h2 className="history">Ride History</h2>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h3 className="tripHeader">Trip Details:</h3>
        </section>
        <section className="tripContainer">
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
                  <div className="accordionContent">
                    <div className="container text center">
                      <div className="row">
                        <div className="col-7"><p>{trips.Address}</p></div>
                        <div className="col"><p>{trips.Time}</p></div>
                        <div className="col"><p>{trips.Amount}</p></div>
                        <div className="col-3"><button type="submit">Edit Booking</button></div>
                      </div>
                    </div>
                  </div>
                </MDBAccordionItem>
              </MDBAccordion>
            );
          })}
        </section>
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
