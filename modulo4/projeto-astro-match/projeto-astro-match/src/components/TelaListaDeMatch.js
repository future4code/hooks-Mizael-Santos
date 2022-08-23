import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CardPai = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #00ffff;
  border-radius: 40px;
  box-shadow: 3px 3px 6px 3px #00ffff;
  width: 390px;
  height: 580px;
`;

const Lista = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 25px;
  margin-bottom: 30px;
  color: #0000FF;
`;

const Button = styled.button`
  border: 3px solid #00ced1;
  border-radius: 30px;
  width: 140px;
  height: 40px;
  color: #0000ff;
`;

const ButtonEliminar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const H2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
  box-shadow: 1px 2px 8px 2px #00ffff;
  border-radius: 10px;
`;

// Fazendo requisiçao e rederização dos dados

const TelaListaDeMatch = () => {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mizael-costa-santos-hooks/matches"
      )
      .then((response) => {
        setLista(response.data.matches);
      })
      .catch((error) => {
        alert("Ocorreu um erro");
      });
  }, [lista]);

  const renderLista = lista.map((pessoa) => {
    return (
      <Lista>
        <img
          src={pessoa.photo}
          alt={pessoa.photo_alt}
          width="80px"
          height="60px"
        />
        {pessoa.name}
      </Lista>
    );
  });

  const resetarMatch = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mizael-costa-santos-hooks/clear"
      )
      .then((response) => {
        alert("funcionou");
      })
      .catch((error) => {
        alert("Deu erro");
      });
  };

  return (
    <CardPai>
      <H2>
        <h2>Lista De Matches</h2>
      </H2>

      <div>{renderLista}</div>

      <ButtonEliminar>
        <Button onClick={resetarMatch}>Eliminar Todos</Button>
      </ButtonEliminar>
    </CardPai>
  );
};

export default TelaListaDeMatch;
