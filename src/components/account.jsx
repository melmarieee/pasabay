import React, { useState } from "react";
import "../css/account.css";
import { Link } from "react-router-dom";
import data from "../json/mock-data.json";
import EditTable from "./EditTable";
import ReadTable from "./ReadTable";
import NavBar from "./common/navbar";
import Footer from "../components/common/footer";
import { Col, Row, Container, Label } from "reactstrap";

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
          <Row className="row btn-account-container">
            <Col className="col about-btn-container">
              <Label>
                <button className="about">About you</button>
              </Label>
            </Col>
            <Col className="col account-btn-container">
              <Link to="/accountSetting" className="accountLink">
                <Label>
                  <button className="account">Account Setting</button>
                </Label>
              </Link>
            </Col>
          </Row>
        <hr />
        <Container className="accountContainerFlex">
          <Row>
            <Col className="accountImg">
              <img
                src="../src/assets/carpoollogo.png"
                alt=""
                className="img-fluid"
              />
            </Col>
            <Col>
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
            </Col>
          </Row>
        </Container>
        <hr />
        <Container className="validInfoContainer">
          <Label>
            <h2>Verify your profile</h2>
          </Label>
          <Row className="validInfo">
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
          </Row>
        </Container>
        <hr />
        <Container className="aboutYou">
          <Label>
            <h2>About you</h2>
          </Label>
          <Row className="aboutYou-items">
            <ul>
              <li>
                <i class="fa-solid fa-circle-plus"></i>
                <Link to="/bio" className="bioLink">
                  <p> Mini Bio</p>
                </Link>
              </li>
              <li>
                <i class="fa-solid fa-circle-plus"></i>
                <Link to="/travel-preference" className="preferenceLink">
                  <p> Travel Preference</p>
                </Link>
              </li>
            </ul>
          </Row>
        </Container>
      </body>
      <Footer />
    </>
  );
};

export default Account;
