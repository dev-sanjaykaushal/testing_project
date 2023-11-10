import React from "react";
import "../../style.css/AfterLogin/YourExpenses.css"
import { Link } from "react-router-dom";
import { HiPlus } from "react-icons/hi";

const YourExpenses = () => {
  return (
    <>
      <div className="main_box">
        <div className="mainwrapper">
          <div className="head45 ">
            <h2>All Expenses</h2>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="Dash_block div_add">
                <div className="contents1 d-flex justify-content-between align-items-start">
                  <h4> Expenses list </h4>
                  <Link className="btn small_btn">
                    Yearly Expenses
                  </Link>
                  <select className="form_controls monthsSelet" name="month" id="months" >
                    <option value="date">2023-November</option>
                    <option value="date">2023-Octover</option>
                    <option value="date">2023-September</option>
                  </select>
                  <Link className="btn small_btn">
                    <HiPlus /> Add Expenses
                  </Link>
                </div>
                <div className="head_center expense">
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

export default YourExpenses;
