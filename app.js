var express = require("express");
var app		= express();
var bodyparser	= require('body-parser');
var mongoose	= require('mongoose');


//connect to mongoose
mongoose.connect('mongodb://localhost/school',{
	useMongoClient: true,
});
var db	=	 mongoose.connection;


app.get('/', function(req, res){
	res.send('please use /api/student or .api/students');
});


app.listen(3000);
console.log('server started on port 3000...');