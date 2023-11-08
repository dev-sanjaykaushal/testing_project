import React, { Component } from "react";
import "../../style.css/Home/Carousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import auther from "../../img/author.png";

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    prevArrow: null, 
    nextArrow: null
  };
  return (
    <>
      <div className="peopleReveiw">
        <div className="container">
          <div className="headings01 text-center heik">
            <h3>What People Sre Saying</h3>
          </div>

          <div className="slice">
            <div className="slick01">
              <Slider {...settings}>
                <div>
                  <div className="simbel">
                    <svg
                      width="43"
                      height="43"
                      viewBox="0 0 43 43"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.16667 2.8667C4.79184 2.8667 2.86667 4.79187 2.86667 7.1667V28.6667C2.86667 34.9995 8.00047 40.1334 14.3333 40.1334V37.2667C9.5837 37.2667 5.73334 33.4165 5.73334 28.6667V20.0667H15.7667C18.1415 20.0667 20.0667 18.1415 20.0667 15.7667V7.1667C20.0667 4.79187 18.1415 2.8667 15.7667 2.8667H7.16667Z"
                        fill="#EC3C3F"
                        fill-opacity="0.4"
                      ></path>
                      <path
                        d="M27.2333 2.8667C24.8585 2.8667 22.9333 4.79187 22.9333 7.1667V28.6667C22.9333 34.9995 28.0671 40.1334 34.4 40.1334V37.2667C29.6502 37.2667 25.8 33.4165 25.8 28.6667V20.0667H35.8333C38.2081 20.0667 40.1333 18.1415 40.1333 15.7667V7.1667C40.1333 4.79187 38.2081 2.8667 35.8333 2.8667H27.2333Z"
                        fill="#EC3C3F"
                        fill-opacity="0.4"
                      ></path>
                    </svg>
                  </div>
                  <div className="para01">
                    <p>
                      "Vehicle Bells gave our sales reps back valuable time
                      which reduced stress, saved time and helped us allocate
                      more time with our clients."
                    </p>
                  </div>
                  <div className="imges">
                    <img src={auther} alt="slider-img" width={65} height={65 } />
                    <div className="auther_info">
                    <strong>Ben Johnson</strong>
                    <span>Self Employed Customer</span>
                    </div>
                  </div>                 
                </div>
                <div>
                  <div className="simbel">
                    <svg
                      width="43"
                      height="43"
                      viewBox="0 0 43 43"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.16667 2.8667C4.79184 2.8667 2.86667 4.79187 2.86667 7.1667V28.6667C2.86667 34.9995 8.00047 40.1334 14.3333 40.1334V37.2667C9.5837 37.2667 5.73334 33.4165 5.73334 28.6667V20.0667H15.7667C18.1415 20.0667 20.0667 18.1415 20.0667 15.7667V7.1667C20.0667 4.79187 18.1415 2.8667 15.7667 2.8667H7.16667Z"
                        fill="#EC3C3F"
                        fill-opacity="0.4"
                      ></path>
                      <path
                        d="M27.2333 2.8667C24.8585 2.8667 22.9333 4.79187 22.9333 7.1667V28.6667C22.9333 34.9995 28.0671 40.1334 34.4 40.1334V37.2667C29.6502 37.2667 25.8 33.4165 25.8 28.6667V20.0667H35.8333C38.2081 20.0667 40.1333 18.1415 40.1333 15.7667V7.1667C40.1333 4.79187 38.2081 2.8667 35.8333 2.8667H27.2333Z"
                        fill="#EC3C3F"
                        fill-opacity="0.4"
                      ></path>
                    </svg>
                  </div>
                  <div className="para01">
                    <p>
                      "Vehicle Bells gave our sales reps back valuable time
                      which reduced stress, saved time and helped us allocate
                      more time with our clients."
                    </p>
                  </div>
                  <div className="imges">
                    <img src={auther} alt="slider-img" width={65} height={65} />
                    <div className="auther_info">
                    <strong>Ben Johnson</strong>
                    <span>Self Employed Customer</span>
                    </div>
                  </div>                  
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselComponent;
