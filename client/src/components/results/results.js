import Books from "../books/books"
import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";

class Results extends Component {
    state = {
        books: [],
        title: "",
        author: "",
        description: ""
    };

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
        .then(res =>
            this.setState({ books: res.data, title: "", description: ""})
            )
            .catch(err => console.log(err));
    };

    deleteBook = id => {
        API.deleteBook(id)
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.author) {
            API.saveBook({
                title: this.state.title,
                author:this.state.author,
                description: this.state.description
            })
                .then(res => this.loadBooks())
                .catch(err => console.log(err));
        }
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