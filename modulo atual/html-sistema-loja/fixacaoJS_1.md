```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
      let salarioMensal = 2000;
      let comissao = (valorTotalVendas / qtdeCarrosVendidos) * 0.05;
      let salarioFinal = salarioMensal + (comissao * qtdeCarrosVendidos) + (100 * qtdeCarrosVendidos);
      
      if (qtdeCarrosVendidos === 0 && valorTotalVendas === 0){
              return salarioMensal
      }else {
        return salarioFinal
      }
}

```