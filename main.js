const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");
const addEmployee = require("./CRUD/addEmp");
const deleteEmployee = require("./CRUD/deleteEmp");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "organization_db",
});

connection.connect(function (err) {
  if (err) throw err;
});

function initialQuestions() {
  return inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "Add employee",
        "Remove employee",
        "Update employee role",
        "View all roles",
        "Add role",
        "Remove roll",
        "Exit",
      ],
    })
    .then(function (answer) {
      switch (answer.action) {
        case "Add employee":
          addEmployee(connection, initialQuestions);
          break;

        case "Remove employee":
          deleteEmployee(connection, initialQuestions);
          break;

        case "Update employee role":
          updateEmployee(connection, initialQuestions);
          break;

        case "View all roles":
          viewRoles(connection, initialQuestions);
          break;

        case "Add role":
          addRole(connection, initialQuestions);
          break;

        case "Remove role":
          deleteRole(connection, initialQuestions);
          break;

        case "exit":
          connection.end();
          process.exit();
      }
    });
}
initialQuestions();
