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
      <a className="navbar-brand" href="/">
        Google Books
      </a>  
    </nav>
  );
}

export default Navbar;