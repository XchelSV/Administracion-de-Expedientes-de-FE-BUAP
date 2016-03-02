module.exports = (function (app){

	app.route('/')

	.get(function (request , response){

		response.render('loginOficial');

	});

	app.route('/test')

	.get(function (request , response){

		if (request.session._id){
				response.render('index')
			}
			else{
				request.session.destroy(function (err){
				response.redirect('/');
				})
			}

	});

	
});
