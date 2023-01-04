exports.execute = function (req, res) {
  const { Client } = require("pg");

  const client = new Client({
    host: req.body.host,
    port: req.body.port,
    user: req.body.user,
    password: req.body.password,
    database: req.body.database,
  });

  client.connect();

  const sql = req.body.event === "login" ? "SELECT 1" : req.body.query;

  client.query(sql, (err, results) => {
    if (err) {
      res.statusCode = 503;
      res.statusMessage = err.message;
      res.end();
      client.end();
      return;
    }
    if (results.command === "SELECT") {
      res.json(results.rows);
    } else {
      res.json(`{"affectedRows":"${results.rowCount}"}`);
    }
    client.end();
  });
};
