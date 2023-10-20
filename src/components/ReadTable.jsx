import React from "react";
import '../css/readtable.css'
import { Button, Container, Row } from "reactstrap";

const ReadTable = ({ contact, handleEditClick }) => {
  return (
    <>
      <Container className="ReadtableContainer">
        <Row><h3 className="RTHeading">{contact.Name}</h3></Row>
        <Row>{contact.Address}</Row>
        <Row>{contact.PhoneNumber}</Row>
        <Row>{contact.email}</Row>
        <tr>
          <Button type="button" onClick={(e) => handleEditClick(e, contact)} className="buttonReadTable">
            Edit
          </Button>
        </tr>
      </Container>
    </>
  );
};

export default ReadTable;
