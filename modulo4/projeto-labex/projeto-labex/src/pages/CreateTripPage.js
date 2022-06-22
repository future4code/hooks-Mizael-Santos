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
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <AreaHome>
      <H1>Pagina CreateTripPage!</H1>

      <Form>
        <Input1 placeholder="Nome" name="name" />
        <Select>
          <option value disabled selected>
            Select planet
          </option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </Select>
        <Input2 placeholder="date" type="date" />
        <Input3 placeholder="description" name="applicationText" />
        <Input4 placeholder="Travel time(in days)" type="number" />
      </Form>

      <Button1>
        <ButtonFilho1 onClick={goBack}>Voltar</ButtonFilho1>
      </Button1>

      <Button2>
        <ButtonFilho2 onClick={goToHome}>Ir Para Home</ButtonFilho2>
      </Button2>
    </AreaHome>

    // <div>
    //     <> Pagina CreateTripPage!</>
    //     <button onClick={goBack}>Voltar</button>
    //     <button onClick={goToHome}>Ir Para Home</button>
    // </div>
  );
};

export default CreateTripPage;
