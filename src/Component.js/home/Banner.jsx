import React from "react";
import "../../style.css/Home/banner.css";
import calculation from "../../img/calculation.webp";
import petrol from "../../img/petrol-pumb.webp";
import toll from "../../img/toll.webp";
import meter from "../../img/car-meter.webp";
import atm from "../../img/atm.webp";
import team from "../../img/team.webp";


const Banner = () => {
  return (
    <>
      <div className="firstpage">
        <div className="container">
          <div className="row align-item-center">
            <div className="col-lg-7 col-md-12">
              <div className="wow">
                <h1>
                  Streamline Your Mileage Tracking with Our Convenient{" "}
                  <span>Mileage Tracker</span> Service
                </h1>
                <p>
                  Our Mileage Tracker service allows you to easily log and
                  organize your business trips, <br /> ensuring accurate and
                  hassle-free mileage reporting. Say goodbye to manual mileage{" "}
                  <br /> tracking and hello to streamlined, efficient mileage
                  management with our service.
                </p>
                <a className="btn" href="#">
                  Get Started With FREE NOW
                </a>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="welcome">
                <ul className="list-icon">
                  <li>
                    <figure>
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16 30C12.26 30 8.745 28.544 6.101 25.899C1.779 21.578 0.752005 15.025 3.547 9.595C3.8 9.104 4.402 8.911 4.89401 9.163C5.38601 9.415 5.57901 10.018 5.32601 10.51C2.93001 15.164 3.81 20.78 7.515 24.485C9.781 26.752 12.794 28 16 28C19.205 28 22.219 26.752 24.485 24.485C26.751 22.218 28 19.205 28 16C28 12.794 26.752 9.781 24.485 7.515C22.218 5.249 19.206 4 16 4C12.794 4 9.781 5.249 7.515 7.515C7.124 7.906 6.492 7.906 6.101 7.515C5.71 7.124 5.71 6.492 6.101 6.101C8.745 3.457 12.26 2 16 2C19.74 2 23.256 3.457 25.899 6.101C28.544 8.745 30 12.26 30 16C30 19.739 28.544 23.255 25.899 25.899C23.256 28.544 19.74 30 16 30Z"
                          fill="#EC3C3F"
                        ></path>
                        <path
                          d="M16 20C14.932 20 13.927 19.584 13.171 18.828C11.611 17.268 11.611 14.731 13.171 13.172C14.428 11.915 20.443 9.533 21.636 9.068C22.007 8.924 22.426 9.012 22.706 9.293C22.986 9.574 23.075 9.993 22.931 10.363C22.466 11.556 20.084 17.572 18.827 18.828C18.073 19.584 17.068 20 16 20ZM20.188 11.813C17.735 12.841 15.124 14.048 14.586 14.586C13.806 15.366 13.806 16.634 14.586 17.414C15.342 18.17 16.659 18.17 17.415 17.414C17.952 16.875 19.16 14.266 20.188 11.813Z"
                          fill="#EC3C3F"
                        ></path>
                      </svg>
                    </figure>
                    <span>Calculate Vehicle your Mileage</span>
                  </li>
                  <li className="list2">
                    <figure>
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.5 25.6667H3.49998C3.19056 25.6667 2.89381 25.5438 2.67502 25.325C2.45623 25.1062 2.33331 24.8094 2.33331 24.5V7C2.33331 5.76232 2.82498 4.57534 3.70015 3.70017C4.57532 2.825 5.7623 2.33333 6.99998 2.33333H14C15.2377 2.33333 16.4246 2.825 17.2998 3.70017C18.175 4.57534 18.6666 5.76232 18.6666 7V18.165C18.6666 18.4744 18.5437 18.7712 18.3249 18.99C18.1061 19.2088 17.8094 19.3317 17.5 19.3317C17.1906 19.3317 16.8938 19.2088 16.675 18.99C16.4562 18.7712 16.3333 18.4744 16.3333 18.165V7C16.3333 6.38116 16.0875 5.78767 15.6499 5.35008C15.2123 4.9125 14.6188 4.66667 14 4.66667H6.99998C6.38114 4.66667 5.78765 4.9125 5.35006 5.35008C4.91248 5.78767 4.66665 6.38116 4.66665 7V23.3333H16.3333V22.8317C16.3333 22.5222 16.4562 22.2255 16.675 22.0067C16.8938 21.7879 17.1906 21.665 17.5 21.665C17.8094 21.665 18.1061 21.7879 18.3249 22.0067C18.5437 22.2255 18.6666 22.5222 18.6666 22.8317V24.5C18.6666 24.8094 18.5437 25.1062 18.3249 25.325C18.1061 25.5438 17.8094 25.6667 17.5 25.6667Z"
                          fill="#EC3C3F"
                        ></path>
                        <path
                          d="M10.5 22.1667C9.57174 22.1667 8.6815 21.7979 8.02513 21.1415C7.36875 20.4852 7 19.5949 7 18.6667C7 15.925 9.40333 13.4517 9.67167 13.1717C9.78012 13.0623 9.90916 12.9755 10.0513 12.9163C10.1935 12.8571 10.346 12.8266 10.5 12.8266C10.654 12.8266 10.8065 12.8571 10.9487 12.9163C11.0908 12.9755 11.2199 13.0623 11.3283 13.1717C11.5967 13.4517 14 15.925 14 18.6667C14 19.5949 13.6313 20.4852 12.9749 21.1415C12.3185 21.7979 11.4283 22.1667 10.5 22.1667ZM10.5 15.82C9.84399 16.6361 9.43873 17.6249 9.33333 18.6667C9.33333 18.9761 9.45625 19.2728 9.67504 19.4916C9.89383 19.7104 10.1906 19.8333 10.5 19.8333C10.8094 19.8333 11.1062 19.7104 11.325 19.4916C11.5437 19.2728 11.6667 18.9761 11.6667 18.6667C11.5613 17.6249 11.156 16.6361 10.5 15.82Z"
                          fill="#EC3C3F"
                        ></path>
                        <path
                          d="M19.8333 19.8333H17.5C17.1906 19.8333 16.8938 19.7104 16.675 19.4916C16.4562 19.2728 16.3333 18.9761 16.3333 18.6667C16.3333 18.3572 16.4562 18.0605 16.675 17.8417C16.8938 17.6229 17.1906 17.5 17.5 17.5H19.8333C20.1427 17.5 20.4395 17.3771 20.6583 17.1583C20.8771 16.9395 21 16.6428 21 16.3333V8.16667C21 7.23841 21.3687 6.34817 22.0251 5.69179C22.6815 5.03542 23.5717 4.66667 24.5 4.66667C24.8094 4.66667 25.1061 4.78958 25.3249 5.00838C25.5437 5.22717 25.6666 5.52391 25.6666 5.83333C25.6666 6.14275 25.5437 6.4395 25.3249 6.65829C25.1061 6.87708 24.8094 7 24.5 7C24.1906 7 23.8938 7.12292 23.675 7.34171C23.4562 7.5605 23.3333 7.85725 23.3333 8.16667V16.3333C23.3333 17.2616 22.9646 18.1518 22.3082 18.8082C21.6518 19.4646 20.7616 19.8333 19.8333 19.8333Z"
                          fill="#EC3C3F"
                        ></path>
                        <path
                          d="M24.5 9.33333H22.1667C21.5223 9.33333 21 9.85567 21 10.5V12.8333C21 13.4777 21.5223 14 22.1667 14H24.5C25.1443 14 25.6667 13.4777 25.6667 12.8333V10.5C25.6667 9.85567 25.1443 9.33333 24.5 9.33333Z"
                          fill="#EC3C3F"
                        ></path>
                        <path
                          d="M12.8333 10.5H8.16667C7.85725 10.5 7.5605 10.3771 7.34171 10.1583C7.12292 9.9395 7 9.64275 7 9.33333C7 9.02391 7.12292 8.72717 7.34171 8.50838C7.5605 8.28958 7.85725 8.16667 8.16667 8.16667H12.8333C13.1428 8.16667 13.4395 8.28958 13.6583 8.50838C13.8771 8.72717 14 9.02391 14 9.33333C14 9.64275 13.8771 9.9395 13.6583 10.1583C13.4395 10.3771 13.1428 10.5 12.8333 10.5Z"
                          fill="#EC3C3F"
                        ></path>
                      </svg>
                    </figure>
                    <span>Check your nearest Petrol Pump</span>
                  </li>
                  <li>
                    <figure>
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1_309)">
                          <path
                            d="M8.125 0.8125L3.25 5.6875V25.1875H22.75V0.8125H8.125Z"
                            stroke="#EC3C3F"
                            stroke-width="2"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M8.125 0.8125V5.6875H3.25"
                            stroke="#EC3C3F"
                            stroke-width="2"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M7.3125 9.75V21.125H19.5"
                            stroke="#EC3C3F"
                            stroke-width="2"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M7.3125 21.125L13 15.4375L15.4375 17.875L19.5 13.8125"
                            stroke="#EC3C3F"
                            stroke-width="2"
                            stroke-linejoin="round"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_1_309">
                            <rect width="26" height="26" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </figure>
                    <span>Download your Mileage and expenses reports</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second section start */}

      <div className="secondSection">
        <div className="container">
          <div className="heading headings01">
            <h2>
              Save time and simplify your life with <span>Vehicle Bells</span>
            </h2>
          </div>

          <div className="solutions1">
            <div className="row align-item-center">
              <div className="col-md-7">
                <div className="fadeinleft fadeInLeft">
                  <h3>Calculate your Petrol, Diesel, CNG expenses.</h3>
                  <p>
                    Calculating your petrol, diesel, or CNG expenses can help
                    you better manage your fuel budget and make informed
                    decisions about your transportation choices. By tracking
                    your fuel consumption and costs, you can identify ways to
                    save money and reduce your environmental impact. There are s
                    everal online calculators and mobile apps available that can
                    help you easily calculate your fuel expenses based on your
                    vehicle type, distance traveled, and fuel type.
                  </p>
                </div>
              </div>
              <div className="col-md-5">
                <figure className="fadeInLeft figure54">
                  <img src={calculation} alt="image" width={360} height={358} />
                </figure>
              </div>
            </div>
          </div>

          <div className="solutions1">
            <div className="row align-item-center">
            <div className="col-md-5">
                <figure className=" wow fadeInLeft figure54">
                  <img src={petrol} alt="image" width={587} height={360} />
                </figure>
              </div>
              <div className="col-md-7">
                <div className="fadeinleft wow fadeInRight">
                  <h3>Check your Nearest Petrol Pump</h3>
                  <p>
                    Checking your nearest petrol pump is essential when you need
                    to refuel your vehicle. You can easily find the nearest
                    petrol pump by using online maps, mobile apps, or navigation
                    systems. Some apps even allow you to compare fuel prices and
                    amenities, such as car wash services and convenience stores,
                    to help you choose the best option for your needs.
                  </p>
                </div>
              </div>
              
            </div>
          </div>

          <div className="solutions1">
            <div className="row align-item-center">
              <div className="col-md-7">
                <div className="fadeinleft fadeInLeft">
                  <h3>Check all Tolls rates in your route</h3>
                  <p>
                    Checking all toll rates in your route is important when
                    planning a trip or a commute. You can find toll rates for
                    your specific route by using online maps, mobile apps, or
                    toll road websites. Some apps even allow you to compare toll
                    rates for different routes and provide real-time traffic
                    updates to help you choose the fastest and most
                    cost-effective route. By checking toll rates beforehand, you
                    can avoid unexpected expenses and plan your trip more
                    efficiently.
                  </p>
                </div>
              </div>
              <div className="col-md-5">
                <figure className="fadeInRight figure54">
                  <img src={toll} alt="image" width={650} height={395} />
                </figure>
              </div>
            </div>
          </div>

          <div className="solutions1">
            <div className="row align-item-center">
              <div className="col-md-5">
                <figure className="figure54">
                  <img src={meter} alt="image" width={580} height={350} />
                </figure>
              </div>
              <div className="col-md-7">
                <div className="fadeinleft">
                  <h3>Check your vehicle Tank Storage</h3>
                  <p>
                    Checking your vehicle tank storage is important to ensure
                    that you have enough fuel for your journey. You can easily
                    check your fuel gauge on the dashboard of your vehicle to
                    determine the current fuel level. Additionally, some
                    vehicles are equipped with an electronic fuel management
                    system that provides more detailed information about fuel
                    consumption and estimated range. By checking your vehicle
                    tank storage before a trip, you can avoid running out of
                    fuel and causing unnecessary delays.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="solutions1">
            <div className="row align-item-center">
              <div className="col-md-7">
                <div className="fadeinleft">
                  <h3>Check all the ATM's in the Route</h3>
                  <p>
                    Checking all the ATMs in your route can help you plan your
                    finances and ensure that you have access to cash when you
                    need it. You can find ATMs in your route by using online
                    maps, mobile apps, or bank websites. Some apps even allow
                    you to filter ATMs by features, such as fee-free
                    withdrawals, wheelchair accessibility, and 24/7
                    availability. By checking ATMs beforehand, you can avoid
                    fees and find the most convenient location for your needs.
                  </p>
                </div>
              </div>
              <div className="col-md-5">
                <figure className="figure54">
                  <img src={atm} alt="image" width={650} height={284} />
                </figure>
              </div>
            </div>
          </div>

          <div className="solutions1">
            <div className="row align-item-center">
              <div className="col-md-5">
                <figure className="figure54">
                  <img src={team} alt="image" width={614} height={365} />
                </figure>
              </div>
              <div className="col-md-7">
                <div className="fadeinleft">
                  <h3>Team Management</h3>
                  <p>
                    Team management is the process of overseeing and
                    coordinating the work of a group of individuals to achieve a
                    common goal. Effective team management involves building a
                    positive team culture, setting clear goals and expectations,
                    delegating tasks and responsibilities, providing feedback
                    and support, and fostering collaboration and communication
                    among team members. By implementing effective team
                    management practices, organizations can improve
                    productivity, employee satisfaction, and overall
                    performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>    


  );
};

export default Banner;
