import React from "react";
import image1 from "../assests/Mask group.png";
import "./CSS/Another.css";

const Another = () => {
  return (
    <div className="another-container">
      <div className="another-content">
        <b>Explore the wonders of the world</b>
        <h1>
          Exotic <br />
          Locations <br />
          <span>For Explorers</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          commodi ullam, dolores doloremque sint repellendus.
        </p>
        <button>Explore Now</button>
      </div>
      <div className="another-image">
        <img src={image1} alt="another" />
      </div>
    </div>
  );
};

export default Another;
