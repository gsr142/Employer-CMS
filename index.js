// import statements
const inquirer = require('inquirer')
const mysql = require('mysql2');
const newEmpQuestions = require('./lib/questions.js')
const newRoleQuestions = require('./lib/questions.js')
const db = mysql.createConnection(
    {
        host: 'localhost',

        port: 3306,

        user: 'root',

        password: 'password',
        database: 'business_db'
    });

db.connect(function (err) {
    if (err) throw err; 
});


function viewAll(input) {
    //query database based on user input. options are department, role, employee
    db.query(`SELECT * FROM ${input}`, function (err, res){
        if (err) {
            console.error();
        }
        //display results as a table instead of array of objs
        console.table(res);
    });
    //return to main menu
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
        viewAll('employees')
    })
}

function addNewRole() {
    inquirer.prompt(newRoleQuestions).then(function(input){
        db.query("INSERT INTO roles SET ?", {
            title: input.title,
            salary: input.salary,
            department_id: input.department_id
        })
        viewAll('roles')
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


