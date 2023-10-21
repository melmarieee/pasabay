import React, { useState } from 'react';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import NavBar from './common/navbar'
import axios from "axios"
import dayjs from 'dayjs';
import './../css/carpool.css'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { MDBIcon } from 'mdb-react-ui-kit';
import { Button, Modal, ModalHeader, ModalFooter, ModalBody, Alert } from 'reactstrap';
import {Box} from '@chakra-ui/react'
import {
  GoogleMap,
  DirectionsRenderer,
} from '@react-google-maps/api'


const searchRideURL = "https://powerful-taiga-76725-654b259bda23.herokuapp.com/api/search_rides";

const Search = () => {                            
  const [fromLocation, setFromLocation] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null)
  const [toLocation, setToLocation] = useState(null);
  const [date, setDate] = useState(null);
  const [pax, setPax] = useState(null);
  const [modal, setModal] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const center = { lat: 14.5837893, lng: 121.1170287 }
  const [map, setMap] = useState(null)
  const [activeBook, setActiveBook] = useState(null)

  const toggleModalClose = () => {
    console.log(activeBook)
    setModal(!modal)
  }

  const ConfirmBookRide = () => {
    window.location.href = "/rides"
  }
 
  const bookRide = (result) => {
    setFromLocation(result.start_location)
    setToLocation(result.end_location)
    setActiveBook(result)
    setModal(!modal)
    calculateRoute(result.start_location, result.end_location)
  }

  const searchRides = () => {
    if (!fromLocation || !toLocation || !date || !pax) {
      alert("Please complete all the fields")
      return;
    }
    const data = {
      origin_city: fromLocation.value.terms[0].value.toLowerCase(),
      destination_city: toLocation.value.terms[0].value.toLowerCase(),
      date: dayjs(date).format('YYYY/MM/DD/'),
      pax: parseInt(pax),
    }
    axios.get(searchRideURL, {
      params: data
    })
    .then(function (response) {
        setSearchResults(response.data.data.results)
    })
    .catch(function (error) {
    alert(error)
    console.log(error);
    });
  };

  async function calculateRoute(start, end) {
    if (!start || !end) {
      return
    }
    setDirectionsResponse(null)

    const directionsService = new google.maps.DirectionsService()
    const results = await directionsService.route({
      origin: start,
      destination: end,
      travelMode: google.maps.TravelMode.DRIVING,
    })
    setDirectionsResponse(results)
  }

  return (
    <>
        <NavBar/>
        <Modal isOpen={modal} toggle={toggleModalClose}>
            <ModalHeader toggle={toggleModalClose}>Book this ride?</ModalHeader>
            <ModalBody>
              <div>
                <Box position='relative'h='300px' w='100%'>
                    <GoogleMap
                        center={center}
                        zoom={10}
                        mapContainerStyle={{ width: '100%', height: '300px' }}
                        options={{
                        zoomControl: false,
                        streetViewControl: false,
                        mapTypeControl: false,
                        fullscreenControl: false,
                        }}
                        onLoad={map => setMap(map)}
                    >
                        {directionsResponse && (
                        <DirectionsRenderer directions={directionsResponse} />
                        )}
                    </GoogleMap>
                </Box>
              </div>
              {
                  activeBook? 
                  <div className='mt-4 text-left'>
                    <p>Origin: <span className='text-secondary'>{activeBook.start_location}</span></p>
                    <p>Destination: <span className='text-secondary'>{activeBook.end_location}</span></p>
                    <p>Date: <span className='text-secondary'>{dayjs(activeBook.date).format('MMMM, DD, YYYY')} {activeBook.time}</span></p>
                    <p>Price: ₱ <span className='text-success'>{activeBook.price}</span></p>
                  </div>
                  :
                  ""
              }
             
            </ModalBody>
            <ModalFooter>
                <div className='row text-right'>
                  <div className='col-md-6'>
                    <Button  onClick={toggleModalClose}>
                        Cancel
                    </Button>
                  </div>
                  <div className='col-md-6'>
                    <button onClick={ConfirmBookRide} type="button" class="btn btn-primary rounded button-find-ride">Book</button>
                  </div>
                </div>
            </ModalFooter>
        </Modal>
        <div class="container-fluid pt-5 mt-5">
            <h1 className="text-center pb-4 mt-4">Where do you want to go?</h1>
            <div className="px-4 pt-2 pb-4 background-search">
              <div className="row">
                <div className="row pt-3">
                  <div className="col-md-3">
                    <GooglePlacesAutocomplete 
                      autocompletionRequest={{
                        componentRestrictions: {
                          country: ['ph']
                        },
                        types: ['locality']
                      }}
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
                      autocompletionRequest={{
                        componentRestrictions: {
                        country: ['ph']
                        },
                        types: ['locality']
                      }}
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
                              onChange={(newValue) => setDate(newValue)}
                              slotProps={{ textField: { size: 'small' } }}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                  </div>
                  <div className="col-md-1">
                    <div class="input-group pt-2">
                      <input onChange={(newValue) => setPax(newValue.target.value)} type="text" class="form-control" placeholder="Pax" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <button onClick={searchRides} type="button" class="btn btn-lg btn-primary rounded button-find-ride">Search</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className="container-fluid">
          {
            searchResults.length == 0 ?
            <div>
              <h1 className='text-center mt-5 text-secondary'>Please search to find a ride<i class="fas fa-magnifying-glass mx-2"></i></h1>
            </div>
            :
            ""
          }
          {
          searchResults.map((result) => (
            <div>
              <div className="row bg-light p-3 mt-4 mx-2">
                <div className="col-md-1">
                  {
                      result.type == "Sedan" ? 
                      <MDBIcon fas icon="car-side" size="4x" className="pt-4" />
                      :
                      <MDBIcon fas icon="van-shuttle" size="4x" className="pt-4" />
                  }
                  
                </div>
                <div className="col-md-2">
                  <p><h3>Price</h3><span>₱ {result.price}</span></p>
                </div>
                <div className="col-md-2">
                  <p><b>Driver:</b> {result.name}</p>
                  <p><b>Type:</b> {result.type}</p>
                  <p><b>Available Seat:</b> {result.pax}</p>
                </div>
                <div className="col-md-2">
                  <p><h3>Going from</h3> {result.start_location}</p>
                </div>
                <div className="col-md-2">
                  <p><h3>Going to</h3>{result.end_location}</p>
                </div>
                <div className="col-md-2">
                  <p><h3>Date and time</h3>{dayjs(result.date).format('MMMM, DD, YYYY')} {result.time}</p>
                </div>
                <div className="col-md-1 mt-4">
                  <button onClick={bookRide.bind(this, result)} type="button" class="btn btn-lg btn-primary rounded button-find-ride">Book</button>
                </div>
              </div>
            </div>
          ))}
        </div>
    </>
  )
}

export default Search;
