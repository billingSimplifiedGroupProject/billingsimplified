// var Staff = require('./../Models/User');
// var Patient = require('./../Models/Patient');
var Practice = require('./../Models/Practice');

module.exports = {
  createPractice: function(req, res, next){
    var newPractice = new Practice(req.body);

    newPractice.save(function(err, result){
      if(err){
        res.status(500 + 'createPractice function error').json(err);
      }
      else{
        res.status(200).json(result);
      }
    });
  },
  getPractice: function(req, res, next){
    Practice.find(req.query).exec(function(err, result){
      if (err) {
          res.status(500 + "getPractice function error").json(err);
      } else {
          res.status(200).json(result);
      }
    })
  },
  getPracticeById: function(req, res, next){
    Practice.findById(req.params.id).exec(function(err, result){
      if(err) {
        res.status(500 + "getPracticeById function error").json(err);
      }
      else{
        res.status(200).json(result);
      }
    })
  },
  deletePractice: function(req, res, next){
    Practice.findByIdAndRemove(req.params.id).exec(function(err, result){
      console.log(req.params.id);
      if(err){
        console.log(err);
        res.status(500 + 'deletePractice function error').json(err);
      }
      else{
        res.status(200).json(result);
      }
    })
  },
  updatePractice: function(req, res, next){
    Practice.findByIdAndUpdate(req.params.id, req.body).exec(function(err, result){
      console.log(req.body);
      console.log(req.params);
      if(err){
        res.status(500 + 'updatePractice function error');
      }
      else{
        res.status(200).json(result);
      }
    })
  }
};
