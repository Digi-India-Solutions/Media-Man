import React from "react";
import { Link } from "react-router-dom";
import "./Footer/footer.css";
import logo from "../../Image/logo.png";
const Footer = () => {
  return (
    <>
      <div class="pg-footer">
        <footer class="footer">
          <div class="row footer-content">
            <div class="footer-content-column">
              <div class="footer-logo">
                <Link class="footer-logo-link mb-5" to={""}>
                  <span class="hidden-link-text">LOGO</span>
                  <img src={logo} width={'90%'} alt="" />
                </Link>
                <p>
                  Media Men is committed to transforming your advertising
                  visions into reality. We provide comprehensive marketing
                  strategies to help your business grow and succeed.
                </p>
              </div>
            </div>
            <div class="footer-content-column">
              <div class="footer-menu">
                <h2 class="footer-menu-name"> Legal</h2>
                <ul id="menu-legal" class="footer-menu-list">
                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                    <Link to={"/why-we-choose"}><i class="bi bi-chevron-double-right"></i> About Us</Link>
                  </li>
                  {/* <li class="menu-item menu-item-type-post_type menu-item-object-page">
                    <Link to={"/"}><i class="bi bi-chevron-double-right"></i> Our Services</Link>
                  </li> */}
                  <li class="menu-item menu-item-type-post_type menu-item-object-page">
                    <Link to={"/blog"}><i class="bi bi-chevron-double-right"></i> Blog</Link>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page">
                    <Link to={"/contact"}><i class="bi bi-chevron-double-right"></i> Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="footer-content-column">
              <div class="footer-menu">
                <h2 class="footer-menu-name"> Services</h2>
                <ul id="menu-legal" class="footer-menu-list">
                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                    <Link to={"/cinema"}><i class="bi bi-chevron-double-right"></i> Cinema Advertising</Link>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page">
                    <Link to={"/outdoor-hoardings"}><i class="bi bi-chevron-double-right"></i> Outdoor - Hoarding</Link>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page">
                    <Link to={"/airport-branding-advertisement"}><i class="bi bi-chevron-double-right"></i> Airport Advertising</Link>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page">
                    <Link to={"/radio-advertisement"}><i class="bi bi-chevron-double-right"></i> Radio Advertisement</Link>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page">
                    <Link to={"/bus-branding"}><i class="bi bi-chevron-double-right"></i> Bus Branding</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="footer-content-column">
              <div class="footer-menu">
                <h2 class="footer-menu-name">Solutions</h2>
                <ul id="menu-quick-links" class="footer-menu-list">
                  <li class="menu-item menu-item-type-custom menu-item-object-custom">
                    <Link rel="noopener noreferrer" to={"/vision"}>
                      <i class="bi bi-chevron-double-right"></i> Vision 
                    </Link>
                  </li>
                  <li class="menu-item menu-item-type-custom menu-item-object-custom">
                    <Link rel="noopener noreferrer" to={"/mission"}>
                      <i class="bi bi-chevron-double-right"></i> Mission
                    </Link>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page">
                    <Link to={"/milestone"}>
                      <i class="bi bi-chevron-double-right"></i> Milestone
                    </Link>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page">
                    <Link to={"/why-we-choose"}>
                      <i class="bi bi-chevron-double-right"></i>Why We Choose
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="footer-content-column">
              <div class="footer-call-to-action">
                <h2 class="footer-call-to-action-title"> Let's Chat</h2>
                <p class="footer-call-to-action-description">
                  Have a support question?
                </p>
                <Link
                  class="footer-call-to-action-button button"
                  to="/contact"
                  target="_self"
                >
                  Get in Touch
                </Link>
              </div>
              <div class="footer-call-to-action">
                <h2 class="footer-call-to-action-title"> You Call Us</h2>
                <p class="footer-call-to-action-link-wrapper">
                  <Link
                    class="footer-call-to-action-link"
                    to="tel:0124-64XXXX"
                    target="_self"
                  >
                    +91 9871169588 +91 9599245542
                  </Link>
                </p>
              </div>
            </div>
            <div class="footer-social-links">
              <svg
                class="footer-social-amoeba-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 236 54"
              >
                <path
                  class="footer-social-amoeba-path"
                  d="M223.06,43.32c-.77-7.2,1.87-28.47-20-32.53C187.78,8,180.41,18,178.32,20.7s-5.63,10.1-4.07,16.7-.13,15.23-4.06,15.91-8.75-2.9-6.89-7S167.41,36,167.15,33a18.93,18.93,0,0,0-2.64-8.53c-3.44-5.5-8-11.19-19.12-11.19a21.64,21.64,0,0,0-18.31,9.18c-2.08,2.7-5.66,9.6-4.07,16.69s.64,14.32-6.11,13.9S108.35,46.5,112,36.54s-1.89-21.24-4-23.94S96.34,0,85.23,0,57.46,8.84,56.49,24.56s6.92,20.79,7,24.59c.07,2.75-6.43,4.16-12.92,2.38s-4-10.75-3.46-12.38c1.85-6.6-2-14-4.08-16.69a21.62,21.62,0,0,0-18.3-9.18C13.62,13.28,9.06,19,5.62,24.47A18.81,18.81,0,0,0,3,33a21.85,21.85,0,0,0,1.58,9.08,16.58,16.58,0,0,1,1.06,5A6.75,6.75,0,0,1,0,54H236C235.47,54,223.83,50.52,223.06,43.32Z"
                ></path>
              </svg>
              <Link
                class="footer-social-link linkedin"
                to="https://www.instagram.com/reel/C89AEbFycQm/?igsh=MWRycWtpdzZqYmpvcg%3D%3D"
              >
                <i className="bi bi-instagram"></i>
              </Link>
              <Link
                class="footer-social-link twitter"
                to="https://www.youtube.com/@tradingsmartedgeacademy"
              >
                <i className="bi bi-youtube"></i>
              </Link>
              <Link
                class="footer-social-link youtube"
                to="https://www.linkedin.com/company/trading-smart-edge/about/"
              >
                <i className="bi bi-linkedin"></i>
              </Link>
              <Link
                class="footer-social-link github"
                to="https://api.whatsapp.com/send?phone=+919871169588 "
              >
                <i className="bi bi-whatsapp"></i>
              </Link>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="footer-copyright-wrapper">
              <p class="footer-copyright-text">
                {/* <Link class="footer-copyright-link" to="#" target="_self">
                  
                  ©2024. | Designed By: DIGI India Solution. | All rights
                  reserved.
                </Link> */}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
