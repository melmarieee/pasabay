import React, { useState } from "react";
import data from "../json/mock-data.json";
import { nanoid } from "nanoid";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

const Details = () => {
  const [contacts, setContacts] = useState(data); //setContacts used in line 41
  // const [addFormdata, setAddFormData] = useState({
  //   //go to line 18
  //   Name: "",
  //   Adrress: "",
  //   PhoneNumber: "",
  //   email: "",
  // });

  const [editFormData, setEditFormData] = useState({
    //this is for updating the info on the table, function proceed to line 37 and 67
    Name: "",
    Adrress: "",
    PhoneNumber: "",
    email: "",
  });

  const [editContactId, setEditContactId] = useState(null); //go to line 44

  // const handleAddFormChange = (e) => {
  //   //this function is for adding new data to the table
  //   e.preventDefault();

  //   const fieldName = e.target.getAttribute("name");
  //   const fieldValue = e.target.value;

  //   const newFormData = { ...addFormdata };
  //   newFormData[fieldName] = fieldValue;

  //   setAddFormData(newFormData);
  // };

  const handleEditFormChange = (e) => {
    //this function is for editing the info on the table
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  // const handleAddFormSubmit = (e) => {
  //   //this function is for adding info on the table
  //   e.preventDefault();

  //   const newContact = {
  //     id: nanoid(),
  //     Name: addFormdata.Name,
  //     Address: addFormdata.Address,
  //     PhoneNumber: addFormdata.PhoneNumber,
  //     email: addFormdata.email,
  //   };
  //   const newContacts = [...contacts, newContact];
  //   setContacts(newContacts);
  // };

  const handleEditFormSubmit = (e) => { //this function is for saving the updated data
    //this function is for saving the edited info on the table
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
    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (e, contact) => { //this function is for clicking the edit button
    //pased down to readOnlyRow component
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
  }

  return (
    <>
      <div className="app-container">
        <form action="#" onSubmit={handleEditFormSubmit}>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
                        <>
                        {editContactId === contact.id ? (
                            <EditableRow
                            editFormData={editFormData}
                            handleEditFormChange={handleEditFormChange}
                            handleCancelClick={handleCancelClick}
                            />
                        ) : (
                            <ReadOnlyRow
                            contact={contact}
                            handleEditClick={handleEditClick}
                            />
                        )}
                        </>
                    ))}
                </tbody>
            </table>
        </form>
        <h2>Add a Contact</h2>
        {/* <form action="#" onSubmit={handleAddFormSubmit}>
          <input
            type="text"
            name="Name"
            required="required"
            placeholder="Enter a name"
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="Address"
            required="required"
            placeholder="Enter a address"
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="PhoneNumber"
            required="required"
            placeholder="Enter a phone number"
            onChange={handleAddFormChange}
          />
          <input
            type="email"
            name="email"
            required="required"
            placeholder="Enter a email"
            onChange={handleAddFormChange}
          />
          <button type="submit">Add</button>
        </form> */}
      </div>
    </>
  );
};

export default Details;
