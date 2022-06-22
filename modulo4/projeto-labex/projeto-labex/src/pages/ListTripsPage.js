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

const ListTripsPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goToForm = () => {
    navigate("/ApplicationForm");
  };

  return (
    <AreaHome>
      <H1> Pagina ListTripsPage!</H1>

      <Button1>
        <ButtonFilho1 onClick={goBack}>Voltar</ButtonFilho1>
      </Button1>

      <Button2>
        <ButtonFilho2 onClick={goToForm}>Ir Para Cadastro</ButtonFilho2>
      </Button2>
    </AreaHome>

    // jeito que tava abaixo

    // <div>
    //   <> Pagina ListTripsPage!</>
    //   <button onClick={goBack}>Voltar</button>
    //   <button onClick={goToForm}>Ir Para Cadastro</button>
    //   // </div>
  );
};

export default ListTripsPage;
