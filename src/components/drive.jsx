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

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
              <Accordion className=''>
                  <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header">
                    <Typography><span class="badge rounded-pill bg-warning text-dark p-2 mx-3">Upcoming</span> <i class="fas fa-calendar-check mx-3"></i>October 27, 2023 <i class="fas fa-arrow-right-long mx-3"></i> Pasig <i class="fas fa-arrow-right-long mx-3"></i> Isabela </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <div className='container-fluid'>
                        <div className='row'>
                          <div className='col-md-6 trip-info'>
                          <h5><b>Trip Details</b></h5>
                          <br />
                            <ul>
                                <li>Date and Time: June 23, 2023 (11:00am)</li>
                                <li>Going from <i class="fas fa-arrow-right-long mx-3"></i>Pasig, Metro Manila</li>
                                <li>Going to <i class="fas fa-arrow-right-long mx-3"></i>Manila, Metro Manila</li>
                                <li>Price : ₱ 127</li>
                            </ul>
                          </div>
                          <div className='col-md-2'>
                            <h5><b>Passengers Info</b></h5>
                            <br />
                            <p> <i class="fas fa-user my-1 mx-1"></i> Mel Marie Luya <i class="far fa-circle-check text-success mx-1"></i></p>
                            <ul>
                                <li>Number of Pax : 2</li>
                                <li>Contact Number : 09363589458</li>
                            </ul>
                          </div>
                          <div className='col-md-2 mt-4 pt-1'>
                            <br />
                            <p> <i class="fas fa-user my-1 mx-2"></i> Hugh Owen Panopio  <i class="far fa-circle-check text-success mx-1"></i></p>
                            <ul>
                                <li>Number of Pax : 1</li>
                                <li>Contact Number : 09998229286</li>
                            </ul>
                          </div>
                          <div className='col-md-2 mt-4 pt-1'>
                            <br />
                            <p> <i class="fas fa-user my-1 mx-2"></i>Fahb  <i class="far fa-circle-check text-success mx-2"></i></p>
                            <ul>
                                <li>Number of Pax : 3</li>
                                <li>Contact Number : 09123456789</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className='button1-info'>
                      <button type="button" class="button1-info btn-comride-drive">Complete Ride</button>
                      </div>
                    </Typography>
                  </AccordionDetails>
              </Accordion>
              <Accordion className='mt-3'>
                  <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header">
                    <Typography> <span class="badge rounded-pill bg-warning text-dark p-2 mx-3"> Upcoming</span><i class="fas fa-calendar-check mx-3"></i>October 30, 2023 <i class="fas fa-arrow-right-long mx-3"></i> Mandaluyong <i class="fas fa-arrow-right-long mx-3"></i> Quezon City </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                    <div className='container-fluid'>
                        <div className='row'>
                          <div className='col-md-6'>
                          <h5><b>Trip Details</b></h5>
                          <br />
                            <ul>
                                <li>Date and Time: June 23, 2023 (11:00am)</li>
                                <li>Going from <i class="fas fa-arrow-right-long mx-3"></i>Pasig, Metro Manila</li>
                                <li>Going to <i class="fas fa-arrow-right-long mx-3"></i>Manila, Metro Manila</li>
                                <li>Price : ₱ 127</li>
                            </ul>
                          </div>
                          <div className='col-md-2'>
                            <h5><b>Passengers Info</b></h5>
                            <br />
                            <p> <i class="fas fa-user my-1 mx-1"></i> Mel Marie Luya <i class="far fa-circle-check text-success mx-1"></i></p>
                            <ul>
                                <li>Number of Pax : 2</li>
                                <li>Contact Number : 09363589458</li>
                            </ul>
                          </div>
                          <div className='col-md-2 mt-4 pt-1'>
                            <br />
                            <p> <i class="fas fa-user my-1 mx-2"></i> Hugh Owen Panopio  <i class="far fa-circle-check text-success mx-1"></i></p>
                            <ul>
                                <li>Number of Pax : 1</li>
                                <li>Contact Number : 09998229286</li>
                            </ul>
                          </div>
                          <div className='col-md-2 mt-4 pt-1'>
                            <br />
                            <p> <i class="fas fa-user my-1 mx-2"></i>Fahb  <i class="far fa-circle-check text-success mx-2"></i></p>
                            <ul>
                                <li>Number of Pax : 3</li>
                                <li>Contact Number : 09123456789</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className='button1-info'>
                      <button type="button" class="button1-info btn-comride-drive">Complete Ride</button>
                      </div>
                    </Typography>
                  </AccordionDetails>
              </Accordion>    
            </TabPanel>
            <TabPanel value="2" className='mx-4 pt-4'>
            <Accordion className=''>
                  <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header">
                    <Typography><span class="badge rounded-pill bg-secondary p-2 mx-3">Completed</span> <i class="fas fa-calendar-check mx-3"></i>October 27, 2023 <i class="fas fa-arrow-right-long mx-3"></i> Pasig <i class="fas fa-arrow-right-long mx-3"></i> Isabela </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <div className='container-fluid'>
                        <div className='row'>
                          <div className='col-md-6'>
                          <h5><b>Trip Details</b></h5>
                          <br />
                            <ul>
                                <li>Date and Time: June 23, 2023 (11:00am)</li>
                                <li>Going from <i class="fas fa-arrow-right-long mx-3"></i>Pasig, Metro Manila</li>
                                <li>Going to <i class="fas fa-arrow-right-long mx-3"></i>Manila, Metro Manila</li>
                                <li>Price : ₱ 127</li>
                            </ul>
                          </div>
                          <div className='col-md-2'>
                            <h5><b>Passengers Info</b></h5>
                            <br />
                            <p> <i class="fas fa-user my-1 mx-1"></i> Mel Marie Luya <i class="far fa-circle-check text-success mx-1"></i></p>
                            <ul>
                                <li>Number of Pax : 2</li>
                                <li>Contact Number : 09363589458</li>
                            </ul>
                          </div>
                          <div className='col-md-2 mt-4 pt-1'>
                            <br />
                            <p> <i class="fas fa-user my-1 mx-2"></i> Hugh Owen Panopio  <i class="far fa-circle-check text-success mx-1"></i></p>
                            <ul>
                                <li>Number of Pax : 1</li>
                                <li>Contact Number : 09998229286</li>
                            </ul>
                          </div>
                          <div className='col-md-2 mt-4 pt-1'>
                            <br />
                            <p> <i class="fas fa-user my-1 mx-2"></i>Fahb  <i class="far fa-circle-check text-success mx-2"></i></p>
                            <ul>
                                <li>Number of Pax : 3</li>
                                <li>Contact Number : 09123456789</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </Typography>
                  </AccordionDetails>
              </Accordion>
              <Accordion className='mt-3'>
                  <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header">
                    <Typography> <span class="badge rounded-pill bg-secondary p-2 mx-3">Completed</span><i class="fas fa-calendar-check mx-3"></i>October 30, 2023 <i class="fas fa-arrow-right-long mx-3"></i> Mandaluyong <i class="fas fa-arrow-right-long mx-3"></i> Quezon City </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                    <div className='container-fluid'>
                        <div className='row'>
                          <div className='col-md-6'>
                          <h5><b>Trip Details</b></h5>
                          <br />
                            <ul>
                                <li>Date and Time: June 23, 2023 (11:00am)</li>
                                <li>Going from <i class="fas fa-arrow-right-long mx-3"></i>Pasig, Metro Manila</li>
                                <li>Going to <i class="fas fa-arrow-right-long mx-3"></i>Manila, Metro Manila</li>
                                <li>Price : ₱ 127</li>
                            </ul>
                          </div>
                          <div className='col-md-2'>
                            <h5><b>Passengers Info</b></h5>
                            <br />
                            <p> <i class="fas fa-user my-1 mx-1"></i> Mel Marie Luya <i class="far fa-circle-check text-success mx-1"></i></p>
                            <ul>
                                <li>Number of Pax : 2</li>
                                <li>Contact Number : 09363589458</li>
                            </ul>
                          </div>
                          <div className='col-md-2 mt-4 pt-1'>
                            <br />
                            <p> <i class="fas fa-user my-1 mx-2"></i> Hugh Owen Panopio  <i class="far fa-circle-check text-success mx-1"></i></p>
                            <ul>
                                <li>Number of Pax : 1</li>
                                <li>Contact Number : 09998229286</li>
                            </ul>
                          </div>
                          <div className='col-md-2 mt-4 pt-1'>
                            <br />
                            <p> <i class="fas fa-user my-1 mx-2"></i>Fahb  <i class="far fa-circle-check text-success mx-2"></i></p>
                            <ul>
                                <li>Number of Pax : 3</li>
                                <li>Contact Number : 09123456789</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </Typography>
                  </AccordionDetails>
              </Accordion>
            </TabPanel>
          </TabContext>
        </Box>
    </div>
  );
}