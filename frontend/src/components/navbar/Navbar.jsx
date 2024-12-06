import { useContext, useState } from "react"; // Make sure to import useState and useContext from React
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import "./navbar.scss"; // You can add your styles here

function Navbar() {
  const [open, setOpen] = useState(false); // useState is now properly imported
  const { currentUser } = useContext(AuthContext);

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
        {currentUser ? (
          <>
            <div className="user">
              <img src={currentUser.avatar || "/noavatar.jpg"} alt="" />
              <span>{currentUser.username}</span>
              <Link to="/profile" className="profile">
                <span>Profile</span>
              </Link>
            </div>
            {/* Add "Find Nearest" button */}
            <Link to="/nearby" className="find-nearest-btn">
              Find Nearest
            </Link>
          </>
        ) : (
          <>
            <Link to="/login">Sign in</Link>
            <Link to="/register" className="signup">
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
          <Link to="/login">Sign in</Link>
          <Link to="/register">Sign up</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
