import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="navbar-brand">
          <ul>
            <li><a href="#">Google Books</a></li>
            <li><a href="#">Search</a></li>
            <li><a href="#">Saved</a></li>
          </ul>
      </div>
    </nav>
  );
}

export default Navbar;