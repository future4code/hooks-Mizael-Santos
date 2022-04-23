import React from 'react';
import './CardGrande.css';
import styled from 'styled-components'

const Gran = styled.main`
     display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const Foto2 = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
const Texto2 = styled.h4`
   margin-bottom: 15px;
`
const Divisao2 = styled.div`
     display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardGrande(props) {
    return (
        <Gran>
            <Foto2 src={ props.imagem } />
            <Divisao2>
                <Texto2>{ props.nome }</Texto2>
                <p>{ props.descricao }</p>
            </Divisao2>
        </Gran>
    )
}

export default CardGrande;