var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var UserSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, index: true, trim: true },
  password: { type: String },
  userType: {type: String, required: true, enum:["clinic staff", "practice admin", "billing staff", "billing admin"]},
  clinicId: {type: String}
});

UserSchema.pre('save', function(next) {
	var user = this;
	if (!user.isModified('password'))	return next();
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(user.password, salt);
  user.password = hash;
  return next(null, user);
});

UserSchema.methods.verifyPassword = function(reqBodyPassword) {
  var user = this;
  return bcrypt.compareSync(reqBodyPassword, user.password);
};

module.exports = mongoose.model('User', UserSchema);
