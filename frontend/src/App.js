import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Component/Header/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Component/Footer/Footer";
import About from "./Component/About/About";
import Home from "./Component/Home/Home";
import Vision from "./Pages/Vision/Vision";
import "../src/App.css";
import Mission from "./Pages/Mission/Mission";
import Milestone from "./Pages/Milestone/Milestone";
import Cinema from "./Pages/Cinema/Cinema";
import Cart from "./Component/Cart/Cart";
import Blog from "./Component/Blog/Blog";
import BusBranding from "./Pages/Services/BusBranding";
import OutdorHording from "./Pages/Services/OutdorHording";
import AirportBranding from "./Pages/Services/AirportBranding";
import RadioAdvertisement from "./Pages/Services/RadioAdvertisement";
import WhyWeChoose from './Pages/WhyChooseUs/WhyChooseUs'
import Contact from "./Component/Contact/Contact";
import Login from "./Component/Login/Login";
import Signup from "./Component/SignUp/Signup";
import toast, { Toaster } from 'react-hot-toast';
import PopupBox from "./Component/PopUpBox/PopupBox";
import SingleBlogPage from "./Component/Blog/SingleBlogPage";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <PopupBox />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/milestone" element={<Milestone />} />
          <Route path="/cinema" element={<Cinema />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/singleblog/:_id" element={<SingleBlogPage />} />
          <Route path="/bus-branding" element={<BusBranding />} />
          <Route path="/outdoor-hoardings" element={<OutdorHording />} />
          <Route path="/airport-branding-advertisement" element={<AirportBranding />} />
          <Route path="/radio-advertisement" element={<RadioAdvertisement />} />
          <Route path="/why-we-choose" element={<WhyWeChoose />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <Toaster />
    </>
  );
};

export default App;
