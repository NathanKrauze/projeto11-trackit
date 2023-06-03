import Logo from "../../components/logo/Logo"
import { PageContainer, StyledForm } from "./styled"
import { Link } from "react-router-dom"
import axios from "axios"
import { useState } from "react"

export default function LoginPage() {


    
    return (
        <PageContainer>
            <Logo />
            <StyledForm action="">
                <input data-test="email-input" type="email" placeholder="email" />
                <input data-test="password-input" type="password" placeholder="senha" />
                <button data-test="login-btn" >Entrar</button>
            </StyledForm>
            <Link to={"/cadastro"}>
                <p data-test="signup-link"> Não tem uma conta? Cadastre-se!</p>
            </Link>
        </PageContainer>
    )
}
