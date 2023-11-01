import React from 'react'
import "../../style.css/Home/trackComponent.css"
import reports from "../../img/reports.webp"

const TrackComponent = () => {
  return (
    <>
            <div className="track-reortPage">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="commit ">
                <div className="content">
                  <h3>
                    Download Your{" "}
                    <span>
                      Track <br /> Reports 
                    </span>{" "}
                     as you want
                  </h3>
                </div>
                <p>
                  Vehicle Bells will generate a PDF file of all your mileage and
                  trip records so that you can pay your Taxes and other expenses
                  accordingly. you can download your reports as you want:-
                </p>
                <ul className="fade214">
                  <li>Daily bases</li>
                  <li>Weekly wise</li>
                  <li>Monthaly wise</li>
                  <li>Yearly wise</li>
                  <li>Selected Date wise</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="rightimg00">
                <figure>
                  <img src={reports} alt="rightimage" width={555} height={350} />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TrackComponent
