--Createe table for items
-- CREATE TABLE items(
-- 	id SERIAL PRIMARY KEY,
-- 	item varchar(50) NOT NULL,
-- 	price MONEY	NOT NULL
-- );
-- INSERT INTO items (item, price)
-- VALUES ('Small Desk', 100),
-- ('Large Desk', 300), ('Fan', 80);
-- SELECT * FROM items;

--Create table for customers
--  CREATE TABLE customers(
--  	customer_id SERIAL PRIMARY KEY,
--  	firstname varchar(255) NOT NULL,
-- 	lastname varchar(255)
-- );

-- INSERT INTO customers(firstname, lastname)
-- VALUES ('Greg', 'Jones'), ('Sandra', 'Jones'), ('Scott', 'Scott'), ('Trevor', 'Green'),
-- ('Melanie', 'Johnson');
-- SELECT * FROM customers;

-- 1. All items
--   SELECT * FROM items

-- 2. items above 80
--  SELECT * FROM items WHERE price > 80;

-- 3. below 300 included
-- SELECT * FROM items WHERE price <= 300.00;

-- 4. Customer with last name 'Smith'
-- SELECT * FROM customers WHERE lastname = 'Smith';

-- 5. lastname Jones
-- SELECT * FROM customers WHERE lastname = 'Jones';

-- 6. customers with firstname not Scott
-- SELECT * FROM customers where firstname != 'Scott';