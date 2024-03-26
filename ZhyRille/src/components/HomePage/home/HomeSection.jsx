import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeSection = ({ img }) => {
  const red = {
    background: "#FF0000",
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="hero_section" className="px-4 md:px-8 lg:px-16 xl:px-20">
      {/* hero title */}
      <div className="align_center flex-col justify-center ">
        <h1
          id="hero_title"
          className="text-3xl md:text-5xl md:font-medium mt-56 lg:text-6xl lg:font-medium xl:text-6xl xl:font-medium text-white text-center font-medium tracking-wide"
          data-aos="zoom-in-up"
          data-aos-duration="400"
          data-aos-easing="ease-in-out"
          data-aos-delay="500"
        >
          <img
            src={img}
            alt=""
            className="t h-[500px] w-[600px] -my-20 transition hover:scale-105 duration-300"
          />
        </h1>
      </div>
    </section>
  );
};

export default HomeSection;
