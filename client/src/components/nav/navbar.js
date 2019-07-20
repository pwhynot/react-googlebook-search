import React from "react";

const style = {
  NavbarStyle: {
      marginTop: 0,
      textAlign: "center"
  }
}

function Navbar() {
  return (
    <nav style={style.NavbarStyle} className="navbarDiv">
      <div className="navbar-brand">
          <ul>
            <li><a href="/">Google Books</a></li>
            <li><a href="/search">Search</a></li>
            <li><a href="/saved">Saved</a></li>
          </ul>
      </div>
    </nav>
  );
}

export default Navbar;