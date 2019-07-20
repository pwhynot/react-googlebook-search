import React from "react";
import "./style.css";


function Books(props){
    return (
        <div className="container book-panel">
            <div className="row">
        <li className="col-6"><strong>{props.title}</strong></li>
        <li className="col-6 pb-2"><strong>{props.authors}</strong></li>
        </div>
        <div className="row">
        <img className="p-3 col-2" src={props.image} alt="book"/>
        <div className="col-3"></div>
        <p className="col-6">{props.desc}</p>
        </div>
        </div>
    )
}

export default Books;