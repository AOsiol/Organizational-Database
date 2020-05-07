const inquirer = require("inquirer");

function viewEmployees(conn) {
  let query = conn.query(
    "SELECT * FROM employee",

    function (err, results) {
      if (err) throw err;
      else {
        console.log(results);
      }
    }
  );
}

module.exports = viewEmployees;
