const express = require('express');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 8080;

const db = mysql.createConnection({
  host: '34.121.145.35',
  user: 'root',
  password: 'bigcock',
  database: 'user'
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL database');
  }
});

app.get('/', (req, res) => {
  db.query('SELECT * FROM user', (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
