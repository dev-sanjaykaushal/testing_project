import * as React from 'react';
import "../../style.css/AfterLogin/Menuappbar.css"
import AppBar from '@mui/material/AppBar';
import navimg from "../../img/user_img_girl.png"
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { CgMenuRight } from 'react-icons/cg';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Link, NavLink } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { FaGauge } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { FaArrowRightFromBracket } from "react-icons/fa6";

export default function MenuAppBar({onClick,collapsed}) {
  
  
  return (
    <>    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
          className={`app ${collapsed?'toggle_expends':'css-hyum1k-MuiToolbar-root'}`}            
          >
           <div className="toggle-button" onClick={onClick}>
             <CgMenuRight />
           </div>            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
          <Typography className='ms-auto notifai'>
            
            <Dropdown as={ButtonGroup}>      

      <Dropdown.Toggle className='toggle_btn58 ' split  ><NotificationsIcon className='image072'/></Dropdown.Toggle>

      <Dropdown.Menu className='noti568'>
        <Dropdown.Item href="#/action-1" className='notific108'>Notifications</Dropdown.Item> 
        <p>No Records Found</p>       
      </Dropdown.Menu>
    </Dropdown>
          </Typography>
          <Typography className='ms-auto'>
            <select className='form_controls' name="option" id="opti">
                <option value="option">Select Team</option>
                <option value="option">Select Team</option>
            </select>
          </Typography>
          
          
          <Dropdown as={ButtonGroup}>
          

      <Dropdown.Toggle className='toggle_btn58 ' split  id="" ><Link><img className='image072' src={navimg} alt="sideimg" width={40} height={40}/></Link></Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item component={<NavLink to="/#" />} className='dropdown_link'> <FaGauge className='gauge' />Go To Team Dashboard</Dropdown.Item>
        <Dropdown.Item className='dropdown_link'><IoMdSettings />Personal Setting</Dropdown.Item>
        <Dropdown.Item className='dropdown_link'><IoMdSettings />Change Password</Dropdown.Item>
        <Dropdown.Item className='dropdown_link'><FaArrowRightFromBracket />Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
       
        </Toolbar>
      </AppBar>
    </Box>

    
    </>

  );
}