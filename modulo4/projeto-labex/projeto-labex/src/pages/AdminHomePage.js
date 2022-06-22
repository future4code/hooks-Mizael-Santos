import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const AreaHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const H1 = styled.h1`
  font-size: 60px;
  font-family: sans-serif;
  padding-bottom: 50px;
  padding-top: 200px;
`;

const ButtonFilho1 = styled.button`
  width: 50%;
  height: 46px;
  border: 2px solid black;
  border-radius: 6px;
  background-color: blue;
  color: white;
  font-size: 18px;
`;

const ButtonFilho2 = styled.button`
  width: 50%;
  height: 46px;
  border: 2px solid black;
  border-radius: 6px;
  background-color: blue;
  color: white;
  font-size: 18px;
`;

const Button1 = styled.div`
  width: 50%;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`;

const Button2 = styled.div`
  width: 50%;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AdminHomePage = () => {
  const navigate = useNavigate();

  const goToTripDetails = () => {
    navigate("/TripDetails");
  };
  const goBack = () => {
    navigate(-1);
  };

  return (
    <AreaHome>
      <H1>Pagina AdminHomePage!</H1>

      <p>ESSA PAGINA É PARA = VER A LISTA DE VIAGENS E PODER DELETALAS</p>

      <Button1>
        <ButtonFilho1 onClick={goBack}>Voltar</ButtonFilho1>
      </Button1>

      <Button2>
        <ButtonFilho2 onClick={goToTripDetails}>
          Ver Detalhes De Viagem
        </ButtonFilho2>
      </Button2>
    </AreaHome>
  );

  // jeito que tava abaixo

  // <div>
  //      <> Pagina AdminHomePage!</>
  //      <button onClick={goBack}>Voltar</button>
  //      <button onClick={goToTripDetails}>Ver Detalhes De Viagem</button>
  // </div>
};

export default AdminHomePage;
