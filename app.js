var express = require("express");
var app		= express();
var bodyParser	= require('body-parser');
var mongoose	= require('mongoose');


app.use(express.static(__dirname+'/frontend'));
app.use(bodyParser.json());

Class = require('./models/classes');
Student = require('./models/student');
//connect to mongoose
mongoose.connect('mongodb://localhost/school',{
	useMongoClient: true,
});
var db	=	 mongoose.connection;


app.get('/', function(req, res){
	res.send('Hello World!');
});

app.get('/api/classes', function(req, res){
	Class.getClasses(function(err, classes){
		if(err){
			throw err;
		}
		res.json(classes);
	});
});

app.get('/api/classes/:_id', function(req, res){
	Class.getClassById(req.params._id, function(err, classes){
		if(err){
			throw err;
		}
		res.json(classes);
	});
});

app.post('/api/classes', function(req, res){
	var classes = req.body;
	Class.addClass(classes, function(err, classes){
		if(err){
			throw err;
		}
		res.json(classes);
	});
});


app.put('/api/classes/:id', function(req, res){
	var id = req.params._id;
	var classes = req.body;
	Class.updateClass(id, classes, {}, function(err, classes){
		if(err){
			throw err;
		}
		res.json(classes);
	});
});

app.delete('/api/classes/:id', function(req, res){
	var id = req.params._id;
	Class.deleteClass(id, function(err, classes){
		if(err){
			throw err;
		}
		res.json(classes);
	});
});

app.get('/api/students', function(req, res){
	Student.getStudents(function(err, students){
		if(err){
			throw err;
		}
		res.json(students);
	});
});


app.get('/api/students/:_id', function(req, res){
	Student.getStudentById(req.params._id, function(err,student ){
		if(err){
			throw err;
		}
		res.json(student);
	});
});

app.post('/api/students', function(req, res){
	var student = req.body;
	Student.addStudent(student, function(err, student){
		if(err){
			throw err;
		}
		res.json(student);
	});
});

app.put('/api/students/:id', function(req, res){
	var id = req.params._id;
	var student = req.body;
	Student.updateStudent(id, student, {}, function(err, student){
		if(err){
			throw err;
		}
		res.json(student);
	});
});

app.delete('/api/students/:id', function(req, res){
	var id = req.params._id;
	Student.deleteStudent(id, function(err, student){
		if(err){
			throw err;
		}
		res.json(student);
	});
});



app.listen(3000);
console.log('server started on port 3000...');