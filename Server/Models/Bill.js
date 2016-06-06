var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var Patient = require('./Patient');

var BillSchema = new mongoose.Schema({
  billAmount:{type: String},
  firstDateCreated:{type: Date, default: Date.now},
  patientId:{ type: Schema.Types.ObjectId, ref: "Patient"},
  billingAddress: {type:String},
  notes: {type:String},
     payments: {
       remainingBal: {type: String},
       totalPaid: {type: String},
       purpose: {type: String},
       method: {type: String},
       comments: {type: String},
       dateCreated:{type: String}
     }
})
module.exports = mongoose.model('Bill', BillSchema);
