import Topbar from "../../components/Topbar/Topbar";
import Footer from "../../components/Footer/Footer";
import TodayHab from "../../components/TodayHab/TodayHab";
import { PageContainer, Day, ProgressText } from "./styled";
import { useContext } from "react"
import { accessAuth } from "../../contexts/accessAuth";
import dayjs from "dayjs";
import { useEffect } from "react";
import { baseURL } from "../../constants/baseURL";
import { useState } from "react";
import axios from "axios";

export default function TodayHabitsPage() {

    const [ todayHabits, setTodayHabits] = useState(undefined)
    const [ done, setDone] = useState(undefined)
    const [ habToBeDone, setHabToBeDone] = useState(undefined)

    const {auth} = useContext(accessAuth)
    const authorization = {
        headers: {
            "Authorization": `Bearer ${auth.token}`
        }
    }
    
    console.log(habToBeDone)

    useEffect(() => {
        axios.get(`${baseURL}/habits/today`, authorization)
        .then(resp => setTodayHabits(resp.data))
        .catch(err => console.log(err.response.data.message))
    },[])

    function checkHabit() {
        if (!done) {
            axios.post(`${baseURL}/habits/${habToBeDone}/check`, authorization)
            .then(setDone(true))
            .catch(err => console.log('erro'))
        } else {
            setDone(false)
        }
    }

    return(
        <PageContainer>
            <Topbar/>
            <Day  data-test="today">Segunda, {dayjs().format('DD/MM')}</Day>
            <ProgressText data-test="today-counter">Nenhum hábito concluído ainda</ProgressText>
            <ProgressText progress={"true"} data-test="today-counter">67% dos hábitos concluídos</ProgressText>
            {todayHabits && todayHabits.map(tdyHabit => (<TodayHab tdyHabit={tdyHabit} done={done} checkHabit={checkHabit} setHabToBeDone={setHabToBeDone}/>))}
            <Footer/>
        </PageContainer>
    )
}
