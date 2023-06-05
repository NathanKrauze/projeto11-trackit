import styled from "styled-components";
import checkImg from "../../assets/imgs/checkImg.svg"
import { useEffect } from "react";
import { useState } from "react";

export default function TodayHab(props) {

    const { tdyHabit, done, checkHabit, setHabToBeDone } = props
    const [ check, setCheck] = useState('uncheck')

    setHabToBeDone(tdyHabit.id)
    useEffect(() => {
        if(!done){
            setCheck('check')
        } else {
            setCheck('uncheck')
        }
    },[done])
    

    return (
        <>
            <ListItem data-test="today-habit-container">
                <CheckBox data-test="today-habit-check-btn" onClick={checkHabit} check={check}>
                    <img src={checkImg} alt="checkmark" />
                </CheckBox>
                <HabitInfo>
                    <HabitName data-test="today-habit-name">{tdyHabit.name}</HabitName>
                    <p data-test="today-habit-sequence">Sequência atual: <strong >{tdyHabit.currentSequence} dias</strong></p>
                    <p data-test="today-habit-record">Seu recorde: <strong>{tdyHabit.highestSequence} dias</strong></p>
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

const CheckBox = styled.button`
    position: relative;
    top: 0;
    left: 243px;
    display: flex;
    width: 69px;
    height: 69px;
    background-color: ${props => props.check == "check" ? "#8FC549": "#E7E7E7"};
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    border: 0;
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