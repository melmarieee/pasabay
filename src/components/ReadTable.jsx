import React from "react";
import '../css/readtable.css'

const ReadTable = ({ contact, handleEditClick }) => {
  return (
    <>
      <tr>
        <tr><h3>{contact.Name}</h3></tr>
        <tr>{contact.Address}</tr>
        <tr>{contact.PhoneNumber}</tr>
        <tr>{contact.email}</tr>
        <tr>
          <button type="button" onClick={(e) => handleEditClick(e, contact)}>
            Edit
          </button>
        </tr>
      </tr>
    </>
  );
};

export default ReadTable;
