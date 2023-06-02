import styled from "styled-components";
import Topbar from "../../components/Topbar/Topbar";
import Footer from "../../components/Footer/Footer";
import TodayHabList from "../../components/TodayHabList/TodayHabList";
import { PageContainer, Day, ProgressText } from "./styled";

export default function TodayHabitsPage() {
    return(
        <PageContainer>
            <Topbar/>
            <Day>Segunda, 17/05</Day>
            {/* <ProgressText>Nenhum hábito concluído ainda</ProgressText> */}
            <ProgressText progress={"true"}>67% dos hábitos concluídos</ProgressText>
            <TodayHabList/>
            <Footer/>
        </PageContainer>
    )
}
