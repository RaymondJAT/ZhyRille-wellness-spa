import React from "react";
import "./App.css";
import HomePage from "./components/HomePage/home/Homes";
import About from "./components/AboutSection/About";
import Modal from "./components/Modal/Modal";
import Testimonial from "./components/TestimonialSection/Testimonial";

function App() {
  return (
    <>
      <HomePage />
      <About />
      <Modal />
      <Testimonial />
    </>
  );
}

export default App;
