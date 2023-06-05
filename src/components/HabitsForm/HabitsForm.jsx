import styled from "styled-components";
import WeekdaySelect from "../WeekdaySelect/WeekdaySelect";
import { useState } from "react";
import { days } from "../../constants/days";
import { baseURL} from "../../constants/baseURL"
import { useContext } from "react";
import { accessAuth } from "../../contexts/accessAuth"
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function HabitsForm (props) {

    const {setShowAddHabit, name, setName, daysSelected, setDaysSelected, habit, setHabits} = props

    const {auth} = useContext(accessAuth)

    const [ loading, setLoading] =useState(false)
    const [ inptDisabled, setInptDisabled] = useState('enabled')
    const [ btnContent, setBtnContent] = useState('Salvar')

    function selectDay (day) {
        const isSelected = daysSelected.some(d => d.id === day.id)
        if (isSelected){
            const newList =  daysSelected.filter(d => d.id !== day.id)
            setDaysSelected(newList)
        }
        else {
            setDaysSelected([...daysSelected, day])
        }
    }

    const authorization = {
        headers: {
            "Authorization": `Bearer ${auth.token}`
        }
    } 

    function sendingHabit(){
        setShowAddHabit(false)
        setLoading(false);
        setInptDisabled('enabled')
        setBtnContent('Salvar')
        setName('')
        setDaysSelected([])
        axios.get(`${baseURL}/habits`, authorization)
        .then(resp => setHabits(resp.data))
        .catch(err => alert(err.response.data.message))
    }

    function sendingError(err){
        alert(err.response.data.message)
        setLoading(false);
        setInptDisabled('enabled')
        setBtnContent('Salvar')
    }
    
    function cancelCriation () {
        setName([...name].join(''))
        setDaysSelected([...daysSelected])
        setShowAddHabit(false)
    }
     
    function sendHabit (event) {
        event.preventDefault()
        setLoading(true);
        setInptDisabled('disabled')
        setBtnContent(null)
        const newHabit = {
            name: name,
            days: daysSelected.map(day => day.id)
        }

        axios.post(`${baseURL}/habits`, newHabit, authorization)
        .then( resp => sendingHabit(resp))
        .catch( err => sendingError(err))
    }

    return (
        <StyledForm onSubmit={sendHabit} data-test="habit-create-container" loading={inptDisabled}>
            <input 
                data-test="habit-name-input" 
                type="text" 
                placeholder="nome do hábito"
                value={name}
                onChange={e => setName(e.target.value)}
                disabled={loading}
            />
                {days.map( day => (               
                    <WeekdaySelect
                        day={day} 
                        key={day.id}
                        selectDay={() => selectDay(day)}
                        isSelected={daysSelected.some(d => d.id === day.id)}
                        disabled={loading}/>
                ))}
            <CancelButton  data-test="habit-create-cancel-btn" type="button" onClick={cancelCriation} disabled={loading}>Cancelar</CancelButton>
            <SaveButton type="submit" data-test="habit-create-save-btn" disabled={loading}>
                {btnContent}
                <ThreeDots color="#FFFFFF" width="43px" height="11px" visible={loading} ></ThreeDots>
            </SaveButton>
        </StyledForm>
    )
}


const StyledForm = styled.form`
    margin: 0 17px 20px 17px;
    padding: 17px;
    background: #FFFFFF;
    border-radius: 5px;

    input{
        background: ${props => props.loading === 'enabled' ? "#FFFFFF" : "#F2F2F2"};
        border: 1px solid ${props => props.loading === 'enabled' ? "#D5D5D5" : "#D4D4D4"};
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