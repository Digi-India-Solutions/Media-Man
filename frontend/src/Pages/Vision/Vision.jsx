import React, { useEffect } from "react";
import vision from "../../Image/vision.avif";
function Vision() {
  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  },[])
  return (
    <>
      <div>
        <div className="container mt-5">
          <div className="mb-5 text-center">
            <h2>Vision</h2>
          </div>
          <div className="row">
            <div className="col-md-6 section-head">
              <p>
                Mediaman Advertising isn't just another advertising agency. We
                dream of becoming a pioneering force, shaping the narrative of
                Indian advertising. Our vision is to be synonymous with
                innovative and data-driven brand storytelling, captivating
                audiences across the nation.
              </p>
            </div>
            <div className="col-md-6">
              <img src={vision} width={"100%"} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Vision;
