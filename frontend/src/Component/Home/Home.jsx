import React from 'react'
import HomeSlider from '../HomeSlider/HomeSlider'
// import OurServices from '../OurServices/OurServices'
import OurSolution from '../OurSolution/OurSolution'
import WhoWeAre from '../WhoWeAre/WhoWeAre'
import OurServices from '../ItsAmbient/OurServices'
import CounterSection from '../CounterSection/CounterSection'
import MetaTag from '../Meta/MetaTag'

const Home = () => {
  return (
    <div>

      <MetaTag
        title="Media Man - Leading Multi-Service Advertising Agency in India"
        description="Media Man, with over 12 years of expertise, offers competitive media plans across India. Specializing in cinema advertising, we bring brands to life with strategic planning and flawless execution."
        keyword="advertising agency, cinema advertising, media plans, advertising services, India, Media Man, multi-service agency, competitive rates, strategic planning"
      />


      <HomeSlider />
      <OurServices />
      <OurSolution />
      <WhoWeAre />
      <CounterSection />

    </div>
  )
}

export default Home