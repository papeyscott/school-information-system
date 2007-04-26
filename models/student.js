

//create a schema
var studentSchema	= mongoose.Schema({
	firstname:{
		type: String,
		required: true
	},

	lastname:{
		type: String,
		required: true
	},

	class:{
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
//Get Students
module.exports.getStudents =function(callback, limit) {
	Student.find(callback).limit(limit);
}


module.exports.getStudentById =function(id, callback) {
	Student.findById(id, callback);
}

module.exports.addStudent =function(student, callback) {
	Student.findById(student, callback);
}


module.exports.updateStudent =function(id, student, options, callback) {
		var query = {_id: id};
		var update ={
			firstname:student.firstname,
			lastname:student.lastname,
			class:student.class,
			Age:student.Age,
			Sex:student.Sex
		}

	Student.findOneAndUpdate(query, update, options, student, callback);
}

module.exports.deleteStudent =function(id, callback) {
		var query = {_id: id};
	Student.remove(query, callback);
}