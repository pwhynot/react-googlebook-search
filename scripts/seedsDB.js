const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGOD_URI || "mongodb://localhost/googleBooks"
);

const bookSeed = [
    {
      authors: ["Ron Paul"],
      description: "End the Fed is a 2009 book by Congressman Ron Paul of Texas. The book debuted at number six on the New York Times Best Seller list and advocates the abolition of the United States Federal Reserve System because it is immoral, unconstitutional, impractical, promotes bad economics, and undermines liberty.",
      image: "https://books.google.com/books/content?id=s3vkxGyQ-BQC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70eeSJlWfW6EMh_1ClmX-8MgTZu5rc_5dsJZRDDjHUVeLNQaOavMhcUXYZEDvnrBuF-37EhdPc3wYmELX4OAG6ZCUrBirzM2ZmzxxH5XcERBm4PW9Oubtu1S6eEC_94TmFknbVE",
      link: "https://books.google.com/books/about/End_the_Fed.html?id=s3vkxGyQ-BQC&printsec=frontcover&source=kp_read_button#v=onepage&q&f=false",
      title: "End the Fed"
    }
  ]

  db.googleBooks
  .remove({})
  .then(() => db.googleBooks.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " books inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });