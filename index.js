// import statements
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',

    port: 3302,

    user: 'root',

    password: 'password',
    database: 'business_db'
});

connection.connect(function(err) {
    if (err) throw err;
    //start function here
})


const viewAllEmployees = () => {
    //query database
    //display results
    //return to main menu
}

const addNewEmployee = () => {

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

// Connect to database