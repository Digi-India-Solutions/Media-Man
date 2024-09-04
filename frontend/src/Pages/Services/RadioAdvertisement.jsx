import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import location from '../../Image/location.png';
import spendcinema from '../../Image/spending.png';
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "../../Component/Loader/Loader";
import MetaTag from "../../Component/Meta/MetaTag";

function RadioAdvertisement() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [data, setData] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [station, setStation] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedStation, setSelectedStation] = useState(''); // Add this state
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [fullloading, setFullLoading] = useState(true); // Add loading state

  useEffect(() => {
    getApiData();
    window.scrollTo({ top: 0, behavior: "smooth" });

    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);

    const storedCartCount = localStorage.getItem('cartCount');
    if (storedCartCount) {
      setCartCount(parseInt(storedCartCount, 10));
    }
  }, []);

  const getApiData = async () => {
    try {
      const res = await axios.get("https://api.mediaman.in/api/allradio");
      if (res.status === 200) {
        const fetchedData = res.data.data.reverse();
        setData(fetchedData);
        const uniqueStates = [...new Set(fetchedData.map(item => item.state))];
        setStates(uniqueStates);
        const uniqueCities = [...new Set(fetchedData.map(item => item.city))];
        setCities(uniqueCities);
        const uniqueStation = [...new Set(fetchedData.map(item => item.station))];
        setStation(uniqueStation);
        setFullLoading(false);
      }
    } catch (error) {
      setFullLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    if (selectedState) {
      const filteredCities = [...new Set(data.filter(item => item.state === selectedState).map(item => item.city))];
      setCities(filteredCities);
    } else {
      const allCities = [...new Set(data.map(item => item.city))];
      setCities(allCities);
    }
  }, [selectedState, data]);

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setSelectedCity(''); // Reset city filter when state changes
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleStationChange = (e) => {
    setSelectedStation(e.target.value); // Add this function
  };

  const handleClearFilters = () => {
    setSelectedState('');
    setSelectedCity('');
    setSelectedStation(''); // Clear station filter
    const allCities = [...new Set(data.map(item => item.city))];
    setCities(allCities);
  };

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const addToCart = (item) => {
    const updatedCartItems = [...cartItems];
    const existingRadioItem = updatedCartItems.find(cartItem => cartItem.type === 'radio');
    const existingCinemaItem = updatedCartItems.find(cartItem => cartItem.type === 'cinema');
    const existingOutdoorItem = updatedCartItems.find(cartItem => cartItem.type === 'outdoor');

    if (item.type === 'cinema' && (existingOutdoorItem || existingRadioItem)) {
      toast.error('You cannot add Cinema products while Outdoor Hording or Radio products are in the cart.');
      return;
    }

    if (item.type === 'outdoor' && (existingCinemaItem || existingRadioItem)) {
      toast.error('You cannot add Outdoor Hording products while Cinema or Radio products are in the cart.');
      return;
    }

    if (item.type === 'radio' && (existingCinemaItem || existingOutdoorItem)) {
      toast.error('You cannot add Radio products while Cinema or Outdoor Hording products are in the cart.');
      return;
    }

    // if (item.type === "radio" && existingRadioItem) {
    //   toast.error("Radio item already in cart.");
    //   return;
    // }

    updatedCartItems.push({ ...item, quantity: 1 });
    toast.success('Item added to cart.');
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

    const newCartCount = updatedCartItems.reduce((acc, cur) => acc + cur.quantity, 0);
    setCartCount(newCartCount);
    localStorage.setItem('cartCount', newCartCount);
  };

  const isItemInCart = (itemId) => {
    return cartItems.some(cartItem => cartItem._id === itemId);
  };

  const filteredData = data.filter(item => {
    const isStateMatch = !selectedState || item.state === selectedState;
    const isCityMatch = !selectedCity || item.city === selectedCity;
    const isStationMatch = !selectedStation || item.station === selectedStation; // Use selectedStation for filtering
    return isStateMatch && isCityMatch && isStationMatch;
  });

  const truncateTitle = (title) => {
    if (typeof title !== 'string') return '';
    const words = title.split(' ');
    return words.length > 4 ? `${words.slice(0, 5).join(' ')}...` : title;
  };

  return (
    <>
      <MetaTag
        title="Media Man - Leading Advertising Solutions"
        description="Media Man offers comprehensive advertising solutions including cinema, outdoor, and radio advertisements. Explore our services and get in touch for customized ad solutions."
        keywords="advertising, cinema ads, outdoor ads, radio ads, Media Man"
      />

      {fullloading ? <Loader /> : (
        <div style={{ borderBottom: "3px solid black" }}>
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-6" style={{ display: 'flex', alignItems: "center" }}>
                <div className="filter">
                  <h1 className="allheadings" style={{ color: 'red' }}>
                    Radio <span style={{ color: "black" }}>Advertisement</span>
                  </h1>
                  <hr />
                </div>
              </div>
              <div className="col-md-6">
                <div
                  onClick={toggleFilter}
                  style={{ textAlign: "end", cursor: "pointer" }}
                >
                  <p
                    className="addbutton"
                    style={{ display: "flex", justifyContent: "end" }}
                  >
                    <button className="filterButton">
                      <span>Filter &nbsp;<i className="bi bi-funnel"></i></span>
                    </button>
                  </p>
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
                        <select
                          id="stateSelect"
                          className="form-select"
                          value={selectedState}
                          onChange={handleStateChange}
                        >
                          <option value=""></option>
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
                        <select
                          id="citySelect"
                          className="form-select"
                          value={selectedCity}
                          onChange={handleCityChange}
                        >
                          <option value=""></option>
                          {cities.map((city, index) => (
                            <option key={index} value={city}>
                              {city}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="stationSelect"
                          style={{ fontSize: "14px", color: "black" }}
                          className="form-label"
                        >
                          Select Station
                        </label>
                        <select
                          id="stationSelect"
                          className="form-select"
                          value={selectedStation}
                          onChange={handleStationChange}
                        >
                          <option value=""></option>
                          {station.map((stationName, index) => (
                            <option key={index} value={stationName}>
                              {stationName}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <button
                          className="btn btn-danger"
                          onClick={handleClearFilters}
                        >
                          Clear Filters
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="row">
              {filteredData.map((item) => (
                <div className="col-md-3 mb-4" key={item._id}>
                  <div className="cinema-card">
                    <img src={item.image} alt="Radio-image" />
                    <div>
                      <h4>{truncateTitle(item.station)}</h4>
                      <hr />
                      <p className="person">
                        <img src={location} alt="location" />&nbsp; &nbsp; State: {item.state}
                      </p>
                      <p className="person">
                        <img src={location} alt="location" />&nbsp; &nbsp; City: {item.city}
                      </p>
                      <p className="person">
                        <img src={spendcinema} alt="spending" />&nbsp; &nbsp; ₹ {item.rate} /per 10 sec spot
                      </p>
                      <p className="addbutton">
                        {isItemInCart(item._id) ? (
                          <button className="cssbuttons-io" disabled>
                            <span>Already In Cart</span>
                          </button>
                        ) : (
                          <button className="cssbuttons-io" onClick={() => addToCart({ ...item, type: 'radio' })}>
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
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RadioAdvertisement;
