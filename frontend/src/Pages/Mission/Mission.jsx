import React, { useEffect } from "react";
import mission from "../../Image/mission.jpg";
function Mission() {
  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  },[])
  return (
    <>
      <div>
        <div className="container">
          <div className="mt-5 mb-3 text-center">
            <h2>Mission</h2>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p className="para" style={{textAlign:"center"}}>
                To empower brands with the power of impactful storytelling,
                driving measurable results through innovative, data-driven
                advertising solutions that resonate with the diverse Indian
                audience.
              </p>
            </div>
            <div className="col-md-6">
              <p className="para">
                Empowering Brands: Positions Mediaman Advertising as a partner
                that helps brands achieve their goals.
              </p>
              <p className="para">
                Impactful Storytelling: Highlights focus on crafting engaging
                narratives that connect wittheh audiences.
              </p>
              <p className="para">
                Measurable Results: Emphasizes the importance of delivering
                concrete outcomes for clients.
              </p>
              <p className="para">
                Innovative & Data-Driven: Showcases the commitment to using
                cutting-edge approaches and data insights.
              </p>
              <p className="para">
                Diverse Indian Audience: Recognizes the importance of tailoring
                campaigns for the specific Indian market.
              </p>
            </div>
            <div className="col-md-6">
              <img src={mission} width={"100%"} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mission;
