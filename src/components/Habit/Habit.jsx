import { styled } from "styled-components"
import trashCan from '../../assets/TrashIcon.png'
import { WEEKDAYS } from "../../constants/weekdays"

export default function Habit (){
    return(
        <List>
            <ListItem data-test="habit-container">
                <TrashIcon src={trashCan} data-test="habit-delete-btn"/>
                <HabitName data-test="habit-name">Ler 1 cap do livro</HabitName>
                <span>
                    {WEEKDAYS.map( day => <Day data-test="habit-day">{day}</Day>)}
                </span>
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

    span{
        display: flex;
    }
    
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
const Day = styled.button`
    width: 30px;
    height: 30px;
    background-color: white;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    font-size: 20px;
    color: #D4D4D4;
    margin-top: 2px;
    margin-right: 4px;
`