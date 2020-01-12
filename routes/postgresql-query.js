exports.execute = function(req, res) {

	var debug = require('./debug');
	var pg = require('pg');
	
	var client = new pg.Pool({
		host: req.body.host,
		database: req.body.database,
		user: req.body.user,
		password: req.body.password,
		port:req.body.port
	})	

	client.connect(function(err) {
		if(err) {
			res.statusCode = 503;
			res.statusMessage = err.message;
			console.log(err)
			res.end();
		}
	});

	if(req.body.event === "login"){
		res.statusCode = 200
		res.end();
	}

	client.query(req.body.query, function(err, result) {
	
		if(err) {
			debug.log(err);
			res.statusCode = 503;
			res.statusMessage = err.message;
			res.end();
		}
		
		if (result) {
			console.log(result)

			if(result.command === "SELECT"){
				res.json(result.rows);
				
			} else {
				res.json('{"affected":"' + result.rowCount +'"}');
			}
		}
	
	});
	
}
