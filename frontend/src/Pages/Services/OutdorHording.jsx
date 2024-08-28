import React, { useEffect, useState } from "react";
import axios from "axios";
import rating from '../../Image/rating.png';
import spendcinema from '../../Image/spending.png';
import "../Cinema/cinema.css";
import toast from "react-hot-toast";
import location from '../../Image/location.png';
import Loader from "../../Component/Loader/Loader";

function OutdoorHording() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [fullloading, setFullLoading] = useState(true); // Add loading state

  // State variables for filters
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedMedia, setSelectedMedia] = useState("");

  const getApiData = async () => {
    try {
      const res = await axios.get("https://mediamanserver.onrender.com/api/hoading");
      if (res.status === 200) {
        setData(res.data.data.reverse());
        setFilteredData(res.data.data.reverse());
        setLoading(false);
        setFullLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setFullLoading(false);
    }
  };

  useEffect(() => {
    getApiData();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);

    const storedCartCount = localStorage.getItem('cartCount');
    if (storedCartCount) {
      setCartCount(parseInt(storedCartCount, 10));
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    let filtered = data;

    if (selectedState) {
      filtered = filtered.filter(item => item.state === selectedState);
    }

    if (selectedCity) {
      filtered = filtered.filter(item => item.city === selectedCity);
    }

    if (selectedMedia) {
      filtered = filtered.filter(item => item.media === selectedMedia);
    }

    setFilteredData(filtered);
    setLoading(false);
  }, [selectedState, selectedCity, selectedMedia, data]);

  const addToCart = (item) => {
    const updatedCartItems = [...cartItems];
    const existingCinemaItem = updatedCartItems.find(cartItem => cartItem.type === 'cinema');
    const existingRadioItem = updatedCartItems.find(cartItem => cartItem.type === 'radio');
    const existingOutdoorItem = updatedCartItems.find(cartItem => cartItem.type === 'outdoor');

    // Prevent adding an outdoor product if a cinema or radio product is already in the cart
    if (item.type === 'outdoor' && (existingCinemaItem || existingRadioItem)) {
      toast.error('You cannot add Outdoor Hording products while Cinema or Radio products are in the cart.');
      return;
    }

    // Prevent adding a cinema product if an outdoor product is already in the cart
    if (item.type === 'cinema' && existingOutdoorItem) {
      toast.error('You cannot add Cinema products while Outdoor Hording products are in the cart.');
      return;
    }

    // Prevent adding a radio product if an outdoor product is already in the cart
    if (item.type === 'radio' && existingOutdoorItem) {
      toast.error('You cannot add Radio products while Outdoor Hording products are in the cart.');
      return;
    }

    const existingItemIndex = updatedCartItems.findIndex(cartItem => cartItem._id === item._id);

    if (existingItemIndex !== -1) {
      updatedCartItems[existingItemIndex].quantity += 1;
      toast.error("Item already in cart. Quantity increased.");
    } else {
      updatedCartItems.push({ ...item, quantity: 1 });
      toast.success('Item added to cart.');
    }

    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

    const newCartCount = updatedCartItems.reduce((acc, cur) => acc + cur.quantity, 0);
    setCartCount(newCartCount);
    localStorage.setItem('cartCount', newCartCount);

    // setTimeout(() => {
    //   window.location.reload()
    // }, 1000);
  };

  const isItemInCart = (itemId) => {
    return cartItems.some(cartItem => cartItem._id === itemId);
  };

  const truncateTitle = (title) => {
    if (!title) {
      return '';
    }
    const words = title.split(' ');
    if (words.length > 20) {
      return `${words.slice(0, 5).join(' ')}...`;
    }
    return title;
  };

  const clearFilters = () => {
    setSelectedMedia('');
    setSelectedState('');
    setSelectedCity('');
  };
  return (
    <>
      {fullloading ? <Loader /> : (
        <div>
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-6" style={{ alignItems: "center" }}>
                <div className="filter">
                  <h5 style={{ color: "red", textAlign: "start" }}>
                    <span style={{ color: "black" }}> For Outdoor Hoading Advertising Do Add Outdoor Hoading In Cart, By Loaction where You want to ADS.</span>
                  </h5>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  onClick={() => setIsFilterVisible(!isFilterVisible)}
                  style={{ textAlign: "end", cursor: "pointer" }}
                >
                  <p className="addbutton" style={{ display: "flex", justifyContent: "end" }}>
                    <button className="cssbuttons-io">
                      <span>Filter</span>
                    </button>
                  </p>
                </div>
              </div>
              {isFilterVisible && (
                <div className="col-md-12">
                  <div className="row mb-3">
                    <div className="col-md col-4">
                      <label htmlFor="">Media</label>
                      <select
                        id="mediaSelect"
                        className="form-select"
                        value={selectedMedia}
                        onChange={(e) => setSelectedMedia(e.target.value)}
                      >
                        <option value=""></option>
                        {[...new Set(data.map(item => item.media))].map((media, index) => (
                          <option key={index} value={media}>
                            {media}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md col-4">
                      <label htmlFor="">State</label>
                      <select
                        className="form-select"
                        aria-label="State select"
                        value={selectedState}
                        onChange={(e) => setSelectedState(e.target.value)}
                      >
                        <option value=""></option>
                        {[...new Set(data.map(item => item.state))].map((state, index) => (
                          <option key={index} value={state}>
                            {state}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md col-4">
                      <label htmlFor="">City</label>
                      <select
                        id="citySelect"
                        className="form-select"
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                      >
                        <option value=""></option>
                        {[...new Set(data.map(item => item.city))].map((city, index) => (
                          <option key={index} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className=" col-md col-12 mt-2 mt-md-0 text-center">
                      <button className="cssbuttons-io mt-4" onClick={clearFilters}>
                        <span>Clear Filters</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
              <hr style={{ margin: '5px' }} />
              {loading ? (
                <div className="text-center">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                filteredData.map((item, index) => (
                  <div className="col-md-3 mb-4" key={index}>
                    <div className="cinema-card">
                      <img src={item.image} alt="Outdoor Hording" />
                      <div>
                        <h4>{truncateTitle(item.media)}</h4>
                        <h6>{truncateTitle(item.location)}</h6>
                        <hr style={{ margin: '5px' }} />
                        <p className="person">
                          <img src={location} alt="location" /> &nbsp; &nbsp;State : {item.state}
                        </p>
                        <p className="person">
                          <img src={location} alt="location" /> &nbsp; &nbsp;Location : {item.city}
                        </p>
                        <p className="person">
                          <img src={rating} alt="rating" /> &nbsp; &nbsp;Size : {item.height}H , {item.width}W
                        </p>
                        <p className="person">
                          <img src={spendcinema} alt="price" />&nbsp; &nbsp;Price : ₹{item.total}
                        </p>
                        <p className="addbutton">
                          {isItemInCart(item._id) ? (
                            <button className="cssbuttons-io" disabled>
                              <span>Already In Cart</span>
                            </button>
                          ) : (
                            <button className="cssbuttons-io" onClick={() => addToCart({ ...item, type: 'outdoor' })}>
                              <span>
                                Add To Cart &nbsp;
                                <i className="bi bi-cart4"></i>
                              </span>
                            </button>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default OutdoorHording;
