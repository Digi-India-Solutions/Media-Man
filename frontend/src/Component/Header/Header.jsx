import React, { useEffect, useState } from "react";
import "../Header/header.css";
import { Link } from "react-router-dom";
import logo from "../../Image/logo.png";

function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  
    // Function to update cart count from localStorage
    const updateCartCount = () => {
      const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      setCartCount(storedCartItems.length);
    };
  
    // Initial update when component mounts
    updateCartCount();
  
    // Set interval to update cart count every second
    const intervalId = setInterval(() => {
      updateCartCount();
    }, 1000); // Update every 1 second
  
    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  
  }, []);
  


  const handleMenuActive = () => {
    setIsMenuActive(!isMenuActive);
  };

  const handleMenuDeActive = () => {
    setIsMenuActive(false);
  };

  // desktop dropdown

  const [isHealthActive, setIsHealthActive] = useState(false);
  const [isTravelActive, setIsTravelActive] = useState(false);
  const [isMotorActive, setIsMotorActive] = useState(false);
  const [isCorporateActive, setIsCorporateActive] = useState(false);
  const [isOtherActive, setIsOtherActive] = useState(false);

  const handleHealthActive = () => {
    setIsHealthActive(true);
  };

  const handleHealthDeActive = () => {
    setIsHealthActive(false);
  };

  const handleTravelActive = () => {
    setIsTravelActive(true);
  };

  const handleTravelDeActive = () => {
    setIsTravelActive(false);
  };

  const handleMotorActive = () => {
    setIsMotorActive(true);
  };

  const handleMotorDeActive = () => {
    setIsMotorActive(false);
  };

  // mobile dropdown

  const [isHealthMobActive, setIsHealthMobActive] = useState(false);
  const [isTravelMobActive, setIsTravelMobActive] = useState(false);
  const [isMotorMobActive, setIsMotorMobActive] = useState(false);
  const [isCorporateMobActive, setIsCorporateMobActive] = useState(false);
  const [isOtherMobActive, setIsOtherMobActive] = useState(false);

  const handleHealthMobActive = () => {
    setIsHealthMobActive(!isHealthMobActive);
  };

  const handleTravelMobActive = () => {
    setIsTravelMobActive(!isTravelMobActive);
  };

  const handleMotorMobActive = () => {
    setIsMotorMobActive(!isMotorMobActive);
  };

  const handleCorporateMobActive = () => {
    setIsCorporateMobActive(!isCorporateMobActive);
  };

  const handleOtherMobActive = () => {
    setIsOtherMobActive(!isOtherMobActive);
  };

  return (
    <header>
      <div className="container">
        <div className="top">
          <div className="content">
            <Link to={"https://www.facebook.com/mediamanadvertise"}>
              <i class="bi bi-facebook"></i>
            </Link>
            <Link to={"https://www.linkedin.com/in/pardeep-kumar-4279726a/"}>
              <i class="bi bi-linkedin"></i>
            </Link>
            <Link to={"https://www.youtube.com/@mediaman569"}>
              <i class="bi bi-youtube"></i>
            </Link>
            <Link
              to={
                "https://www.instagram.com/mediamanadvertising?igsh=MXdhbWQzZnMwYnQ5Yw=="
              }
            >
              <i class="bi bi-instagram"></i>
            </Link>
            <Link to={"/https://x.com/Pk94935427"}>
              <i class="bi bi-twitter"></i>
            </Link>

            {/* <Link>Blogs</Link> */}
          </div>
        </div>
        <div className="bottom">
          <Link onClick={handleMenuDeActive} to={"/"} className="logo">
            <img src={logo} alt="Logo" />
          </Link>
          <nav>
            <ul className="desktop-mod">
              <li>
                <Link
                  to={""}
                  onMouseEnter={handleHealthActive}
                  onMouseLeave={handleHealthDeActive}
                  className="health-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  onMouseEnter={handleTravelActive}
                  onMouseLeave={handleTravelDeActive}
                  // onClick={handleMenuDeActive}
                  className="travel-pointer"
                >
                  About Us &nbsp; <i class="bi bi-caret-down-fill"></i>
                  <ul
                    className={`travel-hover ${isTravelActive ? "travel-active" : ""
                      }`}
                  >
                    <li>
                      <Link onClick={handleMenuDeActive} to={"/vision"}>
                        Vision
                      </Link>
                    </li>
                    <li>
                      <Link onClick={handleMenuDeActive} to={"/mission"}>
                        Mission
                      </Link>
                    </li>
                    <li>
                      <Link onClick={handleMenuDeActive} to={"/milestone"}>
                        Milestone
                      </Link>
                    </li>
                    <li>
                      <Link onClick={handleMenuDeActive} to={"/why-we-choose"}>
                        Why We Choose
                      </Link>
                    </li>
                  </ul>
                </Link>
              </li>
              <li>
                <Link
                  className="Motor-pointer"
                  to={""}
                  onMouseEnter={handleMotorActive}
                  onMouseLeave={handleMotorDeActive}
                // onClick={handleMenuDeActive}
                >
                  Our Service &nbsp; <i class="bi bi-caret-down-fill"></i>
                  <ul
                    className={`Motor-hover ${isMotorActive ? "Motor-active" : ""
                      }`}
                  >
                    <li>
                      <Link onClick={handleMenuDeActive} to={"/cinema"}>
                        Cinema Advertising
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleMenuDeActive}
                        to={"/outdoor-hoardings"}
                      >
                        Outdoor Hoardings
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleMenuDeActive}
                        to={"/airport-branding-advertisement"}
                      >
                        Airport Branding
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleMenuDeActive}
                        to={"/radio-advertisement"}
                      >
                        Radio Advertising
                      </Link>
                    </li>
                    <li>
                      <Link onClick={handleMenuDeActive} to={"/bus-branding"}>
                        Bus Branding
                      </Link>
                    </li>
                  </ul>
                </Link>
              </li>
              <li>
                <Link onClick={handleMenuDeActive} to={"/blog"}>
                  Blog
                </Link>
              </li>
              <li>
                <Link onClick={handleMenuDeActive} to={"/contact"}>
                  Contact
                </Link>
              </li>
              {/* <li>
                <Link onClick={handleMenuDeActive} to={"/cart"}>
                  Cart &nbsp;
                  <i class="bi bi-cart4" style={{ fontSize: "22px" }}></i>(
                  {cartCount})
                </Link>
              </li> */}
            </ul>
            <ul className={`mob-mod ${isMenuActive ? "menu-Active" : ""}`}>
              <li>
                <Link
                  className="health-mob-pointer formarrow"
                  onClick={handleHealthMobActive}
                >
                  {isHealthMobActive ? <>Home</> : <>Home</>}
                </Link>
              </li>
              <li>
                <Link onClick={handleTravelMobActive} className="formarrow">
                  {isTravelMobActive ? (
                    <>
                      About Us
                      <i className="ri-subtract-line rotate"></i>
                    </>
                  ) : (
                    <>
                      About Us <i className="ri-add-line"></i>
                    </>
                  )}
                </Link>
                <ul
                  className={`Travel-mob-hover ${isTravelMobActive ? "Travel-mob-active" : ""
                    }`}
                >
                  <li>
                    <Link
                      to={"/vision"}
                      onClick={() => {
                        handleMenuDeActive();
                        handleTravelMobActive();
                      }}
                    >
                      <i className="ri-arrow-right-line"></i> Vision
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/mission"}
                      onClick={() => {
                        handleMenuDeActive();
                        handleTravelMobActive();
                      }}
                    >
                      <i className="ri-arrow-right-line"></i> Mission
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/milestone"}
                      onClick={() => {
                        handleMenuDeActive();
                        handleTravelMobActive();
                      }}
                    >
                      <i className="ri-arrow-right-line"></i> Milestone
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link onClick={handleMotorMobActive} className="formarrow">
                  {isMotorMobActive ? (
                    <>
                      Our Services
                      <i className="ri-subtract-line rotate"></i>
                    </>
                  ) : (
                    <>
                      Our Services <i className="ri-add-line"></i>
                    </>
                  )}
                </Link>
                <ul
                  className={`Motor-mob-hover ${isMotorMobActive ? "Motor-mob-active" : ""
                    }`}
                >
                  <li>
                    <Link
                      to={"/cinema"}
                      onClick={() => {
                        handleMenuDeActive();
                        handleMotorMobActive();
                      }}
                    >
                      <i className="ri-arrow-right-line"></i> Cinema Advertising
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/outdoor-hoardings"}
                      onClick={() => {
                        handleMenuDeActive();
                        handleMotorMobActive();
                      }}
                    >
                      <i className="ri-arrow-right-line"></i> Outdoor Hoardings
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/airport-branding-advertisement"}
                      onClick={() => {
                        handleMenuDeActive();
                        handleMotorMobActive();
                      }}
                    >
                      <i className="ri-arrow-right-line"></i> Airport Branding
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/radio-advertisement"}
                      onClick={() => {
                        handleMenuDeActive();
                        handleMotorMobActive();
                      }}
                    >
                      <i className="ri-arrow-right-line"></i> Radio Advertising
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/bus-branding"}
                      onClick={() => {
                        handleMenuDeActive();
                        handleMotorMobActive();
                      }}
                    >
                      <i className="ri-arrow-right-line"></i> Bus Branding
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link onClick={handleMenuDeActive} to={'/blog'} className="formarrow">
                  {isOtherMobActive ? <>Blog</> : <>Blog</>}
                </Link>
              </li>
              <li>
                <Link onClick={handleMenuDeActive} to={'/contact'} className="formarrow">
                  {isOtherMobActive ? <>Contact</> : <>Contact</>}
                </Link>
              </li>
              <li>
                <Link onClick={handleMenuDeActive} to={'/cart'} className="formarrow">
                  {isOtherMobActive ? <>Cart</> : <>Cart</>}
                </Link>
              </li>
              <div className="social-link">
                <i className="ri-facebook-box-line"></i>
                <i className="ri-instagram-line"></i>
                <i className="ri-twitter-line"></i>
              </div>
            </ul>
          </nav>

          <div>
            <Link className="d-flex responsive_cart" onClick={handleMenuDeActive} to={"/cart"}>
              <i class="bi bi-cart4" style={{ fontSize: "22px" }}></i>({cartCount})
            </Link>
          </div>
          <div className="btn-box">
            <div className="menu" onClick={handleMenuActive}>
              <i className="ri-menu-line"></i>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
