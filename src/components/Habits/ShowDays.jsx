import styled from "styled-components"
import { styledDaySelect } from "../../constants/styledDaySelect"
import { useEffect } from "react"
import { useState } from "react"

export default function ShowDays (props){

    const{ day, isSelected } = props
    const [ status, setStatus] = useState('notSelected')

    useEffect(() => {
        if(isSelected){
            setStatus('selected')
        } else {
            setStatus('notSelected')
        }
    }, [])

    return (
        <Day status={status}>{day.name}</Day>
    )
}

const Day = styled.div`
    width: 30px;
    height: 30px;
    background-color: ${props => styledDaySelect[props.status].backgroundColor};
    border: ${props => styledDaySelect[props.status].border};
    border-radius: 5px;
    font-size: 20px;
    color: ${props => styledDaySelect[props.status].color};
    margin-top: 2px;
    margin-right: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
`