import styled from "styled-components";
import Topbar from "../../components/Topbar/Topbar"
import Footer from "../../components/Footer/Footer"

export default function HabitsHistoryPage(){
    return(
        <PageContainer>
            <Topbar />
            <h1>Histórico</h1>
            <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
            <Footer />
        </PageContainer>
    )
}

const PageContainer = styled.div`
    
    h1{
        margin: 98px 0 17px 17px;
        font-size: 23px;
        color: #126BA5;
    }

    h2{
        margin: 0 17px;
        font-size: 18px;
        color: #666666;
    }
`