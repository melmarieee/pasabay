import React, { useState } from "react";
import "../css/account.css";
import { Link } from "react-router-dom";
import data from "../json/mock-data.json";
import dayjs from 'dayjs';
import EditTable from "./EditTable";
import axios from "axios"
import ReadTable from "./ReadTable";
import NavBar from "./common/navbar";
import Footer from "../components/common/footer";
import { Col, Row, Container, Label } from "reactstrap";
import { Modal, ModalHeader, ModalFooter, ModalBody, Alert } from 'reactstrap';

const createVehicleURL = "https://powerful-taiga-76725-654b259bda23.herokuapp.com/api/create_vehicle";
const updateUser = "https://powerful-taiga-76725-654b259bda23.herokuapp.com/api/update_users";
const deleteVehicle = "https://powerful-taiga-76725-654b259bda23.herokuapp.com/api/delete_vehicle";


const Account = () => {
  const user_session = window.localStorage.getItem("userLogin");
  const [user, setUser] = useState(JSON.parse(user_session));
  const [contacts, setContancts] = useState([user.user]);
  const [modal, setModal] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [activeVehicleId, setActiveVehicleId] = useState(false);
  const [vehicleAdd, setVehicleAdd] = useState({
    "name": "",
    "type": "",
    "seats": "",
    "driver_id": user.user.id
  });

  const [editFormData, setEditFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    gender: "",
    birthday: "",
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
      name: editFormData.name,
      address: editFormData.address,
      phone: editFormData.phone,
      email: editFormData.email,
      gender: editFormData.gender,
      birthday: dayjs(editFormData.birthday).format('YYYY/MM/DD/'),
    };
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === editContactId);
    newContacts[index] = editedContact;
    setContancts(newContacts);
    setEditContactId(null);

    let new_user_session = user;

    const data = {
      user_id: user.user.id,
      email: editedContact.email,
      name: editedContact.name,
      birthday: editedContact.birthday,
      gender: editedContact.gender,
      phone: editedContact.phone,
      address: editedContact.address,
    }
    axios.post(updateUser, data)
    .then(function (response) {
      new_user_session.user = response.data.data.results[0];
      window.localStorage.setItem("userLogin", JSON.stringify(new_user_session));
      // window.location.reload()
    })
    .catch(function (error) {
      alert(error)
    console.log(error);
    });
  };

  const deleteVehicleHandler = () => {
    let new_user_session = user;
    axios.post(deleteVehicle, {
      id: activeVehicleId,
      driver_id: user.user.id
    })
    .then(function (response) {
      new_user_session.vehicle = response.data.data.results;
      window.localStorage.setItem("userLogin", JSON.stringify(new_user_session));
      window.location.reload()
    })
    .catch(function (error) {
      alert(error)
    console.log(error);
    });
  }

  const toggleModal = () => {
    setModal(!modal)
  }

  const toggleModalDelete = (id) => {
    setActiveVehicleId(id)
    setModalDelete(!modalDelete)
  }

  const changeVehicleAdd = (key, event) => {

    let newvehicleAdd = vehicleAdd
    newvehicleAdd[key] = event.target.value
    setVehicleAdd(newvehicleAdd)
  }

  const submitVehicle = () => {
    let new_user_session = user;

    axios.post(createVehicleURL, vehicleAdd)
    .then(function (response) {
      new_user_session.vehicle = response.data.data.results;
      window.localStorage.setItem("userLogin", JSON.stringify(new_user_session));
      window.location.reload()
    })
    .catch(function (error) {
      alert(error)
    console.log(error);
    });

  }

  const handleEditClick = (e, contact) => {
    e.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      name: contact.name,
      address: contact.address,
      phone: contact.phone,
      email: contact.email,
      gender: contact.gender,
      birthday: dayjs(contact.birthday).format('YYYY/MM/DD/'),
    };
    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  return (
    <>
      <NavBar />
      <Modal isOpen={modal} toggle={toggleModal} className="modal-addVehicle-container">
            <ModalHeader toggle={toggleModal}>Create Vehicle</ModalHeader>
            <ModalBody>
              <div class="input-group pt-2">
                <input onChange={changeVehicleAdd.bind(this, "name")} type="text" class="form-control" placeholder="Vehicle name and plate number" aria-label="Username" aria-describedby="basic-addon1"/>
              </div>
              <div class="input-group pt-2">
                <select onChange={changeVehicleAdd.bind(this, "type")} class="form-select" aria-label="Default select example">
                  <option selected>Vehicle type</option>
                  <option value="sedan">Sedan</option>
                  <option value="van">Van</option>
                </select>
              </div>
              <div class="input-group pt-2">
                <input onChange={changeVehicleAdd.bind(this, "seats")} type="number" class="form-control" placeholder="seats" aria-label="Username" aria-describedby="basic-addon1"/>
              </div>
            </ModalBody>
            <ModalFooter className="btn-addVehicle-modal-container">
              <div className="text-right">
                <button onClick={submitVehicle} className="btn-addVehicle-modal">
                  Add vehicle +
                </button>
              </div>
            </ModalFooter>
        </Modal>

        <Modal isOpen={modalDelete} toggle={toggleModalDelete} className="modal-addVehicle-container">
            <ModalHeader toggle={toggleModalDelete}>Delete this vehicle? </ModalHeader>
            <ModalFooter className="btn-addVehicle-modal-container">
              <div className="text-right">
                <button onClick={deleteVehicleHandler} className="btn btn-danger">
                  Delete Vehicle
                </button>
              </div>
            </ModalFooter>
        </Modal>
      <body className="body">
      <div className=''>
            <h1 className='text-center mt-5 pb-5'>Account</h1>
        </div>
        <Row className="account-details-container">
            <Col className="accountImg p-5 text-center">
              <img
                src="../src/assets/carpoollogo.png"
                alt=""
                className="img-fluid"
              />
            </Col>
            <Col className="p-5">
              <form action="#" className="form-details-container" onSubmit={handleEditFormSubmit}>
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
        <hr />
        <h2 className="text-center py-5">Vehicles</h2>
        {
          user.vehicle.length == 0 ?
            <h2 className="text-center py-5 text-secondary">There's no vehicles yet</h2>
          :
          ""
        }
        <div className="row vehicle-type-container">
        <div className="row">
          {user.vehicle.map((veh) => (
            <div className="col-md-4 mt-3">
              <div className="bg-light shadow p-5">
                <div className="text-right">
                  <button onClick={toggleModalDelete.bind(this, veh.id)} type="button" class="btn-close" aria-label="Close"></button>
                </div>
                <h3 className="pb-3">{veh.name}</h3>
                <p>Vehicle Type: {veh.type}</p>
                <p>Seats: {veh.seats}</p>
              </div>
            </div>
          ))}
        </div>
          <div className="row">
            <div className="col-md-12 text-right pt-5">
              <button onClick={toggleModal} className="btn-addVehicle">
                Add vehicle +
              </button>
            </div>
          </div>
        </div>
      </body>
      <Footer />
    </>
  );
};

export default Account;
