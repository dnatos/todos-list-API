var mongoose = require('mongoose');
var Todo = require('./models/todo.js');


var data = [
	{
		name: "Study JavaScript"
	},
	{
		name: "Go to the Gym"
	},
	{
		name: "Watch NBA"
	},
	{
		name: "Make a cake for my sister birthdays"
	}

]


function seedDB(){
	Todo.remove({}, function(err){
		if(err){
			console.log(err);
		}

		console.log("All items removed");

		data.forEach(function(todo){
			Todo.create(todo, function(err){
				if(err){
					console.log(err);
				} else{
					console.log("Todos were created");
				}
			});
		});
	});	
}

module.exports = seedDB;