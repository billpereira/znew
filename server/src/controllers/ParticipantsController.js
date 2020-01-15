const axios = require('axios');
const Participant = require('../models/participants');

module.exports = {

  async index(req,res){
    const participants = await Participant.find()
    return res.json(participants)
  },

  async store(req,res){
    const {firstName, lastName, email, country, organization} = req.body;

    let participant = await Participant.findOne({email})

    if(!participant) {
      //TODO generate user id sequence
      participant = await Participant.create({
        firstName,
        lastName,
        email,
        country,
        organization
        //TODO userID
      })
    }

    return res.json(participant)
  }

  //TODO Update participant data
}