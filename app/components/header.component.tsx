import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import EventIcon from '@mui/icons-material/Event';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import Typography from "@mui/material/Typography";

const Header = () => (

    <AppBar position="relative">
      <Toolbar>
        <VolunteerActivismIcon sx={{ mr: 0.3 }} fontSize="inherit"/> 
        <Typography variant="h6"
          align="left"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit" noWrap>
          Donate Supplies
        </Typography>
        <Typography variant="h5" 
          align="center"
          sx={{ ml: 2.5, mr: 0.3 }} color="aqua" noWrap>
          Community Art Supply Exchange
        </Typography>
        <EventIcon sx={{ ml: 2.5, mr: 0.3 }} fontSize="inherit" />
        <Typography variant="h6" 
          align="right"
          color="inherit" noWrap>
          Attend Events
        </Typography>
      </Toolbar>
    </AppBar>
  );

export default Header;