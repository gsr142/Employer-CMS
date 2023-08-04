const newEmpQuestions = [
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

];

const newRoleQuestions = [
    {
        name: 'title',
        message: "Enter the title of the new role",
        type: 'input'
    },
    {
        name: 'salary',
        message: "Enter salary for this role",
        type: 'input'
    },
    {
        name: 'department_id',
        message: "Enter the department ID for the new role",
        type: 'input'
    }

]
const startUpQuestion = [
    {
        name: 'navigate',
        message: 'What would you like to do?',
        choices: ['View all departments', 'View all roles', 'View all employees',
        'Add a department', 'Add a role', 'Add an employee', 'Update an employee role'],
        type: 'list'
    }
]
module.exports = newEmpQuestions, newRoleQuestions, startUpQuestion