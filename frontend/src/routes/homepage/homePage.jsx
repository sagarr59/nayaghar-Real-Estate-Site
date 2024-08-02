import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Naya Ghar: अब Dream Home, एक Click मा</h1>
          <p>Simplifying property searches and bookings in Nepal with detailed listings and effective communication</p>

          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>50+</h1>
              <h2>Happy Users</h2>
            </div>
            <div className="box">
              <h1>50+</h1>
              <h2>Listings Added</h2>
            </div>
            <div className="box">
              <h1>24/7</h1>
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
