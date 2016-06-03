var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var Patient = require('./Patient');

var BillSchema = new mongoose.Schema({
  billAmount:{type: String},
  firstDateCreated:{type: Date, default: Date.now},
  patientName:{ type: Schema.Types.ObjectId, ref: "Patient"},
  patientId: {type: String},
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
