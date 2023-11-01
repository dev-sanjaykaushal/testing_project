import React from "react";
import "../../style.css/Contact/Form.css";
import { BsFillFileEarmarkEaselFill } from "react-icons/bs";

const FormComponent = () => {
  return (
    <>
      <div className="main_wrapper">
        <div className="wrapper">
          <div className="row">
            <div className="col-lg-6">
              <div className="form">
                <form action="" className="mb-5">
                  <div className="name_group">
                    <label htmlFor="">Name:</label>
                    <div className="inputs">
                      <input name="UserName" placeholder="Name" type="text" />
                    </div>
                  </div>
                  <div className="name_group">
                    <label htmlFor="">Email:</label>
                    <div className="inputs">
                      <input name="Email" placeholder="Email" type="text" />
                    </div>
                  </div>
                  <div className="name_group">
                    <label htmlFor="">Phone:</label>
                    <div className="inputs">
                      <input name="Phone" placeholder="Phone" type="text" />
                    </div>
                  </div>
                  <div className="name_group">
                    <label htmlFor="">Massage:</label>
                    <div className="inputs">
                      <input name="Massage" placeholder="Massage" type="text" />
                    </div>
                  </div>
                  <div className="btn">
                    <a href="#">
                      <BsFillFileEarmarkEaselFill /> SAVE
                    </a>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.89797036338!2d77.04417242604603!3d28.527554409017824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1698836043693!5m2!1sen!2sin"
                width={600}
                height={450}
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
