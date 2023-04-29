//Basic express setup:

const express = require("express");
const mysql = require("mysql");

const app = express();
const PORT = 3000; // default port 8080

//connect to mysql
const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb"
};

app.get("/", (req, res) => {
  const connection = mysql.createConnection(config);
  
  const sql = `INSERT INTO people(name) values('Lucas')`;
  connection.query(sql);

  const sql2 = `SELECT name FROM people`;
  connection.query(sql2, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(`<h1>FullCycleRocks!</h1><br /><ul>${result.map((item) => `<li>${item.name}</li>`).join('')}</ul>`);
  });
  connection.end()

});

//listen
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
}
);

