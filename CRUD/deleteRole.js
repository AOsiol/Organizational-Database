const inquirer = require("inquirer");

function deleteRole(conn, cb) {
  inquirer
    .prompt({
      name: "id",
      type: "input",
      message:
        "What is the id of the role you would like to remove from the list?",
    })
    .then(function (answer) {
      let query = conn.query(
        "DELETE FROM role WHERE ? ",
        {
          id: answer.id,
        },
        function (err, res) {
          if (err) throw err;
          else {
            console.log(`Role id: ${answer.id} was removed.`);
            cb();
          }
        }
      );
    });
}

module.exports = deleteRole;
