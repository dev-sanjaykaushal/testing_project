import React from "react";
import "../../style.css/AfterLogin/profileSetting.css";
import loginLogo from "../../img/logo.webp";
import { validateFormRegister } from "../../utilti/validation";
import { useState } from "react";

const ProfileSetting = () => {
  const [RegformData, setRegformData] = useState({
    name: "",
    lname: "",
    phone: "",
    Cname: "",
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

        setRegformData({
          name: "",
          lname: "",
          phone: "",
          Cname: "",
        });
      } else {
        console.log("Form validation failed");
      }

      return isValid;
    });
  };

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    // Get the selected file
    const file = e.target.files[0];

    // Update the state with the selected file
    setSelectedFile(file);
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
                  <li>Calculate your Petrol, Diesel,CNG expenses.</li>
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
                  <h2>Edit Profile</h2>
                </div>
                <p>You Will Receive Instructions For Edit Profilet</p>
                <form action="#" onSubmit={handleSubmitRigister}>
                  <div className="input_group mb-4">
                    <div>
                      <div className="mb-4 fName inpupadd">
                        <input
                          onChange={handleChange}
                          type="text"
                          placeholder="First Name"
                          name="name"
                          value={RegformData.name}
                        />
                        {errors.name && (
                          <p className="style01">{errors.name}</p>
                        )}
                      </div>
                      <div className="inpupadd lName">
                        <input
                          onChange={handleChange}
                          type="text"
                          placeholder="Last Name"
                          name="lname"
                          value={RegformData.lname}
                        />
                        {errors.lname && (
                          <p className="style01">{errors.lname}</p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="inpupadd input_group mb-4">
                    <input
                      onChange={handleChange}
                      type="text"
                      placeholder="Company Name (Optional)"
                      name="Cname"
                      value={RegformData.Cname}
                    />
                    {errors.Cname && <p className="style01">{errors.Cname}</p>}
                  </div>
                  <div className="inpupadd input_group mb-4">
                    <input
                      onChange={handleChange}
                      type="text"
                      placeholder="Phone Number"
                      name="phone"
                      value={RegformData.phone}
                    />
                    {errors.phone && <p className="style01">{errors.phone}</p>}
                  </div>
                  <div className="inpupadd input_group mb-4">                    
                      <input type="file" onChange={handleFileChange} />
                      {selectedFile && (
                        <p>Selected File: {selectedFile.name}</p>
                      )}
                    
                  </div>
                  <button className="btn" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSetting;
