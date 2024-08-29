import React, { useEffect, useState } from "react";
import MetaTag from "../../Component/Meta/MetaTag";
function AirportBranding() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  // Dynamically import images from Slide1.JPG to Slide87.JPG
  const airportimages = [];
  for (let i = 1; i <= 86; i++) {
    airportimages.push(require(`../../Image/airportImages/Slide${i}.JPG`));
  }

  const delhiCinemas = [
    "PVR Anupam Saket",
    "PVR Select Citywalk",
    "Cinepolis DLF Place",
    "INOX Nehru Place",
    "Carnival Cinemas",
    "DT Cinemas DLF Promenade",
    "M Cinemas",
    "Liberty Cinema",
    "Delite Cinema",
    "Regal Cinema",
    // Add more cinemas as needed
  ];
  const indianCities = [
    "Mumbai",
    "Delhi",
    "Bengaluru",
    "Hyderabad",
    "Ahmedabad",
    "Chennai",
    "Kolkata",
    "Surat",
    "Pune",
    "Jaipur",
    "Lucknow",
    "Kanpur",
    "Nagpur",
    "Indore",
    "Thane",
    "Bhopal",
    "Visakhapatnam",
    "Pimpri-Chinchwad",
    "Patna",
    "Vadodara",
    // Add more cities as needed
  ];
  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  //   {
  //     image: airport1,
  //     title: "Cinepolis Fun Republic Mall, Screen - 3, Andheri West",
  //     spend: "₹ 7,00,000Min Spend",
  //   },
  //   {
  //     image: airport2,
  //     title: "PVR INOX Vishnu Shivam Mall, Screen - 1, Kandivali",
  //     spend: "₹ 2800 Min Spend",
  //   },
  //   {
  //     image: airport3,
  //     title: "PVR INOX Phoenix Mall(Mumbai), Screen - 5,",
  //     spend: "₹ 7,00,000Min Spend",
  //   },
  //   {
  //     image: airport4,
  //     title: "Cinepolis Fun Republic Mall, Screen - 3, Andheri West",
  //     spend: "₹ 7,00,000Min Spend",
  //   },
  //   {
  //     image: airport5,
  //     title: "Carnival Cinemas Sangam Theatre, Screen - 2, Andheri",
  //     spend: "₹ 7,00,000Min Spend",
  //   },
  //   {
  //     image: airport6,
  //     title: "PVR INOX Oberoi Mall, Screen - 2, Goregaon",
  //     spend: "₹ 7,00,000Min Spend",
  //   },
  //   {
  //     image: airport6,
  //     title: "PVR INOX Oberoi Mall, Screen - 2, Goregaon",
  //     spend: "₹ 7,00,000Min Spend",
  //   },
  //   {
  //     image: airport6,
  //     title: "PVR INOX Oberoi Mall, Screen - 2, Goregaon",
  //     spend: "₹ 7,00,000Min Spend",
  //   },
  // ];
  return (
    <>
    <MetaTag
  title="Airport Branding - Media Man Advertising"
  description="Explore Media Man's airport branding solutions with a range of dynamic advertising images. Our strategic placements in major airports ensure high visibility and impactful brand exposure."
  keyword="airport branding, Media Man Advertising, airport advertising, brand exposure, advertising images, high visibility ads, dynamic airport advertising"
/>
    {console.log(airportimages)}
      <div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6" style={{ alignItems: "center" }}>
              <div className="filter">
              <h1 className="allheadings" style={{color:'red'}}>
                  Airport <span style={{ color: "black" }}>Advertising</span>
                </h1>
                <hr />
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <div>
        <div className="container-fluid mt-5">
          <div className="row">
            {airportimages.map((image, index) => (
              <div className="col-md-4 mb-3" key={index}>
                <img
                  src={image}
                  width="100%"
                  height="100%"
                  alt={`Slide ${index + 1}`}
                  onClick={() => openModal(image)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.8)" }}
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body w-100">
                <img
                  src={selectedImage}
                  alt="Full screen"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AirportBranding;
