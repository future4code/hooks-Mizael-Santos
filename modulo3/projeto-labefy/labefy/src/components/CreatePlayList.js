import React from "react";
import axios from "axios";
import styled from "styled-components";

const Area = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #00008B;
  width: 100vw;
  height: 100vh;
  
`

const IrParaLista = styled.button`
    margin-top: 30px;
    border-radius: 5px;
    width: 310px;
    height: 50px;
    &:hover{
        cursor: pointer;
        background-color: #836FFF ;
        color: black;
    }
`

const CriarLista = styled.button`
    margin-top: 30px;
    border-radius: 5px;
    width: 310px;
    height: 50px;
    &:hover{
        cursor: pointer;
        background-color: #836FFF ;
        color: black;
    }
`

const Input = styled.input`
    border: 2px solid black;
    border-radius: 5px;
    width: 300px;
    height: 35px;
`

const H1 = styled.h1`
    color: #00BFFF;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 70px;
    margin-bottom: 100px;
    font-style: italic;
    text-transform: capitalize;
    text-shadow: 2px 4px 5px #0000FF;
`

const H2 = styled.h2`
    color: #00BFFF;
    font-family: Arial, Helvetica, sans-serif;
    text-transform: capitalize;
    text-shadow: 2px 4px 5px #0000FF;
`


export default class CreatePlayList extends React.Component {

    state = {
        nome: ""
    }


    handleNome = (event) => {
        this.setState({nome: event.target.value})
    }

    CriarPlayList = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    

    const body = {
        name: this.state.nome
    }

    const headers = {
        headers: {
            Authorization: "mizael-costa-santos-hooks"
        }
    }

    axios.post(url , body , headers)
    .then((response) => {
        alert("Playlist criada com sucesso")
        this.setState({nome: ""})
    })
    .catch((error) => {
        alert(error.response.data.message)
        this.setState({nome: ""})

    })

    }

    render(){
        return (
            <Area>
                <H1>LabeFy &#9835;</H1>
                <IrParaLista onClick={this.props.irParaLista}>Ir para ListaDaPlayList</IrParaLista>
                <H2>Criar Lista</H2>
                <Input 
                placeholder="Nome"
                value ={this.state.nome}
                onChange={this.handleNome}
                />
                <CriarLista onClick={this.CriarPlayList}>Criar</CriarLista>
            </Area>
        )
    }
}