CREATE DATABASE instagram;

USE instagram;

CREATE TABLE users(
id INT ,
age INT ,
name VARCHAR(50) NOT NULL,
email VARCHAR(50) UNIQUE,
followers INT DEFAULT 0,
following INT,
CONSTRAINT CHECK(age>=13),
PRIMARY KEY (id)
);
INSERT INTO users
(id, age, name, email, followers, following)
VALUES
(1, 14, "adam", "adam@yahoo.in", 123, 145),
(2, 15, "bob", "bob123@gmail.com", 200, 200),
(3, 16, "casey", "casey@email.com", 300, 306),
(4, 17, "donald", "donald@gmail.com", 200, 105);

INSERT INTO users
(id, age, name, email, followers, following)
VALUES
(5, 14, "eve", "eve@yahoo.in", 400, 145),
(6, 16, "farah", "farah@gmail.com", 10000, 1000);


SELECT * FROM users WHERE followers >= 200 ;
SELECT age , following FROM users WHERE followers >= 200 ;
SELECT * FROM users WHERE age +  1 = 18;
SELECT * FROM users WHERE age>15 AND followers>200;
SELECT * FROM users WHERE age>15 OR followers>200;
SELECT * FROM users WHERE age BETWEEN 15 AND 25;
SELECT * FROM users WHERE email IN ("bob123@gmail.com", "adam@yahoo.in");
SELECT * FROM users WHERE age NOT IN (14,16);
SELECT * FROM users WHERE followers >= 200 LIMIT 2 ;
SELECT * FROM users  LIMIT 2 ;
SELECT * FROM users ORDER BY followers ASC;
SELECT * FROM users ORDER BY followers DESC;
SELECT * FROM users ORDER BY followers;
SELECT MAX(followers) FROM users;

SELECT COUNT(age) FROM users WHERE age>15;
SELECT MIN(age) FROM users;
SELECT AVG(age) FROM users;
SELECT SUM(followers) FROM users;


SELECT age, COUNT(id) FROM users GROUP BY age;

SELECT age,MAX(followers) FROM users GROUP BY age;

-- using a having . for using a having clause there will be a grouping
SELECT age,MAX(followers) 
FROM users 
GROUP BY age
HAVING MAX(followers) >= 200;

-- using a having to order by desc and asc

SELECT age,MAX(followers) 
FROM users 
GROUP BY age
HAVING MAX(followers) >= 200
ORDER BY MAX(followers) DESC;

SELECT age,MAX(followers) 
FROM users 
GROUP BY age
HAVING MAX(followers) >= 200
ORDER BY age DESC;

-- SQL CANNOT LET TO DO UPDATES IN TABLES SO WE NEED TO DO 
SET SQL_SAFE_UPDATES = 0;

UPDATE users 
SET followers = 6000
WHERE age = 16;

SELECT * FROM users;


-- DELETE THE FROM THE TABLE
DELETE FROM users WHERE age = 14;

-- ADD OR DO SCHEMA RELATED THINGS

ALTER TABLE users
ADD COLUMN city VARCHAR(40) DEFAULT "delhi";
SELECT * FROM users;

-- DROPPING THE COLUMN FROM  THE TABLE 
ALTER TABLE users
DROP COLUMN city;
SELECT * FROM users;

-- RENAMING TABLE NAME

ALTER TABLE users
RENAME TO insta_userS;


CREATE TABLE posts(
id INT PRIMARY KEY,
content VARCHAR(100),
u_id INT ,
FOREIGN KEY (u_id) REFERENCES users(id)
);

INSERT INTO posts 
(id , content , u_id) 
VALUES 
(1,"HELLO WORLD", 4),
(3,"HELLO VINTI", 4),
(2,"HELLO AYUSH", 3) ;

-- SELECT DISTINCT u_id FROM posts;
SELECT * FROM posts;