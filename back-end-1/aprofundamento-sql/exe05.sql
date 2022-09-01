-- exercicio 5 letra a 

SELECT dueDate 
FROM Projetos_da_empresa
ORDER BY dueDate DESC;

-- exercicio 5 letra b 

SELECT name , dueDate
FROM Projetos_da_empresa
ORDER BY dueDate ASC LIMIT 0 , 2;