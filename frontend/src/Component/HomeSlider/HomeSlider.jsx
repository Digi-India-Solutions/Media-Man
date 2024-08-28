import React, { useEffect, useState } from "react";
import "../HomeSlider/home.css";
import cinemaicon from "../../Image/cinema-icon.png";
import advertise from "../../Image/advertising-icon.png";
import { Link, useNavigate } from "react-router-dom";
import india from '../../Image/india.png';
import mumbai from '../../Image/mumbai.png';
import bangalore from '../../Image/bangalore.png';
import chennai from '../../Image/chennai.png';
import hyderabad from '../../Image/hyderabad.png';
import Kolkata from '../../Image/kolkata.png';

function HomeSlider() {
  const stateData = [
    { name: "Delhi", picture: india },
    { name: "Maharashtra", picture: mumbai },
    { name: "Karnataka", picture: bangalore },
    { name: "Tamil Nadu", picture: chennai },
    { name: "West Bengal", picture: Kolkata },
    { name: "Telangana", picture: hyderabad },
  ];

  const navigate = useNavigate();

  // const handleStateClick = (stateName) => {
  //   const baseUrl = '/cinema';
  //   const queryParams = new URLSearchParams({
  //       state: stateName,
  //       anotherParam: 'value', // Add more parameters if needed
  //   }).toString();

  //   navigate(`${baseUrl}?${queryParams}`);
  // };

  useEffect(() => {
    const root = document.documentElement;

    const handleMouseMove = (evt) => {
      let x = evt.clientX / window.innerWidth;
      let y = evt.clientY / window.innerHeight;

      root.style.setProperty("--mouse-x", x - 0.5);
      root.style.setProperty("--mouse-y", y - 0.5);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="homeback">
        <div>
          <div className="container">
            <div>
              <div className="homeHeading">
                <h1>Selecting the right media for your business success!</h1>
                <h3>Plan your advertisement</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="workingcard">

        <Link to={"/cinema"} class="card">
          <div class="card-black card-content">
            <div className="mb-0">
              <img src={cinemaicon} width={"20%"} alt="" />
            </div>
            <h3>Cinema</h3>
          </div>
        </Link>
        
        <Link to={"/outdoor-hoardings"}>
          <div class="card">
            <div class="card-black card-content">
              <div className="mb-0">
                <img src={advertise} width={"20%"} alt="" />
              </div>
              <h3>Hoardings</h3>
            </div>
          </div>
        </Link>
      </div>

      <div className="container mt-4">
        <h4 className="text-center mt-3 mb-4">Popular State We Deal In.</h4>
        <div className="row">
          {stateData.map((state, index) => (
            <div className="col-6 col-md-2 mb-4" key={index}>
              <div className="statesforhomepage text-center">
                <div className="card-body" >
                  <img className="mb-2" src={state.picture} alt="" />
                  <h5 className="card-title">{state.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomeSlider;
