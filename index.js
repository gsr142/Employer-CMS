// import statements
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

const addNewEmployee = (input) => {
    db.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) 
    VALUES (${input.first_name}, ${input.last_name}, ${input.role_id}, ${input.manager_id})`, function (err, res){
        if (err) {
            console.error();
        }
        
        return res;
    
    });
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

newEmp = {
    'first_name': 'Greg',
    'last_name': 'Richardson',
    'role_id': 3,
    'mananger_id': '1'
}
addNewEmployee(newEmp)