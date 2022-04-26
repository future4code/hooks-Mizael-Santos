import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://th.bing.com/th/id/OIP.WhLIrKFq8P8X_y1ap7zJoQHaEo?pid=ImgDet&rs=1'}
          fotoPost={'https://th.bing.com/th/id/OIP.n1DTvH4r4zfK22Qb-E15ogHaEr?pid=ImgDet&rs=1'}
        />

        <Post
          nomeUsuario={'gabriel'}
          fotoUsuario={'https://saibama.is/wp-content/uploads/2020/12/fases-da-lua-nos-negocios-15531.jpg'}
          fotoPost={'https://th.bing.com/th/id/OIP.N_STPtWWFUoS7tC4RI2fpgHaHa?pid=ImgDet&w=736&h=736&rs=1'}
        />

        <Post
          nomeUsuario={'bia'}
          fotoUsuario={'https://th.bing.com/th/id/R.9f3df38816b146fdd1a14e40de8cd252?rik=uTQw%2fleVrXx3tw&pid=ImgRaw&r=0'}
          fotoPost={'https://th.bing.com/th/id/OIP.FEgz4gv9z3D_iQZa0lCiRgHaFj?pid=ImgDet&rs=1'}
        />  
      </MainContainer>
    );
  }
}

export default App;
