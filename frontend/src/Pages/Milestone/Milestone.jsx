import React, { useEffect } from "react";
import image from "../../Image/cinemabanner.jpg";
import image1 from "../../Image/roadbanner.webp";
import image2 from "../../Image/target.avif";
const Milestone = () => {
  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  },[])
  return (
    <>
      <div>
        <div className="container pb-5">
          <div className="text-center mt-5">
            <h2>Milestone</h2>
          </div>
          <div className="row" style={{display:"flex", alignItems:'center'}}>
            <p className="para">
              Here are some recent milestones showcasing Mediaman Advertising
              success in crafting impactful advertising campaigns across India:
            </p>
            <div className="col-md-6 mb-5 mt-5">
              <div>
                <img
                  style={{
                    borderRadius: "45px",
                    boxShadow: "0px 4px 33px -6px #116466",
                  }}
                  src={image}
                  width={"100%"}
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6 mb-5 mt-5">
              <div>
                <p className="para">
                  Pan-India Cinema Branding for Wai Wai Noodles (2024):
                  Increased brand awareness and product visibility for the
                  instant noodle brand through strategic cinema placements
                  across India
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-5 mt-5">
              <div>
                <p className="para">
                  Outdoor Hoarding Branding for Himalayan Builders (2024):
                  Enhanced brand visibility and generated leads for the real
                  estate developer in Haryana by securing prominent outdoor
                  hoarding placements.
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-5 mt-5">
              <div>
                <img
                  style={{
                    borderRadius: "45px",
                    boxShadow: "0px 4px 33px -6px #116466",
                  }}
                  src={image1}
                  width={"100%"}
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6 mb-5 mt-5">
              <div>
                <img
                  style={{
                    borderRadius: "45px",
                    boxShadow: "0px 4px 33px -6px #116466",
                  }}
                  src={image2}
                  width={"100%"}
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6 mb-5 mt-5">
              <div>
                <p className="para">
                  Targeted Cinema Advertising for Liberty Shoes (2023): Promoted
                  their latest footwear collection and established brand
                  presence in key North Indian markets with targeted cinema
                  advertising
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Milestone;
