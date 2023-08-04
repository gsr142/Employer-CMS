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
        message: "Enter the employee's role",
        choices: ['1-CTO', '2-Senior Developer','3-Junior Developer', '4-Sales Manager',
        '5-Sales Lead', '6-Sales Associate', '7-Ads Director', '8-Artist', '9-Copy Writer', '10-CFO', '11-Accounting Manager', '12-Accountant', '13-Office Assistant'],
        type: 'list'
    },
    {
        name: 'manager_id',
        message: "Enter the employee's manager ID",
        type: 'input'
    }

];



module.exports = newEmpQuestions;