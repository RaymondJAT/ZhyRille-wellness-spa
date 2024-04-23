import React from "react";
import zhyMessage from "../../assets/zhy.png";

const Message = () => {
  return (
    <section className="h-screen w-full flex items-center justify-center bg-black">
      <div className="message-container max-w-[1050px] w-full bg-white rounded-xl my-0 mx-5">
        <div className="message-content flex items-center justify-center py-6 px-5">
          <div className="message-img-box max-w-[55%]">
            <img
              src={zhyMessage}
              alt="zhy message img"
              className="w-full py-0 px-[70px]"
            />
          </div>
          <form action="#" className="w-[40%] mr-8 ml-10">
            <div className="message-topic text-xl font-semibold text-pink-500">
              Send us a Message
            </div>
            <div className="message-input-box h-12 w-full my-4 mx-0 relative">
              <input
                type="text"
                required
                className="absolute h-full w-full rounded-md text-base outline-none pl-4 bg-red-100 border-2 border-solid border-transparent transition-all duration-300 ease-in focus:border-pink-600 focus:bg-white valid:border-pink-600 valid:bg-white"
              />
              <label className="absolute left-[18px] top-1/2 text-gray-400 text-base pointer-events-none translate-y-[-50%] transition-all duration-300 ease-in focus:top-0 focus:left-3 focus:text-pink-600 focus:bg-white valid:top-0 valid:left-3 valid:text-pink-600 valid:bg-white">
                Enter your Name
              </label>
            </div>
            <div className="message-input-box h-12 w-full my-4 mx-0 relative">
              <input
                type="number"
                required
                className="absolute h-full w-full rounded-md text-base outline-none pl-4 bg-red-100 border-2 border-solid border-transparent transition-all duration-300 ease-in focus:border-pink-600 focus:bg-white valid:border-pink-600 valid:bg-white"
              />
              <label className="absolute left-[18px] top-1/2 text-gray-400 text-base pointer-events-none translate-y-[-50%] transition-all duration-300 ease-in focus:top-0 focus:left-3 focus:text-pink-600 focus:bg-white valid:top-0 valid:left-3 valid:text-pink-600 valid:bg-white">
                Enter your contact
              </label>
            </div>
            <div className="message-box min-h-24 relative">
              <textarea
                placeholder="Enter your message"
                className="absolute h-full w-full resize-none bg-red-100 border-2 border-solid border-transparent rounded-md outline-none transition-all duration-300 ease-in focus:border-pink-600 focus:bg-white placeholder:absolute placeholder:text-sm placeholder:text-gray-400 placeholder:left-[18px] placeholder:top-[6px]"
              ></textarea>
            </div>
            <div className="message-input-box h-12 w-full my-4 mx-0 relative">
              <input
                type="submit"
                value="Send message"
                className="text-white bg-pink-500 pl-0 text-lg font-semibold cursor-pointer tracking-wide transition-all duration-150 ease-in hover:bg-pink-600"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Message;
