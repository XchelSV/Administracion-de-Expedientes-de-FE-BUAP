module.exports = (function (app,EstomaDB){

	app.route('/login')

	.post(function (request , response){

		EstomaDB.collection('users').find().toArray(function (err,docs){


			var matricula = request.body.matricula;
			var pass = request.body.pass;

			console.log(matricula)

			if (err) throw err;

			var flag = false;

			docs.forEach(function (doc){
				if ((doc.matricula == matricula) && (doc.pass == pass)) { response.redirect('/index');}
			});

		})

	})

	
});
