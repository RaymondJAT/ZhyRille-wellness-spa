import React from "react";
import background from "../../assets/about-bg.png";
import towel from "../../assets/towel.jpg";

const About = () => {
  const styles = {
    backgroundImage: `url(${background})`,
    backgroundColor: "#fdf4db",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    innerWidth: "100%",
  };

  const img = {
    background: `url(${towel})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center"
      style={styles}
    >
      <div className="container w-11/12 max-w-[1000px] my-0 mx-auto flex items-center justify-center">
        <div
          className="left w-[800px] h-[500px] rounded-lg my-14 mx-0 border-[3px] border-black"
          style={img}
        ></div>
        <div className="right w-1/2 min-h-[400px] bg-yellow-500 flex items-center justify-center p-8 rounded-lg -ml-44 border-[3px] border-black">
          <div className="content">
            <h1 className="text-4xl font-semibold">About Us</h1>
            <p className="my-5 mx-0 font-medium leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              quae, eos quos, voluptas odit dolores enim et, quasi corrupti
              exercitationem aperiam distinctio vel error impedit dolorum porro
              eaque aut autem iure nesciunt minus veniam aspernatur odio?
              Adipisci nesciunt accusamus quia maiores sed fugiat quibusdam
              similique odit odio repellendus voluptas, cum error perferendis
              laudantium eveniet maxime distinctio. Doloremque expedita nobis
              ipsa?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
