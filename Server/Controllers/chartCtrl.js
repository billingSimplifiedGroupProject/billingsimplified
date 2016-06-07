var Chart = require('./../Models/Charts');

module.exports = {
  createChart: function(req, res, next){
      console.log("hitting new chart", req.body);

    var newChart = new Chart(req.body);
    newChart.save(function(err, result){
      if(err){
        res.status(500 + 'createChart function error').json(err);
      }
      else{
        res.status(200).json(result);
      }
    });
  },
  getCharts: function(req, res, next){
    Chart.find(req.query)
    .populate("practiceId")
    .exec(function(err, result){
      if (err) {
          res.status(500 + "getChart function error").json(err);
      } else {
          res.status(200).json(result);
      }
    })
  },
  getChartById: function(req, res, next){
    Chart.findById(req.params.id).exec(function(err, result){
      if(err) {
        res.status(500 + "getChartById function error").json(err);
      }
      else{
        res.status(200).json(result);
        console.log(result);
      }
    })
  },
  deleteChart: function(req, res, next){
    Chart.findByIdAndRemove(req.params.id).exec(function(err, result){
      console.log(req.params.id);
      if(err){
        console.log(err);
        res.status(500 + 'deleteChart function error').json(err);
      }
      else{
        res.status(200).json(result);
      }
    })
  },
  updateChart: function(req, res, next){
    Chart.findByIdAndUpdate(req.params.id, req.body).exec(function(err, result){
      console.log(req.body);
      console.log(req.params);
      if(err){
        res.status(500 + 'updateChart function error');
      }
      else{
        res.status(200).json(result);
      }
    })
  }
};
