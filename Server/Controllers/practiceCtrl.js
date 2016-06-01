// var Staff = require('./../Models/User');
// var Patient = require('./../Models/Patient');
var Practice = require('./../Models/Practice');

module.exports = {
  createPractice: function(req, res, next){
    var newPractice = new Practice(req.body);

    newPractice.save(function(err, response){
      if(err){
        res.status(500 + 'createPractice function error').json(err);
      }
      else{
        res.status(200).json(response);
      }
    });
  },
  getPractice: function(req, res, next){
    Practice.findOne(req.query).exec(function(err, response){
      if (err) {
          res.status(500 + "getPractice function error").json(err);
      } else {
          res.status(200).json(response);
      }
    })
  }
};
