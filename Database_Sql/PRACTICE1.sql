CREATE DATABASE college;
USE college;

CREATE TABLE teacher(
id INT PRIMARY KEY,
name VARCHAR(30),
subject VARCHAR(30),
salary INT 
);


INSERT INTO teacher 
(id,name,subject,salary) 
VALUES
(1, "ajay", "math", 50000),
(2, "bharat", "english", 60000),
(3, "chetan", "chemistry", 45000),
(4, "divya", "physics", 75000);  

SELECT * FROM teacher;

-- Select teachers whose salary is more than 55K

SELECT * from teacher WHERE salary>55000;
 
-- Rename the salary column of teacher table to ctc

ALTER TABLE teacher
CHANGE COLUMN salary ctc INT;
SELECT * FROM teacher;

ALTER TABLE teacher
CHANGE COLUMN ctc salary  INT;
SELECT * FROM teacher;

-- Update salary of all teachers by giving them an increment of 25%

UPDATE teacher
SET salary = salary + salary*25/100;

SELECT * FROM teacher;

-- Add a new column for teachers called city. The default city should be "Gurgaon"

ALTER TABLE teacher 
ADD COLUMN city VARCHAR(50) DEFAULT "Gurgaon";
SELECT * FROM teacher;

-- Delete the salary column for teacher table
ALTER TABLE teacher
DROP COLUMN salary;
SELECT * FROM teacher;


CREATE TABLE student
(
roll_no INT PRIMARY KEY,
name VARCHAR(40),
city VARCHAR(40),
marks INT 
);

INSERT INTO student VALUES
(110, "adam", "Delhi", 76),
(108, "bob", "Mumbai", 65),
(124, "casey", "Pune", 94),
(112, "duke", "Pune", 80);



-- · Select all students who scored 75+

SELECT * FROM student WHERE marks>75;

-- . Find names of all cities where students are from
 
SELECT DISTINCT city FROM student;

SELECT city FROM student GROUP BY (city);
  
-- . Find the maximum marks of students from each city

-- . Find the average of the class

-- · Add a new column grade, assign grade such that :

-- marks > 80, grade = O

-- marks 70-80, grade = A

-- marks 60-70, grade = B
