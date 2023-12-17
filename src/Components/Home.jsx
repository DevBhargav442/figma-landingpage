import React from "react";
import image1 from "../assests/Group 171.png";
import person1 from "../assests/person1.avif";
import person2 from "../assests/person2.avif";
import person3 from "../assests/person3.jpg";
import destination1 from "../assests/card-image.png";
import destination2 from "../assests/card-image-1.png";
import destination3 from "../assests/card-image-2.png";
import destination4 from "../assests/card-image-3.png";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Another from "./Another";
import Booking from "./Booking";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="content">
          <b>Discover the beauty of the tropics</b>
          <h1>
            Tropical <br />
            Destinations <br />
            <span>For Student</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            consequuntur minima iure,
          </p>
          <button>SignUp</button>
        </div>
        <div className="image">
          <img src={image1} alt="image2" />
        </div>
      </div>
      <div className="main-container">
        <div className="cards-container">
          <div className="card">
            <img src={person1} alt="person" />
            <b>Jenny Wilson</b>
            <span>You are the best</span>
          </div>
          <div className="card">
            <img src={person2} alt="person" />
            <b>JennyWilson</b>
            <span>You are the best</span>
          </div>
          <div className="card">
            <img src={person3} alt="" />
            <b>Jenny Wilson</b>
            <span>You are the Best</span>
          </div>
        </div>

        <div className="content-container">
          <div>
            <h2 className="show" style={{ fontSize: "40px" }}>
              Tropical Adventure
            </h2>
          </div>
          <div>
            <h4 className="show">
              Student Tropical Vacation: Relax and Recharge
            </h4>
          </div>
          <div>
            <ul className="show">
              <li>Lorem ipsum dolor</li>
              <li>Massa quits natoques sit quam</li>
              <li>Eros non Pellantasque elit</li>
              <li>Sed Suspendise id in ultrices</li>
            </ul>
            <button
              style={{
                backgroundColor: "Orange",
                borderStyle: "2px solid black",
                borderRadius: "50px",
                padding: "10px",
                width: "150px",
              }}
            >
              Explore More
            </button>
          </div>
        </div>
      </div>

      <div className="destinations-heading">
        <h2>Our Destinations</h2>
      </div>

      <div className="destinations-container">
        <div id="destinations">
          <img src={destination1} id="destination-card" alt="Destination 1" />
          <h3>Harvard University</h3>
          <p>Brimming Home </p>
        </div>
        <div id="destinations">
          <img src={destination2} id="destination-card" alt="Destination 2" />
          <h3>Oxford University</h3>
          <p>Manchester</p>
        </div>
        <div id="destinations">
          <img src={destination3} id="destination-card" alt="Destination 1" />
          <h3>Stanford University</h3>
          <p>London</p>
        </div>
        <div id="destinations">
          <img src={destination4} id="destination-card" alt="Destination 2" />
          <h3>Nanyang Technologies</h3>
          <p>Cambridge</p>
        </div>
      </div>
      <div>
        <Another />
      </div>
      <div>
        <Booking />
      </div>
      <div className="testimonial-container">
        <div className="testimonial">
          <img src={person1} alt="Person 1" />
          <h3>John Doe</h3>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </p>
        </div>
        <div className="testimonial">
          <img src={person2} alt="Person 2" />
          <h3>Jane Doe</h3>
          <p>
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat."
          </p>
        </div>
        <div className="testimonial">
          <img src={person3} alt="Person 3" />
          <h3>Bob Smith</h3>
          <p>
            "Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur."
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
