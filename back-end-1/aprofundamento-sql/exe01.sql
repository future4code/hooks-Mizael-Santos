USE `hooks-4313499-mizael-santos`;

SET SQL_SAFE_UPDATES = 0;

-- exercicio 1

CREATE TABLE Projetos_da_empresa (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) UNIQUE NOT NULL,
title VARCHAR(255) NOT NULL,
date DATE NOT NULL
);

DESCRIBE Projetos_da_empresa;