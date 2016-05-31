var mongoose = require('mongoose');

var PracticeSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  phoneNumber: {type: Number, required: true},
  mailingAddress:{type:String, required: true},
  staff:[{type: Schema.Types.ObjectId, ref:'User'}],
  patients: [{}]
});
module.exports = mongoose.model('Practice', PracticeSchema)
