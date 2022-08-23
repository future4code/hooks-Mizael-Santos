import React from 'react';
import './CardPequeno.css';
import styled from 'styled-components'

const Pequenino = styled.main`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;
`

const Foto = styled.img`
     width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const Texto = styled.h4`
     margin-bottom: 15px;
`

const Divisao = styled.div`
     display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardPequeno(props) {
    return (
        <Pequenino className="pequenocard-container">
            <Foto src={ props.imagem } />
            <Divisao>
                <Texto>{ props.email }</Texto>
                <p>{ props.endereco }</p>
            </Divisao>
        </Pequenino>
    )
}

export default CardPequeno;