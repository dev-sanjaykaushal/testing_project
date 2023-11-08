
import React, { useState } from "react";
import "../../style.css/AfterLogin/sidebar.css";
import logo01 from "../../img/vehicell-horizontal-logo.png";
import user_img from "../../img/user_img_girl.png";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { BsCurrencyRupee, BsFillCarFrontFill } from "react-icons/bs";
import { FaChartPie,FaUserAlt} from "react-icons/fa";
import {FaRightFromBracket} from "react-icons/fa6"
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// import { HiMiniArrowRightOnRectangle } from "react-icons/hi";
import { LuPieChart } from "react-icons/lu";
import { RiTeamFill } from "react-icons/ri";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi/";


const Sidebarcomponent = () => {

  // const { collapseSidebar, rtl } = useProSidebar();

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
    {/* <MenuAppBar/>      */}
    
      <Sidebar
        className={`app sidebarstyle ${toggled ? "toggled" : ""}`}
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
      >
        <Menu>
          <div className="imglogoside">
            <img src={logo01} alt="Logo" className="imges" />
          </div>

          <div className="profileimg d-flex ">
            <span className="user_thumb">
              <img src={user_img} alt="userImg" width={55} />
            </span>            
              <div class="user_info">
                <h5>Hi, Sp</h5>
                <div className="d-flex">
                  <Link>
                    <FaUserAlt/>
                  </Link>
                  <Link>
                   <FaRightFromBracket/>
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
          {collapsed ? (
            <MenuItem
              icon={<FiChevronsRight />}
              onClick={handleCollapsedChange}
            ></MenuItem>
          ) : (
            <MenuItem
              suffix={<FiChevronsLeft />}
              onClick={handleCollapsedChange}
            ></MenuItem>
          )}
          <hr />
          <MenuItem className="active" component={<Link to="/dashbord" />} icon={<AiFillHome  className="icons89 active"/>} >
            {" "}
            Dashboard
          </MenuItem>
          <MenuItem component={<Link to="/addvehical" />}>
            {" "}
            <BsFillCarFrontFill className="icons89" /> <span className="conten">Your Vehicles</span> 
          </MenuItem>
          <MenuItem component={<Link to="/addtrip" />}>
            <FaMapMarkedAlt className="icons89" /><span className="conten">Your Trips</span> 
          </MenuItem>
          <MenuItem component={<Link to="/e-commerce" />}>
            <BsCurrencyRupee className="icons89"/> <span className="conten">Your Expenses</span> 
          </MenuItem>
          <MenuItem component={<Link to="/e-commerce" />}>
            <FaChartPie className="icons89"/> <span className="conten">Reports</span> 
          </MenuItem>
          <MenuItem component={<Link to="/e-commerce" />}>
            <MdEmail className="icons89"/> <span className="conten">Email Templates</span> 
          </MenuItem>
          <MenuItem component={<Link to="/e-commerce" />}>
            <LuPieChart className="icons89"/> <span className="conten">Mark Attendance</span> 
          </MenuItem>
          <MenuItem component={<Link to="/e-commerce" />}>
            <RiTeamFill className="icons89"/> <span className="conten">Team Dashboard</span> 
          </MenuItem>
          <MenuItem component={<Link to="/e-commerce" />}>
            <AiFillSetting className="icons89"/> <span className="conten">Setting</span> 
          </MenuItem>
        </Menu>
      </Sidebar>
    </>
  )
}

export default Sidebarcomponent
