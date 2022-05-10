-- Basic Select Statement
-- 1
-- SELECT first_name AS FirstName, last_name AS LastName
-- FROM employees;

-- 2
-- SELECT DISTINCT department_id FROM employees;

-- 3
-- SELECT * FROM employees
-- ORDER BY first_name DESC

-- 4
-- SELECT first_name, last_name, salary, salary *15/100 AS PF
-- FROM employees

-- 5
-- SELECT employee_id, first_name, last_name, salary
-- FROM employees
-- ORDER BY salary ASC

-- 6
-- SELECT SUM(salary) 
-- FROM employees

-- 7
-- SELECT MIN(salary), MAX(salary)
-- FROM employees

-- 8
-- SELECT AVG(salary)
-- FROM employees

-- 9
-- SELECT COUNT(*) 
-- FROM employees

-- 10
-- SELECT UPPER(first_name) 
-- FROM employees

-- 11
-- SELECT SUBSTRING (first_name, 1, 3)
-- FROM employees

-- 12
-- SELECT (first_name, last_name) AS full_name
-- FROM employees

-- 13
-- SELECT first_name, last_name, LENGTH(first_name) + LENGTH(last_name) AS lengthOfFullName
-- FROM employees

-- 14
-- SELECT *
-- FROM employees
-- WHERE first_name LIKE '%0%'
-- OR first_name LIKE '%1%'
-- OR first_name LIKE '%2%'
-- OR first_name LIKE '%3%'
-- OR first_name LIKE '%4%'
-- OR first_name LIKE '%5%'
-- OR first_name LIKE '%6%'
-- OR first_name LIKE '%7%'
-- OR first_name LIKE '%8%'
-- OR first_name LIKE '%9%'

-- 15
-- SELECT * 
-- FROM employees LIMIT 10




-- Restricting and Sorting
-- 1
-- SELECT first_name, last_name, salary 
-- FROM employees
-- WHERE salary between 10000 AND 15000

-- 2
-- SELECT first_name, last_name, hire_date
-- FROM employees
-- WHERE hire_date BETWEEN '1986-12-31' and '1988-01-01'

-- 3
-- SELECT first_name
-- FROM employees
-- WHERE first_name LIKE '%c%e%'

-- 4
-- SELECT employees.last_name, employees.salary, jobs.job_title
-- FROM employees
-- INNER JOIN jobs
-- ON employees.job_id = jobs.job_id
-- WHERE job_title NOT IN ('Programmer', 'Shipping Clerk')
-- AND employees.salary NOT IN (4500, 10000, 15000) 

-- 5
-- SELECT last_name
-- FROM employees
-- WHERE LENGTH(last_name) = 6

-- 6
-- SELECT last_name
-- FROM employees 
-- WHERE last_name LIKE '__e%'

-- 7
-- SELECT  employees.first_name, employees.last_name, jobs.job_title
-- FROM employees
-- INNER JOIN jobs
-- ON employees.job_id = jobs.job_id

-- SELECT * 
-- FROM employees
-- WHERE last_name IN ('Jones', 'Blake', 'Scott', 'King', 'Ford')