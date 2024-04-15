import React from "react";
import background from "../../assets/about-bg.png";
import towel from "../../assets/back massage.jpg";
import massage from "../../assets/oilbased.jpg";

const About = () => {
  const styles = {
    backgroundImage: `url(${background})`,
    backgroundColor: "#fdf4db",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    // backgroundAttachment: "fixed",
    innerWidth: "100%",
  };

  const img = {
    background: `url(${towel})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    innerWidth: "100%",
  };

  return (
    <section
      id="about"
      className="p-0 m-0 box-border list-none no-underline border-none outline-none scroll-smooth bg-black"
    >
      <div className="holiday grid grid-cols-2 items-center gap-36 mb-9 -mt-12 ">
        <div className="holiday-img w-full h-auto rounded-xl">
          <img
            src={massage}
            alt="oil massage"
            className="w-full h-auto rounded-xl"
          />
        </div>
        <div className="holiday-text">
          <h5 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-5">
            learn more about us
          </h5>
          <h2 className="text-orange-100 text-5xl font-extrabold leading-5 mb-6">
            About ZhyRille
          </h2>
          <p className="text-sm font-medium leading-7 text-gray-300 mb-9">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ex
            eum vitae dolorum aliquam veniam tempora, asperiores dolorem
            voluptates reprehenderit rem totam blanditiis, sequi labore!
          </p>
          <a
            href="#"
            className="btn inline-block py-3 px-10 bg-orange-100 text-black text-sm font-semibold border-2 border-transparent rounded-md transition-all duration-75 ease-in cursor-pointer hover:translate-x-3 hover:border-2 hover:border-black hover:text-black hover:bg-transparent"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
