// type informCatalogo = {
//   nomeFilme: string,
//   anoLancamento: number,
//   genero: string,
//   nota: number | undefined
// };

// const filme1: informCatalogo = {
//     nomeFilme: "Rambo4",
//     anoLancamento: 2019,
//     genero: "ação",
//     nota: 90
// }

enum GENEROS {
  ACAO = "ação",
  DRAMA = "drama",
  COMEDIA = "comédia",
  ROMANCE = "romance",
  TERROR = "terror",
}

type escolhaGenero = {
  genero1: GENEROS.ACAO;
  genero2: GENEROS.DRAMA;
  genero3: GENEROS.COMEDIA;
  genero4: GENEROS.ROMANCE;
  genero5: GENEROS.TERROR;
};

const filmes: any = (nomeFilme: string, anoLancamento: number, genero: string, nota?: number
) => {
    return (
      {nomeFilme , anoLancamento , genero , nota}
        // `nome: ${nomeFilme} , anolancamento: ${anoLancamento} , genero: ${genero} `
          // filmes({nomeFilme , anoLancamento , genero , nota})
      );
    };
  


  console.log(filmes("rambo" , 2019 , GENEROS.ACAO , 90))


  // type informCatalogo = {
  //   nomeFilme: string,
  //   anoLancamento: number,
  //   genero: string,
  //   nota: number | undefined
  // };
  
  // const filme1: informCatalogo = {
  //     nomeFilme: "Rambo4",
  //     anoLancamento: 2019,
  //     genero: "ação",
  //     nota: 90
  // }
  
  // const filme2: informCatalogo = {
  //   nomeFilme: "Duro de matar",
  //   anoLancamento: 2018,
  //   genero: "ação",
  //   nota: 85
  // }
  
  // enum GENEROS {
  //   ACAO = "ação",
  //   DRAMA = "drama",
  //   COMEDIA = "comédia",
  //   ROMANCE = "romance",
  //   TERROR = "terror",
  // }
  
  // type escolhaGenero = {
  //   genero1: GENEROS.ACAO;
  //   genero2: GENEROS.DRAMA;
  //   genero3: GENEROS.COMEDIA;
  //   genero4: GENEROS.ROMANCE;
  //   genero5: GENEROS.TERROR;
  // };
  
  // const filmes = (
  //   nomeFilme: string,
  //   anoLancamento: number,
  //   genero: string,
  //   nota?: number
  // ) => {
  //    const mensagem: any = () => {
  //     return (
  //         `nome: ${nomeFilme} , anolancamento: ${anoLancamento} , genero: ${genero} `
  //       );
  //     };
  //   }
  
  
  //   console.log(filme1);
  

