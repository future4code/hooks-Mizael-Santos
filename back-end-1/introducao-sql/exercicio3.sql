-- letra A
DESCRIBE funcionarios;

SELECT * FROM funcionarios;

-- letra B 
SELECT id AS identifier , nome FROM funcionarios;

-- letra C

SELECT * FROM funcionarios WHERE id = "003";

-- letra D

SELECT id , nome FROM funcionarios WHERE nome LIKE "%a%";

-- letra E

SELECT email , nome  FROM funcionarios WHERE nome NOT LIKE "%r%" AND email LIKE "%u%" ;