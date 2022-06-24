import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState , useEffect  } from "react";
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

const P = styled.p`

    font-size: 30px;
    font-family: Georgia, 'Times New Roman', Times, serif;

  `

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




const AdminHomePage = () => {


  const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/mizael-costa-santos-hooks/trips";

const headers = {
  headers: {
      auth: localStorage.getItem("token")
  },
};

  const [tripsViagem, setTrips] = useState([]);

  useEffect(() => {
    getTrips();
  }, []);

  const getTrips = () => {
    axios
      .get(url , headers)
      .then((response) => {
        console.log(response);
        setTrips(response.data.trips);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  // Deletar botao


  const deletarButao = (id) => {

    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/mizael-costa-santos-hooks/trips/${id}`


    const headers = {
      headers: {
          auth: localStorage.getItem("token")
      },
    };


    axios.delete( url , headers)
    .then((response) => {
      alert("Viagem Deletada")
      getTrips();
    })
    .catch((error) => {
      console.log(error)
    })

  }


  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <AreaHome>
      <H1>Painel Administrativo</H1>
      {tripsViagem.map((trips) => {
        return (
          <ContainerLista key={trips.id}>
            <div viagens={trips} />
            <P>{trips.name}</P>
            <button onClick={() => deletarButao(trips.id) }>Deletar</button>
        <button>
        <button onClick={() => {navigate(`/AdminHome/TripDetails/${trips.id}`)}}>
          Ver Detalhes De Viagem
        </button>
       </button>
          </ContainerLista>
        );
      })}

      <Button1>
        <ButtonFilho1 onClick={goBack}>Voltar</ButtonFilho1>
      </Button1>

      
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
