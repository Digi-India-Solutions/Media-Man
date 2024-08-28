import React, { useEffect, useState } from "react";
import axios from "axios";
import rating from '../../Image/rating.png';
import cinemascreen from '../../Image/cinema.png';
import seatcinema from '../../Image/seat.png';
import spendcinema from '../../Image/spending.png';
import "../Cinema/cinema.css";
import toast from "react-hot-toast";
import location from '../../Image/location.png';
import pvr from '../../Image/PVR CINEMA.jpg'
import Loader from "../../Component/Loader/Loader";

function Cinema() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [cinemas, setCinemas] = useState([]);
  const [filteredCinemas, setFilteredCinemas] = useState([]);
  const [cinemaChains, setCinemaChains] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedChain, setSelectedChain] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 30;
  const [loading, setLoading] = useState(true); // Add loading state


  // Fetch cinema data and initialize filter options
  const getCinemaData = async () => {
    try {
      const res = await axios.get(`https://mediamanserver.onrender.com/api/allcinemarecord`);
      if (res.status === 200) {
        const data = res.data.data;
        const uniqueChains = [...new Set(data.map(item => item.cinemaChain))];
        const uniqueStates = [...new Set(data.map(item => item.state))];
        const uniqueCities = [...new Set(data.map(item => item.city))];

        setCinemas(data);
        setFilteredCinemas(data);
        setCinemaChains(uniqueChains);
        setStates(uniqueStates);
        setCities(uniqueCities);
        setLoading(false); // Set loading to false once data is fetched

      }
    } catch (error) {
      console.error("Error fetching cinema data:", error);
      setLoading(false); // Ensure loading is set to false even if there's an error

    }
  };

  // Update cities based on selected state
  useEffect(() => {
    const filteredCities = [...new Set(cinemas.filter(cinema => cinema.state === selectedState).map(cinema => cinema.city))];
    setCities(filteredCities);
  }, [selectedState, cinemas]);

  // Filter cinemas based on selected criteria
  const filterCinemas = () => {
    const filtered = cinemas.filter(cinema => {
      return (
        (selectedChain === '' || cinema.cinemaChain === selectedChain) &&
        (selectedState === '' || cinema.state === selectedState) &&
        (selectedCity === '' || cinema.city === selectedCity)
      );
    });
    setFilteredCinemas(filtered);
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedChain('');
    setSelectedState('');
    setSelectedCity('');
  };

  // Fetch cinema data on component mount
  useEffect(() => {
    getCinemaData();
    window.scrollTo({ top: 0, behavior: "smooth" });
    const storedCartCount = localStorage.getItem('cartCount');
    if (storedCartCount) {
      setCartCount(parseInt(storedCartCount, 10));
    }
  }, []);

  // Filter cinemas when filter criteria change
  useEffect(() => {
    filterCinemas();
    setCurrentPage(1); // Reset to first page when filters change
  }, [selectedChain, selectedState, selectedCity]);

  // Slice filtered cinemas for pagination
  const getPaginatedCinemas = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredCinemas.slice(0, endIndex);
  };

  // Load more items
  const loadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  // Add item to cart
  const addToCart = (item) => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const existingType = cartItems.length > 0 ? cartItems[0].type : null;

    if (existingType && existingType !== 'cinema') {
      toast.error('You can only add Cinema products to the cart. Please remove other items first.');
      return;
    }

    const existingItemIndex = cartItems.findIndex(cartItem => cartItem._id === item._id);

    if (existingItemIndex !== -1) {
      cartItems[existingItemIndex].quantity = (cartItems[existingItemIndex].quantity || 1) + 1;
      toast.error("Item already in cart. Quantity increased.")
    } else {
      cartItems.push({ ...item, quantity: 1, type: 'cinema' });
      toast.success('Item added to cart.');
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    const newCartCount = cartItems.reduce((acc, cur) => acc + cur.quantity, 0);
    setCartCount(newCartCount);
    localStorage.setItem('cartCount', newCartCount);
  };

  const isItemInCart = (itemId) => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    return cartItems.some(cartItem => cartItem._id === itemId);
  };

  // Truncate title
  const truncateTitle = (title) => {
    if (!title) return '';
    const words = title.split(' ');
    return words.length > 20 ? `${words.slice(0, 5).join(' ')}...` : title;
  };

  return (
    <>
    {loading ? <Loader/> : (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-7" style={{ alignItems: "center" }}>
            <div className="filter">
              <h5 style={{ color: "red", textAlign: "start" }}>
                <span style={{ color: "black" }}> For Cinema Advertising Do Add Cinema In Cart, By Location where You want to ADS.</span>
              </h5>
            </div>
          </div>
          <div className="col-md-5">
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
              <div className=" mb-3 row justify-center">
                <div className="col-md col-4">
                  <label htmlFor="">Cinema</label>
                  <select
                    className="form-select"
                    aria-label="Cinema Chain select"
                    value={selectedChain}
                    onChange={(e) => setSelectedChain(e.target.value)}
                  >
                    <option value=""></option>
                    {cinemaChains.map((chain, index) => (
                      <option key={index} value={chain}>
                        {chain}
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
                    {states.map((state, index) => (
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
                    {cities.map((city, index) => (
                      <option key={index} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Clear Filters Button */}
                <div className=" col-md col-12 mt-2 mt-md-0 text-center">
                  <button className="cssbuttons-io mt-4" onClick={clearFilters}>
                    <span>Clear Filters</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          <hr style={{ margin: '5px' }} />

          {getPaginatedCinemas().map((item, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="cinema-card">
                <img src={item.image} alt="Cinema" className="myiamge" />
                <div className="">
                  <h4>{truncateTitle(item.cinema)} {item.name}</h4>
                  <div>
                    <hr style={{ margin: '5px' }} />
                    <p className="person">
                      <img src={rating} alt="rating" /> &nbsp; &nbsp;Category: {item.category}
                    </p>
                    <p className="person">
                      <img src={location} alt="location" /> &nbsp; &nbsp;State: {item.state}
                    </p>
                    <p className="person">
                      <img src={location} alt="location" /> &nbsp; &nbsp;City: {item.city}
                    </p>
                    <p className="person">
                      <img src={cinemascreen} alt="cinemascreen" /> &nbsp; &nbsp;Screen: {item.audi}
                    </p>
                    <p className="person">
                      <img src={seatcinema} alt="seatcinema" /> &nbsp; &nbsp;Seats Available: {item.seatingCapacity}
                    </p>
                    <p className="person">
                      <img src={spendcinema} alt="spendcinema" /> &nbsp; &nbsp;Price: {item.baseRate10SecWeek}
                    </p>
                    <p className="addbutton">
                      {
                        isItemInCart(item._id) ? (
                          <button className="cssbuttons-io" disabled>
                            <span>Already In Cart</span>
                          </button>
                        ) :
                          <button className="cssbuttons-io" onClick={() => addToCart(item)}>
                            <span>
                              Add To Cart &nbsp;
                              <i className="bi bi-cart4"></i>
                            </span>
                          </button>
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="text-center mt-4">
            {getPaginatedCinemas().length < filteredCinemas.length && (
              <button className="cssbuttons-io mb-5" onClick={loadMore}>
                <span>Load More</span>
              </button>
            )}
          </div>
        </div>
      </div>
    )}
    </>
  );
}

export default Cinema;
