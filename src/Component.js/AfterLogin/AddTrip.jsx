import React from "react";
import "../../style.css/AfterLogin/AddTrip.css";
import { validateForm } from "../../utilti/validation";
import { SlCalender } from "react-icons/sl";
import { BiSolidMap } from "react-icons/bi";
import { AiFillCar, AiFillStar } from "react-icons/ai";
import { BsFillTagFill } from "react-icons/bs";
import { FaNotesMedical } from "react-icons/fa";
import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const AddTrip = () => {
  const [startDate, setStartDate] = useState(new Date());

  const [formData, setformData] = useState({
    name: "",
    email: "",
    phone: "",
    massage: "",
  });
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData); // Validate the form using the utility function
    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);

    if (isFormValid) {
      console.log("Form submitted");

      setformData({
        name: "",
        email: "",
        phone: "",
        massage: "",
      });
      // You can send data to an API or perform any other action here
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <>
      <div className="main_box">        
          <div className="mainwrapper">
            <div className="container">
              <div className="head45">
                <h2>Add Trip</h2>
              </div>
              <div className="newTrip">
                <div className="contents1">
                  <h4>Trip Information</h4>
                </div>
                <div className="row mb-5">
                  <div className="col-lg-6">
                    <div className="form">
                      <form className="mb-5" onSubmit={handleSubmit}>
                        <div className="row double">
                          <div className="col-lg-6 form_group">
                            <label htmlFor="">Trip Start Date</label>
                            <InputGroup className="mb-3">
                              <InputGroup.Text id="basic-addon1">
                                <SlCalender />
                              </InputGroup.Text>                              
                              <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                              />
                            </InputGroup>
                          </div>
                          <div className="col-lg-6 form_group">
                            <label htmlFor="">Trip End Date</label>
                            <InputGroup className="mb-3">
                              <InputGroup.Text id="basic-addon1">
                                <SlCalender />
                              </InputGroup.Text>                            
                              <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                              />
                            </InputGroup>
                          </div>
                        </div>
                        <div className="name_group form_group">
                          <label htmlFor="">Form:</label>
                          <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">
                              <BiSolidMap />
                            </InputGroup.Text>
                            <Form.Control
                              placeholder="Search for start Adress"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </InputGroup>
                        </div>
                        <div className="name_group form_group">
                          <label htmlFor="">End:</label>
                          <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">
                              <BiSolidMap />
                            </InputGroup.Text>
                            <Form.Control
                              placeholder="Search for End Adress"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </InputGroup>
                        </div>
                        <div className="name_group form_group">
                          <label htmlFor="">Choose Vehicle:</label>
                          <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">
                              <AiFillCar />
                            </InputGroup.Text>
                            <Form.Control
                              placeholder="Select Vehicle"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </InputGroup>
                        </div>
                        <div className="name_group form_group">
                          <label htmlFor="">Trip Type:</label>
                          <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">
                              <AiFillStar />
                            </InputGroup.Text>
                            <Form.Control
                              placeholder="Select a trip type"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </InputGroup>
                        </div>
                        <div className="name_group form_group">
                          <label htmlFor="">Note:</label>
                          <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">
                              <FaNotesMedical />
                            </InputGroup.Text>
                            <Form.Control
                              placeholder="Note"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </InputGroup>
                        </div>
                        <div className="name_group form_group">
                          <label htmlFor="">Tags:</label>
                          <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">
                              <BsFillTagFill />
                            </InputGroup.Text>
                            <Form.Control
                              placeholder="Tags"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </InputGroup>
                        </div>
                        <div className="check">
                          <label htmlFor="#" className="checkbox">
                            <Form.Check
                              aria-label="option 1"
                              className="cheks1"
                            />{" "}
                            <span>Round Trip</span>
                          </label>
                        </div>
                        <div>
                          <button className="btn" type="submit">
                            SAVE
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 maping">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.89797036338!2d77.04417242604603!3d28.527554409017824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1698836043693!5m2!1sen!2sin"
                      width={600}
                      height={450}
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      className="iframe01"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      </div>
    </>
  );
};

export default AddTrip;
