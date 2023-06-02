import Logo from "../../components/logo/Logo"
import { PageContainer, StyledForm } from "../LoginPage/styled"

export default function SignUpPage() {
    return (
        <PageContainer>
            <Logo />
            <StyledForm action="">
                <input type="email" placeholder="email" />
                <input type="password" placeholder="senha" />
                <input type="text" placeholder="nome" />
                <input type="URL" placeholder="foto" />
                <button>Cadastrar</button>
            </StyledForm>
            <p> Já tem uma conta? Faça login!</p>
        </PageContainer>
    )
}
