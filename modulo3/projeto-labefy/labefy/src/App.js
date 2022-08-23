import React from "react";
import CreatePlayList from "./components/CreatePlayList";
import ListaDaPlayList from "./components/ListaDaPlayList";
import GlobalStyle from "./GlobalStyle";

class App extends React.Component {
  state = {
    TelaAtual: "CreatePlayList",
  };

  irParaCriar = () => {
    this.setState({ TelaAtual: "CreatePlayList" });
  };

  irParaLista = () => {
    this.setState({ TelaAtual: "ListaDaPlayList" });
  };

  irParaAdicionar = () => {
    this.setState({ TelaAtual: "AdicionarMusic" });
  };

  irParaDetalhes = () => {
    this.setState({ TelaAtual: "Detalhes" });
  };

  escolheTela = () => {
    switch (this.state.TelaAtual) {
      case "CreatePlayList":
        return <CreatePlayList irParaLista={this.irParaLista} />;
      case "ListaDaPlayList":
        return <ListaDaPlayList irParaAdicionar={this.irParaAdicionar} />;
      default:
        return <p> Erro! </p>;
    }
  };

  render() {
    return <div>
      <GlobalStyle />
    {this.escolheTela()}
    </div>;
  }
}

export default App;
