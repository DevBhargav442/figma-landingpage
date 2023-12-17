import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="nav-items">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/schedules">Schedules</a>
          <a href="/membership">Membership</a>
          <a href="/pricing">Pricing</a>
        </div>

        <div className="buttons">
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
