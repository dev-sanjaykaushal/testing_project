import React from "react";
import "../../style.css/Login/Login.css";
import { Link } from "react-router-dom";
import Google from "../../img/Google__G__Logo.svg.png";
import loginLogo from "../../img/logo.webp";

const LoginComponent = () => {
  return (
    <>
      <div className="login_wrap">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 right_card alignt-item-center pr-0">
              <div className="solution_area01">
                <figure>
                  <img src={loginLogo} alt="card-img" width={190} height={90} />
                </figure>
                <ul>
                  <li>Calculate your Petrol, Diesel, CNG expenses.</li>
                  <li>Check your Nearest Petrol Pump</li>
                  <li>Check all Tolls rates in your route</li>
                  <li>Check your vehicle Tank Storage</li>
                  <li>Check all the ATM's in the Route</li>
                  <li>Team Management</li>
                  <li>Download Your Track Reports as you want</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 left_card">
              <div className="googleLogin">
                <div className="loginHead">
                  <h2>Login</h2>
                </div>
                <p>Welcome Back! Please Login To Your Account.</p>
                <form action="#">
                  <div className="input_group mb-4">
                    <input type="text" placeholder="Email" name="Email" />
                  </div>
                  <div className="input_group mb-4">
                    <input type="text" name="password" placeholder="Password" />
                  </div>
                  <div className="row justify-between checkRow">
                    <div className="col-lg-6">
                      <div className="inputCheck">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label htmlFor="">Remember Me</label>
                      </div>
                    </div>
                    <div className="col-lg-6 text-end forgat">
                      <Link>Forgot Password?</Link>
                    </div>
                  </div>
                  <button className="btn">Login</button>
                </form>
                <div className="bottomLine">
                  <span>OR</span>
                </div>
                <div className="signupButtons">
                  <button className="btn">
                    <img
                      src={Google}
                      alt="Google_Logo"
                      width={22}
                      height={22}
                    />{" "}
                    Sign in with google
                  </button>
                  <Link className="btn">No Account? Create One</Link>
                </div>
                <div className="provacyPage">
                  <p>
                    By Signing In, You Agree To Our 
                    <Link to={"/terms"}>{"  "} Terms And Conditions</Link> And Acknowledge That You
                    Have Read Our <Link to={"/privacy"}>{"  "} Privacy Policy.</Link>
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

export default LoginComponent;
