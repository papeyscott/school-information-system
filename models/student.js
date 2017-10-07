var mongoose = require('mongoose');

//create a schema
var studentSchema	= mongoose.Schema({
	Firstname:{
		type: String,
		required: true
	},
	Lastname:{
		type: String,
		required: true
	},
	Class:{
		type: String,
		required: true
	},
	Age:{
		type: Number,
		required: true
	},
	Sex:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default:Date.now
	}
});

var Student	= module.exports = mongoose.model('Student', studentSchema );
// this can be done in the route
//Get Classes
module.exports.getClasses =function(callback, limit) {
	Student.find(callback).limit(limit);
}