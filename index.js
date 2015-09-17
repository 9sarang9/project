var express	= require("express"),
	// session = require("express-session"),
	bodyparser = require("body-parser"),
	ejs = require("ejs"),
	app = express();
var logger = require("morgan");
var product = require("./controller/product.js");
var comment = require("./controller/comment.js");

//middleware
	if(!module.parent) app.use(logger("dev"));
	app.set('view engine','ejs');
	app.set('views',__dirname+'/views');
	// app.use(session({ secret:"shhhh, very secret"}));
	app.use(bodyparser.raw({limit: "300mb"}));
	app.use(bodyparser.text({limit: "300mb"}));
	app.use(bodyparser.json({limit: "300mb"}));
	app.use(bodyparser.urlencoded({extended:false}));

//route..
	app.use("/",product);
	app.use("/comment",comment);

//listen..
app.listen(7000);
console.log("running ....");