var express	= require("express"),
	db = require("./db.js"),
	router = express.Router();

//route
	router.get("/",function(req,res){
		res.render("product");
	});

	router.post("/create",function(req,res){
		var body=req.body;
		db.add("product",body,function(data){
			if(data)
			{
				res.json(data);
			}
		});
	});

	router.get("/list",function(req,res){
		db.list("product",function(data){
			if(data)
			{
				res.json(data);
			}
		});
	});

	router.get("/show",function(req,res){
		var id= req.query.id;
		db.show(id,function(data){
			if(data)
			{
				res.json(data);
			}
		});
	});

//return router..
	module.exports = router;