const nome: string = "";
const dia: string = "";
const mes: string = "";
const ano: string = "";

const inform = (nome: string, dia: string, mes: string, ano: string) => {
  return (
    `Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}`
  );
}

console.log(inform("mizael", "06", "12", "2002"));