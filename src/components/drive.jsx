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

const drivesURL = "https://powerful-taiga-76725-654b259bda23.herokuapp.com/api/get_rides_status_driver";
const updateRideURL = "https://powerful-taiga-76725-654b259bda23.herokuapp.com/api/update_ride";


export default function LabTabs() {
  const [value, setValue] = React.useState('1');
  const user_session = window.localStorage.getItem("userLogin");
  const [user, setUser] = React.useState(JSON.parse(user_session));
  const [drives, setDrives] = React.useState([]);
  const [drivesHistory, setDrivesHistory] = React.useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getDrives = () => {
    const data = {
      driver_id: parseInt(user.user.id),
      status: "published",
    }
    console.log(data)
    axios.get(drivesURL, {
      params: data
    })
    .then(function (response) {
      setDrives(response.data.data);
    })
    .catch(function (error) {
      alert(error)
      console.log(error);
    });
  };

  const completeRide = (ride_id) => {
    const data = {
      ride_id: parseInt(ride_id),
      status: "completed",
    }
    axios.post(updateRideURL, data)
    .then(function (response) {
      window.location.href = "/drive"
    })
    .catch(function (error) {
      alert(error)
      console.log(error);
    });
  };

  const getHistory = () => {
    const data = {
      driver_id: parseInt(user.user.id),
      status: "completed",
    }
    axios.get(drivesURL, {
      params: data
    })
    .then(function (response) {
      setDrivesHistory(response.data.data);
    })
    .catch(function (error) {
      alert(error)
      console.log(error);
    });
  };

 
  React.useEffect(() => {
    if (typeof window !== 'undefined') { // Check if we're running in the browser.
      // ✅ Only runs once per app load
      getDrives()
      getHistory()
   }
  }, [])
  console.log(drives)


  return (
    <div>
      <NavBar/>
      <div className='pt-3'>
        <h1 className='pt-5 mt-5 text-center'><b>Drives</b></h1>
      </div>
        <Box sx={{ width: '100%', typography: 'body1' }} className='pt-2 mx-2'>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className='mx-5'>
              <TabList onChange={handleChange} aria-label="lab API tabs example" className='change1-info'>
                <Tab label="Upcoming Drive" value="1" />
                <Tab label="Drive History" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1" className='mx-4 pt-4'>
              {drives.map((drive) => (
                 <Accordion className='mt-3'>
                  <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header">
                    <Typography><span class="badge rounded-pill bg-warning text-dark p-2 mx-3">Upcoming</span> <i class="fas fa-calendar-check mx-3"></i>October 27, 2023 <i class="fas fa-arrow-right-long mx-3"></i> {drive.start_location} <i class="fas fa-arrow-right-long mx-3"></i> {drive.end_location} </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <div className='container-fluid'>
                        <div className='row'>
                          <div className='col-md-6 trip-info'>
                          <h5><b>Trip Details</b></h5>
                          <br />
                            <ul>
                                <li><span className='text-secondary'>Date and Time:</span> {dayjs(drive.date).format('MMMM, DD, YYYY')} ({drive.time})</li>
                                <li><span className='text-secondary'>Going from:</span> {drive.start_location}</li>
                                <li><span className='text-secondary'>Going To:</span> {drive.end_location}</li>
                                <li><span className='text-secondary'>Price / Person :</span> ₱ {drive.price}</li>
                            </ul>
                          </div>
                          <div className='col-md-6'>
                            <h5><b>Passengers Info</b></h5>
                            {
                              drive.bookings.length == 0 ?
                              <h5 className='text-center mt-5 text-secondary'><b>No passengers yet</b></h5>
                              :
                              ""
                            }
                            {drive.bookings.map((book) => (
                            <div>
                              <div className='col-md-4'>
                                <p> <i class="fas fa-user my-1 mx-1"></i> {book.name} <i class="far fa-circle-check text-success mx-1"></i></p>
                                <ul>
                                    <li>Number of Pax : {drive.pax}</li>
                                    <li>Contact Number : {book.phone}</li>
                                </ul>
                              </div>
                            </div>
                          ))}
                          </div>
                         
                        </div>
                      <div className='text-right button1-inf-container'>
                        <button onClick={completeRide.bind(this, drive.id)} type="button" class="btn btn-success button1-info">Complete Ride</button>
                      </div>
                      </div>
                    </Typography>
                  </AccordionDetails>
              </Accordion>
              ))}
            </TabPanel>
            <TabPanel value="2" className='mx-4 pt-4'>
              {drivesHistory.map((drive) => (
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
                            <div className='col-md-6 trip-info'>
                            <h5><b>Trip Details</b></h5>
                            <br />
                              <ul>
                                  <li><span className='text-secondary'>Date and Time:</span> {dayjs(drive.date).format('MMMM, DD, YYYY')} ({drive.time})</li>
                                  <li><span className='text-secondary'>Going from:</span> {drive.start_location}</li>
                                  <li><span className='text-secondary'>Going To:</span> {drive.end_location}</li>
                                  <li><span className='text-secondary'>Price / Person :</span> ₱ {drive.price}</li>
                              </ul>
                            </div>
                            <div className='col-md-6'>
                              <h5><b>Passengers Info</b></h5>
                              {
                                drive.bookings.length == 0 ?
                                <h5 className='text-center mt-5 text-secondary'><b>No passengers yet</b></h5>
                                :
                                ""
                              }
                              {drive.bookings.map((book) => (
                              <div>
                                <div className='col-md-4'>
                                  <p> <i class="fas fa-user my-1 mx-1"></i> {book.name} <i class="far fa-circle-check text-success mx-1"></i></p>
                                  <ul>
                                      <li>Number of Pax : {drive.pax}</li>
                                      <li>Contact Number : {book.phone}</li>
                                  </ul>
                                </div>
                              </div>
                            ))}
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