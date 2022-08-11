```

function contaOcorrencias(arrayDeNumeros, numeroEscolhido){ 
    
  
  let conta = 0;
  for (let i = 0; i < arrayDeNumeros.length; i++){
  if (arrayDeNumeros[i] === numeroEscolhido){conta++
  }
}
if(conta > 0){
  return `O número ${numeroEscolhido} aparece ${conta}x`
}else{return `Número não encontrado`
}
}



```