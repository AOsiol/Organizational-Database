const inquirer = require("inquirer");

function viewRoles(conn, cb) {
  let query = conn.query(
    "SELECT * FROM role",

    function (err, results) {
      if (err) throw err;
      else {
        console.log(results);
        cb();
      }
    }
  );
}

module.exports = viewRoles;
