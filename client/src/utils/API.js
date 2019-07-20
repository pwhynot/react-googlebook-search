import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
    search: function(query) {
        return axios.get(BASEURL + query);
    },    

    getBooks: function() {
        return axios.get("/api/books/")
    },

    getBook: function(id) {
        return axios.get("/api/books/" + id)
    },

    deleteBook: function(id) {
        return axios.delete("/api/books/")
    },

    saveBook: function(bookData) {
        return axios.post("/api/books")
    }
}
