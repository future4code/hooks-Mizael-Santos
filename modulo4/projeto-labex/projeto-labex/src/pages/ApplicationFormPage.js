import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  return (
    <AreaHome>
      {/* <H1>Pagina ApplicationFormPage!</H1> */}
      <H2>Cadastra-se para uma viagem</H2>
      <Form>
        <Select>
          <option value disabled selected>
            Escolha uma viagem
          </option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </Select>
        <Input1 placeholder="Nome" name="name" />
        <Input2 placeholder="idade" type="number" name="age" />
        <Input3 placeholder="Texto de candidatura" name="applicationText" />
        <Input4 placeholder="Profissão" name="profession" />
        <Select>
          <option value disabled selected>
            Escolha uma país
          </option>
          <option>BR</option>
          <option>EUA</option>
          <option>RUS</option>
          <option>ARG</option>
        </Select>
      </Form>

      <Button1>
        <ButtonFilho1 onClick={goBack}>Voltar</ButtonFilho1>
      </Button1>

      <Button2>
        <ButtonFilho2>Enviar</ButtonFilho2>
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
