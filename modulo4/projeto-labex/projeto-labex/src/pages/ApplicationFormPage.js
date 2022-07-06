import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

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

const H2 = styled.h1`
  font-size: 35px;
  font-family: sans-serif;
  padding-bottom: 50px;
  padding-top: 120px;
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
  height: 30px;
  border: 2px solid black;
  border-radius: 5px;
  margin-bottom: 10px;
  text-align: center;
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

const ApplicationFormPage = () => {
  const [nome, setNome] = useState("");

  const [idade, setIdade] = useState("");

  const [textoDescritivo, setTextoDescritivo] = useState("");

  const [profissao, setProfissao] = useState("");

  const [escolhaPais, setEscolhaPais] = useState("");

  //path params
  const pathParams = useParams();

  const onChangeMudaNome = (event) => {
    setNome(event.target.value);
  };

  const onChangeMudaIdade = (event) => {
    setIdade(event.target.value);
  };

  const onChangeMudaTextoDescritivo = (event) => {
    setTextoDescritivo(event.target.value);
  };

  const onChangeMudaProfissao = (event) => {
    setProfissao(event.target.value);
  };

  const onChangeMudaPais = (event) => {
    setEscolhaPais(event.target.value);
  };

  const pegarDadosForm = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/mizael-costa-santos-hooks/trips/${id}/apply`;

    console.log(url);

    const body = {
      name: nome,
      age: idade,
      applicationText: textoDescritivo,
      profession: profissao,
      country: escolhaPais,
    };

    console.log(body);

    axios
      .post(url, body, { headers: { "Content-Type": "application/json" } })
      .then((response) => {
        console.log(response);
        alert("Você foi cadastrado com sucesso! Seja Bem-Vindo Abordo!")
      })
      .catch((error) => {
        console.log(error);
        console.log(id);
      });
  };

  //funcao que faz mostrar paises no select

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/jonasruth/61bde1fcf0893bd35eea/raw/10ce80ddeec6b893b514c3537985072bbe9bb265/paises-gentilicos-google-maps.json"
      )
      .then((res) => {
        setCountries(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const mostraPaises = countries.map((paises) => {
    return (
      <option value={paises.nome_pais} key={paises.nome_pais}>
        {paises.nome_pais}
      </option>
    );
  });

  //funcao que faz mostrar as viagens no select

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://us-central1-labenu-apis.cloudfunctions.net/labeX/:mizael-costa-santos-hooks/trips"
  //     )
  //     .then((res) => {
  //       console.log(res.data.trips);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  return (
    <AreaHome>
      {/* <H1>Pagina ApplicationFormPage!</H1> */}
      <H2>Cadastra-se para uma viagem</H2>
      <Form>
        <Input1
          placeholder="Nome"
          name="name"
          onChange={onChangeMudaNome}
          required
        />

        <Input2
          placeholder="idade"
          type="number"
          name="age"
          onChange={onChangeMudaIdade}
          required
        />

        <Input3
          placeholder="Texto de candidatura"
          name="applicationText"
          onChange={onChangeMudaTextoDescritivo}
          required
        />

        <Input4
          placeholder="Profissão"
          name="profession"
          onChange={onChangeMudaProfissao}
          required
        />

        <Select value={escolhaPais} onChange={onChangeMudaPais}>
          <option value={""} onChange={onChangeMudaPais} required>
            Escolha uma país
          </option>
          {mostraPaises}
        </Select>
      </Form>

      <Button1>
        <ButtonFilho1 onClick={goBack}>Voltar</ButtonFilho1>
      </Button1>

      <Button2>
        <ButtonFilho2 onClick={() => pegarDadosForm(pathParams.id)}>
          Enviar
        </ButtonFilho2>
      </Button2>
    </AreaHome>

    // <div>
    //         <> Pagina ApplicationFormPage!</>
    //         <button onClick={goBack}>Voltar</button>
    //         <button>Enviar Dados</button>
    // </div>
  );
};

export default ApplicationFormPage;
