import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Avatar, Stack } from '@mui/material';
import logo from '../../logo.svg';
import './profile.style.css';
import ProfileTab from '../../components/profileTab';
import SecurityTab from '../../components/securityTab';

export default function Profile() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="profile-page">
      <div className="top-bar">
        <h2>{`Home > Users > John Smith`}</h2>
        <AccountCircleOutlinedIcon />
      </div>
      <Stack direction="row" spacing={2} alignItems="center" marginBottom={2}>
        <Avatar alt="Remy Sharp" src={logo} />
        <Stack direction="column">
          <h2 className="user-details">John Smith</h2>
          <h2 className="user-sub-details"> VP of Engineer / Engineer </h2>
        </Stack>
      </Stack>

      <TabContext value={value}>
        <Box>
          <TabList onChange={handleChange}>
            <Tab
              data-testid="profileTab"
              className="tab"
              label="Profile"
              value="1"
            />
            <Tab
              data-testid="securityTab"
              className="tab"
              label="Security"
              value="2"
            />
          </TabList>
        </Box>
        <ProfileTab value="1" />
        <SecurityTab value="2" />
      </TabContext>

      <h2 data-testid="tabValue" className="hidden">
        {value}
      </h2>
    </div>
  );
}
