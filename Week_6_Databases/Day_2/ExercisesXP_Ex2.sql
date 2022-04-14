-- Exercises XP Ex 2
-- SELECT * FROM customer;
-- 2
-- SELECT first_name || ' ' || last_name AS full_name FROM customer;

-- 3
--  SELECT DISTINCT create_date FROM customer

-- 4
-- SELECT * FROM customer ORDER BY first_name DESC;

-- 5
-- SELECT film_id, title, description, release_year, rental_rate FROM film 
-- ORDER BY rental_rate ASC;

-- 6
-- SELECT address, phone FROM address WHERE district = 'Texas';
-- SELECT first_name, last_name, address, phone FROM customer
-- INNER JOIN address
-- ON customer.address_id = address.address_id
-- WHERE district = 'Texas';

-- 7
-- SELECT * FROM film WHERE film_id = 15 OR film_id = 150;

-- 8
-- SELECT film_id, title, description, length, rental_rate FROM film WHERE title ILIKE '%matrix%';

-- 9
-- SELECT * FROM film WHERE title LIKE 'Th%';

-- 10
-- SELECT * FROM film ORDER BY rental_rate ASC LIMIT 10;

-- 11
-- SELECT * FROM film ORDER BY rental_rate ASC OFFSET 10 LIMIT 10
-- SELECT * FROM film
-- ORDER BY rental_rate ASC OFFSET 10 FETCH FIRST 10 ROW ONLY;

-- 12
-- SELECT customer.customer_id, first_name || ' ' || last_name AS full_name, amount, payment
-- FROM customer
-- INNER JOIN payment
-- ON customer.customer_id = payment.customer_id
-- ORDER BY customer.customer_id ASC;

-- 13
-- SELECT * FROM film 
-- LEFT JOIN inventory 
-- ON film.film_id = inventory.film_id
-- WHERE film.film_id NOT IN (SELECT inventory.film_id FROM inventory)
--***WHERE inventory.film_id = NULL***
-- ORDER BY film.film_id;

-- 14
-- SELECT city.city, country.country FROM city
-- JOIN country
-- ON city.country_id = country.country_id
-- ORDER BY country.country_id ASC;

-- 15
-- SELECT customer.customer_id, first_name || ' ' || last_name AS full_name,
-- amount, payment_date
-- FROM payment
-- JOIN customer
-- ON payment.customer_id = customer.customer_id
-- WHERE payment.staff_id = 1 
-- ORDER BY customer.customer_id ASC;
SELECT COUNT (payment.customer_id) AS number_of_rentals, 
AVG(amount) AS average_rental_amount
SUM(amount) AS total_revenue
FROM payment
JOIN customer
ON payment.customer_id = customer.customer_id
WHERE payment.staff_id = 1

