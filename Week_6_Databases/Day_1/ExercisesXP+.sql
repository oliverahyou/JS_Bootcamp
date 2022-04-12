-- Insert student entries
 set datestyle = 'ISO, DMY';
 show datestyle;
-- 1
-- INSERT INTO students (first_name, last_name, birth_date)
-- VALUES('Marc', 'Benichou', '02/11/1998'), ('Yoan', 'Cohen', '03/12/2010'), 
-- ('Lea', 'Benichou', '27/07/1987'), ('Amelia', 'Dux', '07/04/1996'),
-- ('David', 'Grez', '14/06/2003'), ('Omer', 'Simpson', '03/10/1980');

-- SELECT * FROM students;

-- 2
-- INSERT INTO students (last_name, first_name, birth_date)
-- VALUES('Ah You', 'Oliver', '07/04/1996');
-- SELECT * FROM students

-- Select first and last names of all students
-- SELECT first_name, last_name FROM students;

-- 3
-- 1 id = 2
-- SELECT first_name, last_name FROM students WHERE first_name ILIKE '%a_';t_name FROM students WHERE id = 2;

-- SELECT first_name, last_name FROM students WHERE first_name = 'Marc' AND last_name = 'Benichou';

-- SELECT first_name, last_name FROM students WHERE first_name = 'Marc' OR last_name = 'Benichou';

-- SELECT first_name, last_name FROM students WHERE first_name ILIKE '%a%';
-- SELECT first_name, last_name FROM students WHERE first_name ILIKE 'a%';
--  SELECT first_name, last_name FROM students WHERE first_name ILIKE '%a';
--   SELECT first_name, last_name FROM students WHERE first_name ILIKE '%a_';
-- SELECT first_name, last_name FROM students WHERE id=1 OR id=3;
-- SELECT * FROM students WHERE birth_date > '01/01/2000';