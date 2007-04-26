var app = require("./server/server.js"),
	express = require("express");


	//listening port for incoming request
	app.listen(3000, ()=>{
		console.log("server is started...");
	});