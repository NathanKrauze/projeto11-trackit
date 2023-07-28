import { styled } from "styled-components"
import { WEEKDAYS } from '../../constants/weekdays';

export default function AddHabit () {
    return(
        <StyledForm data-test="habit-create-container" >
            <input type="text" placeholder="nome do hábito" data-test="haibt-name-input" />
            {WEEKDAYS.map( day => <Day data-test="habit-day" >{day}</Day>)}
            <CancelButton data-test="habit-create-cancel-btn" >Cancelar</CancelButton>
            <SaveButton data-test="habit-create-save-btn" >Salvar</SaveButton>
        </StyledForm>
    )
}

const StyledForm = styled.form`
    margin: 0 17px 20px 17px;
    padding: 17px;
    background: #FFFFFF;
    border-radius: 5px;

    input{
        background:white;
        border: 1px solid #D4D4D4;
    }
`

const CancelButton = styled.button`
    position: relative;
    top: 0px;
    left: 133px;
    background-color: transparent;
    border: 0;
    font-size: 16px;
    color: #52B6FF;
    text-align: center;
    margin-top: 29px;
    margin-right: 23px;
`

const SaveButton= styled.button`
    position: relative;
    top: 0;
    left: 125px;
    width:84px;
    height: 35px;
    text-align:center;
    background: #52B6FF;
    border-radius: 5px;
    border: 0;
    color: #FFFFFF;
    font-size: 16px;
    margin-top: 29px;

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