import React from "react";
import "../../style.css/AfterLogin/Reports.css";

import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaFileExport } from "react-icons/fa";
import { Link } from "react-router-dom";


const Reports = () => {
  return (
    <>
   
      <div className="main_box">
        <div className="mainwrapper">
          <div className="head45 ">
            <h2>Your Reports</h2>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="Dash_block div_add">
                <div className="contents1 d-flex justify-content-between align-items-start">
                  <h4> Last 3 Month Report </h4>
                </div>

                <div className="report_card">
                  <div className="repots_card01">
                    <div className="report_item">
                      <strong>0</strong>
                      <span>Total Trips</span>
                    </div>
                    <div className="report_item report_item21">
                      <strong>0</strong>
                      <span>Total KM</span>
                    </div>
                    <div className="report_item report_item21">
                      <strong>
                        <FaIndianRupeeSign /> 0
                      </strong>{" "}
                      <span>Total Expenses</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="row">
            <div className="col-lg-12"> */}
              <div className="Dash_block div_add">
                <div className="contents1 d-flex justify-content-between align-items-start">
                  <h4>Last 3 Month Report list</h4>
                  <Link className="btn small_btn">
                    <FaFileExport /> Yearly Expenses
                  </Link>
                </div>
                <div className="table_content">
                    <table>
                        <thead>
                            <tr>
                                <th>Trip Start Date</th>
                                <th>Trip End Date</th>
                                <th>Name</th>
                                <th>Tripe Type</th>
                                <th>Trip Description</th>
                                <th>Distnace</th>
                                <th>Tripe Rate</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
              </div>
            {/* </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Reports;
