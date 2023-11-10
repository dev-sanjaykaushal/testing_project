import React from "react";
import "../../style.css/AfterLogin/VehicleList.css"
import { Link } from "react-router-dom";
import { HiPlus } from "react-icons/hi";

const VehicleList = () => {
  return (
    <>
      <div className="main_box">
        <div className="mainwrapper">
          <div className="head45 ">
            <h2>Add Trip</h2>
            
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="Dash_block div_add">
                <div className="contents1 d-flex justify-content-between align-items-start">
                  <h4> Vehicles list </h4>
                  <Link className="btn small_btn">
                    <HiPlus /> Add Vehicle
                 </Link>
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

export default VehicleList;
