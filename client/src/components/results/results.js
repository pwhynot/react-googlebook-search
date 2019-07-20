import Books from "../books/books"
import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";

class Results extends Component {
    state = {
        books: []
    };

    componentDidMount(){
        this.loadBooks();
    };

    loadBooks = () =>{
    API.getBooks()
    .then(res => this.setState({books: res.data}))
    .catch(err => console.log(err))
    };

    render () {
        console.log(this.state.books)
    return (
        <div className="container">
        <div className="result-panel">
        <div className="panel-body">
            <h2>Results:</h2>
        </div>
            <ul>
            {this.state.books.map(book => (
            <Books key={book._id} title={book.title} authors={book.authors} image={book.imageLinks[0].thumbnail} desc={book.description}>
            </Books>))}

                      </ul>
    </div>
</div>
 )};
}

export default Results;