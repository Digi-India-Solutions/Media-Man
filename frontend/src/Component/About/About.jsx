import React, { useEffect } from "react";
import advertise from "../../Image/advertise.png";
const About = () => {
  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  },[])
  return (
    <>
      <div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <p className="para">
                At Mediaman Advertising, we're passionate about the power of
                storytelling in advertising. Since 2012, we've been a trusted
                partner for brands, crafting impactful advertising solutions
                that capture attention and drive results
              </p>
            </div>
            <div className="col-md-6">
              <img src={advertise} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
