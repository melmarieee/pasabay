import React from 'react'

const ReadOnlyRow = ({contact, handleEditClick}) => {
  return (
    <>
        <tr>
            <td>{contact.Name}</td>
            <td>{contact.Address}</td>
            <td>{contact.PhoneNumber}</td>
            <td>{contact.email}</td>
            <td>
                <button type='button' onClick={(e) => handleEditClick(e, contact)}>Edit</button>
            </td>
        </tr>
    </>
  )
}

export default ReadOnlyRow