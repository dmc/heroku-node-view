exports.execute = function(req, res) {

    const { Client } = require('pg');
    const conString = "postgres://"+ req.body.user+":"+ req.body.password + "@" + req.body.host + ":" + req.body.port +"/" + req.body.database;
    const client = new Client({
      connectionString: conString,
      ssl: {
        rejectUnauthorized: false
      }
    });
    
    client.connect();
    
    const sql = req.body.event === "login" ? "SELECT 1" : req.body.query;

    client.query(sql, (err, results) => {
      if (err) {
        res.statusCode = 503;
        res.statusMessage = err.message;
        res.end();
      }
      if(results.command === "SELECT"){
        res.json(results.rows);            
        } else {
            res.json(`{"affected":"${results.rowCount}"}`);
        }
      client.end();
    });

}
