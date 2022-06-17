import React, { useState } from "react";
import TelaDeInicio from "./components/TelaDeInicio";
import TelaListaDeMatch from "./components/TelaListaDeMatch";
import styled from "styled-components";
import GlobalStyled from "./components/GlobalStyled";


const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const ButtonMudarTela = styled.button`
  margin: 10px;
  width: 150px;
  height: 5vh;
  border-radius: 30px;
  border: 3px solid #00FFFF;
  color: #0000FF;
`;


const CardPrincipal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`


const App = () => {
  const [telaInicial, setTelaInicial] = useState("TelaDeDaMatch"); // "TelaListaDeMatches"

  const [nomeButton, setNomeButton] = useState("Lista De Matches"); // "Tela Inicial"

  //(A logica com Funcao de If e Else)

  const mudarTelaButton = () => {
    if (telaInicial === "TelaDeDaMatch") {
      setTelaInicial("TelaListaDeMatches");
      setNomeButton("Tela Inicial");
    } else if (telaInicial === "TelaListaDeMatches") {
      setTelaInicial("TelaDeDaMatch");
      setNomeButton("Lista De Matches");
    }
  };

  const renderTela = () => {
    switch (telaInicial) {
      case "TelaDeDaMatch":
        return <TelaDeInicio />;
      case "TelaListaDeMatches":
        return <TelaListaDeMatch />;
      default:
        return "erro";
    }
  };

  return (
    <CardPrincipal>
        <Header>
        <ButtonMudarTela onClick={mudarTelaButton}>{nomeButton}</ButtonMudarTela>
      </Header>
      {renderTela()}
      <GlobalStyled />
    </CardPrincipal>
  );
};

export default App;
