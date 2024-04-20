import React from "react";
import "./App.css";
import HomePage from "./components/HomePage/home/Homes";
import About from "./components/AboutSection/About";
import Modal from "./components/Modal/Modal";
import Testimonial from "./components/TestimonialSection/Testimonial";
import Footer from "./components/FooterSection/Footer";
import Map from "./components/FooterSection/Map";

function App() {
  return (
    <>
      <HomePage />
      <About />
      <Modal />
      <Testimonial />
      <Map />
      <Footer />
    </>
  );
}

export default App;
