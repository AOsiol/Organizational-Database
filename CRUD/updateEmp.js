const inquirer = require("inquirer");

function addEmployee(conn, cb) {
  inquirer
    .prompt([
      {
        name: "empFirst",
        type: "input",
        message: "What is employee's first name?",
      },
      {
        name: "empLast",
        type: "input",
        message: "What is employee's last name?",
      },
      {
        name: "empRoleId",
        type: "input",
        message: "What is employee's role id?",
      },
      {
        name: "empManId",
        type: "input",
        message: "What is employee's manager id?",
      },
    ])
    .then(function (answer) {
      let query = conn.query(
        "INSERT INTO employee SET ?",
        {
          first_name: answer.empFirst,
          last_name: answer.empLast,
          role_id: answer.empRoleId,
          manager_id: answer.empManId,
        },
        function (err, res) {
          if (err) throw err;
          else {
            console.log(`${answer.empFirst} ${answer.empLast} was added.`);
            cb();
          }
        }
      );
    });
}

module.exports = addEmployee;
