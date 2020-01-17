const axios = require("axios");
const QuizzQuestion = require("../models/quizzQuestion");

module.exports = {
  async index(req, res) {
    const quizzQuestion = await QuizzQuestion.find();
    return res.json(quizzQuestion);
  },

  async store(req, res) {
    const newQuestion = req.body;
    console.log(`Receiving data: `, newQuestion);
    let quizzQuestion = await QuizzQuestion.findOne({ title:newQuestion.title });

    if (!quizzQuestion) {
       quizzQuestion = await QuizzQuestion.create(newQuestion);
    }
    return res.json(quizzQuestion);
  }

  //TODO Update Destroy QuizzQuestion data
};
