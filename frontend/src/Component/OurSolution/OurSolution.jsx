import React from "react";
import image from "../../Image/cinema.png";
import image1 from "../../Image/mall.png";
import CinemaAdvertising from "../../Image/ourwork1.jpeg";
import Outdoor from "../../Image/ourwork2.jpg";
import airport from "../../Image/airport.jpg";
import bus from "../../Image/bus.webp";
import Radio from "../../Image/radio.jpeg";
import "./solution.css";
import { Link } from "react-router-dom";
import MetaTag from "../Meta/MetaTag";
function OurSolution() {
  const ourWork = [
    { pic: CinemaAdvertising, title: "Cinema Advertising", to: "/cinema" },
    { pic: Outdoor, title: "Outdoor Hordings", to: "/outdoor-hoardings" },
    { pic: airport, title: "Airport Branding", to: "/airport-branding-advertisement" },
    { pic: Radio, title: "Radio Advertising", to: "/radio-advertisement" },
    { pic: bus, title: "Bus Branding", to: "/bus-branding" },

  ];
  const ourSolution = [
    {
      picture: image,
    },
    {
      picture: image1,
    },
    {
      picture: bus,
    },
    {
      picture: airport,
    },
  ];
  return (
    <>
      <MetaTag
        title="Our Solutions - Media Man"
        description="Explore Media Man's diverse advertising solutions including Cinema Advertising, Outdoor Hoardings, Airport Branding, Radio Advertising, and Bus Branding. Learn how our tailored solutions can enhance your brand's visibility and impact."
        keyword="Media Man, advertising solutions, cinema advertising, outdoor hoardings, airport branding, radio advertising, bus branding, brand visibility, advertising services"
      />

      <div className="services">
        <div className="container">
          <div className="serverHeading mt-3">
            <span>Browse Media</span>
          </div>
          <div className="row mt-5">
            {ourWork.map((item, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div
                  style={{
                    border: "1px solid lightgray",
                    padding: "1rem",
                  }}
                >
                  <p className="para">
                    <b> {item.title}</b>
                  </p>
                  <div className="image-container">
                    <img src={item.pic} alt="" className="image" />
                    <div className="image-details">
                      <p className="para">{item.title}</p>
                    </div>
                  </div>
                  <p className="addbutton mt-3 mb-0">
                    <Link to={item.to}>
                      <button className="filterButton">
                        <span>
                          Click To More &nbsp;
                          {/* <i class="bi bi-cart4"></i> */}
                        </span>
                      </button>
                    </Link>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="cinemaadvertiseheading">
        <h1>
          “Cinema can connect customer minds directly with your business”
        </h1>
      </div>

      <div className="cinemaadvertisement"></div>

      <div className="under" style={{ backgroundColor: "#272727" }}>
        <div className="understanding">
          <h2 className="heading text-center">Understanding Client's Needs</h2>
          <hr />
          <p className="text-center" style={{ color: "white" }}>
            We definitely understand and lend a hand to our clients in building
            their image. In advertising, we call it, “Brand Image Building”.
            Along with providing services we assist them in a personalized and
            in sober manner. Recognizing the needs of the Advertiser / Marketer,
            we go through in depth and root of the crisis and come out with the
            creative solution for it..
          </p>
        </div>
      </div>
    </>
  );
}

export default OurSolution;
