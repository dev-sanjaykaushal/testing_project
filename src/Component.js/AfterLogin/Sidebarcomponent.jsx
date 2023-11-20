import React, { useState } from "react";
import "../../style.css/AfterLogin/sidebar.css";
import logo01 from "../../img/vehicell-horizontal-logo.png";
import user_img from "../../img/user_img_girl.png";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link, NavLink } from "react-router-dom";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { BsCurrencyRupee, BsFillCarFrontFill } from "react-icons/bs";
import { FaChartPie, FaUserAlt } from "react-icons/fa";
import { FaRightFromBracket } from "react-icons/fa6";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// import { HiMiniArrowRightOnRectangle } from "react-icons/hi";
import { LuPieChart } from "react-icons/lu";
import { RiTeamFill } from "react-icons/ri";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi/";

const Sidebarcomponent = ({ collapsed }) => {
  const [selectedLink, setSelectedLink] = useState(false); // Set the default selected link to 0 for the Home link

  const handleLinkClick = () => {
    setSelectedLink(selectedLink);
  };
  return (
    <>
      <Sidebar
        className={`app sidebarstyle ${collapsed ? "toggled .css-1wvake5:hover" : ""}`}
        collapsed={collapsed}
      >
        <Menu>
          <div className="imglogoside">
            <Link>
              <img src={logo01} alt="Logo" className="imges" />
            </Link>
          </div>

          <div className="profileimg d-flex ">
            <span>
              <img
                src={user_img}
                alt="userImg"
                width={55}
                className={`app sidebarstyle ${
                  collapsed ? "img_expendProfile  " : "user_thumb "
                }`}
              />
            </span>
            <div
              className={`app sidebarstyle ${
                collapsed ? "userInfo_none" : "user_info"
              }`}
            >
              <h5>Hi, Sp</h5>
              <div className="d-flex">
                <Link to={"/editProfile"}>
                  <FaUserAlt />
                </Link>
                <Link to={"/login"}>
                  <FaRightFromBracket />
                </Link>
              </div>
            </div>
          </div>
        </Menu>
        <Menu
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              // only apply styles on first level elements of the tree
              if (level === 0)
                return {
                  color: disabled ? "#f5d9ff" : "#d359ff",
                  backgroundColor: active ? "#eecef9" : undefined,
                };
            },
            toggled: true,
          }}
        >
          <hr />
          <MenuItem
            component={
              <NavLink
                to="/"               
               className="nav-link nav_Link_col"
              />              
            }
            icon={<AiFillHome className="icons89 " />}

            onClick={() => handleLinkClick()}
            className={selectedLink  ? 'active' : ''}           
          >
          <span className={`app side_text sidebarstyle ${collapsed ? "content_list" : ""}`}>Dashboard</span>            
          </MenuItem>

          <SubMenu
            label="Your Vehicle"
            icon={<BsFillCarFrontFill className="icons89" />}
            onClick={() => handleLinkClick()}
            className={selectedLink  ? 'active' : ''}
          >
            <MenuItem
              component={<NavLink to="/addvehical" className="nav_Link_col" />}
              
              onClick={() => handleLinkClick()}
            className={selectedLink  ? 'active' : 'links_voilet'}
            >
              <span  className={`app side_text sidebarstyle ${collapsed ? "css-um1o6k" : ""}`}> Add Your Vehicles</span>
            </MenuItem>
            <MenuItem
              component={<NavLink to="/vehicleList" className="nav_Link_col" />}
              onClick={() => handleLinkClick()}
              className={selectedLink  ? 'active' : 'links_voilet'}
            >
              <span className="conten">Vehicle list</span>
            </MenuItem>
          </SubMenu>
          <SubMenu
            label="Your Trips"
            icon={<FaMapMarkedAlt className="icons89" />}
            onClick={() => handleLinkClick()}
            className={selectedLink  ? 'active' : ''}
          >
            <MenuItem
              component={<NavLink to="/addtrip" className="nav_Link_col" />}
              onClick={() => handleLinkClick()}
            className={selectedLink  ? 'active' : 'links_voilet'}
            >
              <span className="conten">Add Your Trips</span>
            </MenuItem>
            <MenuItem
              component={<NavLink to="/triplist" className="nav_Link_col" />}
              onClick={() => handleLinkClick()}
            className={selectedLink  ? 'active' : 'links_voilet'}
            >
              <span className="conten">Trip list</span>
            </MenuItem>
          </SubMenu>
          <MenuItem component={<NavLink to="/expenses" className="nav_Link_col" />}>
            <BsCurrencyRupee className="icons89" />{" "}
            <span  className={`app side_text sidebarstyle ${collapsed ? "content_list" : "conten"}`}>Your Expenses</span>
          </MenuItem>
          <MenuItem component={<NavLink to="/reports" className="nav_Link_col" />}>
            <FaChartPie className="icons89" />{" "}
            <span  className={`app side_text sidebarstyle ${collapsed ? "content_list" : "conten"}`}>Reports</span>
          </MenuItem>
          <MenuItem component={<NavLink to="/emailtamlets" className="nav_Link_col" />}>
            <MdEmail className="icons89" />{" "}
            <span  className={`app side_text sidebarstyle ${collapsed ? "content_list" : "conten"}`}>Email Templates</span>
          </MenuItem>
          <MenuItem component={<NavLink to="/attendance" className="nav_Link_col" />}>
            <LuPieChart className="icons89" />{" "}
            <span  className={`app side_text sidebarstyle ${collapsed ? "content_list" : "conten"}`}>Mark Attendance</span>
          </MenuItem>
          <MenuItem component={<NavLink to="/teamDashboard" className="nav_Link_col"/>}>
            <RiTeamFill className="icons89" />{" "}
            <span className={`app side_text sidebarstyle ${collapsed ? "content_list" : "conten"}`}>Team Dashboard</span>
          </MenuItem>

          <SubMenu
            label="Setting"
            icon={<AiFillSetting className="icons89 rounded-icon" />}
          >
            <MenuItem
              component={<NavLink to="/editProfile" className="nav_Link_col" />}
              className="links_voilet"
            >
              <span className="conten">Profile Setting</span>
            </MenuItem>
            <MenuItem
              component={<NavLink to="/permisson" className="nav_Link_col"/>}
              className="links_voilet"
            >
              <span className="conten">Roles & Permission</span>
            </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </>
  );
};

export default Sidebarcomponent;
