import React, { useEffect, useState } from "react";
import axios from "axios";
import rating from '../../Image/rating.png';
import spendcinema from '../../Image/spending.png';
import "../Cinema/cinema.css";
import toast from "react-hot-toast";
import location from '../../Image/location.png';
import Loader from "../../Component/Loader/Loader";
import MetaTag from "../../Component/Meta/MetaTag";

function OutdoorHording() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [loading, setLoading] = useState(true);

  // State variables for filters
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedMedia, setSelectedMedia] = useState("");

  // State for available cities based on the selected state
  const [cities, setCities] = useState([]);

  const getApiData = async () => {
    try {
      const res = await axios.get("https://api.mediaman.in/api/hoading");
      if (res.status === 200) {
        const reversedData = res.data.data.reverse();
        setData(reversedData);
        setFilteredData(reversedData);

        // Initialize the cities list
        const uniqueStates = [...new Set(reversedData.map(item => item.state))];
        const stateCitiesMap = uniqueStates.reduce((acc, state) => {
          acc[state] = [...new Set(reversedData.filter(item => item.state === state).map(item => item.city))];
          return acc;
        }, {});
        setCities(stateCitiesMap);
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getApiData();
    window.scrollTo({ top: 0, behavior: "smooth" });

    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);

    const storedCartCount = localStorage.getItem('cartCount');
    setCartCount(storedCartCount ? parseInt(storedCartCount, 10) : 0);
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

  // Update cities when state changes
  useEffect(() => {
    setSelectedCity(''); // Reset city selection when state changes
  }, [selectedState]);

  const addToCart = (item) => {
    const updatedCartItems = [...cartItems];
    const existingCinemaItem = updatedCartItems.find(cartItem => cartItem.type === 'cinema');
    const existingRadioItem = updatedCartItems.find(cartItem => cartItem.type === 'radio');
    const existingOutdoorItem = updatedCartItems.find(cartItem => cartItem.type === 'outdoor');

    if (item.type === 'outdoor' && (existingCinemaItem || existingRadioItem)) {
      toast.error('Cannot add Outdoor Hording with Cinema or Radio items in the cart.');
      return;
    }

    if (item.type === 'cinema' && existingOutdoorItem) {
      toast.error('Cannot add Cinema products with Outdoor Hording in the cart.');
      return;
    }

    if (item.type === 'radio' && existingOutdoorItem) {
      toast.error('Cannot add Radio products with Outdoor Hording in the cart.');
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
  };

  const isItemInCart = (itemId) => cartItems.some(cartItem => cartItem._id === itemId);

  const truncateTitle = (title) => {
    if (!title) return '';
    const words = title.split(' ');
    return words.length > 20 ? `${words.slice(0, 5).join(' ')}...` : title;
  };

  const clearFilters = () => {
    setSelectedState('');
    setSelectedCity('');
    setSelectedMedia('');
  };

  return (
    <>
      <MetaTag
        title="Outdoor Hording - Media Man Advertising"
        description="Explore Media Man's outdoor hording advertising options. Browse various outdoor media locations, view details on size, location, and pricing. Easily filter and add outdoor hording options to your cart for effective brand visibility."
        keyword="outdoor hording, Media Man Advertising, outdoor advertising, hording options, brand visibility, filter outdoor hording, add to cart, advertising locations"
      />

      {loading ? <Loader /> : (
        <div>
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-6 d-flex align-items-center">
                <div className="filter">
                  <h1 className="allheadings">
                    <span>For Outdoor Hording Advertising, add your desired location to the cart.</span>
                  </h1>
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-end">
                <button onClick={() => setIsFilterVisible(!isFilterVisible)} className="filterButton">
                  <span>Filter &nbsp;<i className="bi bi-funnel"></i></span>
                </button>
              </div>

              {isFilterVisible && (
                <div className="col-md-12">
                  <div className="row mb-3">
                    <div className="col-md col-3">
                      <label htmlFor="stateSelect">State</label>
                      <select
                        id="stateSelect"
                        className="form-select"
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

                    <div className="col-md col-3">
                      <label htmlFor="citySelect">City</label>
                      <select
                        id="citySelect"
                        className="form-select"
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                        disabled={!selectedState} // Disable if no state is selected
                      >
                        <option value=""></option>
                        {(cities[selectedState] || []).map((city, index) => (
                          <option key={index} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="col-md col-3">
                      <label htmlFor="mediaSelect">Media</label>
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

                    <div className="col-md-3 mt-2 text-center">
                      <button className="filterButton" onClick={clearFilters}>
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
                        <h4>{truncateTitle(item.city)}</h4>
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
                          <img src={spendcinema} alt="price" />&nbsp; &nbsp;Price : ₹{item.total} / Per Month
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
