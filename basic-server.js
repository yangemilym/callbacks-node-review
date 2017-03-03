var express = require('express')
var app = express ()
var bodyParser = require('body-parser')
var getSingleUsername = require('./callback-practice').getSingleUsername
var getUsernames= require('./callback-practice').getUsernames



app.get('/users', function(req, res){

	getUsernames([2,4,6,8,3],function(err, totalusernames){
		res.send(totalusernames)
	})

	// res.status(200).send('hi')
	// console.log(req.body, "req")

});

app.listen(3000)
console.log("listening on port 3000")