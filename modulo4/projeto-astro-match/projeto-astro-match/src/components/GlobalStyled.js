import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding:0;
    outline:0;
    box-sizing: border-box;
    color: white;
    background-image:url(https://i0.wp.com/multarte.com.br/wp-content/uploads/2018/12/fundo-preto-background.png?fit=1920%2C1080&ssl=1);
    
}

body, input, button {
     font: 14px Roboto, sans-serif;
}

button{
    cursor: pointer;
}

`;
