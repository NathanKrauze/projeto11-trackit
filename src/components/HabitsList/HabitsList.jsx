import styled from "styled-components";
import Weekdays from "../Weekdays/Weekdays";
import trashCan from "../../assets/imgs/trashCan.png"

export default function HabitsList () {
    return (
        <List>
            <ListItem>
                <TrashIcon src={trashCan} alt="trashCan" />
                <HabitName>Ler 1 capítulo do livro</HabitName>
                <Weekdays />
            </ListItem>
            <ListItem>
                <TrashIcon src={trashCan} alt="trashCan" />
                <HabitName>Ler 1 capítulo do livro</HabitName>
                <Weekdays />
            </ListItem>
            <ListItem>
                <TrashIcon src={trashCan} alt="trashCan" />
                <HabitName>Ler 1 capítulo do livro</HabitName>
                <Weekdays />
            </ListItem>
        </List>
    )
}

const List = styled.div`
    margin: 0 17px 0 17px;
`

const ListItem = styled.div`
    box-sizing: border-box;
    width: 340px;
    height: 91px;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 15px;
`

const TrashIcon = styled.img`
    width: 13px;
    height: auto;
    position: relative;
    top: -5px;
    left: 305px;
`

const HabitName = styled.h1`
    font-size: 20px;
    color: #666666;
    margin-top: -14px;
    margin-bottom: 6px;
`