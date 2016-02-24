module.exports = (function (app){

	app.route('/')

	.get(function (request , response){

		response.render('loginOficial');

	});

	app.route('/test')

	.get(function (request , response){

<<<<<<< HEAD
		response.render('index');
=======
		if (request.session._id){
				response.render('index')
			}
			else{
				request.session.destroy(function (err){
				response.redirect('/');
				})
			}
>>>>>>> 6136271df7498c0cf721b329884d744bb2f7e58d

	});

	
});
