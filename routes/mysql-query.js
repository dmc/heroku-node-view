exports.execute = function (req, res) {
  const mysql = require("mysql");

  const sql = req.body.event === "login" ? "SELECT 1" : req.body.query;
  const connection = mysql.createConnection({
    host: req.body.host,
    port: req.body.port,
    user: req.body.user,
    password: req.body.password,
    database: req.body.database,
  });

  connection.connect();
  connection.query({ sql: sql }, (err, results) => {
    if (err) {
      res.statusCode = 503;
      res.statusMessage = err.message;
      res.end();
      connection.end();
      return;
    }

    res.json(results);
    connection.end();
  });
};
