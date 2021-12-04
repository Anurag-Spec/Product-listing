import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <img
          className="nav-img"
          src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
          alt="flipkart logo"
        />
        <input
          type="text"
          aria-label="Search"
          name="term"
          id="term"
          className="search"
          placeholder="Search product, category or brand"
        />
        <div className="nav-list">
          <button className="list-button login">Login</button>
          <button className="list-button">More</button>
          <button className="list-button">Cart</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
