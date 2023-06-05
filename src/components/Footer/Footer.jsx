import styled from "styled-components"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css'
import { Link } from "react-router-dom"

export default function Footer () {
    return (
        <StyledFooter data-test="menu">
            <Link to={"/habitos"}>
                <p data-test="habit-link">Hábitos</p>
            </Link>
            <Link to={'/hoje'}>
                <CenterButton data-test="today-link">
                    <CircularProgressbar
                    value={23}
                    text={`hoje`}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor: "#52B6FF",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent",
                        textSize: "18px"
                    })}
                /></CenterButton>
            </Link>
            <Link to={'/historico'}>
                <p data-test="history-link">Histórico</p>
            </Link>
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
    
    a{
        color: #52B6FF;
        text-decoration: none;
    }
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