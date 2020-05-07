const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

const viewEmployees = require("./CRUD/viewEmp");
const addEmployee = require("./CRUD/addEmp");
const deleteEmployee = require("./CRUD/deleteEmp");
const updateEmployee = require("./CRUD/updateEmp");
const viewRoles = require("./CRUD/viewRoles");
const addRole = require("./CRUD/addRole");
const deleteRole = require("./CRUD/deleteRole");

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "organization_db",
  });
}

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
        "View all employees",
        "Add employee",
        "Remove employee",
        "Update employee information",
        "View all roles",
        "Add role",
        "Remove role",
        "Exit",
      ],
    })
    .then(function (answer) {
      switch (answer.action) {
        case "View all employees":
          viewEmployees(connection, initialQuestions);
          break;

        case "Add employee":
          addEmployee(connection, initialQuestions);
          break;

        case "Remove employee":
          deleteEmployee(connection, initialQuestions);
          break;

        case "Update employee information":
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
