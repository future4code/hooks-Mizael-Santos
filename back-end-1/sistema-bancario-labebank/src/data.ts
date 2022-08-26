const data = new Date()
const dia = String(data.getDate())
const mes = String(data.getMonth() + 1).padStart(2,"0")
export const ano = data.getFullYear()
export const hoje = dia + "/" + mes + "/" + ano



type Users = {
  id: string,  
  name: string;
  cpf: number;
  dataNascimento: string,
};

type Extrato = {
  valor: number;
  data: string;
  descricao: string;
};

export const dadosUsers: Users[] = [
  {
    id: "1",
    name: "mizael",
    cpf: 1234567870,
    dataNascimento: "06/12/2002",
  },

  {
    id: "2",
    name: "gustavo",
    cpf: 1234567810,
    dataNascimento: "03/05/1990",
  },

  {
    id: "3",
    name: "gabriel",
    cpf: 1234567820,
    dataNascimento: "28/02/2004",
  },

  {
    id: "4",
    name: "ranyel",
    cpf: 1234567830,
    dataNascimento: "22/07/1995",
  },

  {
    id: "5",
    name: "paulo",
    cpf: 1234567840,
    dataNascimento: "16/06/2002",
  },
];

export const extratosUsers: Extrato[] = [
  {
    valor: 0,
    data: "18/12/2013",
    descricao: "sou mizael",
  },

  {
    valor: 0,
    data: "10/08/2014",
    descricao: "sou gustavo",
  },

  {
    valor: 0,
    data: "23/04/2015",
    descricao: "sou gabriel",
  },

  {
    valor: 0,
    data: "22/06/2016",
    descricao: "sou ranyel",
  },

  {
    valor: 0,
    data: "27/09/2017",
    descricao: "sou paulo",
  },
];
