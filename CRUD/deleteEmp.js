const inquirer = require("inquirer");

function deleteEmployee(conn, cb) {
  inquirer
    .prompt({
      name: "id",
      type: "input",
      message:
        "What is the id of the employee would you like to remove from the list?",
    })
    .then(function (answer) {
      let query = conn.query(
        "DELETE FROM employee WHERE ? ",
        {
          id: answer.id,
        },
        function (err, res) {
          if (err) throw err;
          else {
            console.log(`Employee id: ${answer.id} was removed.`);
            cb();
          }
        }
      );
    });
}

module.exports = deleteEmployee;
