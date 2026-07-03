CREATE DATABASE CompanyDB;

USE CompanyDB;

-- ==========================
-- EMPLOYEE TABLE
-- ==========================
CREATE TABLE Employee (
    id INT PRIMARY KEY,
    fname VARCHAR(30),
    lname VARCHAR(30),
    age INT,
    emailID VARCHAR(50),
    phoneNo VARCHAR(15),
    city VARCHAR(30)
);

INSERT INTO Employee VALUES
(1,'Aman','Proto',32,'aman@gmail.com','898','Delhi'),
(2,'Yagya','Narayan',44,'yagya@gmail.com','222','Palam'),
(3,'Rahul','BD',22,'rahul@gmail.com','444','Kolkata'),
(4,'Jatin','Hermit',31,'jatin@gmail.com','666','Raipur'),
(5,'PK','Pandey',21,'pk@gmail.com','555','Jaipur');


-- ==========================
-- CLIENT TABLE
-- ==========================
CREATE TABLE Client (
    id INT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    age INT,
    emailID VARCHAR(50),
    phoneNo VARCHAR(15),
    city VARCHAR(30),
    empID INT,

    FOREIGN KEY(empID)
    REFERENCES Employee(id)
);

INSERT INTO Client VALUES
(1,'Mac','Rogers',47,'mac@hotmail.com','333','Kolkata',3),
(2,'Max','Poirier',27,'max@gmail.com','222','Kolkata',3),
(3,'Peter','Jain',24,'peter@abc.com','111','Delhi',1),
(4,'Sushant','Aggarwal',23,'sushant@yahoo.com','45454','Hyderabad',5),
(5,'Pratap','Singh',36,'p@xyz.com','77767','Mumbai',2);


-- ==========================
-- PROJECT TABLE
-- ==========================
CREATE TABLE Project (
    id INT PRIMARY KEY,
    empID INT,
    name VARCHAR(30),
    startDate DATE,
    clientID INT,

    FOREIGN KEY(empID)
    REFERENCES Employee(id),

    FOREIGN KEY(clientID)
    REFERENCES Client(id)
);

INSERT INTO Project VALUES
(1,1,'A','2021-04-21',3),
(2,2,'B','2021-03-12',1),
(3,3,'C','2021-01-16',5),
(4,3,'D','2021-04-27',2),
(5,5,'E','2021-05-01',4);

select * from employee;
select l.id,l.fname,l.lname,r.name from employee as l inner join project as r on l.id=r.empID;
select l.id,l.phoneNo from employee as l inner join client as r on l.id=r.empID where l.city='Jaipur' and r.city='Hyderabad';
select * from employee as l left join project as r on r.empID=l.id;
select l.id,l.name,r.fname,r.lname,r.emailID from  project as l left join employee as r on l.empID=r.id;
select * from employee as l cross join project as r 