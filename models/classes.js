var mongoose = require('mongoose');

//create a schema
var classSchema	= mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default:Date.now
	}
});

var Class	= module.exports = mongoose.model('Class', classSchema );
// this can be done in the route
//Get Classes
module.exports.getClasses =function(callback, limit) {
	Class.find(callback).limit(limit);
}


module.exports.getClassById =function(id, callback) {
	Class.findById(id, callback);
}

module.exports.addClass =function(classes, callback) {
	Class.create(classes, callback);
}

module.exports.updateClass =function(id, classes, options, callback) {
		var query = {_id: id};
		var update ={
			name:classes.name
		}

	Class.findOneAndUpdate(query, update, options, classes, callback);
}


module.exports.deleteClass =function(id, callback) {
		var query = {_id: id};
	Class.remove(query, callback);
}
