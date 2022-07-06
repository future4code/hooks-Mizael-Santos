import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ListTripComponent from "../componts/ListTrip";

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
  padding-top: 50px;
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

// const ButtonFilho2 = styled.button`
//   width: 50%;
//   height: 46px;
//   border: 2px solid black;
//   border-radius: 6px;
//   background-color: blue;
//   color: white;
//   font-size: 18px;
// `;

const Button1 = styled.div`
  width: 50%;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`;

const ContainerLista = styled.div`
  width: 400px;
  height: 200px;
  margin: 35px;
  text-align: center;
  padding-top: 60px;
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 255) 0px 10px 20px, rgba(128, 0, 128) 0px 6px 6px;
`;

const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/mizael-costa-santos-hooks/trips";

const headers = {
  headers: {
    Authorization: "mizael-costa-santos-hooks",
  },
};

const ListTripsPage = () => {
  const [tripsViagem, setTrips] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getTrips();
  }, []);

  const getTrips = () => {
    axios
      .get(url, headers)
      .then((response) => {
        console.log(response);
        setTrips(response.data.trips);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <AreaHome>
      <H1>Lista De Viagens</H1>
      {tripsViagem.map((trips) => {
        return (
          <ContainerLista key={trips.id}>
            <ListTripComponent viagens={trips} />
          </ContainerLista>
        );
      })}

      <Button1>
        <ButtonFilho1 onClick={goBack}>Voltar</ButtonFilho1>
      </Button1>
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
