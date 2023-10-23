import NavBar from './common/navbar'
import '../css/drive.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from "axios"
import dayjs from 'dayjs';

const ridesURL = "https://powerful-taiga-76725-654b259bda23.herokuapp.com/api/get_rides_status_passenger";


export default function Rides() {
  const [value, setValue] = React.useState('1');
  const user_session = window.localStorage.getItem("userLogin");
  const [user, setUser] = React.useState(JSON.parse(user_session));
  const [rides, setRides] = React.useState([]);
  const [rideHistory, setRideHistory] = React.useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getRides = () => {
    const data = {
      passenger_id: parseInt(user.user.id),
      status: "published",
    }
    console.log(data)
    axios.get(ridesURL, {
      params: data
    })
    .then(function (response) {
      console.log(response.data.data)
      setRides(response.data.data.results);
    })
    .catch(function (error) {
      alert(error)
      console.log(error);
    });
  };

  const getHistory = () => {
    const data = {
      passenger_id: parseInt(user.user.id),
      status: "completed",
    }
    axios.get(ridesURL, {
      params: data
    })
    .then(function (response) {
      setRideHistory(response.data.data.results);
    })
    .catch(function (error) {
      alert(error)
      console.log(error);
    });
  };

 
  React.useEffect(() => {
    if (typeof window !== 'undefined') { // Check if we're running in the browser.
      // ✅ Only runs once per app load
      getRides()
      getHistory()
   }
  }, [])
  console.log(rides)


  return (
    <div>
      <NavBar/>
      <div className='pt-3'>
        <h1 className='pt-5 mt-5 text-center'><b>Rides</b></h1>
      </div>
        <Box sx={{ width: '100%', typography: 'body1' }} className='pt-2 mx-2'>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className='mx-5'>
              <TabList onChange={handleChange} aria-label="lab API tabs example" className='change1-info'>
                <Tab label="Upcoming Rides" value="1" />
                <Tab label="Rides History" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1" className='mx-4 pt-4'>
              {
                rides.length == 0 ?
                <h1 className='text-center pt-5 text-secondary'>There are no upcoming rides yet</h1>
                :
                ""
              }
              {rides.map((drive) => (
                 <Accordion className='mt-3'>
                  <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header">
                    <Typography><span class="badge rounded-pill bg-warning text-dark p-2 mx-3">Upcoming</span> <i class="fas fa-calendar-check mx-3"></i>{dayjs(drive.date).format('MMMM, DD, YYYY')} <i class="fas fa-arrow-right-long mx-3"></i> {drive.start_location} <i class="fas fa-arrow-right-long mx-3"></i> {drive.end_location} </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <div className='container-fluid'>
                        <div className='row'>
                          <div className='col-md-4 trip-info'>
                          <h5><b>Ride Details</b></h5>
                          <br />
                            <ul>
                                <li><span className='text-secondary'>Date and Time:</span> {dayjs(drive.date).format('MMMM, DD, YYYY')} ({drive.time})</li>
                                <li><span className='text-secondary'>Going from:</span> {drive.start_location}</li>
                                <li><span className='text-secondary'>Going To:</span> {drive.end_location}</li>
                                <li><span className='text-secondary'>Price : </span><span className='text-success'>₱ {drive.price}</span></li>
                            </ul>
                          </div>     
                          <div className='col-md-4 trip-info'>
                            <h5><b>Travel Details</b></h5>
                            <br />
                              <ul>
                                  <li><span className='text-secondary'>Distance:</span> {drive.distance}</li>
                                  <li><span className='text-secondary'>Estimated Duration:</span> {drive.estimated_travel}</li>
                              </ul>
                          </div>
                          <div className='col-md-4 trip-info'>
                            <h5><b>Driver Details</b></h5>
                            <br />
                              <ul>
                                  <li><span className='text-secondary'>Driver Name:</span> {drive.driver_name}</li>
                                  <li><span className='text-secondary'>Contact:</span> {drive.phone}</li>
                                  <li><span className='text-secondary'>Vehicle:</span> {drive.type}</li>
                              </ul>
                          </div>                         
                        </div>
                      </div>
                    </Typography>
                  </AccordionDetails>
              </Accordion>
              ))}
            </TabPanel>
            <TabPanel value="2" className='mx-4 pt-4'>
              {
                rideHistory.length == 0 ?
                <h1 className='text-center pt-5 text-secondary'>There are no history rides yet</h1>
                :
                ""
              }
              {rideHistory.map((drive) => (
                  <Accordion className='mt-3'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                      <Typography><span class="badge rounded-pill bg-secondary p-2 mx-3">Completed</span>  <i class="fas fa-calendar-check mx-3"></i>October 27, 2023 <i class="fas fa-arrow-right-long mx-3"></i> {drive.start_location} <i class="fas fa-arrow-right-long mx-3"></i> {drive.end_location} </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <div className='container-fluid'>
                          <div className='row'>
                            <div className='col-md-4 trip-info'>
                            <h5><b>Ride Details</b></h5>
                            <br />
                              <ul>
                                  <li><span className='text-secondary'>Date and Time:</span> {dayjs(drive.date).format('MMMM, DD, YYYY')} ({drive.time})</li>
                                  <li><span className='text-secondary'>Going from:</span> {drive.start_location}</li>
                                  <li><span className='text-secondary'>Going To:</span> {drive.end_location}</li>
                                  <li><span className='text-secondary'>Price : </span><span className='text-success'>₱ {drive.price}</span></li>
                              </ul>
                            </div>     
                            <div className='col-md-4 trip-info'>
                              <h5><b>Travel Details</b></h5>
                              <br />
                                <ul>
                                    <li><span className='text-secondary'>Distance:</span> {drive.distance}</li>
                                    <li><span className='text-secondary'>Estimated Duration:</span> {drive.estimated_travel}</li>
                                </ul>
                            </div>
                            <div className='col-md-4 trip-info'>
                              <h5><b>Driver Details</b></h5>
                              <br />
                                <ul>
                                    <li><span className='text-secondary'>Driver Name:</span> {drive.driver_name}</li>
                                    <li><span className='text-secondary'>Contact:</span> {drive.phone}</li>
                                    <li><span className='text-secondary'>Vehicle:</span> {drive.type}</li>
                                </ul>
                            </div>                         
                          </div>
                        </div>
                      </Typography>
                    </AccordionDetails>
                </Accordion>
                ))}
            </TabPanel>
          </TabContext>
        </Box>
    </div>
  );
}