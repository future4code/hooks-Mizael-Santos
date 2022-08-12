enum EMPRESA {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro",
}

const setoresEmpresa = {
    setor1: EMPRESA.MARKETING,
    setor2: EMPRESA.VENDAS,
    setor3: EMPRESA.FINANCEIRO,
}


type pessoas = {
    nome: string,
}

const pessoa1: pessoas = {
    nome: "Marcos"
}

const pessoa2: pessoas = {
    nome: "Maria"
}
const pessoa3: pessoas = {
    nome: "Salete"
}
const pessoa4: pessoas = {
    nome: "João"
}
const pessoa5: pessoas = {
    nome: "Josué"
}
const pessoa6: pessoas = {
    nome: "Natalia"
}
const pessoa7: pessoas = {
    nome: "Paola"
}

type arrayDePessoas = {
    nome: string,
    salário: number,
    setor: EMPRESA,
    presencial: boolean
}

const arrayPessoas: arrayDePessoas[] = [
{ nome: "Marcos", salário: 2500, setor: EMPRESA.MARKETING, presencial: true },
{ nome: "Maria" ,salário: 1500, setor:  EMPRESA.VENDAS, presencial: false},
{ nome: "Salete" ,salário: 2200, setor:  EMPRESA.FINANCEIRO, presencial: true},
{ nome: "João" ,salário: 2800, setor:  EMPRESA.MARKETING, presencial: false},
{ nome: "Josué" ,salário: 5500, setor:  EMPRESA.FINANCEIRO, presencial: true},
{ nome: "Natalia" ,salário: 4700, setor: EMPRESA.VENDAS, presencial: true},
{ nome: "Paola" ,salário: 3500, setor: EMPRESA.MARKETING, presencial: true }
]

const filtroDePessoas = (arrayPessoas: arrayDePessoas[]) => {
    return arrayPessoas.filter((pessoa) => pessoa.setor === EMPRESA.MARKETING && pessoa.presencial)
}

console.log(filtroDePessoas(arrayPessoas))


