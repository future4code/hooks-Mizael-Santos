const nomeFilme: string = ""
const anoLancamento: number = 0
const genero: string = ""
const nota: number | undefined = 0



const filmes = (nomeFilme: string , anoLancamento: number , genero: string , nota? : number) => {
    return console.log(`nome: ${nomeFilme} , anolancamento: ${anoLancamento} , genero: ${genero} `)
}

console.log(filmes("vida" , 2022 , "suspense" , ))