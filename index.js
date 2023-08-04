// import statements
const inquirer = require('inquirer')
const mysql = require('mysql2');
const newEmpQuestions = require('./lib/questions.js')
const newRoleQuestions = require('./lib/questions.js')
const startUpQuestion = require('./lib/questions.js')
//set database
const db = mysql.createConnection(
    {
        host: 'localhost',

        port: 3306,

        user: 'root',

        password: 'password',
        database: 'business_db'
    });
//connect to database
db.connect(function (err) {
    if (err) throw err; 
});

function init () {
    inquirer.prompt(startUpQuestion)
    .then(function(input){
       switch (input) {
        case 'View all departments':
            viewAllDepts();
            break;

        case 'View all roles':
            viewAllRoles();
            break;

        case 'View all employees':
            viewAllEmployees();
            break;
        case 'Add a department':
            addNewDept();
            break;
        case 'Add a role':
            addNewRole();
            break;
        case 'Add an employee':
            addNewEmployee();
            break;
        case 'Update an employee role':
            updateEmployee();
            break;
       } 
    })
}

function viewAllDepts() {
    //query database based on user input. options are department, role, employee
    db.query(`SELECT * FROM departments`, function (err, res){
        if (err) {
            console.error();
        }
        //display results as a table instead of array of objs
        console.table(res);
    });
    //return to main menu
}

function viewAllEmployees(){
    db.query(`SELECT employees.id AS ID, employees.first_name AS 'First Name', employees.last_name AS 'Last Name', roles.title AS Title, roles.salary as Salary, departments.department_name AS Department
    FROM employees
    LEFT JOIN roles ON employees.role_id = roles.id
    LEFT JOIN departments ON roles.department_id = departments.id`, function (err, res){
        if (err){
            console.error();
        }
        console.table(res);
    })

}


function viewAllRoles(){
    db.query(`SELECT roles.id AS 'Role ID', roles.title AS Title, roles.salary AS Salary, departments.department_name AS Department
    FROM roles
    LEFT JOIN departments ON roles.department_id = departments.id`, function (err, res){
        if (err){
            console.error();
        }
        console.table(res);
    })
}

function addNewEmployee() {
    inquirer.prompt(newEmpQuestions)
    .then(function(input){
        db.query("INSERT INTO employees SET ?", {
            first_name: input.first_name,
            last_name: input.last_name,
            role_id: input.role_id,
            manager_id: input.manager_id
        })
        viewAllEmployees()
    })
}

function addNewRole() {
    inquirer.prompt(newRoleQuestions).then(function(input){
        db.query("INSERT INTO roles SET ?", {
            title: input.title,
            salary: input.salary,
            department_id: input.department_id
        })
        viewAllRoles()
    })
}

function addNewDept(){
    inquirer.prompt([
        {
            name: 'department_name',
            message: 'Enter the new department',
            type: 'input'
        }
    ]).then(function(input){
        db.query("INSERT INTO departments SET ?", {
            department_name: input.department_name
        })
        viewAll('departments')
    })
}

init();
