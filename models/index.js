var mongoose = require('mongoose');
mongoose.set('debug', true);

mongoose.connect(
	'mongodb://nate:OBJECT!1@ds133762.mlab.com:33762/todos', {useNewUrlParser: true}
)

mongoose.Promise = Promise;

module.exports.Todo = require("./user"); 
