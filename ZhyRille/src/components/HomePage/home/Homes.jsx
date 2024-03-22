import React from "react";
import HomeSection from "./HomeSection";
import zhy from "../../../assets/Zhy-bg.png";
import Nav from "../navbar/Nav";
import zhyrille from "../../../assets/final logo.png";

const HomePage = () => {
  const styles = {
    backgroundImage: `linear-gradient(rgba(10, 0, 0, 0.5), rgba(10, 0, 0, 0.7)),url(${zhy})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    innerWidth: "100%",
  };

  return (
    <section>
      <div id="main" className="w-full min-h-screen pb-16" style={styles}>
        <Nav />
        <HomeSection img={zhyrille} />
      </div>
    </section>
  );
};

export default HomePage;
