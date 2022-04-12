-- create a table
CREATE TABLE students (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  gender TEXT NOT NULL
);
-- insert some values
INSERT INTO students VALUES (1, 'Ryan', 'M');
INSERT INTO students VALUES (2, 'Joanna', 'F');
-- fetch some values
-- SELECT * FROM students WHERE gender = 'F';

--Delete values
DELETE FROM students WHERE gender = 'F';


--update values
UPDATE students
SET name= 'Ryanna', gender = 'F'  --can be on multiple lines
WHERE id ='1'; --SQL commands are not case-sensitive and terminate command with ';'

SELECT * FROM students;
