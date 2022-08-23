import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const Global = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
  }

  button {
    cursor: pointer;
  }
`;

const AreaHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: rgba(0, 0, 255) 0px 10px 20px, rgba(128, 0, 128) 0px 6px 6px;
  width: 600px;
  height: 750px;
  margin: 400px;
  text-align: center;
  padding-bottom: 60px;
  `;

const Img = styled.img`
    width: 100px;
    height: 100px;
    
`

const H1 = styled.h1`
  font-size: 60px;
  font-family: sans-serif;
  padding-bottom: 50px;
`;

const H3 = styled.h1`
  font-size: 30px;
  font-family: sans-serif;
  padding-bottom: 50px;
  padding-top: 2px;
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

const HomePage = () => {
  const navigate = useNavigate();

  const goToListTrips = () => {
    navigate("/ListTrips");
  };

  const goToLoginAdmin = () => {
    navigate("/Login");
  };

  return (
    <AreaHome>
      <H1>LabeX <Img src="https://img.icons8.com/nolan/344/launched-rocket.png" alt="foguete"/></H1>
      <H3>Tenha uma ótima viagem!</H3>

      <Button1>
        <ButtonFilho1 onClick={goToListTrips}>Lista De Viagens</ButtonFilho1>
      </Button1>

      <Button2>
        <ButtonFilho2 onClick={goToLoginAdmin}>Area Admin</ButtonFilho2>
      </Button2>
    </AreaHome>
  );
};

export default HomePage;
