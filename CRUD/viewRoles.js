const inquirer = require("inquirer");

function viewRoles(conn) {
  let query = conn.query(
    "SELECT * FROM role",

    function (err, results) {
      if (err) throw err;
      else {
        console.log(results);
      }
    }
  );
}

module.exports = viewRoles;
