import React from "react";
import "../css/edittable.css";
import { Input, Button, Container, Row } from "reactstrap";

const EditTable = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  console.log(editFormData)
  return (
    <>
      <Container>
        <Row>
          <Row>
            <Input
              className="inputEditTable"
              type="text"
              required="required"
              placeholder="Enter a name..."
              name="name"
              value={editFormData.name}
              onChange={handleEditFormChange}
            />
          </Row>
          <Row>
            <Input
              className="inputEditTable"
              type="text"
              required="required"
              placeholder="Enter a address..."
              name="address"
              value={editFormData.address}
              onChange={handleEditFormChange}
            />
          </Row>
          <Row>
            <Input
              className="inputEditTable"
              type="text"
              required="required"
              placeholder="Enter a phone number..."
              name="phone"
              value={editFormData.phone}
              onChange={handleEditFormChange}
            />
          </Row>
          <Row>
            <Input
              className="inputEditTable"
              type="text"
              required="required"
              placeholder="Enter a email..."
              name="email"
              value={editFormData.email}
              onChange={handleEditFormChange}
            />
          </Row>
          <Row>
            <Input
              className="inputEditTable"
              type="text"
              required="required"
              placeholder="Enter a gender..."
              name="gender"
              value={editFormData.gender}
              onChange={handleEditFormChange}
            />
          </Row>
          <Row>
            <Input
              className="inputEditTable"
              type="text"
              required="required"
              placeholder="Enter a birthday..."
              name="birthday"
              value={editFormData.birthday}
              onChange={handleEditFormChange}
            />
          </Row>
          <Row>
            <Button type="submit" className="btnEditTable saveButton">
              Save
            </Button>
            <Button
              type="button"
              onClick={handleCancelClick}
              className="btnEditTable CancelButton"
            >
              Cancel
            </Button>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default EditTable;
