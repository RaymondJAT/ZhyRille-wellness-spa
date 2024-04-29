import React from "react";
import zhyMessage from "../../assets/zhy.png";

const Message = () => {
  return (
    <div className="contact-body max-w-[1320px] my-0 mx-auto py-0 px-4 ">
      <div className="contact-form py-8 px-0 border-t-2 border-yellow-500 grid grid-cols-2 gap-8">
        <form>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <input
              type="text"
              className="form-control w-full border-2 border-solid border-yellow-500 rounded-md p-3 my-2 text-sm outline-0"
              placeholder="First Name"
            />
            <input
              type="text"
              className="form-control w-full border-2 border-solid border-yellow-500 rounded-md p-3 my-2 text-sm outline-0"
              placeholder="Last Name"
            />
          </div>

          <div className="grid grid-cols-1">
            <input
              type="number"
              className="form-control w-full border-2 border-solid border-yellow-500 rounded-md p-3 my-2 text-sm outline-0 text-black"
              placeholder="Phone"
            />
          </div>

          <textarea
            rows="5"
            className="form-control w-full border-2 border-solid border-yellow-500 rounded-md p-3 my-2 text-sm outline-0"
            placeholder="Message"
          ></textarea>

          <input
            type="submit"
            value="Send Message"
            className="send-btn text-xs font-bold uppercase text-black bg-yellow-500 border-none rounded-md py-3 px-4 cursor-pointer transition-all duration-200 ease-in hover:opacity-80"
          />
        </form>

        <div className="flex justify-end items-center pr-4">
          <img
            src={zhyMessage}
            alt="zhycontactimage"
            className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/3"
          />
        </div>
      </div>
    </div>
  );
};

export default Message;
