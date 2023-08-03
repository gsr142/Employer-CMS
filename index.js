// import statements
const inquirer = require('inquirer')
const mysql = require('mysql2');
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
    //start function here
    
})


const viewAll = (input) => {
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
    inquirer.prompt([
        {
            name: 'first_name',
            message: "Enter the employee's first name",
            type: 'input'
        },
        {
            name: 'last_name',
            message: "Enter the employee's last name",
            type: 'input'
        },
        {
            name: 'role_id',
            message: "Enter the employee's role ID",
            type: 'input'
        },
        {
            name: 'manager_id',
            message: "Enter the employee's manager ID",
            type: 'input'
        }

    ]).then(function(input){
        db.query("INSERT INTO employees SET ?", {
            first_name: input.first_name,
            last_name: input.last_name,
            role_id: input.role_id,
            manager_id: input.manager_id
        })
        viewAll('employees')
    })
}

const addNewRole = () => {
    //ask the name of the role
    //ask the salary 
    //query departments
    //ask department with list of choices
    //write new data to db
    //return confirmation message
    //return to main menu
}


