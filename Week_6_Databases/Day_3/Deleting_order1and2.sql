-- REMOVING ORDERS 1 AND 2 FROM ORDERS TABLE

-- Create a table
-- CREATE TABLE persons (
-- 	person_id SERIAL PRIMARY KEY,
-- 	lastname TExT NOT NULL,
-- 	firstname TEXT NOT NULL,
-- 	age SMALLINT NOT NULL
-- );

-- Add values 
-- INSERT INTO persons (person_id, lastname, firstname, age)
--  VALUES (1, 'Hansen', 'Ola', 30),
--  (2, 'Svendson', 'Tove', 23),
--  (3, 'Pettersen', 'Karl', 20);

--  SELECT * FROM persons;

-- Orders
--  CREATE TABLE orders(
--  	order_id SERIAL PRIMARY KEY,
--  	ordernumber INTEGER NOT NULL,
--  	person_id INTEGER,
--  	FOREIGN KEY (person_id) REFERENCES persons(person_id)
--  );
--  SELECT * FROM orders;

-- Add orders
-- INSERT INTO orders(order_id, ordernumber, person_id)
-- VALUES (1, 77895, 3),
-- (2, 44678, 3),
-- (3, 22456, 2),
-- (4, 24562, 1);
-- SELECT * FROM orders;

-- Test 1
-- DELETE FROM orders
-- WHERE order_id = 1 OR order_id = 2;
-- SELECT * FROM orders;