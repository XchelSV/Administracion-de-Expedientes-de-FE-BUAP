module.exports = (function (app,EstomaDB){
var  Estudiante = require('../models/estudiante');
var  Expediente = require('../models/expediente');

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

				if(estudiante !== undefined){
					estudiante.comparePassword(request.body.password, function (err , pass){
						if (err) throw err;
						console.log(pass);

							if(pass){

									//response.clearCookie('temporalSession');	
								request.session._id = estudiante._id;
								response.redirect('/test');
							}
							else{
								response.redirect('/');
								
							}
					});
				}else
				{
					response.redirect('/');
					/*response.cookie('attempUser', true)
					response.cookie('attempPass', false)
					response.render('login')*/
					
				}

			});

	});

	
	app.route('/fichaDeIdentificacion')

		.post(function (request,response){

			var newExpediente = new Expediente({

				datosParticulares:{
			         nombre:{
			            nombre: request.body.nombre.nombre,
			            apellidoP: request.body.nombre.apellidoP,
			            apellidoM: request.body.nombre.apellidoM
			         },
			         fechaNac: request.body.fechaNac,
			         sexo: request.body.sexo,
			         lugarNac: request.body.lugarNac,
			         ocupacion: request.body.ocupacion,
			         escolaridad: request.body.escolaridad,
			         edoCivil: request.body.edoCivil,
			         domicilio: {
			             calle: request.body.domicilio.calle,
			             numeroInt: request.body.domicilio.numeroInt,
			             numeroExt: request.body.domicilio.numeroExt,
			             cp: request.body.domicilio.cp,
			             colonia: request.body.domicilio.colonia,
			             municipio: request.body.domicilio.municipio,
			             estado: request.body.domicilio.estado
			         },
			         telefono: {
			            telFijo: request.body.telefono.telFijo,
			            telMovil: request.body.telefono.telMovil,
			            telOficina: request.body.telefono.telOficina
			         },
			         curp: request.body.curp, 
			         email: request.body.email,
			         ingresos: request.body.ingresos,
			         sangre: request.body.sangre,
			         vacunas:request.body.vacunas,
			         responsable:[]
			     }

			});

			newExpediente.save(function (err){
				if (err) throw err;

				response.sendStatus(200);
			});			

		});

	
	
});
