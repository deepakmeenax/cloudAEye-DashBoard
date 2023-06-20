import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import TransgenderOutlinedIcon from '@mui/icons-material/TransgenderOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import AttachmentOutlinedIcon from '@mui/icons-material/AttachmentOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';

export const VALUETYPES = {
  TEXT: 'Text',
  PHONE: 'Phone',
  LINK: 'Link',
};

export const userDetails = [
  {
    key: {
      icon: <DnsOutlinedIcon />,
      text: 'First Name',
    },
    value: {
      text: 'John',
      type: VALUETYPES.TEXT,
    },
  },
  {
    key: {
      icon: <DnsOutlinedIcon />,
      text: 'Last Name',
    },
    value: {
      text: 'Smith',
      type: VALUETYPES.TEXT,
    },
  },
  {
    key: {
      icon: <TransgenderOutlinedIcon />,
      text: 'Gender',
    },
    value: {
      text: 'Male',
      type: VALUETYPES.TEXT,
    },
  },
  {
    key: {
      icon: <CakeOutlinedIcon />,
      text: 'Birthday',
    },
    value: {
      text: '06/01/1993',
      type: VALUETYPES.TEXT,
    },
  },
];

export const contactDetails = [
  {
    key: {
      icon: <EmailOutlinedIcon />,
      text: 'Email',
    },
    value: {
      text: 'johnSmith@gmail.com',
      type: VALUETYPES.TEXT,
    },
  },
  {
    key: {
      icon: <PhoneOutlinedIcon />,
      text: 'Phone',
    },
    value: {
      text: '+91 9079140412',
      type: VALUETYPES.PHONE,
    },
  },
  {
    key: {
      icon: <LocationOnOutlinedIcon />,
      text: 'Location',
    },
    value: {
      text: 'Kota, Rajasthan',
      type: VALUETYPES.TEXT,
    },
  },
  {
    key: {
      icon: <LinkedInIcon />,
      text: 'Linkedin',
    },
    value: {
      text: 'https://www.linkedin.com/in/deepdev/',
      type: VALUETYPES.LINK,
    },
  },
];

export const jobDetails = [
  {
    key: {
      icon: <WorkOutlineOutlinedIcon />,
      text: 'Job Title',
    },
    value: {
      text: 'VP of Engineering',
      type: VALUETYPES.TEXT,
    },
  },
  {
    key: {
      icon: <AccountTreeOutlinedIcon />,
      text: 'Depratment',
    },
    value: {
      text: 'Engineering',
      type: VALUETYPES.TEXT,
    },
  },
];

export const companyDetails = [
  {
    key: {
      icon: <DnsOutlinedIcon />,
      text: 'Company Name',
    },
    value: {
      text: 'CloudAEye',
      type: VALUETYPES.TEXT,
    },
  },
  {
    key: {
      icon: <AttachmentOutlinedIcon />,
      text: 'Website',
    },
    value: {
      text: 'www.cloudaeye.com',
      type: VALUETYPES.TEXT,
    },
  },
  {
    key: {
      icon: <PhoneOutlinedIcon />,
      text: 'Phone',
    },
    value: {
      text: '+91 9079140412',
      type: VALUETYPES.PHONE,
    },
  },
  {
    key: {
      icon: <GroupsOutlinedIcon />,
      text: 'Company Size',
    },
    value: {
      text: 'https://www.linkedin.com/in/deepdev/',
      type: VALUETYPES.LINK,
    },
  },
  {
    key: {
      icon: <ApartmentOutlinedIcon />,
      text: 'Industry',
    },
    value: {
      text: 'https://www.linkedin.com/in/deepdev/',
      type: VALUETYPES.LINK,
    },
  },
];

export const userRoles = [
  {
    gname: 'Tenant Admin',
    role: 'Admin',
  },
  {
    gname: 'Logs',
    role: 'User',
  },
  {
    gname: 'Metrics',
    role: 'User',
  },
  {
    gname: 'Dashboards',
    role: 'User',
  },
  {
    gname: 'Traces',
    role: 'User',
  },
  {
    gname: 'Billing',
    role: 'User',
  },
];
