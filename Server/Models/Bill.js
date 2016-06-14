var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var Patient = require('./Patient');

var BillSchema = new mongoose.Schema({
  billAmount:{type: String},
  totalPaid: {type: String},
  firstDateCreated:{type: Date},
  dateDue:{type: Date},
  patientId:{ type: Schema.Types.ObjectId, ref: "Patient"},
  billingAddress: {type:String},
  notes: {type:String},
  payments: [{
       paymentAmount: {type: String},
       remainingBal: {type: String},
       purpose: {type: String},
       paidBy: {type: String},
       method: {type: String},
       comments: {type: String},
       dateCreated:{type: Date}
   }]
})
module.exports = mongoose.model('Bill', BillSchema);
