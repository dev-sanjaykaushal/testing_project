import React from "react";
import "../../style.css/AfterLogin/Attendance.css";
import { Link } from "react-router-dom";
import { FormControlLabel, Switch, styled } from "@mui/material";


const Attendance = () => {
  const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 61,
    height: 32,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(28px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor:
            theme.palette.mode === "dark" ? "#2ECA45" : "#EC3C3F",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 27,
      height: 27,
    },
    "& .MuiSwitch-track": {
      borderRadius: 36 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));
  return (
    <>
  
      <div className="main_box">
        <div className="mainwrapper">
          <div className="head45 ">
            <h2>Mark Attendance</h2>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="Dash_block div_add">
                <div className="contents1 d-flex justify-content-between align-items-start">
                  <h4> Self-Attendance Tracker </h4>
                </div>
                <div className="attend_btn d-flex mt-3 justify-content-between align-items-start">
                  <Link className="btn small_btn">
                    Request Attendace Approval for previous Date
                  </Link>
                  <span>
                    <FormControlLabel
                      control={<IOSSwitch sx={{ m: 1 }}  />}
                      label="Mark Attendance"
                    />
                  </span>
                </div>{" "}
                <br />
                <hr />
                <div className="contents1 attend_btn d-flex justify-content-between align-items-start">
                  <h4> Attendance List </h4>
                  <Link className="btn small_btn" to={"/teamAttendance"}>Team Attendance List</Link>
                </div>
                <div className="head_center">
                  <h6>There are no records to display</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Attendance;
