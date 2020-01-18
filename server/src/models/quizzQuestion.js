const mongoose = require('mongoose');

const quizzQuestionSchema = new mongoose.Schema({
  title: String,
  description: String,
  hint: String,
  question: String,
  options: [String],
  rightAnswer: String,
  experience:String,
  group: String,
  badge: String
  // userID: String
})

module.exports = mongoose.model("QuizzQuestion", quizzQuestionSchema)