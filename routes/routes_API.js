module.exports = (function (app,EstomaDB){
var  Estudiante = require('../models/estudiante');

	app.route('/login')

	.post(function (request,response){

			/*var newEstudiante = new Estudiante({
				nombre: 'Xchel Elí',
			    apellidoP:'Sánchez',
			    apellidoM: 'Vásquez',
			    email: 'xchelsvz@gmail.com',
			    password: '1234',
			    matricula: '201322263',
			    carrera: 'Ing. en Tecnologías de la Información'
			})

			newEstudiante.save(function (err){
				if (err) throw err;
			})*/
			
			Estudiante.findOne({matricula : request.body.matricula}, function (err , estudiante){
				if (err) throw err;
				console.log(estudiante);

				if(estudiante != undefined){
					estudiante.comparePassword(request.body.password, function (err , pass){
						if (err) throw err;
						console.log(pass);

							if(pass){

									//response.clearCookie('temporalSession');	
								request.session._id = estudiante._id;
								response.redirect('/test');
							}
							else{
								response.redirect('/')
								
							}
					})
				}else
				{
					response.redirect('/')
					/*response.cookie('attempUser', true)
					response.cookie('attempPass', false)
					response.render('login')*/
					
				}

			})

	})
	
});
