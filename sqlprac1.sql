CREATE DATABASE Company;

USE Company;

-- ======================
-- Department 1
-- ======================

CREATE TABLE Dept1 (
    empid INT PRIMARY KEY,
    name VARCHAR(30),
    role VARCHAR(30)
);

INSERT INTO Dept1 VALUES
(1,'A','Engineer'),
(2,'B','Salesman'),
(3,'C','Manager'),
(4,'D','Salesman'),
(5,'E','Engineer');


-- ======================
-- Department 2
-- ======================

CREATE TABLE Dept2 (
    empid INT PRIMARY KEY,
    name VARCHAR(30),
    role VARCHAR(30)
);

INSERT INTO Dept2 VALUES
(3,'C','Manager'),
(6,'F','Marketing'),
(7,'G','Salesman');

SELECT * FROM DEPT1 UNION 
SELECT * FROM DEPT2  ;

SELECT * FROM DEPT1  WHERE role='Salesman' UNION SELECT * FROM DEPT2  WHERE role='Salesman';

SELECT distinct * FROM dept1 INNER JOIN DEPT2 using(empid);
select * from dept1 left join dept2 using(empid) where dept2.empid is null;
use companydb;
select * from employee;
create view custom_view as select  fname,lname,age from employee;
select * from custom_view;
alter view custom_view as select fname from employee; 