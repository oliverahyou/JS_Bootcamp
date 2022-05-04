-- 1
-- UPDATE film 
-- SET language_id = 2
-- WHERE film_id = 3

-- 2
-- Foreign key = address_id, store_id

-- 3
-- It is easy peasy lemon squeezy.

-- 4
-- SELECT return_date
-- FROM rental 
-- WHERE return_date IS NULL;
-- Outstanding rentals: 183

-- 5
-- SELECT rental_rate
-- FROM film
-- ORDER BY rental_rate DESC limit 30

-- 6
-- SELECT first_name, last_name, actor_id 
-- FROM actor 
-- WHERE first_name = 'Penelope' and last_name = 'Monroe'
-- (Penelope Monroe actor_id : 120)

-- SELECT film_id FROM film_actor WHERE actor_id = '120'

-- SELECT title, description
-- FROM film
-- WHERE description ILIKE '%sumo%'

-- SELECT film.title, film.description, film_actor.actor_id
-- FROM film
-- INNER JOIN film_actor
-- ON film.film_id = film_actor.film_id
-- WHERE film.description ILIKE '%sumo%'

-- -- 1st Movie title: Park Citizen

-- Documentary: category_id = 6
-- SELECT film.title, film.description, film.length, film.rating, film_category.category_id
-- FROM film
-- INNER JOIN film_category
-- ON film.film_id = film_category.film_id
-- WHERE film.length < 60 AND film_category.category_id = 6 AND film.rating = 'R'

-- -- 2nd Movie title: Cupboard Sinners

-- SELECT customer_id
-- FROM customer
-- WHERE first_name = 'Matthew' AND last_name = 'Mahan'
-- Customer_id : 323

-- Date format YYYY/MM/DD

-- SELECT store_id 
-- FROM customer
-- WHERE first_name = 'Matthew' AND last_name = 'Mahan'
-- store_id : 2

SELECT *
FROM inventory
INNER JOIN rental
ON inventory.inventory_id = rental.inventory_id
WHERE customer_id = 323 AND return_date ILIKE ('2005-07-29%' AND '2005-07-30%' AND '2005-07-31%')