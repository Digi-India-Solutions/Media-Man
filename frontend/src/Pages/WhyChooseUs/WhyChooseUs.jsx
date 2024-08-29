import React, { useEffect } from "react";
import "./whychoose.css";
import MetaTag from "../../Component/Meta/MetaTag";
function WhyChooseUs() {
  const whychoose = [
    {
      heading: "Why Advertise in Cinema?",
      desc: `Cinema advertising offers a unique opportunity to connect with a diverse and engaged audience. With moviegoers being attentive and immersed in the cinema experience, your brand can achieve maximum visibility. Cinema ads capture the audience's focus through compelling and innovative content, making it an effective platform for delivering your brand message.`,
    },
    {
      heading: "Benefits of Cinema Advertising",
      desc: `Cinema ads target a captive audience attending popular films. Positioned before trailers and the main feature, these ads are impossible to skip or ignore. This strategic placement ensures your message reaches movie enthusiasts in a setting designed for full engagement.`,
    },
    {
      heading: "Cost of Cinema Advertising",
      desc: `The cost of cinema advertising varies based on ad size, the number of showings, and movie type. For detailed and competitive rates, visit MediaMen Advertising’s official website, where you can select the best options for your advertising needs.`,
    },
    {
      heading: "How Cinema Advertising Works",
      desc: `Advertisers can choose to place their ads in high-profile films or during specific time slots. By selecting ad spots that align with target demographics, you ensure your ad reaches potential customers. You can customize the duration and frequency of your ads to suit your campaign goals.`,
    },
    {
      heading: "Effectiveness of Cinema Ads",
      desc: `Advertisers can choose to place their ads in high-profile films or during specific time slots. By selecting ad spots that align with target demographics, you ensure your ad reaches potential customers. You can customize the duration and frequency of your ads to suit your campaign goals.`,
    },
    {
      heading: "Duration of Cinema Ads",
      desc: `Cinema ads typically run from Friday and are shown approximately 3 to 4 times a day. Advertisers receive proof of execution after their ads air, including photographs for off-screen ads or inspection passes for on-screen ads. Censor certificates are required for video ads.`,
    },
    {
      heading: "Cinema Advertising Options",
      title: `Cinema advertising includes both on-screen and off-screen options:`,
      desc: `Slide Advertising: Image ads with or without audio, with a lead time of 1 day.
Video Advertising: Requires CBFC approval and a 7-day lead time. Videos must be formatted to J2K before being showcased.
Premium Pricing for Major Films`,
      desc2: `Mega Blockbuster: Premium charges of 100%-200% on rate cards for multiplex screens, applicable for ads less than 5 weeks old.
Blockbuster: Premium charges of 50%-150% on rate cards, applicable for ads less than 4 weeks old.`,
    },
    {
      heading: "Pricing for On-Screen Cinema Advertising",
      desc: `Costs depend on creative length, movie type (blockbuster or mega-blockbuster), and campaign duration. Premium charges may apply for top spots and sponsorships.`,
    },
    {
      heading: "Advertise with MediaMen Advertising",
      desc: `At MediaMen Advertising, we offer cost-effective cinema advertising solutions to help you reach a targeted audience in a captivating environment. Our expertise ensures optimal placement and budget management, guaranteeing you the best rates and impactful results`,
    },
  ];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])
  return (
    <>
      <MetaTag
        title="Why Choose Media Man Advertising"
        description="Discover why Media Man Advertising stands out with its competitive media plans, extensive experience, and commitment to delivering impactful advertising solutions. Learn about the benefits and options of cinema advertising and how we help brands achieve their goals."
        keyword="Media Man Advertising, cinema advertising, benefits of cinema ads, advertising options, advertising agency India, Media Man benefits"
      />

      <div class="feat bg-gray pt-5 pb-5">
        <div class="container">
          <div class="row">
            <div class="section-head col-sm-12">
              <h4>
                <span>Why Choose</span> Us?
              </h4>
              <p>
                We are consistently providing various advertising services to a vast and diverse clientele; corporate, retail, education & media agencies. We offer the most competitive media plans and rates to all our clients. Since 2012, Mediaman Advertising  has been flawlessly doing what it was committed to do. From the smallest to the largest campaigns, our vision is always clear to give it our best. We have an expertise of 12+ years in advertising and we are associated with all the leading and renewed advertising platforms across India.
              </p>
              <p>
                We are one of the leading multi-service agency with presence across India, we always focus on bringing brands to larger than life with perfect planning, strategic approach and our expertise to provide quality and great results. Being one of the oldest and trusted advertising agencies in India, Mediaman Advertising believes in delivering quality, loyalty and satisfaction, in the best form possible!
              </p>
            </div>
            {whychoose.map((item) => (
              <div class="col-lg-4 col-sm-6">
                <div class="item">
                  <span class="icon feature_box_col_one">
                    <i class="bi bi-globe"></i>
                  </span>
                  <h6><b> {item.heading}</b></h6>
                  <p>
                    {item.title}
                  </p>
                  <p>
                    {item.desc}
                  </p>
                  <p>
                    {item.desc2}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyChooseUs;
