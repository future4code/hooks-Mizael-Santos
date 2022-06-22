import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import React, { useState } from "react";
import axios from "axios";

const AreaHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

// const H1 = styled.h1`
//   font-size: 60px;
//   font-family: sans-serif;
//   padding-bottom: 50px;
//   padding-top: 200px;
// `;

const H2 = styled.h1`
  font-size: 35px;
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

const Input1 = styled.input`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 30px;
  border: 2px solid black;
  border-radius: 5px;
  text-align: center;
`;

const Input2 = styled.input`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 40px;
  width: 600px;
  height: 30px;
  border: 2px solid black;
  border-radius: 5px;
  text-align: center;
`;

//funcoes abaixo

// navigate aqui
const LoginPage = () => {
  const navigate = useNavigate();

  // const goToAdminHome = () => {
  //   navigate("/AdminHome")
  //

  const goBack = () => {
    navigate(-1);
  };

  //

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitLogin = () => {
    const URL =
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/:mizael-costa-santos-hooks/login";

    const body = {
      email: email,
      password: password,
    };

    axios
      .post(URL, body)
      .then((response) => {
        // console.log(response.data.token;
        navigate("/AdminHome");
        localStorage.setItem("token", response.data.token);
      })
      .catch((error) => {
        console.log(error.response.data);
        alert("Usuario não encotrado , tente novamente!");
      });
  };

  return (
    <AreaHome>
      {/* <H1>Pagina LoginPage!</H1> */}
      <H2>Login</H2>
      <Input1
        placeholder="Email"
        type="email"
        value={email}
        onChange={onChangeEmail}
      />
      <Input2
        placeholder="Senha"
        type="password"
        value={password}
        onChange={onChangePassword}
      />
      <Button1>
        <ButtonFilho1 onClick={goBack}>Voltar</ButtonFilho1>
      </Button1>

      <Button2>
        <ButtonFilho2 onClick={onSubmitLogin}>Entrar</ButtonFilho2>
      </Button2>
    </AreaHome>

    // <div>
    //     <> Pagina LoginPage!</>
    //     <button onClick={goBack}>Voltar</button>
    //     <button onClick={goToAdminHome}>Entrar</button>
    // </div>
  );
};

export default LoginPage;
