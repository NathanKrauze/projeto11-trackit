import { styled } from "styled-components"
import TrackItLogo from './../../assets/TrackItLogo.png';
import { PageContainer, StyledForm } from './styled'

export default function LoginPage (){
    return(
        <PageContainer>
            <img src={TrackItLogo} alt="TrackIt-logo"/>
            <StyledForm>
                <input type="email" placeholder="email" data-test="email-input" />
                <input type="password" placeholder="senha" data-test="password-input" />
                <button data-test="login-btn" >login</button>
            </StyledForm>
            <p data-test="signup-link" >Não tem uma conta? Cadastre-se!</p>
        </PageContainer>
    )
}
