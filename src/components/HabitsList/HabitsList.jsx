import styled from "styled-components";
import Weekday from "../WeekdaySelect/WeekdaySelect";
import trashCan from "../../assets/imgs/trashCan.png"

export default function HabitsList () {
    return (
        <List>
            <ListItem data-test="habit-container">
                <TrashIcon src={trashCan} alt="trashCan"  data-test="habit-delete-btn"/>
                <HabitName data-test="habit-name">Ler 1 capítulo do livro</HabitName>
                <Weekday />
            </ListItem>
            <ListItem data-test="habit-container">
                <TrashIcon src={trashCan} alt="trashCan"  data-test="habit-delete-btn"/>
                <HabitName data-test="habit-name">Ler 1 capítulo do livro</HabitName>
                <Weekday />
            </ListItem>
            <ListItem data-test="habit-container">
                <TrashIcon src={trashCan} alt="trashCan"  data-test="habit-delete-btn"/>
                <HabitName data-test="habit-name">Ler 1 capítulo do livro</HabitName>
                <Weekday />
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