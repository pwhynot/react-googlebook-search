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

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.use(routes);


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googleBooks"
);


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});