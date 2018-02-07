const mysql = require('mysql');
const option = require('./config.js');

const connection = mysql.createConnection(option);
function query(sql) {
  return new Promise((resolve, reject) => {
    connection.query(sql, function (error, results, fields) {
      if (error) {
        error.status = 500;
        reject(error)
      } else {
        resolve(results);
      }
    })
  })
}
module.exports = {
  query,
  DB: connection,
};
