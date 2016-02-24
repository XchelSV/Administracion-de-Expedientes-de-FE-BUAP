module.exports = (function (app){

	app.route('/')

	.get(function (request , response){

		response.render('loginOficial');

	});

	app.route('/test')

	.get(function (request , response){

		response.render('index');

	});

	
});
