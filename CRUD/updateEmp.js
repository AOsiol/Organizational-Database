const inquirer = require("inquirer");

function updateEmployee(conn, cb) {
  inquirer
    .prompt({
      name: "id",
      type: "input",
      message: "Enter the id of the employee would you like to update?",
    })
    .then(function (chosenEmp) {
      inquirer
        .prompt({
          name: "empInfo",
          type: "list",
          message: "What employee information do you want to update?",
          choices: ["First Name", "Last Name", "Role Id", "Manager Id"],
        })

        .then(function (answer) {
          switch (answer.empInfo) {
            case "First Name":
              inquirer
                .prompt({
                  name: "empFirst",
                  type: "input",
                  message: "What is the new first name?",
                })
                .then(function (answer, empInfo) {
                  let query = conn.query(
                    "UPDATE employee SET first_name = ? WHERE id = ?",
                    [answer.empFirst, chosenEmp.id],
                    function (err, res) {
                      if (err) throw err;
                      else {
                        console.log(
                          `Employee first name was changed to ${answer.empFirst}.`
                        );
                        cb();
                      }
                    }
                  );
                });
              break;

            case "Last Name":
              inquirer
                .prompt({
                  name: "empLast",
                  type: "input",
                  message: "What is the new last name?",
                })
                .then(function (answer, empInfo) {
                  let query = conn.query(
                    "UPDATE employee SET last_name = ? WHERE id = ?",
                    [answer.empLast, chosenEmp.id],
                    function (err, res) {
                      if (err) throw err;
                      else {
                        console.log(
                          `Employee last name was changed to ${answer.empLast}.`
                        );
                        cb();
                      }
                    }
                  );
                });
              break;

            case "Role Id":
              inquirer
                .prompt({
                  name: "roleId",
                  type: "input",
                  message: "What is the new role Id?",
                })
                .then(function (answer) {
                  let query = conn.query(
                    "UPDATE employee SET role_id = ? WHERE id = ?",
                    [answer.roleId, chosenEmp.id],
                    function (err, res) {
                      if (err) throw err;
                      else {
                        console.log(
                          `Employee Role Id was changed to ${answer.roleId}.`
                        );
                        cb();
                      }
                    }
                  );
                });
              break;

            case "Manager Id":
              inquirer
                .prompt({
                  name: "manId",
                  type: "input",
                  message: "What is the new manager Id?",
                })
                .then(function (answer) {
                  let query = conn.query(
                    "UPDATE employee SET manager_id = ? WHERE id = ?",
                    [answer.manId, chosenEmp.id],
                    function (err, res) {
                      if (err) throw err;
                      else {
                        console.log(
                          `Employee manager Id was changed to ${answer.manId}.`
                        );
                        cb();
                      }
                    }
                  );
                });
              break;

            case "exit":
              connection.end();
              process.exit();
          }
        });
    });
}
module.exports = updateEmployee;
