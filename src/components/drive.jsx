import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavBar from './common/navbar'

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
        <NavBar/>
        <h1 className="pt-5 mt-5 text-center"><b>Drives</b></h1>
        <Box className="p-5">
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Upcoming Drive" {...a11yProps(0)} />
                <Tab label="Drive History" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <div>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className="col-md-6 box-1-info">
                                <h1>testing</h1>
                            </div>
                            <div className="col-md-6">
                                <h1>testing</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <div>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className="col-md-6">
                                <h1>testing</h1>
                            </div>
                            <div className="col-md-6">
                                <h1>testing</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </CustomTabPanel>
        </Box>
    </>
  );
}