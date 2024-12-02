import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

function Navbar() {
  const [open, setOpen] = useState(false);

  const user = true;

  return (
    <nav>
      <div className="left">
        <Link to="/" className="logo">
          <img src="/favicon.png" alt="logo" />
          <span>NayaGhar</span>
        </Link>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/list">Listings</Link>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img src="" alt="" />
            <span>Sagar Raut</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <Link to="/signin">Sign in</Link>
            <Link to="/signup" className="signup">
              Sign up
            </Link>
          </>
        )}

        <div className="menuIcon" onClick={() => setOpen(!open)}>
          <img src="/menu.png" alt="menubar" />
        </div>

        <div className={open ? "menu open" : "menu"}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/list">Listings</Link>
          <Link to="/signin">Sign in</Link>
          <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
