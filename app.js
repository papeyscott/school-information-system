var express = require("express");
var app		= express();
var bodyparser	= require('body-parser');
var mongoose	= require('mongoose');

Classes = require('./models/classes');
//connect to mongoose
mongoose.connect('mongodb://localhost/school',{
	useMongoClient: true,
});
var db	=	 mongoose.connection;


app.get('/', function(req, res){
	res.send('please use1 /api/student or .api/students');
});

app.get('/api/classes', function(req, res){
	Classes.getClasses(function(err, classes){
		if(err){
			throw err;
		}
		res.json(classes);
	});
});


app.listen(3000);
console.log('server started on port 3000...');