import styled from "styled-components";
import check from "../../assets/imgs/check.svg"

export default function TodayHabList() {
    return (
        <>
            <ListItem>
                <CheckBox>
                    <img src={check} alt="checkmark" />
                </CheckBox>
                <HabitInfo>
                    <HabitName>Ler 1 capítulo do livro</HabitName>
                    <p>Sequência atual: <strong >4 dias</strong></p>
                    <p>Seu recorde: <strong>5 dias</strong></p>
                </HabitInfo>
            </ListItem>
            <ListItem>
                <CheckBox>
                    <img src={check} alt="checkmark" />
                </CheckBox>
                <HabitInfo>
                    <HabitName>Ler 1 capítulo do livro</HabitName>
                    <p>Sequência atual: <strong >4 dias</strong></p>
                    <p>Seu recorde: <strong>5 dias</strong></p>
                </HabitInfo>
            </ListItem>
            <ListItem>
                <CheckBox>
                    <img src={check} alt="checkmark" />
                </CheckBox>
                <HabitInfo>
                    <HabitName>Ler 1 capítulo do livro</HabitName>
                    <p>Sequência atual: <strong >4 dias</strong></p>
                    <p>Seu recorde: <strong>5 dias</strong></p>
                </HabitInfo>
            </ListItem>
        </>
    )
}

const ListItem = styled.div`
    box-sizing: border-box;
    width: 340px;
    height: 94px;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 13px 13px 12px 15px;
    margin-left: 17px;
`

const CheckBox = styled.div`
    position: relative;
    top: 0;
    left: 243px;
    display: flex;
    width: 69px;
    height: 69px;
    background-color: #8FC549;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
`

const HabitInfo = styled.div`
    margin-top: -69px;

    p{
        font-size: 13px;
        margin-bottom: 3px;
        color: #666666;

        strong{
            color: #8FC549;
        }
    }
`

const HabitName = styled.h1`
    font-size: 20px;
    color: #666666;
    margin-bottom: 7px;
`