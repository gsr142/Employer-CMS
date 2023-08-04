const updateEmpQuestions = [
    {
        name: 'emp',
        message: 'Select an employee to update',
        choices: ['1-John Wilson', '2-Jane Johnson', '3-June Moon'],
        type: 'list'
    },
    {
        name: 'role_id',
        message: "Enter the employee's new role",
        choices: ['1-CTO', '2-Senior Developer','3-Junior Developer', '4-Sales Manager',
        '5-Sales Lead', '6-Sales Associate', '7-Ads Director', '8-Artist', '9-Copy Writer', '10-CFO', '11-Accounting Manager', '12-Accountant', '13-Office Assistant'],
        type: 'list'
    },
]
module.exports = updateEmpQuestions