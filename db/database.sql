CREATE DATABASE IF NOT EXIST QADdatabase;

Use QADdatabase;

CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name Varchar (45) DEFAULT NULL
    salary INT, DEFAULT NULL,
    PRIMARY KEY (id)
    
);

DESCRIBE employee;

INSERT INTO employee VALUES
(1, 'Joe', 1000),
(2, 'Henry', 2500),
(3, 'Sam', 2000),
(4, 'Max', 1500;)