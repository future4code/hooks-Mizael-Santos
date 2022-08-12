type doCliente = {
    cliente: string,
    saldoTotal: number,
    debitos: number[],
}

const arrayBanco: doCliente[] = [{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
{ cliente: "Soter", saldoTotal: 1200, debitos: [] }]

// aqui fizemos a funcaoe o map  para saber o saldo atualizado do cliente descontando todos os debitos e fizemos o filter para saber quais clientes estavam com saldo negativos.
const bancoCliente = (clientes: doCliente[]) => {
    return clientes.map((cliente) => {
        const soma = cliente.debitos.reduce((a , b ) => a + b , 0)
        return {...cliente , saldoTotal: cliente.saldoTotal - soma , debitos: []}
    } )
    .filter((cliente) => {
        return cliente.saldoTotal < 0 
    })
}

console.log(bancoCliente(arrayBanco))