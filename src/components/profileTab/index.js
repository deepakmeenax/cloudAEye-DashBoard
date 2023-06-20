import { styled } from '@mui/material/styles';
import TabPanel from '@mui/lab/TabPanel';
import {
  Card,
  TextField,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  MenuItem,
  FormControl,
  Select,
  Checkbox,
} from '@mui/material';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import './profileTab.style.css';
import {
  contactDetails,
  jobDetails,
  userDetails,
  userRoles,
  VALUETYPES,
} from '../../utils';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function ProfileTab({ value }) {
  const getValueView = (value) => {
    switch (value?.type) {
      case VALUETYPES.TEXT:
        return (
          <Stack className="card-column">
            <h2 className="detail-value">{value?.text}</h2>
          </Stack>
        );
      case VALUETYPES.PHONE:
        return (
          <Stack className="card-column">
            {/* <ContactPhoneOutlinedIcon /> */}
            <h2 className="detail-value">{value?.text}</h2>
          </Stack>
        );
      case VALUETYPES.LINK:
        return (
          <Stack className="card-column">
            <p className="detail-value">{value?.text}</p>
            <ContentCopyOutlinedIcon
              className="copy"
              onClick={() => navigator.clipboard.writeText(value?.text)}
            />
          </Stack>
        );
      default:
        break;
    }
  };

  return (
    <TabPanel className="tab-panel" value={value}>
      <div className="profile-tab">
        <div className="profile-tab-raw-1">
          <Card className="profile-detail-card">
            <h2 className="card-title">Basic Details</h2>
            {userDetails.map(({ key, value }, index) => (
              <Stack data-testid="userDetail" key={index} className="card-row">
                <Stack className="card-column-key">
                  {key?.icon || 'Icon'}
                  <h2 className="detail-key"> {key?.text}</h2>
                </Stack>
                {getValueView(value)}
              </Stack>
            ))}
          </Card>

          <Card className="profile-detail-card">
            <h2 className="card-title">Contact Details</h2>
            {contactDetails.map(({ key, value }, index) => (
              <Stack key={index} className="card-row">
                <Stack className="card-column-key">
                  {key?.icon || 'Icon'}
                  <h2 className="detail-key"> {key?.text}</h2>
                </Stack>
                {getValueView(value)}
              </Stack>
            ))}
          </Card>

          <Card className="profile-detail-card">
            <h2 className="card-title">Contact Details</h2>
            {jobDetails.map(({ key, value }, index) => (
              <Stack key={index} className="card-row">
                <Stack className="card-column-key">
                  {key?.icon || 'Icon'}
                  <h2 className="detail-key"> {key?.text}</h2>
                </Stack>
                {getValueView(value)}
              </Stack>
            ))}
          </Card>
        </div>

        <div className="profile-tab-raw-2">
          <Card className="profile-detail-card">
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <h2 className="card-title">Company Details</h2>
              <Checkbox defaultChecked />
            </Stack>
            {userDetails.map(({ key, value }, index) => (
              <Stack key={index} className="card-row">
                <Stack className="card-column-key">
                  {key?.icon || 'Icon'}
                  <h2 className="detail-key"> {key?.text}</h2>
                </Stack>
                <Stack className="card-column">
                  <TextField variant="standard" value={value.text} />
                </Stack>
              </Stack>
            ))}
          </Card>
          <Card className="profile-detail-card">
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <h2 className="card-title">User Roles</h2>
              <Checkbox defaultChecked />
            </Stack>

            <Table className="tabel">
              <TableHead className="table-head">
                <TableRow>
                  <TableCell>Group</TableCell>
                  <TableCell align="right">Role</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userRoles.map((row) => (
                  <StyledTableRow key={row.gname}>
                    <TableCell align="left">{row.gname}</TableCell>
                    <TableCell align="right">
                      <FormControl variant="standard" sx={{ minWidth: 70 }}>
                        <Select value={row.role} onChange={() => {}}>
                          <MenuItem value={'User'}>User</MenuItem>
                          <MenuItem value={'Admin'}>Admin</MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      </div>
    </TabPanel>
  );
}
