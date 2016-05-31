var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PatientSchema = new mongoose.Schema({
 firstName: {type: String, required: true},
 lastName:{type: String, required: true},
 insurance: {type: String},
 phoneNumber: {type: Number},
 email: {type: String},
 mailingAddress: {type: String},
 practiceId:{ref:'Practice'},
 bills: [{type: Schema.Types.ObjectId, ref:'Bill'}]
})
module.exports = mongoose.model('Patient', PatientSchema);
