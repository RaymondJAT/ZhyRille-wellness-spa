import React from "react";

import zhy from "../../assets/back massage.jpg";

const BookForm = () => {
  const styles = {
    backgroundImage: `linear-gradient(to left, rgba(10, 0, 0, 0.8), rgba(10, 0, 0, 0.5)),url(${zhy})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    // <section className="banner min-h-screen flex flex-col justify-center items-center text-white pb-5">
    //   <h2 className="pb-10 mb-1 text-3xl font-bold uppercase">
    //     Book your reservation now
    //   </h2>
    <div className="card-container grid grid-cols-2 border-solid border-y-2 border-stone-950">
      <div className="card-img" style={styles}></div>
      <div className="card-content bg-white h-[330px]">
        <h3 className="text-center text-black pt-6 pl-2.5 text-2xl font-semibold">
          Book Now
        </h3>
        <form>
          <div className="form-row flex w-11/12 my-auto mx-auto">
            <select
              className="block w-full my-4 mx-3 p-1 text-sm outline-none border-b-4 border-gray-300 font-light text-gray-400"
              name="days"
            >
              <option value="day-select">Select Day</option>
              <option value="day-select" className="text-black">
                Sunday
              </option>
              <option value="day-select" className="text-black">
                Monday
              </option>
              <option value="day-select" className="text-black">
                Tuesday
              </option>
              <option value="day-select" className="text-black">
                Wednesday
              </option>
              <option value="day-select" className="text-black">
                Thursday
              </option>
              <option value="day-select" className="text-black">
                Friday
              </option>
            </select>
            <select
              className="block w-full my-4 mx-3 p-1 text-sm outline-none border-none border-b-2 border-white font-light text-gray-400"
              name="hours"
            >
              <option value="hour-select">Select Hour</option>
              <option value="10" className="text-black">
                09:00
              </option>
              <option value="10" className="text-black">
                13:00
              </option>
              <option value="10" className="text-black">
                14:00
              </option>
              <option value="10" className="text-black">
                15:00
              </option>
              <option value="10" className="text-black">
                16:00
              </option>
              <option value="10" className="text-black">
                17:00
              </option>
              <option value="10" className="text-black">
                18:00
              </option>
            </select>
          </div>
          <div className="form-row flex w-11/12 my-auto mx-auto">
            <input
              type="text"
              placeholder="Full Name"
              className="block w-full my-4 mx-3 p-1 text-sm outline-none border-none border-b-2 border-white font-light text-black"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="block w-full my-4 mx-3 p-1 text-sm outline-none border-none border-b-2 border-white font-light text-black"
            />
          </div>
          <div className="form-row flex w-11/12 my-auto mx-auto">
            <input
              type="number"
              placeholder="How many persons?"
              min="1"
              className="block w-full my-4 mx-3 p-1 text-sm outline-none border-none border-b-2 border-white font-light text-black"
            />
            <input
              type="submit"
              value="Book Table"
              className="text-white bg-red-400 w-full py-3 my-4 mx-3 rounded-md cursor-pointer hover:opacity-90"
            />
          </div>
        </form>
      </div>
    </div>
    // </section>
  );
};

export default BookForm;
