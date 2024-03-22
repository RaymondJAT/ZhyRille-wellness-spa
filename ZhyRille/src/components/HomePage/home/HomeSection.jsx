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
          data-aos="zoom-in"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
          data-aos-delay="500"
        >
          <img
            src={img}
            alt=""
            className="t h-[500px] w-[650px] -my-20 transition hover:scale-105 duration-300"
          />
        </h1>

        {/* button */}

        {/* <button
          type="button"
          className="text-white text-xs w-32 md:w-40 py-2 md:py-3 px-2 md:px-4 text-center my-6 mx-auto md:mx-2.5 rounded-md font-bold uppercase bg-red-700"
          style={red}
          data-aos="fade"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-delay="700"
        >
          join us
        </button> */}
      </div>
    </section>
  );
};

export default HomeSection;
