import React, { useState } from "react";
import "../css/account.css";
import { Link } from "react-router-dom";
import data from "../json/mock-data.json";
import EditTable from "./EditTable";
import ReadTable from "./ReadTable";
import NavBar from "./common/navbar";

const Account = () => {
  const [contacts, setContancts] = useState(data);

  const [editFormData, setEditFormData] = useState({
    Name: "",
    Address: "",
    PhoneNumber: "",
    email: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleEditFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    const editedContact = {
      id: editContactId,
      Name: editFormData.Name,
      Address: editFormData.Address,
      PhoneNumber: editFormData.PhoneNumber,
      email: editFormData.email,
    };
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === editContactId);
    newContacts[index] = editedContact;
    setContancts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (e, contact) => {
    e.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      Name: contact.Name,
      Address: contact.Address,
      PhoneNumber: contact.PhoneNumber,
      email: contact.email,
    };
    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };
  return (
    <>
      <NavBar />
      <body className="body">
        <section className="about-setting">
          <div className="container text center">
            <div className="row">
              <div className="col">
                <h2 className="about">About you</h2>
              </div>
              <div className="col">
                <Link to="/accountSetting" className="accountLink">
                  <h2 className="account">Account Setting</h2>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section className="detailsContainer">
          <div className="container text center">
            <div className="row">
              <div className="col">
                <img src="../src/assets/carpoollogo.png" alt="" />
              </div>
              <div className="col">
                <form action="#" onSubmit={handleEditFormSubmit}>
                  {contacts.map((contact) => (
                    <>
                      {editContactId === contact.id ? (
                        <EditTable
                          editFormData={editFormData}
                          handleEditFormChange={handleEditFormChange}
                          handleCancelClick={handleCancelClick}
                        />
                      ) : (
                        <ReadTable
                          contact={contact}
                          handleEditClick={handleEditClick}
                        />
                      )}
                    </>
                  ))}
                </form>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section className="validInfoContainer">
          <h2>Verify your profile</h2>
          <div className="validInfo">
            <ul>
              <li>
                <i class="fa-solid fa-circle-plus"></i>
                <Link to="/email" className="emailLink">
                  <p> E-mail Address</p>
                </Link>
              </li>
              <li>
                <i class="fa-solid fa-circle-plus"></i>
                <Link to="/contactNumber" className="contactLink">
                  <p> Contact Number</p>
                </Link>
              </li>
            </ul>
          </div>
        </section>
        <hr />
        <section className="aboutYou">
          <h2>About you</h2>
          <ul>
            <li>
              <i class="fa-solid fa-circle-plus"></i>
              <p> Mini Bio</p>
            </li>
            <li>
              <i class="fa-solid fa-circle-plus"></i>
              <p> Travel Preference</p>
            </li>
          </ul>
        </section>
      </body>
    </>
  );
};

export default Account;
