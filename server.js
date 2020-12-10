const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const note = require("./models/note");
const auth = require("./middleware/auth");
const wishlist = require("./routes/wishlist");
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// DB MONGO
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/sneaker";

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => consele.log("Error connecting to DB"));

app.all("/api/*", auth);

app.use("/api/notes", require("./routes/notes"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/wishlist", require("./routes/wishlist"));
// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});





// const express = require("express");
// const path = require("path");
// const PORT = process.env.PORT || 3001;
// const mongoose = require("mongoose");
// const note = require("./models/note");
// const auth = require("./middleware/auth");
// const wishlist = require("./routes/wishlist");
// const app = express();

// // Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// // DB MONGO
// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/sneaker";
// mongoose
//   .connect(MONGODB_URI, {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//     useCreateIndex: true
//   })
//   .then(() => {
//     console.log("Connected to DB");
//   })
//   .catch(err => consele.log("Error connecting to DB"));
// app.all("/api/*", auth);
// app.use("/api/notes", require("./routes/notes"));
// app.use("/api/auth", require("./routes/auth"));
// app.use("/api/wishlist", require("./routes/wishlist"));

// // Define API routes here
// // Send every other request to the React app
// // Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });
// app.listen(PORT, () => {
//   console.log(`🌎 ==> API server now on port ${PORT}!`);
// });