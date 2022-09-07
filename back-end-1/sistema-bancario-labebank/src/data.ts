const data = new Date();
const dia = String(data.getDate());
const mes = String(data.getMonth() + 1).padStart(2, "0");
export const ano = data.getFullYear();
export const hoje = dia + "/" + mes + "/" + ano;

type Users = {
  id: string;
  name: string;
  cpf: number;
  dataNascimento: string;
  saldo: number;
  extrato: Extrato[];
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
    cpf: 123456787,
    dataNascimento: "06/12/2002",
    saldo: 0,
    extrato: [
      {
        valor: 0,
        data: "18/12/2013",
        descricao: "deposito em dinheiro",
      },
    ],
  },

  {
    id: "2",
    name: "gustavo",
    cpf: 1234567810,
    dataNascimento: "03/05/1990",
    saldo: 0,
    extrato: [
      {
        valor: 0,
        data: "18/12/2013",
        descricao: "deposito em dinheiro",
      },
    ],
  },

  {
    id: "3",
    name: "gabriel",
    cpf: 1234567820,
    dataNascimento: "28/02/2004",
    saldo: 0,
    extrato: [
      {
        valor: 0,
        data: "18/12/2013",
        descricao: "deposito em dinheiro",
      },
    ],
  },

  {
    id: "4",
    name: "ranyel",
    cpf: 1234567830,
    dataNascimento: "22/07/1995",
    saldo: 0,
    extrato: [
      {
        valor: 0,
        data: "18/12/2013",
        descricao: "deposito em dinheiro",
      },
    ],
  },

  {
    id: "5",
    name: "paulo",
    cpf: 1234567840,
    dataNascimento: "16/06/2002",
    saldo: 0,
    extrato: [
      {
        valor: 0,
        data: "18/12/2013",
        descricao: "deposito em dinheiro",
      },
    ],
  },
];
