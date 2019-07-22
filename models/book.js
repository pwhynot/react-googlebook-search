const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const googleBooks = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, required: true }
},

{typeKey: '$type'}
);

const Book = mongoose.model("books", googleBooks);

module.exports = Book;