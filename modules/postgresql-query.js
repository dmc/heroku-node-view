const execute = (req, res) => {
  const promise = require("bluebird");
  const pgp = require("pg-promise")({ promiseLib: promise });

  const params = {
    host: req.body.host,
    port: req.body.port,
    database: req.body.database,
    user: req.body.user,
    password: req.body.password,
    allowExitOnIdle: true,
  };

  const query = req.body.event === "login" ? "SELECT 1" : req.body.query;
  const db = pgp(params);

  db.result(query)
    .then((result) => {
      if (result.command === "SELECT") {
        res.json(result.rows);
      } else {
        res.json(JSON.parse(`{ "affectedRows": ${result.rowCount} }`));
      }
    })
    .catch((error) => {
      res.statusCode = 503;
      res.statusMessage = error.message;
      res.end();
    })
    .finally(() => {
      pgp.end();
    });
};

exports.execute = execute;
