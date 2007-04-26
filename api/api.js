var express		=require("express"),
	api			= express.Router(),
	StudentRouter	= require("./v1/students/students-router,js");


	api.use("/students", StudentRouter);


	module.exports 	= api;