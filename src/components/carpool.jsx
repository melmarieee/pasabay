import React, { useState } from 'react';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import NavBar from './common/navbar'
import './../css/carpool.css'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { geocodeByPlaceId, getLatLng } from 'react-google-places-autocomplete';
import { MDBIcon } from 'mdb-react-ui-kit';
import { Button, Modal, ModalHeader, ModalFooter, ModalBody, Alert } from 'reactstrap';


const Search = () => {                            
  const [fromLocation, setFromLocation] = useState(null);
  const [toLocation, setToLocation] = useState(null);
  const [modal, setModal] = useState(false);

  const toggleModalClose = () => {
    setModal(!modal)
  }

  const getLatLong = (event) => {
    geocodeByPlaceId("ChIJ2y8V0h7HlzMRHwpMKE3Kbx4")
    .then(results => getLatLng(results[0]))
    .then(({ lat, lng }) =>
      console.log('Successfully got latitude and longitude', { lat, lng })
  );
  }
  console.log(fromLocation)

  return (
    <>
        <NavBar/>
        <Modal isOpen={modal} toggle={toggleModalClose}>
            <ModalHeader toggle={toggleModalClose}>Book this ride?</ModalHeader>
            <ModalBody>
              <div >

              </div>
            </ModalBody>
            <ModalFooter>
                <Button className="mx-3" color="none" onClick={toggleModalClose}>
                    Cancel
                </Button>x
                  <button onClick={toggleModalClose} type="button" class="btn btn-lg btn-primary rounded button-find-ride">Book</button>
            </ModalFooter>
        </Modal>
        <div class="container-fluid pt-5 mt-5">
            <h1 className="text-center pb-4">Where do you want to go?</h1>
            <div className="px-4 pt-2 pb-4 background-search">
              <div className="row">
                <div className="row pt-3">
                  <div className="col-md-3">
                    <GooglePlacesAutocomplete 
                      selectProps={{
                        fromLocation,
                        onChange: setFromLocation,
                        placeholder: 'Leaving from...',
                        className:"place-top-padding"
                      }}
                    />
                  </div>
                  <div className="col-md-3">
                    <GooglePlacesAutocomplete
                      fetchDetails={true}
                      
                      selectProps={{
                        toLocation,
                        onChange: setToLocation,
                        placeholder: 'Going to...',
                        className:"place-top-padding"
                      }}
                    />
                  </div>
                  <div className="col-md-3">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker
                              label="Select Date"
                              className="bg-white date"
                              slotProps={{ textField: { size: 'small' } }}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                  </div>
                  <div className="col-md-1">
                    <div class="input-group pt-2">
                      <input type="text" class="form-control" placeholder="Pax" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <button onClick={getLatLong} type="button" class="btn btn-lg btn-primary rounded button-find-ride">Search</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className="container-fluid">
          <div className="row bg-light p-3 mt-4 mx-2">
            <div className="col-md-1">
              <MDBIcon fas icon="car-side" size="4x" className="pt-4" />
            </div>
            <div className="col-md-2">
              <p><b>Driver:</b> Ryan Velasquez</p>
              <p><b>Type:</b> Sedan</p>
              <p><b>Vehicle:</b> NG0 1354 Toyota Raze</p>
              <p><b>Available Seat:</b> 3</p>
            </div>
            <div className="col-md-3">
              <p><h3>Going from</h3> Capitol Commons Estancia Estancia Mall, Camino Drive, Pasig</p>
            </div>
            <div className="col-md-3">
              <p><h3>Going to</h3>SM City Batangas Brgy, M.Pastor Ave, Village, Batangas</p>
            </div>
            <div className="col-md-2">
              <p><h3>Date and time</h3>October 24, 2023 4:30 PM</p>
            </div>
            <div className="col-md-1 mt-4">
              <button onClick={toggleModalClose} type="button" class="btn btn-lg btn-primary rounded button-find-ride">Book</button>
            </div>
          </div>
          <div className="row bg-light p-3 mt-4 mx-2">
            <div className="col-md-1">
              <MDBIcon fas icon="shuttle-van" size="4x" className="pt-4" />
            </div>
            <div className="col-md-2">
              <p><b>Driver:</b> Mel Marie</p>
              <p><b>Type:</b> Van</p>
              <p><b>Vehicle:</b> NG0 3334 Toyota Hiace</p>
              <p><b>Available Seat:</b> 3</p>
            </div>
            <div className="col-md-3">
              <p><h3>Going from</h3> Capitol Commons Estancia Estancia Mall, Camino Drive, Pasig</p>
            </div>
            <div className="col-md-3">
              <p><h3>Going to</h3>SM City Batangas Brgy, M.Pastor Ave, Village, Batangas</p>
            </div>
            <div className="col-md-2">
              <p><h3>Date and time</h3>October 24, 2023 3:30 PM</p>
            </div>
            <div className="col-md-1 mt-4">
              <button onClick={toggleModalClose} type="button" class="btn btn-lg btn-primary rounded button-find-ride">Book</button>
            </div>
          </div>
          <div className="row bg-light p-3 mt-4 mx-2">
            <div className="col-md-1">
              <MDBIcon fas icon="motorcycle"  size="4x" className="pt-4"/>
            </div>
            <div className="col-md-2">
              <p><b>Driver:</b> Mel Marie</p>
              <p><b>Type:</b> Motorcycle</p>
              <p><b>Vehicle:</b> BMW 1000 CC</p>
              <p><b>Available Seat:</b> 1</p>
            </div>
            <div className="col-md-3">
              <p><h3>Going from</h3> Capitol Commons Estancia Estancia Mall, Camino Drive, Pasig</p>
            </div>
            <div className="col-md-3">
              <p><h3>Going to</h3>SM City Batangas Brgy, M.Pastor Ave, Village, Batangas</p>
            </div>
            <div className="col-md-2">
              <p><h3>Date and time</h3>October 24, 2023, 5:30 PM</p>
            </div>
            <div className="col-md-1 mt-4">
              <button onClick={toggleModalClose} type="button" class="btn btn-lg btn-primary rounded button-find-ride">Book</button>
            </div>
          </div>
        </div>
    </>
  )
}

export default Search;
