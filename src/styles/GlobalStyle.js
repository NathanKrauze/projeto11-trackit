import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    body{
        background-color: #F2F2F2;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
    }

    input{
        width: 303px;
        height: 45px;
        margin-bottom: 6px;
        box-sizing: border-box;
        border-radius: 5px;
        font-size: 20px;
        padding-left: 11px;
        color: #666666;
        
        &::placeholder{
            color: #DBDBDB;
        }
    }
`

export default GlobalStyle;