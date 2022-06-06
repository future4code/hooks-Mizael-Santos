import React from "react";
import axios from "axios";
import styled from "styled-components";
import ReactPlayer from "react-player";

const DivContainer = styled.div`
  background-color: #00008B;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const CardPlayList = styled.div`
 margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #00008B;
 
  p {
    color: white;
    font-size: 35px;
  }
`

const H1 = styled.h1`
    color: #00BFFF;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 50px;
    margin-bottom: 100px;
    font-style: italic;
    text-shadow: 2px 4px 5px #0000FF;
`
const ButtonDelete = styled.button`
    margin-top: 30px;
    border-radius: 5px;
    width: 310px;
    height: 50px;
    &:hover{
        cursor: pointer;
        background-color: #836FFF ;
        color: black ;
    }
`

const ButtonDetalhes = styled.button`
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

const ButtonAdc = styled.button`
    margin-top: 30px;
    border-radius: 5px;
    width: 310px;
    height: 50px;
    &:hover{
        cursor: pointer;
        background-color: #836FFF ;
        color: black ;
    }
`

const MusicasDaLista = styled.div`
    margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #00008B;
  /* width: 100; */
  p {
    color: white;
    font-size: 25px;
  }
`
const H3 = styled.div`
    color: #00BFFF;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 30px;
    margin-bottom: 10px;
    font-style: italic;
    text-shadow: 2px 4px 5px #0000FF;
    margin-top: 40px;
`

const AdicionarMusica = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #00008B;
` 

const InputDoAdc = styled.input`
   border: 2px solid black;
    border-radius: 5px;
    width: 300px;
    height: 35px;
`

const H2DoAdc = styled.h2`
    color: #00BFFF;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 30px;
    margin-bottom: 10px;
    font-style: italic;
    text-shadow: 2px 4px 5px #0000FF;
    margin: 40px 0;
    padding-top: 30px;

`

const ButtonDoAdc2 = styled.button`
     margin-top: 30px;
    border-radius: 5px;
    width: 310px;
    height: 50px;
    &:hover{
        cursor: pointer;
        background-color: #836FFF ;
        color: black ;
    }
    `



export default class ListaDaPlayList extends React.Component {
  state = {
    listaDePlayList: [],
    listaDeMusicas: [],
    name: "",
    artist: "",
    url: "",
    playListId: "",
    rendTelaAdiciona: false,
  };

  componentDidMount() {
    this.pegarPlayList();
  }

  pegarPlayList = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

    const headers = {
      headers: {
        Authorization: "mizael-costa-santos-hooks",
      },
    };

    axios
      .get(url, headers)
      .then((response) => {
        this.setState({ listaDePlayList: response.data.result.list });
        console.log(response.data);
      })
      .catch((error) => {
        alert("Algo deu errado");
      });
  };

  deletarPlayList = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`;

    const headers = {
      headers: {
        Authorization: "mizael-costa-santos-hooks",
      },
    };

    axios
      .delete(url, headers)
      .then((response) => {
        alert("Playlista deletada com sucesso");
        this.pegarPlayList();
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  pegarMusicas = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`;

    const headers = {
      headers: {
        Authorization: "mizael-costa-santos-hooks",
      },
    };

    axios
      .get(url, headers)
      .then((response) => {
        this.setState({ listaDeMusicas: response.data.result.tracks });
        console.log(response.data);
      })
      .catch((error) => {
        alert("Algo deu errado");
      });
  };

  adicionarMusicas = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`;

    const headers = {
      headers: {
        Authorization: "mizael-costa-santos-hooks",
      },
    };

    const body = {
      name: this.state.name,
      artist: this.state.artist,
      url: this.state.url,
    };

    axios
      .post(url, body, headers)
      .then((response) => {
        alert("Musica Criada com sucesso");
        console.log();
        this.setState({name: ""})
        this.setState({artist: ""})
        this.setState({url: ""})
      })
      .catch((error) => {
        alert("Algo deu errado");
        console.log(error.response);
        this.setState({name: ""})
        this.setState({artist: ""})
        this.setState({url: ""})
      });
  };

  solicitaAdc = (id) => {
    this.setState({ playListId: id });
    this.setState({ rendTelaAdiciona: true });
  };

  renderizacaoTelaAdc = () => {
    if (this.state.rendTelaAdiciona === true) {
      return (
        <AdicionarMusica>
          <H2DoAdc>Adicione a Musica</H2DoAdc>
          <InputDoAdc
            placeholder="name"
            value={this.state.name}
            onChange={this.nomeOnChange}
          />
          <InputDoAdc
            placeholder="artist"
            value={this.state.artist}
            onChange={this.artistOnChange}
          />
          <InputDoAdc
            placeholder="url"
            value={this.state.url}
            onChange={this.urlOnChange}
          />
          <ButtonDoAdc2 onClick={() => this.adicionarMusicas(this.state.playListId)}>
            Adicionar Musica
          </ButtonDoAdc2>
        </AdicionarMusica>
      );
    }
  };

  nomeOnChange = (event) => {
    this.setState({ name: event.target.value });
  };

  artistOnChange = (event) => {
    this.setState({ artist: event.target.value });
  };

  urlOnChange = (event) => {
    this.setState({ url: event.target.value });
  };

  render() {
    const musicas = this.state.listaDeMusicas.map((musica) => {
      return (
        <MusicasDaLista key={musica.id}>
          <p>{musica.artist} - {musica.name}</p>
          <ReactPlayer
            url={musica.url}
            width="400px"
            height="50px"
            playing={false}
            controls={true}
          />
        </MusicasDaLista>
      );
    });

    const playListas = this.state.listaDePlayList.map((playList) => {
      return (
        <CardPlayList key={playList.id}>
          <p>{playList.name}</p>
          <ButtonDelete onClick={() => this.deletarPlayList(playList.id)}>Deletar PlayList</ButtonDelete>
          <ButtonDetalhes onClick={() => this.pegarMusicas(playList.id)}>
            Ir para Detalhes
          </ButtonDetalhes>
          <ButtonAdc onClick={() => this.solicitaAdc(playList.id)}>
            Adicionar musicas
          </ButtonAdc>
        </CardPlayList>
      );
    });

    return (
      <DivContainer>
        <H1>Lista da Playlist</H1>
        {playListas}
        <H3>Musica</H3>
        {musicas}
        {this.renderizacaoTelaAdc()}
      </DivContainer>
    );
  }
}
