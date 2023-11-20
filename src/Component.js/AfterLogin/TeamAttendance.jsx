import React from 'react'
import { Link } from "react-router-dom";
import { HiPlus } from "react-icons/hi";

const TeamAttendance = ({collapsed}) => {
  return (
    <>
      <div className={`app sidebarstyle ${collapsed ? 'maxwidth_content':'main_box'}`}>
        <div className="mainwrapper">
          <div className="head45 ">
            <h2>Team Attendance</h2>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="Dash_block div_add">
                <div className="contents1 d-flex justify-content-between align-items-start">
                  <h4> Pending Attendance Request </h4>                  
                </div>
                <div className="head_center mb-5">
                  <h6>There are no records to display</h6>
                </div>
                <hr />
                <div className="contents1 d-flex justify-content-between align-items-start">
                  <h4> Attendance List </h4>                  
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
  )
}

export default TeamAttendance
