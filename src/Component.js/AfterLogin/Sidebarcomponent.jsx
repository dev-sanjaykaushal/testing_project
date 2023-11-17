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

const Sidebarcomponent = () => {
  const [collapsed, setCollapsed] = useState(false);

  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };
   const handleToggleSidebar = (value) => {
    setToggled(value);
  };
  return (
    <>
      <Sidebar
        className={`app sidebarstyle ${toggled ? "toggled" : ""}`}
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
      >
        <Menu>
          <div className="imglogoside">
          <Link >
            <img src={logo01} alt="Logo" className="imges" />
          </Link>
          </div>

          <div className="profileimg d-flex ">
            <span className="user_thumb">
              <img src={user_img} alt="userImg" width={55} />
            </span>
            <div class="user_info">
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
          {/* {collapsed ? (
            <MenuItem
              icon={<FiChevronsRight />}
              onClick={handleCollapsedChange}
            ></MenuItem>
          ) : (
            <MenuItem
              suffix={<FiChevronsLeft />}
              onClick={handleCollapsedChange}
            ></MenuItem>
          )} */}
          <hr />
          <MenuItem
            component={
              <NavLink
                to="/dashbord"
                className="nav-link"
                activeClassName="active-nav-link"
              />
            }
            icon={<AiFillHome className="icons89 " />}
          >
            Dashboard
          </MenuItem>

          <SubMenu
            label="Your Vehicle"
            icon={<BsFillCarFrontFill className="icons89" />}
          >
            <MenuItem
              component={<NavLink to="/addvehical" />}
              className="links_voilet"
            >
              <span className="conten"> Add Your Vehicles</span>
            </MenuItem>
            <MenuItem
              component={<NavLink to="/vehicleList" />}
              className="links_voilet"
            >
              <span className="conten">Vehicle list</span>
            </MenuItem>
          </SubMenu>
          <SubMenu
            label="Your Trips"
            icon={<FaMapMarkedAlt className="icons89" />}
          >
            <MenuItem
              component={<NavLink to="/addtrip" />}
              className="links_voilet"
            >
              <span className="conten">Add Your Trips</span>
            </MenuItem>
            <MenuItem
              component={<NavLink to="/triplist" />}
              className="links_voilet"
            >
              <span className="conten">Trip list</span>
            </MenuItem>
          </SubMenu>
          <MenuItem component={<NavLink to="/expenses" />}>
            <BsCurrencyRupee className="icons89" />{" "}
            <span className="conten">Your Expenses</span>
          </MenuItem>
          <MenuItem component={<NavLink to="/reports" />}>
            <FaChartPie className="icons89" />{" "}
            <span className="conten">Reports</span>
          </MenuItem>
          <MenuItem component={<NavLink to="/emailtamlets" />}>
            <MdEmail className="icons89" />{" "}
            <span className="conten">Email Templates</span>
          </MenuItem>
          <MenuItem component={<NavLink to="/attendance" />}>
            <LuPieChart className="icons89" />{" "}
            <span className="conten">Mark Attendance</span>
          </MenuItem>
          <MenuItem component={<NavLink to="/teamDashboard" />}>
            <RiTeamFill className="icons89" />{" "}
            <span className="conten">Team Dashboard</span>
          </MenuItem>

          <SubMenu
            label="Setting"
            icon={<AiFillSetting className="icons89 rounded-icon" />}
          >
            <MenuItem
              component={<NavLink to="/editProfile" />}
              className="links_voilet"
            >
              <span className="conten">Profile Setting</span>
            </MenuItem>
            <MenuItem
              component={<NavLink to="/permisson" />}
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
