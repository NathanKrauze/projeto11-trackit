import Logo from "../../components/logo/Logo"
import { PageContainer, StyledForm } from "./styled"

export default function LoginPage() {
    return (
        <PageContainer>
            <Logo />
            <StyledForm action="">
                <input type="email" placeholder="email" />
                <input type="password" placeholder="senha" />
                <button>Entrar</button>
            </StyledForm>
            <p> Não tem uma conta? Cadastre-se!</p>
        </PageContainer>
    )
}
