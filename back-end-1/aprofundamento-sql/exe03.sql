-- exercicio 3 letra a

ALTER TABLE Projetos_da_empresa
DROP COLUMN title;

DESCRIBE Projetos_da_empresa;

-- exercicio 3 letra b 

ALTER TABLE Projetos_da_empresa
CHANGE date dueDate DATE NOT NULL;

DESCRIBE Projetos_da_empresa;

-- exercicio 3 letra c 

ALTER TABLE funcionarios
MODIFY email VARCHAR(255) NOT NULL UNIQUE;

DESCRIBE funcionarios;

SELECT * FROM funcionarios;