const inquirer = require("inquirer");

function viewEmployees(conn, cb) {
  let query = conn.query(
    "SELECT * FROM employee",

    function (err, results) {
      if (err) throw err;
      else {
        console.log(results);
        cb();
      }
    }
  );
}

module.exports = viewEmployees;
