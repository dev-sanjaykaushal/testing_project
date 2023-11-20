import React from "react";
import "../../style.css/AfterLogin/Dashboard.css";
import { Link } from "react-router-dom";
import { HiPlus } from "react-icons/hi";
import { AiFillCar } from "react-icons/ai";
import { IoMdArrowDropupCircle } from "react-icons/io";
import { BsCurrencyRupee } from "react-icons/bs";
import { FaCarSide } from "react-icons/fa";
import { FaMapLocationDot, FaMoneyBillTransfer } from "react-icons/fa6";
import { BiSolidPieChartAlt2 } from "react-icons/bi";


const Dashboard = ({collapsed}) => {
  return (
    <>
    
      <div className={`app sidebarstyle ${collapsed ? 'maxwidth_content':'main_box'}`}>
        <div className="mainwrapper">
          <div className="head45">
            <h2>Dashboard</h2>
          </div>
          <div className="dachboard_list">
            <div className="row">
              <div className="col-lg-4">
                <div className="card_blue bg_blue">
                  <div className="card_header9">
                    <h5>TOTAL TRIPS</h5>
                    <Link>
                      <HiPlus />
                    </Link>
                  </div>
                  <div className="card_content">
                    <div className="text8">2000 mi</div>
                    <div className="card_icon">
                      <AiFillCar />
                    </div>
                  </div>
                  <div className="card_footer d-flex">
                    <div className="persentages">
                      <IoMdArrowDropupCircle />
                      <span>20%</span>
                    </div>
                    <span>Compared to last week</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card_blue bg_orange">
                  <div className="card_header9">
                    <h5>TOTAL TRIPS</h5>
                    <Link>
                      <HiPlus />
                    </Link>
                  </div>
                  <div className="card_content">
                    <div className="text8"> 5000 mi</div>
                    <div className="card_icon">
                      <AiFillCar />
                    </div>
                  </div>
                  <div className="card_footer d-flex">
                    <div className="persentages">
                      <IoMdArrowDropupCircle />
                      <span>20%</span>
                    </div>
                    <span>Compared to last week</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card_blue bg_green">
                  <div className="card_header9">
                    <h5>TOTAL TRIPS</h5>
                    <Link>
                      <HiPlus />
                    </Link>
                  </div>
                  <div className="card_content">
                    <div className="text8">1000 mi</div>
                    <div className="card_icon">
                      <AiFillCar />
                    </div>
                  </div>
                  <div className="card_footer d-flex">
                    <div className="persentages">
                      <IoMdArrowDropupCircle />
                      <span>20%</span>
                    </div>
                    <span>Compared to last week</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="card_blue bg_green">
                  <div className="card_header9">
                    <h5>HIGHEST PETROL PRICE</h5>
                  </div>
                  <div className="card_content">
                    <h5>Telangana</h5>
                    <div className="text8">
                      <BsCurrencyRupee /> 110.22
                    </div>
                    (Per Litre)
                    <div className="card_icon">
                      <BsCurrencyRupee />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card_blue bg_orange">
                  <div className="card_header9">
                    <h5>HIGHEST PETROL PRICE</h5>
                  </div>
                  <div className="card_content">
                    <h5>Telangana</h5>
                    <div className="text8">
                      <BsCurrencyRupee /> 98.33
                    </div>
                    (Per Litre)
                    <div className="card_icon">
                      <BsCurrencyRupee />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card_blue bg_blue">
                  <div className="card_header9">
                    <h5>HIGHEST PETROL PRICE</h5>
                  </div>
                  <div className="card_content">
                    <h5>Maharashtra</h5>
                    <div className="text8">
                      <BsCurrencyRupee />
                      18.79
                    </div>
                    (Per Litre)
                    <div className="card_icon">
                      <BsCurrencyRupee />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card_blue bg_green">
                  <div className="card_header9">
                    <h5>HIGHEST PETROL PRICE</h5>
                  </div>
                  <div className="card_content">
                    <h5>Dadra and Nagar Haveli</h5>
                    <div className="text8">
                      <BsCurrencyRupee /> 1117.5
                    </div>
                    (Per Litre)
                    <div className="card_icon">
                      <BsCurrencyRupee />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card_blue bg_green">
                  <div className="card_header9">
                    <h5>HIGHEST PETROL PRICE</h5>
                  </div>
                  <div className="card_content">
                    <h5>Andaman and Nicobar Islands</h5>
                    <div className="text8">
                      <BsCurrencyRupee /> 84.1
                    </div>
                    (Per Litre)
                    <div className="card_icon">
                      <BsCurrencyRupee />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card_blue bg_orange">
                  <div className="card_header9">
                    <h5>HIGHEST PETROL PRICE</h5>
                  </div>
                  <div className="card_content">
                    <h5>Andaman and Nicobar Islands</h5>
                    <div className="text8">
                      <BsCurrencyRupee /> 79.74
                    </div>
                    (Per Litre)
                    <div className="card_icon">
                      <BsCurrencyRupee />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card_blue bg_blue">
                  <div className="card_header9">
                    <h5>HIGHEST PETROL PRICE</h5>
                  </div>
                  <div className="card_content">
                    <h5>Karnataka</h5>
                    <div className="text8">
                      <BsCurrencyRupee /> 3.11
                    </div>
                    (Per Litre)
                    <div className="card_icon">
                      <BsCurrencyRupee />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card_blue bg_green">
                  <div className="card_header9">
                    <h5>HIGHEST PETROL PRICE</h5>
                  </div>
                  <div className="card_content">
                    <h5>Delhi</h5>
                    <div className="text8">
                      <BsCurrencyRupee /> 324.17
                    </div>
                    (Per Litre)
                    <div className="card_icon">
                      <BsCurrencyRupee />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="Dash_block">
                <div className="contents1">
                  <h4>Quick Links</h4>
                </div>
                <div className="dash_icons">
                  <ul className="d-flex flex-wrap">
                    <li>
                      <Link to={"/addvehical"}>
                        <span>
                          <FaCarSide />
                        </span>
                        <strong>Add Vehicle</strong>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/addtrip"}>
                        <span>
                          <FaMapLocationDot />
                        </span>
                        <strong>Add Trip</strong>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/expenses"}>
                        <span>
                          <FaMoneyBillTransfer />
                        </span>
                        <strong>Add Expense</strong>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/reports"}>
                        <span>
                          <BiSolidPieChartAlt2 />
                        </span>
                        <strong>Veiw Report</strong>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="Dash_block">
                <div className="contents1">
                  <h4>Your Trips</h4>
                </div>
                <div className="head_center">
                  <h6>There are no records to display</h6>
                </div>
                <div className="div_button">
                  <Link className="btn mt-3" to={"/addtrip"}><HiPlus/> Add Trip</Link>                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
