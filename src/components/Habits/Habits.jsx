import styled from "styled-components";
import trashCan from "../../assets/imgs/trashCan.png"
import ShowDays from "./ShowDays";
import { days } from "../../constants/days";
import axios from "axios";
import { useContext } from "react";
import { accessAuth } from "../../contexts/accessAuth";
import { baseURL } from "../../constants/baseURL";

export default function Habits (props) {

    const { habit, setHabits } = props
    const {auth} = useContext(accessAuth)
    const authorization = {
        headers: {
            "Authorization": `Bearer ${auth.token}`
        }
    }

    function reloadingHabits(){
        axios.get(`${baseURL}/habits`, authorization)
        .then(resp => setHabits(resp.data))
        .catch(err => alert('erro'))
    }

    function deleteHabit(id){

        axios.delete(`${baseURL}/habits/${id}`, authorization)
        .then( resp => reloadingHabits())
        .catch( err => alert(err.response.data.message))
    }

    return (
        <List>
            <ListItem data-test="habit-container">
                <TrashIcon 
                    src={trashCan} 
                    alt="trashCan"
                    data-test="habit-delete-btn"
                    onClick={() => deleteHabit(habit.id)}/>
                <HabitName data-test="habit-name">{habit.name}</HabitName>
                <span>
                    {days.map(day => (
                    <ShowDays 
                        day={day} 
                        key={day.id}
                        isSelected={habit.days.some(d => d === day.id)}
                    />
                    ))}
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