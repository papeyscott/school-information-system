var mongoose = require('mongoose'),
	StudentSchema;

mongoose.connect('mongodb://localhost/school', {
	useMongoClient: true,
});

	StudentSchema = mongoose.Schema({

		name:{
			type: String,
			required:true
		},

		class:{
			type: String,
			required:true
		},

		Age:{
			type: Number,
			required:true
		},

		Sex:{
			type: String,
			required:true
		},

		home_address:{
			type: String,
			required:true
		},

		create_date:{
			type: Date,
			default:Date.now
		}


	});


	module.exports = mongoose.model("students", StudentSchema);