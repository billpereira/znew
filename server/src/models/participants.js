const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  country: String,
  organiation: String,
  // userID: String
})

module.exports = mongoose.model("Participant", participantSchema)