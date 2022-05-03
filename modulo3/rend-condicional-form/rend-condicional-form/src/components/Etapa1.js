import { render } from '@testing-library/react';
import React from 'react';


class Etapa1 extends React.Component {
  render() {

  return (
      <div className="App">
          <h2>Qual Seu Nome ?</h2>
          <input placeholder = "digite aqui"></input>
          <h2>Qual Sua Idade ?</h2>
          <input placeholder = "digite aqui"></input>
          <h2>Qual Seu Email ?</h2>
          <input placeholder = "digite aqui"></input>
          <h2>Qual Sua Escolaridade ?</h2>

          <select>
            <option value="Selecione">Selecione</option>
            <option value="Ensino médio incompleto">Ensino médio incompleto</option>
            <option value="Ensino médio completo">Ensino médio completo</option>
            <option value="Ensino superior incompleto">Ensino superior incompleto</option>
            <option value="Ensino superior completo">Ensino superior completo</option>
            
          </select>
      </div>
     );
  }
}

export default Etapa1;
