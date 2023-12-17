import React, { useState } from "react";
import "./CSS/Booking.css";
import image2 from "../assests/Group 167.png";

const BookingForm = () => {
  const [rooms, setRooms] = useState(1);

  const increaseRooms = () => {
    setRooms(rooms + 1);
  };

  const decreaseRooms = () => {
    if (rooms > 1) {
      setRooms(rooms - 1);
    }
  };

  return (
    <div className="booking-container">
      <div className="booking-image">
        <img src={image2} alt="booking" />
      </div>
      <form className="booking-content">
        <h1>Book Now</h1>
        <h1>
          Easy <br />
          Booking <br />
          <span>For Your Convenience</span>
        </h1>
        <div className="form-row">
          <label>
            City:
            <input type="text" />
          </label>
        </div>
        <div className="form-row">
          <label>
            Arrival Date:
            <input type="date" />
          </label>
          <label>
            Departure Date:
            <input type="date" />
          </label>
        </div>
        <div className="form-row">
          <label>
            Rooms:
            <button type="button" onClick={decreaseRooms}>
              -
            </button>
            <input type="text" value={rooms} readOnly />
            <button type="button" onClick={increaseRooms}>
              +
            </button>
          </label>
        </div>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;
