var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PatientSchema = new mongoose.Schema({
 firstName: {type: String, required: true},
 lastName:{type: String, required: true},
 insurance: {type: String},
 phoneNumber: {type: String},
 email: {type: String},
 mailingAddress: {type: String},
 practiceId:{type: String},
 bills: [{type: Schema.Types.ObjectId, ref:'Bill'}]
})
module.exports = mongoose.model('Patient', PatientSchema);
