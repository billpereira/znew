const Badge = require('../models/badge');

module.exports = {

  async index(req,res){
    const badges = await Badge.find()
    return res.json(badges)
  },

  async store(req,res){
    const {image_url, name, groups} = req.body;

    let badge = await Badge.findOne({name})

    if(!badge) {
      badge = await Badge.create({
        image_url,
        name,
        groups
        //TODO update acclaim info
      })
    }

    return res.json(badge)
  }

  //TODO Update badge data
}