import React from "react";

const BookForm = () => {
  return (
    <div className="card-container">
      <div className="card-img"></div>

      <div className="card-content">
        <h3>Book Now</h3>
        <form>
          <div className="form-row">
            <select name="days">
              <option value="day-select">Select Day</option>
              <option value="day-select">Sunday</option>
              <option value="day-select">Monday</option>
              <option value="day-select">Tuesday</option>
              <option value="day-select">Wednesday</option>
              <option value="day-select">Thursday</option>
              <option value="day-select">Friday</option>
            </select>

            <select name="hours">
              <option value="hour-select">Select Hour</option>
              <option value="10">09:00</option>
              <option value="10">13:00</option>
              <option value="10">14:00</option>
              <option value="10">15:00</option>
              <option value="10">16:00</option>
              <option value="10">17:00</option>
              <option value="10">18:00</option>
            </select>
          </div>

          <div className="form-row">
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Phone Number" />
          </div>

          <div className="form-row">
            <input type="number" placeholder="How many persons?" min="1" />
            <input type="submit" value="Book Table" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
