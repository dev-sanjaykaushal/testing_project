import React from "react";
import "../../style.css/AfterLogin/Dashboard.css";
import { Link } from "react-router-dom";
import { HiPlus } from "react-icons/hi";
import { AiFillCar } from "react-icons/ai";
import { IoMdArrowDropupCircle } from "react-icons/io";
import { BsCurrencyRupee } from "react-icons/bs";

const Dashboard = () => {
  return (
    <>
      <div className="main_box">
        <div className="mainwrapper">
          <div className="head45">
            <h2>Add New Vehicle</h2>
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
                <div className="card_blue bg_green">
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
                <div className="card_blue bg_blue">
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
                <div className="card_blue bg_blue">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
