import React from "react";
import "./style.css";

const style = {
    HeaderStyle: {
        marginTop: 0,
        height: "12vh",
        textAlign: "center",
        width: "100%",
        background: "black",
        color: "white"
    }
}

function Header () {
    return (
        <div style={style.HeaderStyle} className="headerDiv">
            <h1>Search and Save books with Google Book Search!</h1>
        </div>
    );
}


export default Header;