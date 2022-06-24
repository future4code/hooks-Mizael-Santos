import { useEffect, useState } from "react";
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

  const [detalhes , setDetalhes] = useState({})
  const [escritoPedente , setEscritoPedente] = useState([])
  const [escritoAprovado , setEscritoAprovado] = useState([])  


//para candidatos


    const aprovarCandidato = (id , approve) => {
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/mizael-costa-santos-hooks/trips/${pathParams.id}/candidates/${id}/decide`;


      const body = {
          "approve": approve
      }
  
  
      
      const headers = {
        headers: {
          auth: localStorage.getItem("token"),
        },
      };
      console.log(headers);


  
      axios
        .put( url, body , headers)
        .then((response) => {
          console.log(response.data.trip);
        
        })
        .catch((error) => {
          console.log(error.response);
        });
    }








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

const pegaDetalhes = () => {

  const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/mizael-costa-santos-hooks/trip/${pathParams.id}`;

 // para pegar detalhes
    const headers = {
      headers: {
        auth: localStorage.getItem("token"),
      },
    };
    console.log(headers);

    axios
      .get( url, headers)
      .then((response) => {
        console.log(response.data.trip);
        setDetalhes(response.data.trip);
        setEscritoPedente(response.data.trip.candidates)
        setEscritoAprovado(response.data.trip.approved)
      })
      .catch((error) => {
        console.log(error.response);
      });

}

  useEffect(() => {
     pegaDetalhes()
  }, [() => pegaDetalhes()]);

//map dos pendetes


const renderPendentes = escritoPedente.map((candidato) => {
    return (
      <div>
          <p>{candidato.name}</p>
          <button onClick={() => aprovarCandidato(candidato.id , true)}>Aprovar</button>
          <button onClick={() => aprovarCandidato(candidato.id , false)}>Reprovar</button>
      </div>)
})

//map dos aprovados




const renderAprovados = escritoAprovado.map((candidato) => {
  return candidato.name
})






  return (
    <AreaHome>
      <H1>Pagina TripDetailsPage!</H1>
      <p>{detalhes.name}</p>
      <h2>Lista De Pendentes</h2>
      {renderPendentes}
      <h2>Lista De Aprovados</h2>
      {renderAprovados}

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
