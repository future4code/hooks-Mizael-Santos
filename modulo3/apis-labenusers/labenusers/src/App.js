// inportaçoes dos arquivos
import React from "react";
import axios from "axios";
import { Global, Input, AreaDoInput, Button, TextoCadastro, TextoInformativo } from "./Components/styled"

//variavel da URL da API
const urlLabeusers = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

//variavel da autorização da API
const headers = {
  headers: {
    Authorization: "mizael-costa-santos-hooks"
  }
};

//component de class
class App extends React.Component {

//estado do componete

  state = {
    usuario: [],
    usuarioInput: "",
    emailInput: ""
  };

  componentDidMount() {
    this.getAllUsers();
  }
//pegando os usuarios
  getAllUsers = () => {
    axios
      .get(urlLabeusers, headers)
      .then((response) => {
        this.setState({ usuario: response.data});
      })
      .catch((error) => {
        alert("Algo deu errado, tente novamente");
        console.log(error)
      });
  };

// criando usuarios 
  createUsers = () => {
    const body = {
      name: this.state.usuarioInput,
      email: this.state.emailInput,
    };

    axios
      .post(urlLabeusers, body, headers)
      .then((response) => {
        alert(`O usuário ${this.state.usuarioInput} foi criado com sucesso`);
        this.setState({ usuarioInput: "" });
        this.getAllUsers();
      })
      .catch((error) => {
        alert("este nome já foi cadastrado ou este email já foi cadastrado");
        this.setState({ usuarioInput: "" });
      });

      console.log()
  };



  onCreateUsersTextChange = (event) => {
    this.setState({ usuarioInput: event.target.value });
  };

  onCreateEmailTextChange = (event) => {
    this.setState({ emailInput: event.target.value });
  };

// deletar usuarios
  deleteUser = (id) => {
    axios
        .delete(`${urlLabeusers}/${id}`, headers)
        .then((res) => {
            this.takeUserList()
            alert('usuario deletado')
        })
        .catch((err) => {
            alert('algo deu errado')
        })
}



// rederização do app

  render() {
    const usuarioComponents = this.state.usuario.map((list) => {
      return <li key={list.id}>{list.name}</li>;
    });


// parte do formulario , inputs e botões    
    return (
      <Global>
        <TextoCadastro>cadastro do usuario</TextoCadastro>
        <TextoInformativo>aqui abaixo coloque seus dados</TextoInformativo>

        <AreaDoInput>

          <Input
            defaultValue={this.state.usuarioInput}
            onChange={this.onCreateUsersTextChange}
            placeholder="Usuário" />

          <Input
            defaultValue={this.state.emailInput}
            onChange={this.onCreateEmailTextChange}
            placeholder="Email"
          />

          <Button onClick={this.createUsers}>enviar</Button>
          {usuarioComponents}

          <button onClick={() => this.deleteUser(urlLabeusers.id)}>X</button>
        </AreaDoInput>
      </Global>
    );
  }
}

export default App;