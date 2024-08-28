import React, { useEffect, useState } from "react";
// import airport1 from "../../Image/airport1.jpg";
// import airport2 from "../../Image/airport2.jpg";
// import airport3 from "../../Image/airport3.jpg";
// import airport4 from "../../Image/airport4.jpg";
// import airport5 from "../../Image/airport5.webp";
// import airport6 from "../../Image/airport6.jpg";
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
  // const cinema = [
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
    {console.log(airportimages)}
      <div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6" style={{ alignItems: "center" }}>
              <div className="filter">
                <h3 style={{ color: "red", textAlign: "start" }}>
                  Airport <span style={{ color: "black" }}>Advertising</span>
                </h3>
                <hr />
              </div>
            </div>
            {/* <div className="col-md-6">
              <div
                onClick={toggleFilter}
                style={{ textAlign: "end", cursor: "pointer" }}
              >
              </div>

              {isFilterVisible && (
                <div className="col-md-12">
                  <div className="filteration mb-3">
                    <div>
                      <label
                        htmlFor="stateSelect"
                        style={{ fontSize: "14px", color: "black" }}
                        className="form-label"
                      >
                        Select State
                      </label>
                      <select className="form-select" aria-label="State select">
                        <option selected>Select State</option>
                        {states.map((state, index) => (
                          <option key={index} value={state}>
                            {state}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="citySelect"
                        style={{ fontSize: "14px", color: "black" }}
                        className="form-label"
                      >
                        Select City
                      </label>
                      <select id="citySelect" className="form-select">
                        <option value="">Select a city</option>
                        {indianCities.map((city, index) => (
                          <option key={index} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="cinemaSelect"
                        style={{ fontSize: "14px", color: "black" }}
                        className="form-label"
                      >
                        Select Cinema
                      </label>
                      <select id="cinemaSelect" className="form-select">
                        <option value="">Select cinema</option>
                        {delhiCinemas.map((cinema, index) => (
                          <option key={index} value={cinema}>
                            {cinema}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}
            </div> */}
            <hr />
            {/* {cinema.map((item) => (
              <div className="col-md-3 mb-4">
                <div className="cinema-card">
                  <img src={item.image} alt="Cinema-image" />
                  <div>
                    <h4>{item.title}</h4>
                    <hr />
                    <p className="person">
                      <i class="bi bi-tag-fill"></i> {item.spend}
                    </p>
                  </div>
                </div>
              </div>
            ))} */}
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
