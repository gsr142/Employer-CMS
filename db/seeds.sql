-- insert dept data into dept table
INSERT INTO departments (department_name)
VALUES ('Software'),
       ('Sales'),
       ('Advertising'),
       ('Accounting');

-- insert role data into role table
INSERT INTO roles (title, salary, department_id)
VALUES ('CTO', 300000, 1),
       ('Senior Developer', 200000, 1),
       ('Junior Developer', 100000, 1),
       ('Sales Manager', 225000, 2),
       ('Sales Lead', 150000, 2),
       ('Sales Associate', 80000, 2),
       ('Ads Director', 175000, 3),
       ('Artist', 90000, 3),
       ('Copy Writer', 75000, 3),
       ('CFO', 300000, 4),
       ('Accounting Manager', 185000, 4),
       ('Accountant', 140000, 4),
       ('Office Assistant', 75000, 4);

-- instert employee data into employee table
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Wilson', 1, NULL),
       ('Jane', 'Johnson', 2, 1),
       ('June', 'Moon', 3, 1);
