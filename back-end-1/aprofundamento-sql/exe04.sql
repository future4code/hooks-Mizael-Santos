-- exercicio 4 letra a 

ALTER TABLE Projetos_da_empresa
ADD description VARCHAR(255) NOT NULL;

DESCRIBE Projetos_da_empresa;

-- exercicio 4 letra b 

UPDATE Projetos_da_empresa
SET description = "Projeto de sistema em nuvem da Labenu."
WHERE id = "001";

UPDATE Projetos_da_empresa
SET description = "Projeto de sistema de gerenciamento de músicas da Labenu."
WHERE id = "002";

UPDATE Projetos_da_empresa
SET description = "Projeto de rede de comunicação da Labenu."
WHERE id = "003";

DESCRIBE Projetos_da_empresa;

SELECT * FROM Projetos_da_empresa;
