var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BillSchema = new mongoose.Schema({
  billAmount:{type: String},
  firstDateCreated:{type: Date, default: Date.now},
  patientName:{ type: Schema.Types.ObjectId, ref: "Patient"},
  billingAddress: {type:String},
  notes: {type:String},
     payments:{
       remainingBal: {type: Number},
       dateCreated:{type: Date, default: Date.now},
       totalPaid: {type: String},
       purpose: {type: String},
       method: {type: String},
       comments: {type: String}
     }
})
module.exports = mongoose.model('Bill', BillSchema);
