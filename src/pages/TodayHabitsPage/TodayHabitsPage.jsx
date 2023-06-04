import styled from "styled-components";
import Topbar from "../../components/Topbar/Topbar";
import Footer from "../../components/Footer/Footer";
import TodayHabList from "../../components/TodayHabList/TodayHabList";
import { PageContainer, Day, ProgressText } from "./styled";
import { useContext } from "react"
import { accessAuth } from "../../contexts/accessAuth";

export default function TodayHabitsPage() {

    const {auth} = useContext(accessAuth)

    return(
        <PageContainer>
            <Topbar/>
            <Day  data-test="today">Segunda, 17/05</Day>
            <ProgressText data-test="today-counter">Nenhum hábito concluído ainda</ProgressText>
            <ProgressText progress={"true"} data-test="today-counter">67% dos hábitos concluídos</ProgressText>
            <TodayHabList/>
            <Footer/>
        </PageContainer>
    )
}
