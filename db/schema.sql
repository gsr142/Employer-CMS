DROP DATABASE IF EXISTS business_db;
CREATE DATABASE business_db;

USE business_db;

-- create dept table
-- create id and dept name columns
CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT,
    deparment_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

-- create role table
-- create id**, title, salary, and dept_id* columns
CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary INT NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES departments(id)
    ON DELETE SET NULL,
    PRIMARY KEY (id)
);


-- create employee table
-- create id**, first name, last name, role-id*, and manager_id* 
CREATE TABLE employees(
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id)
    REFERENCES roles(id)
    ON DELETE SET NULL,
    PRIMARY KEY (id)
)
