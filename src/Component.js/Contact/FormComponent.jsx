import React, {  useState } from "react";
import "../../style.css/Contact/Form.css";
import { BsFillFileEarmarkEaselFill } from "react-icons/bs";
import {  validateForm } from "../../utilti/validation";


const FormComponent = () => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    phone: "",
    massage: ""
  });
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  

  const handleChangeForm = (e) => {

  
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);
  
    // Use the updated value of isFormValid from setIsFormValid callback
    setIsFormValid((prevIsFormValid) => {
      const isValid = Object.keys(newErrors).length === 0;
      if (isValid) {
        console.log("Form submitted");
  
        setformData({
          name: "",
          email: "",
          phone: "",
          massage: ""
        });
      } else {
        console.log("Form validation failed");
      }
      
      return isValid;
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newErrors = validateForm(formData); // Validate the form using the utility function
  //   setErrors(newErrors);
  //   setIsFormValid(Object.keys(newErrors).length === 0);

  //   if (isFormValid) {
  //     console.log("Form submitted");

  //     setformData(
  //       {
  //         name: "",
  //         email: "",
  //         phone: "",
  //         massage: ""
  //       }
  //     )      
  //     // You can send data to an API or perform any other action here
  //   } else {
  //     console.log("Form validation failed");
  //   }
  // };

  return (
    <>
      <div className="main_wrapper">
        <div className="wrapper">
          <div className="row wrap">
            <div className="col-lg-6">
              <div className="form">
                <form  className="mb-5" onSubmit={handleSubmit}>
                  <div className="name_group">
                    <label htmlFor="">Name:</label>
                    <div className="inputs">
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChangeForm}
                        placeholder="Name"
                        type="text"
                      />
                      {errors.name && <p className="style01">{errors.name}</p>}
                    </div>
                  </div>
                  <div className="name_group">
                    <label htmlFor="">Email:</label>
                    <div className="inputs">
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleChangeForm}
                        placeholder="Email"
                        type="text"
                      />
                      {errors.email && <p className="style01">{errors.email}</p>}
                    </div>
                  </div>
                  <div className="name_group">
                    <label htmlFor="">Phone:</label>
                    <div className="inputs">
                      <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChangeForm}
                        placeholder="Phone"
                        type="text"
                      />
                      {errors.phone && <p className="style01">{errors.phone}</p>}
                    </div>
                  </div>
                  <div className="name_group">
                    <label htmlFor="">Massage:</label>
                    <div className="inputs">
                      <input
                        name="massage"
                        value={formData.massage}
                        onChange={handleChangeForm}
                        placeholder="Massage"
                        type="text"
                      />
                      {errors.massage && <p className="style01">{errors.massage}</p>}
                    </div>
                  </div>
                  <div >
                    <button className="btn" type="submit">
                      <BsFillFileEarmarkEaselFill /> SAVE
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.89797036338!2d77.04417242604603!3d28.527554409017824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1698836043693!5m2!1sen!2sin"
                width={600}
                height={500}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormComponent;
