var mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const uniqueValidator = require("mongoose-unique-validator");
const bcrypt = require("bcryptjs");

var accountSchema= new mongoose.Schema({
	username: {type: String, required: true, unique: true},
	passwordHash: { type: String, required: true },
	email: String
})

accountSchema.plugin(uniqueValidator);

accountSchema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.passwordHash);
}

accountSchema.virtual("password").set(function(value) {
	this.passwordHash = bcrypt.hashSync(value, 12);
});

var Account = mongoose.model("Account", accountSchema);

module.exports = Account
