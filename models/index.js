var mongoose 	= require("mongoose");

	mongoose.Promise = global.Promise;
	mongoose.connect("mongodb://localhost/to_do_list", {useMongoClient: true});

	module.exports.Todo = require("./todo");	