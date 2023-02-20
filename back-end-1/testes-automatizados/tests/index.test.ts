import { performPurchase } from "../src"

describe("teste da funcao performPurchase", () => {
    test("usuário com o saldo maior do que o valor de compra", () => {
        const result = performPurchase({name: "mizael", balance: 100}, 50)
        expect(result).toEqual({name: "mizael" , balance: 50})
    })

    test("um usuário com o saldo igual ao valor de compra", () => {
        const result = performPurchase({name: "mizael", balance: 100}, 100)
        expect(result).toEqual({name: "mizael" , balance: 0})
    })

    test("um usuário com o saldo menor do que o valor de compra", () => {
        const result = performPurchase({name: "mizael", balance: 100}, 120)
        expect(result).toEqual(undefined)
    })

})
