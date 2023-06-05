import styled from "styled-components";
import { styledDaySelect } from "../../constants/styledDaySelect";
import { useState } from "react";
import { useEffect } from "react";

export default function WeekdaySelect (props) {

    const { day , selectDay, isSelected, disabled} = props
    const [select, setSelect] = useState('selected')

    useEffect(() => {
        if(isSelected){
            setSelect('selected')
        }else {
            setSelect('notSelected')
        }
    }, [isSelected])

    return(
        <Day data-test="habit-day" onClick={selectDay} status={select} type="button" disabled={disabled}>{day.name}</Day>
    )
}


const Day = styled.button`
    width: 30px;
    height: 30px;
    background-color: ${props => styledDaySelect[props.status].backgroundColor};
    border: ${props => styledDaySelect[props.status].border};
    border-radius: 5px;
    font-size: 20px;
    color: ${props => styledDaySelect[props.status].color};
    margin-top: 2px;
    margin-right: 4px;
`
