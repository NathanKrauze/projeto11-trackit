import styled from "styled-components"

export default function Footer () {
    return (
        <StyledFooter data-test="menu">
            <p data-test="habit-link">Hábitos</p>
            <CenterButton data-test="today-link">Hoje</CenterButton>
            <p data-test="history-link">Histórico</p>
        </StyledFooter>
    )
}

const StyledFooter = styled.div`
    width: 100%;
    height: 70px;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 31px 0 31px;
    background-color: #FFFFFF;
    font-size: 18px;
    color: #52B6FF;    
`
const CenterButton = styled.div`
    display: flex;
    margin-bottom: 48px;
    color: #FFFFFF;
    background-color: #52B6FF;
    width: 91px;
    height: 91px;
    align-items: center;
    justify-content: center;
    border-radius: 91px;
    
    transform: translate (-50%, 0);
`