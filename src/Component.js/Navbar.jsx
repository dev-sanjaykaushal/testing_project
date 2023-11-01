import React from "react";
import "../style.css/Navbar.css";
import { NavLink } from "react-router-dom";
import navimg from "../img/logo.webp";
import { Link } from "react-router-dom";


const Navbar = () => {
  
  return (
    <>


<nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div className="container">
    <a className="navbar-brand" href="#">
    <img src={navimg} alt="navimage" />
    </a>
    <button
      className="navbar-toggler shadow-none border-0"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasNavbar"
      aria-controls="offcanvasNavbar"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div
      className="offcanvas offcanvas-end "
      tabIndex={-1}
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
         
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">          
          <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/about"}>
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/contact"}>Contact Us</NavLink>
                
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/pricing"}>
                  Pricing
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/resources"}>
                  Resources
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/login"}>
                  Login
                </NavLink>
              </li>
              <li className="nav-item borders">
                <NavLink className="nav-link btn" to={"/"}>
                  Register Now
                </NavLink>
              </li>          
        </ul>        
      </div>
    </div>
  </div>
</nav>





      {/* <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={navimg} alt="navimage" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"about"}>
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"contact"}>
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"pricing"}>
                  Pricing
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"resources"}>
                  Resources
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"login"}>
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link btn" to={"/"}>
                  Register Now
                </NavLink>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>


 */}

     
    </>
  );
};

export default Navbar;
