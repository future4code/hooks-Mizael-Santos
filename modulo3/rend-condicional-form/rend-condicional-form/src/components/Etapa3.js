import { render } from '@testing-library/react';
import React from 'react';

class Etapa3 extends React.Component {
  render() {

  return (
      <div className="App">
          <h1>informacoes do ensino geral</h1>
          <h2>Por que você não terminou um curso de graduação ?</h2>
          <input placeholder='Digite aqui'></input>
          <h2>Você fez algum curso complementar ?</h2>
          
          <select>
            <option value="Nenhum">Nenhum</option>
            <option value="Inglês">Inglês</option>
            <option value="Quimica">Quimica</option>
            <option value="Eletromecânica">Eletromecânica</option>
          </select>
      </div>
     );
  }
}

export default Etapa3;