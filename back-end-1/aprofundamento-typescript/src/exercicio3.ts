type dadosPost = { 
    autor: string,
    texto: string,
  }

const posts: dadosPost[] = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ]




//   b) Observe abaixo a função buscarPostsPorAutor(), escrita em JavasScript:
// Quais são as entradas e saídas dessa função? Copie a função para o mesmo arquivo .ts do array de posts e faça a tipagem necessária.

// RESPOSTA = AS ENTRADAS SÃO OS PARAMENTROS DA FUNCAO , POSTS E AUTOR INFORMADO. E SAIDA É TUDO QUE ESTÁ DETRO DAS CHAVES , OS RETURNS.

function buscarPostsPorAutor(posts: dadosPost[], autorInformado: string){
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
  }







  