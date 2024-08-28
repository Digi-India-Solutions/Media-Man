import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bus1 from "../../Image/bus10.webp";
import bus2 from "../../Image/bus11.webp";
import bus3 from "../../Image/bus13.webp";
import bus4 from "../../Image/bus14.webp";
import bus5 from "../../Image/bus15.webp";
import bus6 from "../../Image/bus16.webp";
import bus7 from "../../Image/bus17.webp";
import bus8 from "../../Image/bus1.jpg";
import bus9 from "../../Image/bus2.jpg";
import bus10 from "../../Image/bus3.jpg";
import bus11 from "../../Image/bus4.jpg";
import bus12 from "../../Image/bus5.jpg";
import bus13 from "../../Image/bus6.jpg";
import location from '../../Image/location.png';
import spendcinema from '../../Image/spending.png';
// import './BusBranding.css'; // Ensure you have a CSS file for styling

function BusBranding() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const cinema = [
    { image: bus1 },
    { image: bus2 },
    { image: bus5 },
    { image: bus6 },
    { image: bus7 },
    { image: bus8 },
    // { image: bus9 },
    // { image: bus10 },
    // { image: bus11 },
    // { image: bus12 },
    { image: bus13 },
    { image: bus3 },
  ];

  return (
    <>
      <div style={{ borderBottom: "3px solid black" }}>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6" style={{ alignItems: "center" }}>
              <div className="filter">
                <h3 style={{ color: "red", textAlign: "start" }}>
                  Bus <span style={{ color: "black" }}>Advertising</span>
                </h3>
                <hr />
              </div>
            </div>
            <hr />
            {cinema.map((item, index) => (
              <div className="col-md-3 mb-4" key={index}>
                <div className="cinema-card" onClick={() => openModal(item.image)}>
                  <img src={item.image} alt="Bus Branding" className="manage-image" style={{cursor:"pointer"}}/>
                  <h6 className="mt-3 text-center">Min Spend ₹12,000</h6>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="modal fade show"
          style={{ display: "flex", backgroundColor: "rgba(0, 0, 0, 0.8)" ,justifyContent:"center",padding:"30px" }}
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog modal-fullscreen mycsssmodal" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body">
                <img
                  src={selectedImage}
                  alt="Full screen"
                  className="img-fluid"
                  style={{width:'100%'}}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BusBranding;
