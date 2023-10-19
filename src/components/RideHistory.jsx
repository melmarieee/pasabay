import React from "react";
import { History } from "./HistoryArray";
import { Link } from "react-router-dom";
import Navbar from "../components/common/navbar";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";

const RideHistory = () => {
  return (
    <>
      <Navbar />
      <body className="body">
        <section className="tripHeading-button">
          <div className="container text center">
            <div className="row">
              <div className="col">
                <Link to="/rides" className="tripLink">
                  <h2 className="trips">My Trips</h2>
                </Link>
              </div>
              <div className="col">
                <h2 className="history">Ride History</h2>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h3 className="tripHeader">History Details:</h3>
        </section>
        <section className="tripContainer">
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
                  <div className="accordionContent">
                    <div className="container text center">
                      <div className="row">
                        <div className="col-7"><p>{history.Address}</p></div>
                        <div className="col"><p>{history.Time}</p></div>
                        <div className="col"><p>{history.Amount}</p></div>
                        <div className="col-3"><button type="submit">Book Again</button></div>
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

export default RideHistory;
