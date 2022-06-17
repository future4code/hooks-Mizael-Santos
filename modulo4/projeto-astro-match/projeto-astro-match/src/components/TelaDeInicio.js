import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FcLike, FcDislike } from "react-icons/fc";
import { IconContext } from "react-icons";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: white;
  border: 1px solid #00FFFF	;
  border-radius: 40px;
  box-shadow: 3px 3px 6px 3px #00FFFF	;
  width: 390px;
  height: 580px;
`;

// const AreaDoMeio = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   padding: 15px;
// `;

const ButtonMatch1 = styled.div`
  display: flex;
  margin-right: 60px;
  border: 10px solid white;
  border-radius: 10px;
  border-color: #00FFFF	;
`;

const ButtonMatch2 = styled.div`
  display: flex;
  margin-left: 60px;
  border: 10px solid #00FFFF;
  border-radius: 10px;
  border-color: #00FFFF	;
`;

const ButtonPai = styled.div`
  display: flex;
  margin-top: 45px;
  
`;

const H1 = styled.h1`
  margin-bottom: 40px;
  color:#0000FF	;
  box-shadow: 1px 2px 8px 2px #00FFFF	;
  border-radius: 8px;
  `
const P = styled.h3`
  color: #0000FF;
`  

const H3 = styled.h3`
  color:#0000FF;
`  

const TelaDeInicio = () => {
  const [perfil, setPerfil] = useState({});

  const getProfileToChoose = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mizael-costa-santos-hooks/person"
      )
      .then((response) => {
        setPerfil(response.data.profile);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  useEffect(() => {
    getProfileToChoose();
  }, []);

  const choosePerson = () => {
    const body = {
      id: perfil.id,
      choice: true,
    };

    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mizael-costa-santos-hooks/choose-person",
        body
      )
      .then((response) => {
        getProfileToChoose();
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const choosePersonNot = () => {
    const body = {
      id: perfil.id,
      choice: false,
    };

    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mizael-costa-santos-hooks/choose-person",
        body
      )
      .then((response) => {
        getProfileToChoose();
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <div>
      <Card>
        <H1>AstroMatch</H1>
        <img
          src={perfil.photo}
          width="360px"
          height="290px"
          alt={perfil.photo_alt}
        />
        <H3>
          {perfil.name},{perfil.age}
        </H3>
        <P>{perfil.bio}</P>
        <ButtonPai>
          <ButtonMatch1>
            <button onClick={choosePersonNot}>
              <IconContext.Provider value={{ size: "2em" }}>
                <FcDislike />
              </IconContext.Provider>
            </button>
          </ButtonMatch1>
          <ButtonMatch2>
            <button onClick={choosePerson}>
              <IconContext.Provider value={{ size: "2em" }}>
                <FcLike />
              </IconContext.Provider>
            </button>
          </ButtonMatch2>
        </ButtonPai>
      </Card>
    </div>
  );
};

export default TelaDeInicio;
