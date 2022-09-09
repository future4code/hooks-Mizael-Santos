### EXECICIO 1
a) É a chave estabelece conexões entre as tabelas.

b) A query é :
 ```

CREATE TABLE Rating (
id VARCHAR(255) PRIMARY KEY,
comment TEXT NOT NULL,
rate FLOAT NOT NULL,
movie_id VARCHAR(255),
FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES ("001", "Muito bom!", 9, "001"),
	   ("002", "bom!", 7, "002"),
       ("003", "ruim!", 2, "003"),
       ("004", "exelente!", 10, "004"),

```

c) Código de erro: 1062. Entrada duplicada '001' para a chave 'PRIMARY' , a avaliação não pode ser feita , pois não existe esse id.

d) A query é :
```
ALTER TABLE Movie
DROP COLUMN rating;

```

e)Código de erro: 1451. Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira falha (`hooks-4313499-mizael-santos`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERÊNCIAS `Movie` (` id`)) , como ele possui uma coluna relacionada a uma outra tabela ele não pode ser excluido.


### EXERCICIO 2

a) está criando uma tabela de elenco , nessa ela pega o id do filme e o id do ator , depois ela faz uma relaçao com a tabela de ator e a tabela de filmes.

b)  A query é :
```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES("001", "001"),
	  ("002", "002"),
      ("003", "003"),
      ("004", "004"),
      ("001", "002"),
      ("003", "004"),
      ("003", "005");

```

c) Código de erro: 1452. Não é possível adicionar ou atualizar uma linha filho: uma restrição de chave estrangeira falha (`hooks-4313499-mizael-santos`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (` id`)) , como ele possui uma coluna relacionada a uma outra tabela ele não pode ser inserido.

d) Código de erro: 1451. Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira falha (`hooks-4313499-mizael-santos`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (` id`)) , como ele possui uma coluna relacionada a uma outra tabela ele não pode ser excluido.


### EXERCICIO 3

a) O comando ON , determina se as colunas são iguais.

b) A query é : 
```
SELECT m.title , m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;

```