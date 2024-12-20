import React, { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import CountUp from "react-countup";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Naya Ghar: अब Dream Home, केहि Click मै</h1>
          <p>
            Simplifying property searches and bookings in Nepal with detailed
            listings and effective communication
          </p>

          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>
                <CountUp start={0} end={50} duration={2.5} />+
              </h1>
              <h2>Happy Users</h2>
            </div>
            <div className="box">
              <h1>
                <CountUp start={0} end={50} duration={2.5} />+
              </h1>
              <h2>Listings Added</h2>
            </div>
            <div className="box">
              <h1>
                <CountUp start={0} end={24} duration={2.5} />
                /<CountUp start={0} end={7} duration={2.5} />
              </h1>
              <h2>Support Available</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <img src="/background.png" alt="bg" />
      </div>
    </div>
  );
}

export default HomePage;
