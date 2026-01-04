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