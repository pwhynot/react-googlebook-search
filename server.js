const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};



app.use(routes);


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/googlebooks", {useNewUrlParser: true}
);


app.listen(PORT, () => {
  console.log(`Now listening on: http://localhost:${PORT}`);
});