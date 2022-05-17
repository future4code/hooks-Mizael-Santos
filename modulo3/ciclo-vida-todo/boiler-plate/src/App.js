import React from 'react'
import styled from 'styled-components'
import { addEmitHelper } from 'typescript'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      listaTarefas: 
        [{id: Date.now(),
        texto: 'tarefa 1',
        completa: false},
      
        {id: Date.now(),
        texto: 'tarefa 2',
        completa: true}
       ],
      inputValue: '',
      filtro: ""
    }

  componentDidUpdate(prevProps,prevState) {
      if(prevState.tarefa !==this.state.tarefa){
        localStorage.setItem("tarefa" , JSON.stringify(this.status.tarefa))
      }
  };

  componentDidMount() {
  }

  onChangeInput = (event) => {
    this.setState({inputValue:event.target.value})
  }


  criaTarefa = () => {
    const outraListaTarefas = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }
    const novaListaTarefas = [...this.state.listaTarefas, outraListaTarefas]

    this.setState({listaTarefas : novaListaTarefas})

    this.setState({inputValue: ""})
  }

  selectTarefa = (id) => {
      const outraListaTarefas = this.state.listaTarefas.map((tarefa) => {
        if(tarefa.id === id){
            tarefa.completa = !tarefa.completa

            return tarefa
          
        }else{
          return tarefa     
        }
      })
      this.setState({listaTarefas : outraListaTarefas})
  }

  onChangeFilter = (event) => {
    this.setState({filtro:event.target.value})
  }

  render() {
    const listaFiltrada = this.state.listaTarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
