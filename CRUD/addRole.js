const inquirer = require("inquirer");

function addRole(conn, cb) {
  inquirer
    .prompt([
      {
        name: "roleTitle",
        type: "input",
        message: "What is the new title?",
      },
      {
        name: "salary",
        type: "input",
        message: "What is the salary?",
      },
    ])
    .then(function (answer) {
      let query = conn.query(
        "INSERT INTO role SET ?",
        {
          title: answer.roleTitle,
          salary: answer.salary,
        },
        function (err, res) {
          if (err) throw err;
          else {
            console.log(`${answer.roleTitle} ${answer.salary} was added.`);
            cb();
          }
        }
      );
    });
}

module.exports = addRole;
