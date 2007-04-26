var express = require("express"),
 	bps		= require('body-parser'),
 	app		= express(),
 	api		= require("../api/api.js");
 


app.use(bps.json());
app.use(bps.urlencoded({extended: true}));

//mount route
app.use("/api/v1", api);


//application error handler
app.use((err, req, res, next)=>{
	res.status(500).json(err.message);
	next();
})

module.exports = app;