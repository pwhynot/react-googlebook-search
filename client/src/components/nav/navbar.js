import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success">
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