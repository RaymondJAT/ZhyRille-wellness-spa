import React from "react";

const Footer = () => {
  return (
    <footer className="footer bottom-0 w-full bg-stone-950">
      <div className="footer-container flex p-12">
        <div className="left section basis-1/2 py-0 px-5">
          <h2 className="text-lg font-semibold">About Us</h2>
          <div className="footer-content mt-5 relative before:absolute before:content-[''] before:h-[2px] before:-top-2.5 before:w-full after:absolute after:content-[''] after:h-[2px] after:-top-2.5 after:w-[15%] after:bg-yellow-500">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              omnis possimus ex quidem sunt perspiciatis repellat, aperiam
              veritatis totam culpa.
            </p>

            <div className="social mt-5">
              <a href="#" className="py-0 px-[2px]">
                <span className="Social-icons h-10 w-10 text-center bg-transparent leading-10 text-lg rounded-[50px] duration-200 border border-solid border-gray-500 hover:bg-yellow-500">
                  icon
                </span>
              </a>
              <a href="#" className="py-0 px-[2px]">
                <span className="Social-icons h-10 w-10 text-center bg-transparent leading-10 text-lg rounded-[50px] duration-200 border border-solid border-gray-500 hover:bg-yellow-500">
                  icon
                </span>
              </a>
              <a href="#" className="py-0 px-[2px]">
                <span className="Social-icons h-10 w-10 text-center bg-transparent leading-10 text-lg rounded-[50px] duration-200 border border-solid border-gray-500 hover:bg-yellow-500">
                  icon
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="center section basis-1/2 py-0 px-5">
          <h2 className="text-lg font-semibold">Contact Us</h2>
          <div className="footer-content mt-5 relative before:absolute before:content-[''] before:h-[2px] before:-top-2.5 before:w-full after:absolute after:content-[''] after:h-[2px] after:-top-2.5 after:w-[15%] after:bg-yellow-500">
            <div className="place">
              <span className="Icon"></span>
              <span className="text text-base font-medium pl-2.5">
                New York, USA
              </span>
            </div>

            <div className="phone my-4 mx-0">
              <span className="Icon"></span>
              <span className="text text-base font-medium pl-2.5">
                +09123123123
              </span>
            </div>

            <div className="email">
              <span className="Icon"></span>
              <span className="text text-base font-medium pl-2.5">
                contact@example.com
              </span>
            </div>
          </div>
        </div>

        <div className="right section basis-1/2 py-0 px-5">
          <h2 className="text-lg font-semibold">Subscribe</h2>
          <div className="footer-content mt-5 relative before:absolute before:content-[''] before:h-[2px] before:-top-2.5 before:w-full after:absolute after:content-[''] after:h-[2px] after:-top-2.5 after:w-[15%] after:bg-yellow-500">
            <form action="#">
              <div className="email">
                <div className="text text-base mb-[2px]">Email</div>
              </div>
              <input
                type="email"
                required
                className="w-full h-9 text-base bg-transparent border border-solid border-gray-500"
              />
              <div className="btn mt-2.5">
                <button
                  type="submit"
                  className="w-full h-10 border-none outline-none bg-yellow-500 text-base font-medium cursor-pointer duration-200 hover:bg-black"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <center className="p-2.5 text-xs bg-stone-500">
          <div>
            <span>
              Powered By{" "}
              <a href="#" className="no-underline hover:underline">
                2024 | All Rights Reserved | By RaymondJAT
              </a>
            </span>
          </div>
        </center>
      </div>
    </footer>
  );
};

export default Footer;
