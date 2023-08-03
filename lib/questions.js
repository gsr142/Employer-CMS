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
module.exports = newEmpQuestions, newRoleQuestions