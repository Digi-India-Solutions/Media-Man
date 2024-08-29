import React, { useEffect } from "react";
import vision from "../../Image/vision.avif";
import MetaTag from "../../Component/Meta/MetaTag";
function Vision() {
  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  },[])
  return (
    <>
    <MetaTag
  title="Our Vision - Media Man Advertising"
  description="At Media Man, our vision is to revolutionize Indian advertising with innovative and data-driven brand storytelling. We aim to captivate audiences and become a pioneering force in the industry."
  keyword="Media Man vision, Indian advertising, brand storytelling, innovative advertising, data-driven advertising, pioneering advertising agency"
/>

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
