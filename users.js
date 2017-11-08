var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var userSchema = new Schema({
	name: String,
	username: {type: String, required: true, unique: true},
	password: {type: String, required: true},
	created_at: Date
})

userSchema.methods.dudify = function(){
	this.name = this.name + '-dude'
	return this.name
}

userSchema.pre('save', function(next){
	var currentDate = new Date();
	if (!this.created_at) {
		this.created_at = currentDate
	}
	next()
})

var User = mongoose.model("User", userSchema)

module.exports = User