import styled from 'styled-components'

export const Global = styled.div`
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

     body{
        font-family: sans-serif;
    } 

    button{
        cursor: pointer;
    }
    
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Input = styled.input`
    width: 100%;
    margin-bottom: 12px;
    height: 46px;
    background-color: #121212;
    border: 0;
    border-radius: 6px;
    color: white;
    padding: 0 12px;
    text-align: center;
    font-size: 18px;
`
export const AreaDoInput = styled.div`
    width: 500px;
    display:flex;
    flex-direction: column;
    align-items: center;
`

export const Button = styled.button`
     width: 100%;
    height: 46px;
    border: 0;
    border-radius: 6px;
    background-color: blue;
    color: white;
    font-size: 18px;
`

export const TextoCadastro = styled.h1`
     font-size: 45px;
     box-shadow: 5px 5px 5px 5px blue;
`

export const TextoInformativo = styled.span`
    margin: 12px 0;
    padding-top: 20px;
`


