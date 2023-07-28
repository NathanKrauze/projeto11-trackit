import AddHabit from "../../components/AddHabit/AddHabit";
import Habit from "../../components/Habit/Habit";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import { AddButton, AddDiv, ContentContainer, NoHabitsMsg } from "./styled";

export default function HabitsPage() {
    return (
        <>
            <Header />
            <ContentContainer>
                <AddDiv>
                    <h1>Meus Hábitos</h1>
                    <AddButton>+</AddButton>
                </AddDiv>
                <AddHabit />
                <NoHabitsMsg>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</NoHabitsMsg>
                <Habit />
            </ContentContainer>
            <Navbar />
        </>
    )
}