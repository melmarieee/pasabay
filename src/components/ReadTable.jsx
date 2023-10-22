import React from "react";
import '../css/readtable.css'
import { Button, Container, Row } from "reactstrap";
import dayjs from 'dayjs';

const ReadTable = ({ contact, handleEditClick }) => {

  return (
    <>
      <Container className="ReadtableContainer">
        <Row><h3 className="RTHeading">{contact.name}</h3></Row>
        <p><span className="text-secondary">Address:</span> {contact.address}</p>
        <p><span className="text-secondary">Contact:</span> {contact.phone}</p>
        <p><span className="text-secondary">Address:</span> {contact.email}</p>
        <p><span className="text-secondary">Gender:</span> {contact.gender}</p>
        <p><span className="text-secondary">Birthday:</span> {dayjs(contact.birthday).format('YYYY/MM/DD/')}</p>
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
