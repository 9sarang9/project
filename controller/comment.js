// dependencies
var express	= require("express"),
	db = require("./db.js"),
	router = express.Router();

//route
	router.post("/add",function(req,res){
		body=req.body;
		db.add("comment",body,function(data){
			if(data)
			{
				res.json(data);
			}
		});
	});

	router.get("/list",function(req,res){
		db.listcomment(req.query.id,function(data){
			if(data)
			{
				res.json(data);
			}
		});
	});


//return router..
	module.exports = router;