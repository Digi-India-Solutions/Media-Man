import React, { useEffect, useState } from "react";
import "./counter.css"; // Make sure to include your CSS for styling

const CounterSection = () => {
  const [viewed, setViewed] = useState(false);

  // Function to format numbers with commas
  const numberWithCommas = (n) => {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Ease-out function for animation
  const easeOutQuad = (t) => t * (2 - t);

  // Function to animate counting up
  const animateCountUp = (el, countTo) => {
    let frame = 0;
    const animationDuration = 2000;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(animationDuration / frameDuration);

    const counter = setInterval(() => {
      frame++;
      const progress = easeOutQuad(frame / totalFrames);
      const currentCount = Math.round(countTo * progress);

      if (parseInt(el.innerHTML, 10) !== currentCount) {
        el.innerHTML = numberWithCommas(currentCount);
      }

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
  };

  // Effect to handle scroll and animation
  useEffect(() => {
    const elements = document.querySelectorAll(".section-counter");

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          !entry.target.classList.contains("viewed")
        ) {
          entry.target.classList.add("viewed");
          setViewed(true);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    elements.forEach((element) => {
      observer.observe(element);
    });

    if (viewed) {
      document.querySelectorAll(".countup").forEach((el) => {
        animateCountUp(el, parseInt(el.getAttribute("data-count"), 10));
      });
    }

    return () => {
      observer.disconnect();
    };
  }, [viewed]);

  return (
    <>
      <div className="container">
        <div className="row section-counter">
          <div
            className="col-6 col-sm-6 col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="counter-wrap mb-5 mb-lg-0">
              <span className="number">
                <span className="countup text-primary" data-count="34">
                  0
                </span>
              </span>
              <div className="caption text-black-50">
              States
              </div>
            </div>
          </div>
          <div
            className="col-6 col-sm-6 col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="counter-wrap mb-5 mb-lg-0">
              <span className="number">
                <div className="countup text-primary" data-count="7">
                  0
                </div>
              </span>
              <div className="caption text-black-50">
              Union Territory
              </div>
            </div>
          </div>
          <div
            className="col-6 col-sm-6 col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="counter-wrap mb-5 mb-lg-0">
              <span className="number">
                <div className="countup text-primary" data-count="9000+">
                  0
                </div>
              </span>
              <div className="caption text-black-50">Screen</div>
            </div>
          </div>
          <div
            className="col-6 col-sm-6 col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="counter-wrap mb-5 mb-lg-0">
              <span className="number">
                <div className="countup text-primary" data-count="536">
                  0
                </div>
              </span>
              <div className="caption text-black-50">District</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CounterSection;
