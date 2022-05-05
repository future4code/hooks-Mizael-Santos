import { render } from '@testing-library/react';
import React from 'react';

class Etapa2 extends React.Component {
  render() {

  return (
      <div className="App">
          <h1>Informacoes do ensino superior</h1>
          <h2>Qual Curso?</h2>
          <input placeholder='digite aqui'></input>
          <h2>Qual a Unidade de Ensino ?</h2>
          <input placeholder='digite aqui'></input>
      </div>
     );
  }
}

export default Etapa2;