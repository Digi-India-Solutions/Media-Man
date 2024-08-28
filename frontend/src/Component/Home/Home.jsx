import React from 'react'
import HomeSlider from '../HomeSlider/HomeSlider'
// import OurServices from '../OurServices/OurServices'
import OurSolution from '../OurSolution/OurSolution'
import WhoWeAre from '../WhoWeAre/WhoWeAre'
import OurServices from '../ItsAmbient/OurServices'
import CounterSection from '../CounterSection/CounterSection'

const Home = () => {
  return (
    <div>
       <HomeSlider />
        <OurServices />
        <OurSolution />
        <WhoWeAre/>
        <CounterSection/>

    </div>
  )
}

export default Home