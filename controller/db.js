var MongoClient = require('mongodb').MongoClient;
var Server = require('mongodb').Server;
var ObjectID = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/product';
// Use connect method to connect to the Server 
MongoClient.connect(url, function(err, d_b) {
  db=d_b;
  console.log("Mongo Connecting..50%");
});

exports.add=function(table,obj,fn)
{
	console.log("In database create = "+table);
	var mytable=db.collection(table);
	mytable.insert(obj,function(err,addUser){
		if(err) throw err;
		else
		{
			return fn(addUser);
		}
	});
}
exports.list=function(table,fn)
{
	var mytable=db.collection(table);
	mytable.find({}).toArray(function(err,docs){
		if(err) throw err;
		else
		{
			return fn(docs);
		}
	});
}

exports.show=function(id,fn)
{
	var product=db.collection("product");
	product.find({_id:new ObjectID(id)}).toArray(function(err,docs){
		if(err) throw err;
		else
		{
			return fn(docs[0]);
		}
	});
}

exports.listcomment=function(id,fn)
{
	var comment=db.collection("comment");
	comment.find({productid:id}).toArray(function(err,docs){
		if(err) throw err;
		else
		{
			return fn(docs);
		}
	});
}