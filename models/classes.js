var mongoose = require('mongoose');

//create a schema
var classesSchema	= mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default:Date.now
	}
});

var Classes	= module.exports = mongoose.model('Classes', classesSchema );
// this can be done in the route
//Get Classes
module.exports.getClasses =function(callback, limit) {
	Classes.find(callback).limit(limit);
}