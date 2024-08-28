import React from "react";
import "../WhoWeAre/whoweare.css";
import image from "../../Image/roadbanner4.webp";
function WhoWeAre() {
  return (
    <>
      <section class="about-section">
        <div class="container">
          <div class="row">
            <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2">
              <div class="inner-column">
                <div class="sec-title">
                  <span class="title">About Company</span>
                  <h2>We are Create Banners.</h2>
                </div>
                <div class="text">
                  At Mediaman Advertising, we're passionate about the power of
                  storytelling in advertising. Since 2012, we've been a trusted
                  partner for brands, crafting impactful advertising solutions
                  that capture attention and drive results
                </div>
                <div class="btn-box">
                  <a href="/contact" class="theme-btn btn-style-one">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div class="image-column col-lg-6 col-md-12 col-sm-12">
              <div class="inner-column wow fadeInLeft">
                <figure class="image-1">
                  <a href="#" class="lightbox-image" data-fancybox="images">
                    <img
                      title="Rahul Kumar Yadav"
                      src={image}
                      width={"100%"}
                      alt=""
                    />
                  </a>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhoWeAre;
