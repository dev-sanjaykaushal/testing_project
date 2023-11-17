import React from "react";
import EmailTamTable from "./EmailTamTable";
import { HiPlus } from "react-icons/hi";
import { Link } from "react-router-dom";


const EmailTamplets = () => {
  return (
    <>
 
      <div className="main_box">
        <div className="mainwrapper">
          <div className="Dash_block div_add">
            <div className="contents1 d-flex justify-content-between align-items-start">
              <h4> Last 3 Month Report </h4>
              <Link className="btn small_btn" to={"/createemail"}>
                <HiPlus /> Create Tamplate
              </Link>
            </div>
            <div className="table_content">
              <EmailTamTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailTamplets;
