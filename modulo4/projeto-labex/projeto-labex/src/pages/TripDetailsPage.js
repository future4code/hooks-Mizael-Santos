import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProtectedPage } from "../hooks/useProtectedPage";
import styled from "styled-components";
import axios from "axios";

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

const TripDetailsPage = () => {
  const pathParams = useParams();

  const navigate = useNavigate();

  useProtectedPage();

  const goToCreateTrip = () => {
    navigate("/CreateTrip");
  };

  const goBack = () => {
    navigate(-1);
  };

  // useEffect de para pegar o token e trips

  useEffect(() => {
    const URL = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/mizael-costa-santos-hooks/trip/${pathParams.id}`;

    const headers = {
      headers: {
        auth: localStorage.getItem("token"),
      },
    };
    console.log(headers);

    axios
      .get(URL, headers)
      .then((response) => {
        console.log(response.data.trip);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  return (
    <AreaHome>
      <H1>Pagina TripDetailsPage!</H1>

      <Button1>
        <ButtonFilho1 onClick={goBack}>Voltar</ButtonFilho1>
      </Button1>

      <Button2>
        <ButtonFilho2 onClick={goToCreateTrip}>Criar uma Viagem</ButtonFilho2>
      </Button2>
    </AreaHome>

    // <div>
    //     <> Pagina TripDetailsPage!</>
    //     <button onClick={goBack}>Voltar</button>
    //     <button onClick={goToCreateTrip}>Criar uma Viagem</button>
    // </div>
  );
};

export default TripDetailsPage;
