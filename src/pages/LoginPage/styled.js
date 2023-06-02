import styled from "styled-components"

export const PageContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items:  center;

    p{
        color: #52B6FF;
        text-decoration: #52B6FF underline;
    }
`
export const StyledForm = styled.form`
    display: flex;
    flex-direction:column;

    button{
        width: 303px;
        height: 45px;
        background: #52B6FF;
        border-radius: 5px;
        border: 0;
        margin-bottom: 25px;
        text-align: center;
        font-size: 20px;
        line-height: 26px;
        color: #FFFFFF;
    }
`