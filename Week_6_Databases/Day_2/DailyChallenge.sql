-- 1
-- SELECT COUNT(*) 
--     FROM firsttab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )

-- 2
--     SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )

-- 3
--  SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )

-- 4
--  SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )

-- SELECT * FROM firsttab;
-- SELECT * FROM secondtab;

-- 1
-- Prediction: Selects first three persons(Pawan, Sharlee, Krish) and excludes Avtaar.
-- Outcome: 0

-- 2
--  Outcome: 2

-- 3
-- Outcome: 0

-- 4
-- Outcome: 2

