import Logo from "../../components/logo/Logo"
import { PageContainer, StyledForm } from "./styled"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import { ThreeDots } from "react-loader-spinner";
import { baseURL } from "../../constants/baseURL"
import { useContext } from "react"
import { accessAuth } from "../../contexts/accessAuth"


export default function LoginPage() {
    const {setAuth} = useContext(accessAuth)

    const [ email, setEmail] = useState('')
    const [ password, setPassword] = useState('')
    const [ btnContent, setBtnContent] = useState('Login')
    const [ loading, setLoading] = useState (false)
    const [ inptDisabled , setInptDisabled] = useState('enabled')
    const navigate = useNavigate()
    
    const login = {
        email: email,
        password: password
    }

    function reloadingForm (error) {
        alert(error.response.data.message);
        setBtnContent('Login');
        setLoading(false);
        setInptDisabled('enabled');
        setEmail('')
        setPassword('')
    }

    function success(resp){
        navigate('/hoje')
        setAuth(resp.data)
    }


    function sendLogin(e){
        e.preventDefault();

        setBtnContent(null)
        setLoading(true)
        setInptDisabled('disabled')

        axios.post(`${baseURL}/auth/login`, login)
        .then( resp => success(resp))
        .catch(error => reloadingForm(error))

        
    }
    
    return (
        <PageContainer>
            <Logo />
            <StyledForm onSubmit={sendLogin} loading={inptDisabled}>
                <input 
                    data-test="email-input" 
                    type="email" 
                    placeholder="email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    disabled={loading}
                    required
                    />
                <input 
                    data-test="password-input" 
                    type="password" 
                    placeholder="senha" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    disabled={loading}
                    required
                    />
                <button type='submit' data-test="login-btn" disabled={loading}>
                    {btnContent}
                    <ThreeDots color="#FFFFFF" width="51px" visible={loading}></ThreeDots>
                </button>
            </StyledForm>
            <Link to={"/cadastro"}>
                <p data-test="signup-link"> Não tem uma conta? Cadastre-se!</p>
            </Link>
        </PageContainer>
    )
}
