import React from "react";

const EditableRow = ({editFormData, handleEditFormChange, handleCancelClick}) => {
  return (
    <>
      <tr>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Enter a name..."
            name="Name"
            value={editFormData.name}
            onChange={handleEditFormChange}
          />
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Enter a address..."
            name="Address"
            value={editFormData.Address}
            onChange={handleEditFormChange}
          />
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Enter a phone number..."
            name="PhoneNumber"
            value={editFormData.phone}
            onChange={handleEditFormChange}
          />
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Enter a email..."
            name="email"
            value={editFormData.email}
            onChange={handleEditFormChange}
          />
        </td>
        <td>
            <button type="submit">Save</button>
            <button type="button" onClick={handleCancelClick}>Cancel</button>
        </td>
      </tr>
    </>
  );
};

export default EditableRow;
