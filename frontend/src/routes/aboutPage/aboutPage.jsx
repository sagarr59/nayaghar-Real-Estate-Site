import "./aboutPage.scss";

function AboutPage() {
  return (
    <div className="aboutPage">
      <div className="aboutContent">
        <img
          src="/assets/about-us.jpg"
          alt="About NayaGhar"
          className="aboutImage"
        />
        <div className="aboutText">
          <h1>About NayaGhar</h1>
          <p>
            Welcome to <strong>NayaGhar</strong>, your trusted partner in finding
            your dream home in Nepal. Whether you’re searching for a modern
            apartment in Kathmandu, a cozy house in Pokhara, or a peaceful villa
            in the hills, we are here to help.
          </p>
          <p>
            Our mission is to connect buyers and sellers, making real estate
            transactions seamless and transparent. With a dedicated team of
            professionals and cutting-edge technology, NayaGhar ensures a hassle-free
            property search experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
