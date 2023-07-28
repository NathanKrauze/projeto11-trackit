import TrackItLogo from './../../assets/TrackItLogo.png';
import { PageContainer, StyledForm } from "../LoginPage/styled";

export default function SignUpPage (){
    return(
        <PageContainer>
            <img src={TrackItLogo} alt="TrackIt-logo" />
            <StyledForm>
                <input type="email" placeholder="email" data-test="email-input" />
                <input type="password" placeholder="senha" data-test="password-input" />
                <input type="text" placeholder="nome" data-test="user-name-input" />
                <input type="URL" placeholder="foto" data-test="user-image-input" />
                <button data-test="signup-btn" >Cadastrar</button>
            </StyledForm>
            <p data-test="login-link" >Já tem uma conta? Faça login!</p>
        </PageContainer>
    )
}