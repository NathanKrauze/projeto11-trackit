import styled from "styled-components";
import Weekdays from "../Weekdays/Weekdays";

export default function HabitsForm () {
    return (
        <StyledForm data-test="habit-create-container">
            <input type="text" placeholder="nome do hábito" data-test="habit-name-input" />
            <Weekdays />
            <ActionButtons>
                <CancelButton data-test="habit-create-cancel-btn">Cancelar</CancelButton>
                <SaveButton data-test="habit-create-save-btn">Salvar</SaveButton>
            </ActionButtons>
        </StyledForm>
    )
}

const StyledForm = styled.div`
    margin: 0 17px 20px 17px;
    padding: 17px;
    background: #FFFFFF;
    border-radius: 5px;
`

const ActionButtons = styled.div`
    width: 100%;
    display: flex;
    justify-content: right;
    margin-top: 29px;
`

const CancelButton = styled.button`
    background-color: transparent;
    border: 0;
    font-size: 16px;
    color: #52B6FF;
    text-align: center;
    margin-right: 23px;
`

const SaveButton= styled.button`
    width:84px;
    height: 35px;
    text-align:center;
    background: #52B6FF;
    border-radius: 5px;
    border: 0;
    color: #FFFFFF;
    font-size: 16px;
`