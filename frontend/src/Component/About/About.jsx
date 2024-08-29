import React, { useEffect } from "react";
import advertise from "../../Image/advertise.png";
import MetaTag from "../Meta/MetaTag";
const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])
  return (
    <>
      <MetaTag
        title="About Us - Media Man Advertising"
        description="Learn about Media Man Advertising and our commitment to creating impactful advertising solutions since 2012. Discover our passion for storytelling and how we can help your brand capture attention and drive results."
        keywords="Media Man, advertising, storytelling, impactful ads, about us"
      />

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
