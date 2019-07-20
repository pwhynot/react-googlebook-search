import axios from "axios";

let i = 0;
const saveBooks = []


export default {
  searchBooks: function(query){
    console.log(query)
    return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + query + '&maxResults=10')
  },

  getBooks: function() {
    return axios.get("/api/books");
  },

  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },

  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },

  saveBook: function(bookData) {
    console.log(bookData.data);
    const data = bookData.data.items
      for (i = 0; i < data.length; i++){
      saveBooks.push(data[i].volumeInfo)
      console.log(saveBooks)
    }
    axios.post("/api/books/", saveBooks)
}


};