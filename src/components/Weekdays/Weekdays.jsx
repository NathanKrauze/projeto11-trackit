import styled from "styled-components";
import { styledDaySelect } from "../../constants/styledDaySelect";

export default function Weekdays () {
    return(
        <div>
            <Day selected= {false}>D</Day>
            <Day selected= {styledDaySelect}>S</Day>
            <Day selected= {false}>T</Day>
            <Day selected= {false}>Q</Day>
            <Day selected= {styledDaySelect}>Q</Day>
            <Day selected= {false}>S</Day>
            <Day selected= {false}>S</Day>
        </div>
    )
}


const Day = styled.button`
    width: 30px;
    height: 30px;
    background-color: ${props => !props.selected ? '#FFFFFF' : props.selected.backgroundColor};
    border: ${props => !props.selected ? '1px solid #D5D5D5' : props.selected.border};
    border-radius: 5px;
    font-size: 20px;
    color: ${props => !props.selected ? '#DBDBDB' : props.selected.color};
    margin-top: 2px;
    margin-right: 4px;
`
//1px solid #D5D5D5  DBDBDB 