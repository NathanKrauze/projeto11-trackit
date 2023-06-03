import { useState } from "react";
import Logo from "../../components/logo/Logo"
import { PageContainer, StyledForm } from "../LoginPage/styled"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import { baseURL } from "../../constants/baseURL";

export default function SignUpPage() {

    const [ email, setEmail] = useState('')
    const [ name, setName] = useState('')
    const [ image, setImage] = useState('')
    const [ password, setPassword] = useState('')
    const navigate = useNavigate()

    function sendRegstration (event){
        event.preventDefault();

        // const request = axios.post(`${baseURL}/auth/sign-up`, {
        //     email: email,
        //     name: name,
        //     image: image,
        //     password: password
        // })
        // request.then( ()=> navigate('/hoje'))
        // request.catch( alert( "algo deu errado"))
    }

    return (
        <PageContainer>
            <Logo />
            <StyledForm onSubmit={sendRegstration}>
                <input 
                    data-test="email-input"
                    type="email" 
                    placeholder="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)}/>
                <input 
                    data-test="password-input"
                    type="password" 
                    placeholder="senha" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)}/>
                <input 
                    data-test="user-name-input"
                    type="text" 
                    placeholder="nome" 
                    value={name} 
                    onChange={e => setName(e.target.value)}/>
                <input 
                    data-test="user-image-input"
                    type="URL" 
                    placeholder="foto" 
                    value={image} 
                    onChange={e => setImage(e.target.value)}/>
                <button type="submit" data-test="signup-btn">Cadastrar</button>
            </StyledForm>
            <Link to={'/'}>
                <p data-test="login-link"> Já tem uma conta? Faça login!</p>
            </Link>
        </PageContainer>
    )
}
