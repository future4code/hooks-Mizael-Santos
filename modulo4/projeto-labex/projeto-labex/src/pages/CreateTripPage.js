import { useNavigate , useParams} from "react-router-dom";
import styled from "styled-components";
import { useState , useEffect } from "react";
import axios from "axios";

const AreaHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 40px;
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

const ButtonFilho3 = styled.button`
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
  padding-bottom: 20px;
`;

const Button3 = styled.div`
  width: 50%;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Select = styled.select`
  margin-bottom: 10px;
  width: 608px;
  height: 30px;
  border: 2px solid black;
  border-radius: 5px;
  margin-bottom: 10px;
  text-align: center;
`;

const Input1 = styled.input`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 30px;
  border: 2px solid black;
  border-radius: 5px;
  margin-bottom: 10px;
  text-align: center;
`;
const Input2 = styled.input`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 35px;
  border: 2px solid black;
  border-radius: 5px;
  margin-bottom: 10px;
`;
const Input3 = styled.input`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 30px;
  border: 2px solid black;
  border-radius: 5px;
  margin-bottom: 10px;
  text-align: center;
`;
const Input4 = styled.input`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 30px;
  border: 2px solid black;
  border-radius: 5px;
  margin-bottom: 10px;
  text-align: center;
`;




const CreateTripPage = () => {

  const [nome, setNome] = useState("");

  const [escolhaPlaneta, setEscolhaPlaneta] = useState([]);

  const [data, setData] = useState("");

  const [descricao, setDescricao] = useState("");

  const [tempoDeViagem, setTempoDeViagem] = useState("");



  const pathParams = useParams();



  const onChangeMudaNome = (event) => {
    setNome(event.target.value);
  };

  const onChangeMudaPlaneta = (event) => {
    setEscolhaPlaneta(event.target.value);
  };


  const onChangeMudaData = (event) => {
    setData(event.target.value);
  };

  const onChangeMudaDescricao = (event) => {
    setDescricao(event.target.value);
  };

  const onChangeMudaTempo = (event) => {
    setTempoDeViagem(event.target.value);
  };


  const pegarDadosCriacao = (id) => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/mizael-costa-santos-hooks/trips"

    console.log(url);

    const body = {
      name: nome,
      planet: escolhaPlaneta,
      date: data ,
      description: descricao ,
      durationInDays: tempoDeViagem,
    };

    console.log(body);

    const headers = {
      headers: {
        auth: localStorage.getItem("token"),
      },
    };

    axios
      .post(url, body, headers )
      .then((response) => {
        console.log(response);
        alert("Viagem Criada Com Sucesso!")
      })
      .catch((error) => {
        console.log(error);
        console.log(id);
      });
  };

  

  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <AreaHome>
      <H1>Criar Viagem</H1>

      <Form>
        <Input1 
        placeholder="Nome"
         name="name"
         onChange={onChangeMudaNome} 
         required />
        <Select value={escolhaPlaneta} onChange={onChangeMudaPlaneta}>
         <option>Select Planet</option>
         <option>Terra</option>
         <option>Mercurio</option>
         <option>Jupiter</option>
         <option>Plutao</option>
         <option>Saturno</option>
        </Select>
        <Input2 
        placeholder="date" 
        onChange={onChangeMudaData}
        type="date" 
        required />
        <Input3 
        placeholder="description" 
        name="applicationText"
        onChange={onChangeMudaDescricao}
         required />
        <Input4 
        placeholder="Travel time(in days)"
         type="number" 
        onChange={onChangeMudaTempo}
         required />
      </Form>

      <Button1>
        <ButtonFilho1 onClick={goBack}>Voltar</ButtonFilho1>
      </Button1>

      <Button2>
        <ButtonFilho2 onClick={goToHome}>Ir Para Home</ButtonFilho2>
      </Button2>

      <Button3>
        <ButtonFilho3 onClick={() => pegarDadosCriacao(pathParams.id)}>Criar</ButtonFilho3>
      </Button3>
    </AreaHome>

    // <div>
    //     <> Pagina CreateTripPage!</>
    //     <button onClick={goBack}>Voltar</button>
    //     <button onClick={goToHome}>Ir Para Home</button>
    // </div>
  );
};

export default CreateTripPage;
