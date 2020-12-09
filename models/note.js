const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  title: String,
  body: Object,
  author: String,
  videoLink: String,
  videoTimestamp: Number,
  date: {
    type: Date,
    default: Date.now,
  },
  createdAt: { type: Date, default: new Date() },
  updatedAt: { type: Date, default: new Date() },
});

module.exports = Note = mongoose.model("Note", NoteSchema);
