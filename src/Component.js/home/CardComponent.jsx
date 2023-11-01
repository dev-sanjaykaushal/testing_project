import React from 'react'
import "../../style.css/Home/card.css"
import company from "../../img/company.webp";
import single from "../../img/single.webp";

const CardComponent = () => {
  return (
    <>
       <div className="solutionSection">
        <div className="container">
          <div className="row">
            <div className="col-lg-6  alignt-item-center">
              <div className="solution-area ">
                <h3 className="text-center">
                  Solution For <span>Company</span>
                </h3>
                <figure>
                  <img src={company} alt="card-img" width={410} height={300} />
                </figure>
                <ul>
                  <li>Build your team.</li>
                  <li>Track your team activities.</li>
                  <li>Pay According to activities.</li>
                  <li>Add/Remove any team member anytime.</li>
                </ul>

                <a href="#" className="btn text-center">
                  Check Benifits for company
                </a>
              </div>
            </div>
            <div className="col-lg-6  alignt-item-center">
              <div className="solution-area">
                <h3 className="text-center">
                  Solution For <span>Individuals</span>
                </h3>
                <figure>
                  <img src={single} alt="card-img" width={410} height={280} />
                </figure>
                <ul>
                  <li>Track your Mileage expenses.</li>
                  <li>Plan your all Trips.</li>
                  <li>Check all the ATMs and Petrol pumps on the route.</li>
                  <li>Download and share reports.</li>
                </ul>
                <a href="#" className="btn text-center">
                  Check Benifits for Individuals
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardComponent
