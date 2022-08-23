import { textSpanContainsPosition } from "typescript";
import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
    test("retorna true pra numerosDuplicados", () => {
        const resultado = checaItensDuplicados;
    
        expect(resultado).toEqual(true);
      });

      test("retorna false pra numerosDuplicados", () => {
        const resultado = checaItensDuplicados;
    
        expect(resultado).toEqual(false);
      });

      test("retorna true pra numerosDuplicados", () => {
        const resultado = checaItensDuplicados;
    
        expect(resultado).toEqual(true);
      });

      test("retorna false pra numerosDuplicados", () => {
        const resultado = checaItensDuplicados;
    
        expect(resultado).toEqual(false);
      });
});
