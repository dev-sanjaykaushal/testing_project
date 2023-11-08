import * as React from 'react';
import "../../style.css/AfterLogin/Menuappbar.css"
import AppBar from '@mui/material/AppBar';
import navimg from "../../img/user_img_girl.png"
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function MenuAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Typography className='ms-auto notifai'>
            <NotificationsIcon/>
          </Typography>
          <Typography className='ms-auto'>
            <select className='form_controls' name="option" id="opti">
                <option value="option">Select Team</option>
                <option value="option">Select Team</option>
            </select>
          </Typography>
          <Button color="inherit"><Link><img src={navimg} alt="sideimg" width={40} height={40}/></Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}