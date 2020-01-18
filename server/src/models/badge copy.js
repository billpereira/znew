const mongoose = require('mongoose');

const badgeSchema = new mongoose.Schema({
  image_url: String,
  name: String,
  //TODO update with info needed to issue badges on acclaim
})

module.exports = mongoose.model("Badge", badgeSchema)