import React,{ useState } from 'react'
import "../../style.css/Login/Register.css"
import { Link } from "react-router-dom";
import Google from "../../img/Google__G__Logo.svg.png";
import loginLogo from "../../img/logo.webp";
import { validateFormRegister } from '../../utilti/validation';



const RegisterComponent = () => {
  const [RegformData, setRegformData] = useState({
    name: "",
    lname:"",
    email: "",
    Cname: "",
    password: ""
  });
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  

  const handleChange = (e) => {    
    const { name, value } = e.target;
    setRegformData({ ...RegformData, [name]: value });    
  };

  const handleSubmitRigister = (e) => {
    e.preventDefault();
    const newErrors = validateFormRegister(RegformData);
    setErrors(newErrors);
  
    // Use the updated value of isFormValid from setIsFormValid callback
    setIsFormValid((prevIsFormValid) => {
      const isValid = Object.keys(newErrors).length === 0;
      if (isValid) {
        console.log("Form submitted");
  
        setRegformData(
          {
            name: "",
            lname:"",
            email: "",
            Cname: "",
            password: ""
          }
        )
      } else {
        console.log("Form validation failed");
      }
      
      return isValid;
    });
  };


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
                  <h2>Register</h2>
                </div>
                <p>Create Your Account</p>
                <form action="#" onSubmit={handleSubmitRigister}>
                  <div className="input_group mb-4">
                  <div className="row">
                    <div className="col-lg-6 fName">
                    <input onChange={handleChange} type="text" placeholder="First Name" name="name" value={RegformData.name} />
                    {errors.name && <p className="style01">{errors.name}</p>}
                    </div>
                    <div className="col-lg-6 lName">
                    <input onChange={handleChange} type="text" placeholder="Last Name" name="lname" value={RegformData.lname} />
                    {errors.lname && <p className="style01">{errors.lname}</p>}
                    </div>
                  </div>            
                    
                  </div>
                  <div className="input_group mb-4">
                    <input onChange={handleChange} type="text" placeholder="Company Name (Optional)" name="Cname" value={RegformData.Cname} />
                    {errors.Cname && <p className="style01">{errors.Cname}</p>}
                  </div>
                  <div className="input_group mb-4">
                    <input onChange={handleChange} type="text" placeholder="Email" name="email" value={RegformData.email} />
                    {errors.email && <p className="style01">{errors.email}</p>}
                  </div>
                  <div className="input_group mb-4">
                    <input onChange={handleChange} type="password" name="password" placeholder="password" value={RegformData.password} />
                    {errors.password && <p className="style01">{errors.password}</p>}
                  </div>
                 
                  <button className="btn" type='submit'>Register</button>
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
                    Sign Up with google
                  </button>
                  <Link className="btn">Already Have An  Account? Sign In</Link>
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
  )
}

export default RegisterComponent
