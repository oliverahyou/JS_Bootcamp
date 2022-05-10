-- Part I
-- 1
-- CREATE TABLE Customer (
-- 	id SERIAL PRIMARY KEY, 
-- 	first_name VARCHAR(50) NOT NULL,
-- 	last_name VARCHAR(50) NOT NULL,
-- )

-- CREATE TABLE Customer_profile(
-- 	id SERIAL PRIMARY KEY,
-- 	isLoggedIn BOOLEAN DEFAULT 'false',
-- 	customer_id SERIAL,
-- 	FOREIGN KEY (customer_id) REFERENCES Customer(id)
-- )

-- 2
-- INSERT INTO Customer (first_name, last_name)
-- VALUES ('John', 'Doe'),
-- ('Jerome', 'Lalu'), 
-- ('Lea', 'Rive');

-- 3
-- INSERT INTO Customer_profile (isLoggedIn, customer_id)
-- VALUES (TRUE, 1),
-- (FALSE, 2)

-- 4
-- SELECT first_name
-- FROM Customer
-- INNER JOIN Customer_profile
-- ON Customer.id = Customer_profile.customer_id
-- WHERE Customer_profile.isLoggedIn = 'TRUE';

-- SELECT first_name, Customer_profile.isLoggedIn
-- FROM Customer
-- LEFT JOIN Customer_profile
-- ON Customer.id = Customer_profile.customer_id;

-- SELECT first_name, Customer_profile.isLoggedIn
-- FROM Customer
-- INNER JOIN Customer_profile
-- ON Customer.id = Customer_profile.customer_id
-- WHERE Customer_profile.isLoggedIn = FALSE;

-- Part II
-- 1
-- CREATE TABLE Book (
-- 	book_id SERIAL PRIMARY KEY,
-- 	title VARCHAR(100) NOT NULL,
-- 	author VARCHAR(100) NOT NULL
-- )

-- 2
-- INSERT INTO Book(title, author)
-- VALUES('Alice In Wonderland', 'Lewis Carroll'), 
-- ('Harry Potter', 'J.K Rowling'), ('To kill a mockingbird', 'Harper Lee'); 

-- 3
-- CREATE TABLE Student (
-- 	student_id SERIAL PRIMARY KEY, name VARCHAR(100) NOT NULL UNIQUE, age smallint 
-- )

-- 4
-- INSERT INTO Student (name, age)
-- VALUES ('John', 12), ('Lera', 11), ('Patrick', 10), ('Bob', 14)

-- 5
-- 	CREATE TABLE Library(
-- 	book_fk_id SMALLINT,
-- 	student_fk_id SMALLINT,
-- 	borrowed_date DATE,
-- 	FOREIGN KEY(book_fk_id) REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- 	FOREIGN KEY(student_fk_id) REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE
-- );

-- Book
-- Alice In Wonderland 1
-- Harry Potter 2
-- To kill a mockingbird 3

-- Student
-- John 1
-- Lera 2
-- Patrick 3
-- Bob 4

-- 6
-- INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
-- VALUES(1, 1, '15/02/2022'), (3, 4, '03/03/2021'), (1, 2, '23/05/2021'), (2, 4, '12/08/2021')

-- 7
SELECT * 
FROM Student, Book
WHERE 