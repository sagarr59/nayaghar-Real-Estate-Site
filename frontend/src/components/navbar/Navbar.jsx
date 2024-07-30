import "./navbar.scss";
function Navbar() {
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="logo" />
          <span>NayaGhar</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        <a href="/">Sign in</a>
        <a href="/" className="signup">Sign up</a>

        <div className="menuIcon">
          <img src="/menu.png" alt="" />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
