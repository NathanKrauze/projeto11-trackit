import Topbar from "../../components/Topbar/Topbar"
import HabitsForm from "../../components/HabitsForm/HabitsForm"
import HabitsList from "../../components/HabitsList/HabitsList"
import Footer from "../../components/Footer/Footer"
import styled, { createGlobalStyle } from "styled-components"
import { ContentContainer, AddDiv, AddButton, NoHabitsMsg } from "./styled"

export default function HabitsPage() {
    return (
        <>
            <Topbar />
            <ContentContainer>
                <AddDiv>
                    <h1>Meus Hábitos</h1>
                    <AddButton data-test="habit-create-btn">+</AddButton>
                </AddDiv>
                <HabitsForm />
                <NoHabitsMsg>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</NoHabitsMsg>
                <HabitsList />
            </ContentContainer>
            <Footer />
        </>
    )
}
