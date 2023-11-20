
import React from "react";
import Form from "react-bootstrap/Form";
import "../../style.css/AfterLogin/AddVehicle.css"


const AddYourVehicle = ({collapsed}) => {
  return (
    <>
   
      <div className={`app sidebarstyle ${collapsed ? 'maxwidth_content':'main_box'}`}>
        <div className="mainwrapper">
          <div className="head45">
            <h2>Add New Vehicle</h2>
          </div>
          <div className="newTrip">
            <div className="contents1">
              <h4>Vehicle Information</h4>
            </div>
            <div className="form">
              <form className="mb-5">
                <div className="name_group form_group">
                  <label htmlFor="">Vehicle Type</label>
                  <select className="form_controls50" name="option" id="opti">
                    <option value="Motercycle">Motercycle</option>
                    <option value="Scooty">Scooty</option>
                    <option value="Electrick Scootar">Electrick Scootar</option>
                    <option value="Electrick Bike">Electrick Bike</option>
                    <option value="Car">Car</option>
                    <option value="Electrick car">Electrick Car</option>
                    <option value="Bus">Bus</option>
                    <option value="Truck">Truck</option>
                    <option value="Van">Van</option>
                  </select>
                </div>
                <div className="name_group form_group">
                  <label htmlFor="">Manufacturer Company</label>
                  <Form.Control type="text" placeholder="Manufacturer Company" />
                </div>
                <div className="name_group form_group">
                  <label htmlFor="">Fuel Type</label>
                  <select className="form_controls50" name="option" id="opti">
                    <option value="Petrol">Petrol</option>
                    <option value="Deisel">Deisel</option>                    
                    <option value="CNG">CNG</option>
                    <option value="Petrol/CNG">Petrol/CNG</option>
                    <option value="Deisel/CNG">Deisel/CNG</option>
                  </select>
                </div>
                <div className="name_group form_group">
                  <label htmlFor="">Model(Optional)</label>
                  <Form.Control type="text" placeholder="Model" />
                </div>
                <div className="name_group form_group">
                  <label htmlFor="">Vehicle Registration</label>
                  <Form.Control type="text" placeholder="Vehicle Registration" />
                </div>
                <div className="name_group form_group">
                  <label htmlFor="">Average (Optional/Manual/By Default)</label>
                  <Form.Control type="text" placeholder="Average" />
                </div>
                <div className="name_group form_group ">
                  <label htmlFor="">Odometer Reading</label>
                  <Form.Control type="text" placeholder="Odometer Reading" />
                </div>
                <div className="check">
                  <label htmlFor="#" className="checkbox">
                    <Form.Check aria-label="option 1" className="cheks1" />{" "}
                    <span>Make This Vehicle Default</span>
                  </label>
                </div>
                <div>
                  <button className="btn" type="submit">
                    Add Vehicle
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddYourVehicle;
