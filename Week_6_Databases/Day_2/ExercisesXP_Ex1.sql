-- Exercise XP Q1
-- Part 1

--  SELECT * FROM items ORDER BY price ASC
--  SELECT * FROM items 
--  WHERE price >= 80 
--  ORDER BY price DESC;

--  SELECT firstname, lastname FROM customers 
--  ORDER BY firstname ASC LIMIT 3;

-- CREATE TABLE purchases(
-- 	id SERIAL,
-- 	customer_id INTEGER,
-- 	item_id INTEGER,
-- 	quantity_purchased INTEGER,
-- 	PRIMARY KEY (id),
-- 	FOREIGN KEY (customer_id) REFERENCES customers (customer_id),
-- 	FOREIGN KEY (item_id) REFERENCES items (id)
-- );

-- SELECT * FROM purchases

-- 3 Add data to purchases
--  INSERT INTO purchases (customer_id, item_id, quantity_purchased)
--  VALUES ((SELECT customer_id FROM customers WHERE firstname = 'Scott' AND lastname = 'Scott'),
--  (SELECT id FROM items WHERE item = 'Fan'), 1),
-- ((SELECT customer_id FROM customers WHERE firstname = 'Melanie' AND lastname = 'Johnson'),
--  (SELECT id FROM items WHERE item = 'Large Desk'), 10),
-- ((SELECT customer_id FROM customers WHERE firstname = 'Greg' AND lastname = 'Jones'),
--  (SELECT id FROM items WHERE item = 'Small Desk'), 2);
 
--  SELECT * FROM purchases;

-- Part 2
-- SELECT * FROM purchases
-- INNER JOIN customers
-- ON purchases.customer_id = customers.customer_id
-- WHERE customers.customer_id = 5;

-- SELECT * FROM purchases
-- INNER JOIN customers
-- ON purchases.item_id = item_id
-- WHERE items.item = 'Large Desk' OR items.item = 'Small Desk'

-- 2
-- SELECT firstname, lastname, item, quantity_purchased FROM purchases
-- INNER JOIN customers
-- ON purchases.customer_id = customers.customer_id
-- JOIN items ON purchases.item_id = items.id;

-- 3
-- INSERT INTO purchases (customer_id, item_id, quantity_purchased)
-- VALUES ((SELECT customer_id FROM customers WHERE firstname = 'Scott' 
-- 		 AND lastname = 'Scott'));
-- SELECT * FROM purchases;

