-- 1
-- SELECT name FROM language;

-- 2
-- SELECT film.title, film.description, language.name
-- FROM film
-- INNER JOIN language
-- ON film.language_id = language.language_id;

-- SELECT film.title, film.description, language.name
-- FROM film
-- LEFT JOIN language
-- ON film.language_id = language.language_id;

-- SELECT film.title, film.description, language.name
-- FROM film
-- RIGHT JOIN language
-- ON film.language_id = language.language_id;

-- SELECT film.title, film.description, language.name
-- FROM film
-- FULL JOIN language
-- ON film.language_id = language.language_id;


-- 3
-- INSERT INTO new_film (name)
-- VALUES ('The Matrix'), ('The Matrix: Reloaded'), ('The Matrix: Revolutions');
-- SELECT * FROM new_film;

-- 4

-- 5
-- INSERT INTO customer_review(title, score, review_text, last_update)
-- VALUES ('The Matrix', 8, 'Amazing movie!', '14/04/2022'),
-- ('The Matrix: Reloaded', 8, 'I am stunned by the CGI. Nice movie.', '07/04/2022');
-- SELECT * FROM customer_review;

-- 6
-- DELETE FROM new_film
-- WHERE id = 1;
-- SELECT * FROM new_film;

-- SELECT * FROM customer_review;