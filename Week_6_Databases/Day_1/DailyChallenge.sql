-- SELECT COUNT(*) FROM actors;

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES ('Oliver', 'Ah You');
-- Error: Insert has more target columns than expressions
SELECT * FROM actors;