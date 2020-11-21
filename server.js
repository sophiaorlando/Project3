const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const note = require("./models/note");
const auth = require("./middleware/auth");
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
// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// app.post("/", (req, res) => {
//   const { title, author, body } = req.body;

//   let newNote = new Note({
//     title,
//     author,
//     body,
//   });

//   newNote
//     .save()
//     .then((note) => {
//       console.log("Note Saved");
//       res.json(note);
//     })
//     .catch((err) => console.log("Error saving message"));
// });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
