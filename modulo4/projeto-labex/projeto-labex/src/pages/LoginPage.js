import { useNavigate } from "react-router-dom";
import styled from "styled-components";



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





    const LoginPage = () => {
        const navigate = useNavigate()
    
        const goToAdminHome = () => {
          navigate("/AdminHome")
        }

        
        const goBack = () => {
            navigate(-1)
          }


    return (

        <AreaHome>
        <H1>Pagina LoginPage!</H1>
  
        <Button1>
          <ButtonFilho1 onClick={goBack}>Voltar</ButtonFilho1>
        </Button1>
  
        <Button2>
          <ButtonFilho2 onClick={goToAdminHome}>Entrar</ButtonFilho2>
        </Button2>
      </AreaHome>






        // <div>
        //     <> Pagina LoginPage!</>
        //     <button onClick={goBack}>Voltar</button>
        //     <button onClick={goToAdminHome}>Entrar</button>
        // </div>
    
    )
}

export default LoginPage;