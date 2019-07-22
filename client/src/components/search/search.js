import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";

class Search extends Component {

    state= {
        query: ""
    };

    handleFormSubmit = event => {
        event.preventDefault(this.state.name);
          API.searchBooks(this.state.name)
            .then(res => API.saveBook(res)).then(this.loadBooks())
            .catch(err => console.log(err));
        };
    
    loadBooks = () =>{
        API.getBooks()
            .then(res => this.setState({books: res.data}))
            .catch(err => console.log(err))
         };
        

    handleInputChange = event => {
        const { value } = event.target;
        this.setState({
          name: value
        });
      };

    render () {
        return (
            <div className="container">
            <div className="search-panel">
                <div className="panel-body">
                Search for an Author or Book
                </div>
                <input onChange={this.handleInputChange} type="search"></input>
                <button onClick={this.handleFormSubmit && this.loadBooks} className="btn btn-success">Search!</button>
            </div>
            </div>
        );
        }
    };

export default Search;