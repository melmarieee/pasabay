import React from 'react'
import dayjs from 'dayjs';
import Box from '@mui/material/Box';
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




const form = () => {

    const [fromLocation, setFromLocation] = useState(null);
    const [value, setValue] = React.useState(dayjs('2022-04-17T15:30'));
    const [seat, setSeat] = React.useState('');
    const [vehicles, setVehicle] = React.useState('');


    const handleChange = (event) => {
    setSeat(event.target.value);
  };

    const handlesChange = (event) => {
        setVehicle(event.target.value);
    };

  return (
    <div>
        <NavBar/>
        <div className='create-info p-4 mt-5 my-5 '>
        <h1 className='text-center mt-5'>Create a Ride</h1>
        </div>
        <div>
        <form className='pt-5 px-5'> 
            <div class="row mb-4">
                <div class="col-md-5">
                        <label class="form-label" for="form6Example1">Origin</label>
                        <GooglePlacesAutocomplete 
                            selectProps={{
                                fromLocation,
                                onChange: setFromLocation,
                                placeholder: 'Leaving from...',
                                className:"place-top-padding"
                            }}
                        />
                </div>
                <div class="col-md-5">
                        <label class="form-label" for="form6Example2">Destination</label>
                        <GooglePlacesAutocomplete 
                            selectProps={{
                                fromLocation,
                                onChange: setFromLocation,
                                placeholder: 'Going to...',
                                className:"place-top-padding"
                            }}
                        />
                </div>
                <div class="col-md-2">
                <label class="form-label " for="form6Example4">Time of transportation</label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['TimePicker', 'TimePicker']}>
                            <TimePicker
                            className='time-info'
                            label="Select Time"
                            defaultValue={dayjs('2022-04-17T15:30')}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                </div>
            </div>
                <div class="form-outline mb-4">
                <label class="form-label" for="form6Example3">Date of transportation</label>
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
                <div class="form-outline mb-4">
                <Box>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Number of Seats</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={seat}
                        label="Number of Seat"
                        onChange={handleChange}
                        >
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                </div>
                <div class="form-outline mb-4">
                <Box>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Types of Vehicle</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={vehicles}
                        label="Number of Seat"
                        onChange={handlesChange}
                        >
                        <MenuItem value={"Sedan"}>Sedan</MenuItem>
                        <MenuItem value={"SUV"}>SUV</MenuItem>
                        <MenuItem value={"Van"}>Van</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>
            <button type="submit" class="button-info11">Publish Ride</button>
        </form>
        </div>
    </div>
  )
}

export default form