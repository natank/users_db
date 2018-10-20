var mongoose = require('mongoose');
var userSchema= mongoose.Schema({
	name: String, 
	age: Number,
	nationality: String
})

var User = mongoose.model("User", userSchema);

module.exports = User
