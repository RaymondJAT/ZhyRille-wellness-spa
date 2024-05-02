import React from "react";

import zhy from "../../assets/back massage.jpg";

const BookForm = () => {
  const styles = {
    backgroundImage: `linear-gradient(to bottom, rgba(10, 0, 0, 0.7), rgba(10, 0, 0, 0.4)),url(${zhy})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    // <section className="banner min-h-screen flex flex-col justify-center items-center text-white pb-5">
    //   <h2 className="pb-10 mb-1 text-3xl font-bold uppercase">
    //     Book your reservation now
    //   </h2>
    <div className="card-container grid grid-cols-2 border-solid border-y-2 bg-stone-950 border-amber-50">
      {/* Booking img */}
      <div
        className="card-img justify-center items-center my-1 mx-1 border-2 border-amber-50 border-solid"
        style={styles}
      ></div>
      <div className="card-content bg-stone-950 h-[330px] border-solid border-2 border-amber-50 my-1 mr-1">
        <h3 className="text-center text-amber-50 pt-6 pl-2.5 text-2xl font-semibold">
          Book Now
        </h3>
        <form>
          <div className="form-row flex w-11/12 my-auto mx-auto">
            <select
              className="block w-full my-4 mx-3 p-1 text-sm outline-none font-light text-gray-400 bg-stone-950"
              name="days"
            >
              <option value="day-select">Select Day</option>
              <option value="day-select" className="text-amber-50">
                Sunday
              </option>
              <option value="day-select" className="text-amber-50">
                Monday
              </option>
              <option value="day-select" className="text-amber-50">
                Tuesday
              </option>
              <option value="day-select" className="text-amber-50">
                Wednesday
              </option>
              <option value="day-select" className="text-amber-50">
                Thursday
              </option>
              <option value="day-select" className="text-amber-50">
                Friday
              </option>
            </select>
            <select
              className="block w-full my-4 mx-3 p-1 text-sm outline-none border-none border-b-2 border-white font-light text-gray-400 bg-stone-950"
              name="hours"
            >
              <option value="hour-select">Select Hour</option>
              <option value="10" className="text-amber-50">
                09:00
              </option>
              <option value="10" className="text-amber-50">
                13:00
              </option>
              <option value="10" className="text-amber-50">
                14:00
              </option>
              <option value="10" className="text-amber-50">
                15:00
              </option>
              <option value="10" className="text-amber-50">
                16:00
              </option>
              <option value="10" className="text-amber-50">
                17:00
              </option>
              <option value="10" className="text-amber-50">
                18:00
              </option>
            </select>
          </div>
          <div className="form-row flex w-11/12 my-auto mx-auto">
            <input
              type="text"
              placeholder="Full Name"
              className="block w-full my-4 mx-3 p-1 text-sm outline-none border-none border-b-2 border-white font-light text-amber-50 bg-stone-950"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="block w-full my-4 mx-3 p-1 text-sm outline-none border-none border-b-2 border-white font-light text-amber-50 bg-stone-950"
            />
          </div>
          <div className="form-row flex w-11/12 my-auto mx-auto pt-5">
            <input
              type="number"
              placeholder="How many persons?"
              min="1"
              className="block w-full my-2 mx-3 p-1 text-sm outline-none border-none border-b-2 border-white font-light text-amber-50 bg-stone-950"
            />
            <input
              type="submit"
              value="Book Table"
              className="btn inline-block py-3 px-8 mr-3 text-xs font-semibold border-2 border-solid border-transparent rounded-md transition-all duration-200 ease-in cursor-pointer bg-amber-50 text-black capitalize hover:translate-x-3 hover:border-2 hover:border-solid hover:border-amber-50 hover:bg-transparent hover:text-amber-50"
            />
          </div>
        </form>
      </div>
    </div>
    // </section>
  );
};

export default BookForm;
