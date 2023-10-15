import React from "react";
import '../css/edittable.css'

const EditTable = ({editFormData, handleEditFormChange, handleCancelClick}) => {
  return (
    <>
      <tr>
        <tr>
          <input
            type="text"
            required="required"
            placeholder="Enter a name..."
            name="Name"
            value={editFormData.Name}
            onChange={handleEditFormChange}
          />
        </tr>
        <tr>
          <input
            type="text"
            required="required"
            placeholder="Enter a address..."
            name="Address"
            value={editFormData.Address}
            onChange={handleEditFormChange}
          />
        </tr>
        <tr>
        <input
            type="text"
            required="required"
            placeholder="Enter a phone number..."
            name="PhoneNumber"
            value={editFormData.PhoneNumber}
            onChange={handleEditFormChange}
          />
        </tr>
        <tr>
        <input
            type="text"
            required="required"
            placeholder="Enter a email..."
            name="email"
            value={editFormData.email}
            onChange={handleEditFormChange}
          />
        </tr>
        <tr>
            <button type="submit">Save</button>
            <button type="button" onClick={handleCancelClick}>Cancel</button>
        </tr>
      </tr>
    </>
  );
};

export default EditTable;
