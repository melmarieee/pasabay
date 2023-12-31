import React from 'react'

const ReadOnlyRow = ({contact, handleEditClick}) => {
  return (
    <>
        <tr>
            <td>{contact.name}</td>
            <td>{contact.address}</td>
            <td>{contact.phone}</td>
            <td>{contact.email}</td>
            <td>
                <button type='button' onClick={(e) => handleEditClick(e, contact)}>Edit</button>
            </td>
        </tr>
    </>
  )
}

export default ReadOnlyRow