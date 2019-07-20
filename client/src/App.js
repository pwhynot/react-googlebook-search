import React, { Component } from "react";
import Book from "./components/books/books";
import "./App.css";
import Navbar from "./components/nav/navbar";
import Header from "./components/header/header";
import Search from "./components/search/serach";
import Results from "./components/results/results";



class App extends Component {
  state = {
    books: []
  }
  
    render() {
      return (
        <div className="App">
         <Navbar />
         <Header />
         <Search  />
         <div className="resultBox">
         <Results>
         <Book />
         </ Results>
         </div>
        </div>
      );
    }
  }

export default App;