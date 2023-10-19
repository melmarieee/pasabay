import { useRef, useState, useEffect } from 'react'

import './../css/show_ride.css'
import NavBar from './common/navbar'
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Input,
  SkeletonText,
  Text,
} from '@chakra-ui/react'
import { FaLocationArrow, FaTimes } from 'react-icons/fa'

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api'

const ShowRide = () => {       

  const [map, setMap] = useState(null)
  const [directionsResponse, setDairectionsResponse] = useState(null)
  const [distance, setDistance] = useState('')
  const [duration, setDuration] = useState('')
  const center = { lat: 14.5837893, lng: 121.1170287 }


  const originRef = useRef()
  const destiantionRef = useRef()

  async function calculateRoute() {
    const directionsService = new google.maps.DirectionsService()
    console.log(originRef)
    console.log(destiantionRef)
    const results = await directionsService.route({
      origin: "Novaliches, Quezon City, Metro Manila, Philippines",
      destination: "Baguio, Benguet, Philippines",
      travelMode: google.maps.TravelMode.DRIVING,
    })
    setDirectionsResponse(results)
    setDistance(results.routes[0].legs[0].distance.text)
    setDuration(results.routes[0].legs[0].duration.text)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') { // Check if we're running in the browser.
      // ✅ Only runs once per app load
      calculateRoute()
   }
  }, [])

  return (
    <>
    <NavBar/>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 map-container p-5">
          <Box position='relative' left={0} top={105} h='100%' w='100%'>
              {/* Google Map Box */}
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
        </div>
        <div className="col-md-6 pt-5 mt-5">
          <h1>Ride #4126</h1>
          <div className='row text-center px-2'>
            <div className='col-md-6 bg-light p-5'>
              <p className='fs-3 fw-lighter'>Distance: <b>{distance}</b></p>
            </div>
            <div className='col-md-6 bg-light p-5'>
              <p className='fs-3 fw-lighter'>Duration: <b>{duration}</b></p>
            </div>
          </div>
          <div className='row pt-5'>
            <div className='col-md-6'>
              <p className='fs-4 fw-lighter'>Going From:</p>
            </div>
            <div className='col-md-6'>
              <p className='fs-4 fw-lighter'>Going To:</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <p className='fs-4'>Novaliches, Quezon City, Metro Manila, Philippines</p>
            </div>
            <div className='col-md-6'>
              <p className='fs-4'>Baguio, Benguet, Philippines</p>
            </div>
          </div>
          <p className='fs-5'><span className='fw-lighter'>Driver:</span> Mel Marie Luya</p>
          <p className='fs-5'><span className='fw-lighter'>Date:</span> October 24, 2023 4:30 PM</p>
          <p className='fs-5'><span className='fw-lighter'>Vehicle Type:</span> Van</p>
          <p className='fs-5'><span className='fw-lighter'>Vehicle:</span> NG0 3334 Toyota Hiace</p>
          <p className='fs-5'><span className='fw-lighter'>Status:</span> Placed</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default ShowRide;
