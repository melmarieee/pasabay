import React from 'react'
import dayjs from 'dayjs';
import axios from "axios"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import '../css/form.css'
import NavBar from './common/navbar'
import {Box} from '@chakra-ui/react'
import TextField from '@mui/material/TextField';

import {
    GoogleMap,
    DirectionsRenderer,
  } from '@react-google-maps/api'

  const createRideURL = "https://powerful-taiga-76725-654b259bda23.herokuapp.com/api/create_ride";


const form = () => {
    const user_session = window.localStorage.getItem("userLogin");

    const [user, setUser] = useState(JSON.parse(user_session));
    const [fromLocation, setFromLocation] = useState(null);
    const [toLocation, setToLocation] = useState(null);
    const [date, setDate] = React.useState(null);
    const [time, setTime] = React.useState(null);
    const [pax, setPax] = React.useState(null);
    const [vehicle, setVehicle] = React.useState('');
    const [map, setMap] = useState(null)
    const [directionsResponse, setDirectionsResponse] = useState(null)
    const center = { lat: 14.5837893, lng: 121.1170287 }
    const [distance, setDistance] = useState('')
    const [distanceValue, setDistanceValue] = useState(0)
    const [duration, setDuration] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!fromLocation || !toLocation || !date || !time || !pax || !vehicle) {
            alert("Please complete the form")
            return;
        }
        const data = {
            start_location: fromLocation,
            end_location: toLocation,
            date: dayjs(date).format('MM/DD/YYYY'),
            time: dayjs(time).format('hh:mm A'),
            driver_id: parseInt(user.user.id),
            vehicle_id: parseInt(vehicle),
            status: "published",
            start_google_place_id: fromLocation.toLowerCase(),
            end_google_place_id: toLocation.toLowerCase(),
            price: Math.round(distanceValue / 1000 * 8),
            distance: distance,
            pax: pax
        }

        axios.post(createRideURL, data)
            .then(function (response) {
                window.location.href = "/drive"
            })
            .catch(function (error) {
            alert(error)
            console.log(error);
            });
    };

    const handleFrom = (event) => {
        setFromLocation(event.label);
    };

    const handleTo = (event) => {
        setToLocation(event.label);
    };

    const handlesChange = (event) => {
        calculateRoute()
        setVehicle(event.target.value);
    };

    async function calculateRoute() {
        if (!fromLocation || !toLocation) {
          return
        }
        setDirectionsResponse(null)

        const directionsService = new google.maps.DirectionsService()
        const results = await directionsService.route({
          origin: fromLocation,
          destination: toLocation,
          travelMode: google.maps.TravelMode.DRIVING,
        })
        setDirectionsResponse(results)
        setDistanceValue(results.routes[0].legs[0].distance.value)
        setDistance(results.routes[0].legs[0].distance.text)
        setDuration(results.routes[0].legs[0].duration.text)
      }

  return (
    <div>
        <NavBar/>
        {
            user.vehicle.length != 0 ?
            <div>
                <div className='pt-4 mt-5 '>
                <h1 className='text-center mt-5'>Create a Ride</h1>
            </div>
            <div>
                <div className='row'>
                    <div className='col-lg-6 p-5'>
                        {/* Google Map Box */}
                        <Box position='relative'h='600px' w='100%'>
                            <GoogleMap
                                center={center}
                                zoom={10}
                                mapContainerStyle={{ width: '100%', height: '100%' }}
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
                        <div className='row mx-1 mt-3'>
                            <div className='col-md-4 p-5 bg-light'>
                                <span className='text-secondary'>Distance:</span> {distance}
                            </div>
                            <div className='col-md-4 p-5 bg-light'>
                            <span className='text-secondary'>Estimated Duration:</span> {duration}
                            </div>
                            <div className='col-md-4 p-5 bg-light'>
                            <span className='text-secondary'>Income / Person:</span> <b className='text-success'>₱ {Math.round(distanceValue / 1000 * 8)}</b>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <form onSubmit={handleSubmit} className='pt-5 px-5'> 
                            <div class="row mb-4">
                                <div class="col-md-6">
                                        <label class="form-label" for="form6Example1">Origin</label>
                                        <GooglePlacesAutocomplete 
                                            autocompletionRequest={{
                                                componentRestrictions: {
                                                country: ['ph'],
                                                }
                                            }}
                                            selectProps={{
                                                fromLocation,
                                                onChange: handleFrom,
                                                placeholder: 'Leaving from...',
                                                className:"place-top-padding",
                                            }}
                                        />
                                </div>
                                <div class="col-md-6">
                                        <label class="form-label" for="form6Example2">Destination</label>
                                        <GooglePlacesAutocomplete 
                                            autocompletionRequest={{
                                                componentRestrictions: {
                                                country: ['ph'],
                                                }
                                            }}
                                            selectProps={{
                                                toLocation,
                                                onChange: handleTo,
                                                placeholder: 'Going to...',
                                                className:"place-top-padding"
                                            }}
                                        />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-6'>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['DatePicker']}>
                                            <DatePicker
                                            label="Select Date"
                                            onChange={(newValue) => setDate(newValue)}
                                            className="bg-white date"
                                            slotProps={{ textField: { size: 'small' } }}
                                            />
                                        </DemoContainer>
                                    </LocalizationProvider>
                                </div>
                                <div class="col-md-6">
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['TimePicker', 'TimePicker']}>
                                            <TimePicker
                                            className='time-info'
                                            label="Select Time"
                                            onChange={(newValue) => setTime(newValue)}
                                            slotProps={{ textField: { size: 'small' } }}
                                            />
                                        </DemoContainer>
                                    </LocalizationProvider>
                                </div>
                            </div>
                            <div class="row pt-4">
                                <div className='col-md-6'>
                                    <FormControl fullWidth>
                                    <TextField
                                        id="filled-number"
                                        label="Capacity"
                                        type="number"
                                        onChange={(event) => {
                                            setPax(event.target.value);
                                          }}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    </FormControl>
                                </div>
                                <div className='col-md-6'>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Vehicle</InputLabel>
                                        <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={vehicle}
                                        label="vehicle"
                                        onChange={handlesChange}
                                        >
                                        {user.vehicle.map((veh) => (
                                            <MenuItem value={veh.id}>{veh.name}</MenuItem>
                                        ))}
                                    </Select>
                                    </FormControl>
                                </div>
                            </div>
                            <div className='text-right'>
                                <button type='submit' className='btn btn-success mt-4'>Publish Ride</button>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
            </div>
            :
            <div className='mt-5 text-center'>
                <h1 class="pt-5" >Please Create a vehicle in <a href="/account">Account</a></h1>   
            </div>

        }
    </div>
  )
}

export default form