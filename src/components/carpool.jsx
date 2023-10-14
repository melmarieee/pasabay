import React, { useState } from 'react';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import NavBar from './common/navbar'
import './../css/carpool.css'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { geocodeByPlaceId, getLatLng } from 'react-google-places-autocomplete';



const Search = () => {                            
  const [fromLocation, setFromLocation] = useState(null);
  const [toLocation, setToLocation] = useState(null);

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
    </>
  )
}

export default Search;
