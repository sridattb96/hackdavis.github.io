var fs = require("fs"),
	express = require("express"),
	Firebase = require("firebase");

//SETUP

var app = express();
app.use(express.static(__dirname + "/views")); //use static files in ROOT/public folder

var myFirebaseRef = new Firebase("https://hackdavis.firebaseio.com/");

var port = Number(process.env.PORT || 3000);

app.listen(port);

// app.listen(port, "localhost", function(){
// 	console.log('HackDavis listening at %s:%s...', "localhost", "3000");
// });

//ROUTES

app.get("/", function(req, res){ //root dir
    res.render("index.html")
});

app.post('/saveEmail/:email', function(req, res){
	myFirebaseRef.push({
		email: req.params.email
	})
	res.send("success")
})