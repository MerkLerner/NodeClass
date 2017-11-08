var express = require('express')
var app = express();

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/beatbot')
var User = require('./users.js')


// var chris = new User( {
// 	name: 'Chris',
// 	username: 'CrissCross1234',
// 	password: 'mongoFan123'
// } )

// console.log( chris.dudify() )

// chris.save(function(err){
// 	if (err) {throw err;}

// 	console.log( 'user saved successfully')

// })


User.find({name: "Chris-dude"}, function(err, user){
	if (err) throw err;

	user[0].remove(function(err){
		if (err) throw err;

		console.log('We got \'im')
	})
 })






app.get('/', function(req, res){
	res.sendFile( __dirname + "/home.html")
})

app.get('*', function(req, res){
	res.sendStatus( 404 )
})

app.listen(8081)