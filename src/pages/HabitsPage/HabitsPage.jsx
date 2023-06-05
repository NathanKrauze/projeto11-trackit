import Topbar from "../../components/Topbar/Topbar"
import HabitsForm from "../../components/HabitsForm/HabitsForm"
import Habits from "../../components/Habits/Habits"
import Footer from "../../components/Footer/Footer"
import { ContentContainer, AddDiv, AddButton, NoHabitsMsg } from "./styled"
import { useEffect } from "react"
import { baseURL } from "../../constants/baseURL"
import { useContext } from "react"
import { accessAuth } from "../../contexts/accessAuth"
import axios from "axios"
import { useState } from "react"


export default function HabitsPage() {

    const{auth} = useContext(accessAuth)
    const [showAddHabit, setShowAddHabit] = useState(false)
    const [name, setName] = useState('')
    const [daysSelected, setDaysSelected] = useState([])
    const [habits, setHabits] = useState(undefined)



    const authorization = {
        headers: {
            "Authorization": `Bearer ${auth.token}`
        }
    }

    useEffect (() => {
         axios.get(`${baseURL}/habits`, authorization)
         .then( resp => setHabits(resp.data))
         .catch( error => console.log(error.response))
    }, [])

    console.log(habits)

    return (
        <>
            <Topbar />
            <ContentContainer>
                <AddDiv>
                    <h1>Meus Hábitos</h1>
                    <AddButton data-test="habit-create-btn" onClick={()=>setShowAddHabit(true)}>+</AddButton>
                </AddDiv>
                {showAddHabit && (
                <HabitsForm 
                    setShowAddHabit={setShowAddHabit} 
                    name={name} 
                    setName={setName} 
                    daysSelected={daysSelected} 
                    setDaysSelected={setDaysSelected}
                    habits={habits}
                    setHabits={setHabits}/>
                )}
                {!habits? (
                    <NoHabitsMsg>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</NoHabitsMsg>
                ) : 
                    habits.map(habit=> (<Habits habit={habit} setHabits={setHabits}/>))
                }
            </ContentContainer>
            <Footer />
        </>
    )
}
