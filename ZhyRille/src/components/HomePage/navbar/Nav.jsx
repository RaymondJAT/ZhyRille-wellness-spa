import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.cjs";
import logo from "../../../assets/png.png";

const Nav = () => {
  let Links = [
    { name: "home.", link: "main" },
    { name: "about.", link: "about" },
    { name: "treatments.", link: "services" },
    { name: "contacts.", link: "contacts" },
  ];

  let [isNav, isSetNav] = useState(false);

  const handleNavToggle = () => {
    isSetNav(!isNav);
  };

  useEffect(() => {
    AOS.init();
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isNav) {
        isSetNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isNav]);

  const header = {
    background: `rgba(0, 0, 0, 0.95)`,
  };

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-50">
      <div className="md:flex items-center justify-between bg-black text-white py-7 md:px-10 px-7">
        <div className="mx-24 flex items-center cursor-pointer">
          <Link to="/">
            <img
              src={logo}
              alt="company logo"
              className="t h-full w-[120px] sm:h-10 flex flex-col justify-between items-center max-w-[1240px]"
            />
          </Link>
        </div>

        <div
          onClick={handleNavToggle}
          className="text-3xl absolute right-8 top-9 cursor-pointer md:hidden"
        >
          {isNav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-5 absolute md:static md:z-auto -z-10 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in capitalize text-center py-0 px-24 ${
            isNav ? "top-20" : "top-[-490px]"
          }`}
          style={header}
        >
          {Links.map((link) => (
            <li className="md:ml-8 md:my-0 my-7  text-sm py-1 px-0 z-10 cursor-pointer">
              <Link
                to={link.link}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-white transition hover:text-yellow-500 hover:font-bold duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
