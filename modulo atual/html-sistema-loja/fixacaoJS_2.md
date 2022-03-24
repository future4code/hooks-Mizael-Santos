```
function calculaPrecoTotal(quantidade) {
      
      let preco = 0
      let precoFinal = 0
      
      if (quantidade < 12){
        preco = 1.30
      }else{
        preco = 1.00
      } 
        precoFinal = preco * quantidade
      
          return precoFinal
          
}

```