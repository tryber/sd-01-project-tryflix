const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  port: '3306',
  database: 'project_tryflix',
});

function searchDataBase(query) {
  return new Promise((resolve, reject) => {
    connection.query(query, (err, results) => {
      if (err) reject(err);
      resolve(results);
    })
  })
}

module.exports = searchDataBase;