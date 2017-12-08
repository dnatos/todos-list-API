var express 	= require("express"),
	app			= express(),
	seedDB 		= require("./seed.js"),
	bodyParser	= require("body-parser");
	port 		= process.env.PORT || 3000;
	

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");


var todoRouter = require("./routes/todos");
//seedDB();
app.use("/api/todos", todoRouter);


app.get("/", (req, res)=>{
	res.sendFile("index.html");
});

app.listen(port, () =>{
	console.log("The server starts");
});