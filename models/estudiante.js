var mongoose = require('mongoose');
bcrypt = require('bcrypt'),
SALT_WORK_FACTOR = 10;

var estudianteSchema = mongoose.Schema({
    nombre: String,
    apellidoP:String,
    apellidoM: String,
    email: String,
    password: String,
    matricula: String,
    carrera: String
});



estudianteSchema.pre('save', function(next) {	
   		 var estudiante = this;

		// only hash the password if it has been modified (or is new)
		if (!estudiante.isModified('password')) return next();

		// generate a salt
		bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
		    if (err) return next(err);

		    // hash the password using our new salt
		    bcrypt.hash(estudiante.password, salt, function(err, hash) {
		        if (err) return next(err);

		        // override the cleartext password with the hashed one
		        estudiante.password = hash;
		        next();
		    });
		});


	});


estudianteSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('Estudiante', estudianteSchema);