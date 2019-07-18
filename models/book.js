const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const googleBooks = new Schema({
  title: { type: String},
  authors: { type: String},
  description: String,
  imageLinks: String,
  infoLink: String
});

const Book = mongoose.model("book", googleBooks);

module.exports = Book;