import React, { Component } from "react";
import "./App.css";
import Navbar from "../components/nav/navbar";
import Header from "../components/header/header";
import Search from "../components/search/serach";
import Result from "../components/results/results";



class App extends Component {
  state = {
    query: ""
  }

  render() {
    return (
      <div className="App">
       <Navbar />
       <Header />
       <Search searchBox={this.state.query} />
       <div className="resultBox">
       <Result />
       </div>
      </div>
    );
  }
}

export default App;