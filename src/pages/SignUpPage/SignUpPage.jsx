import { useState } from "react";
import Logo from "../../components/logo/Logo"
import { PageContainer, StyledForm } from "./styled"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import { baseURL } from "../../constants/baseURL";
import { ThreeDots } from "react-loader-spinner";

export default function SignUpPage() {

    const [ email, setEmail] = useState('')
    const [ name, setName] = useState('')
    const [ image, setImage] = useState('')
    const [ password, setPassword] = useState('')
    const [ loading, setLoading] = useState(false)
    const [ btnContent, setBtnContent] = useState('Cadastrar')
    const [ inptDisabled , setInptDisabled] = useState('enabled')
    const navigate = useNavigate()

    const cadastro = {
        email: email,
        name: name,
        image: image,
        password: password
    }

    function reloadingForm (error) {
        alert(error.response.data.message);
        setBtnContent('Cadastrar');
        setLoading(false);
        setInptDisabled('enabled');
        setEmail('')
        setName('')
        setImage('')
        setPassword('')
    }

    function sendRegstration (e){
        e.preventDefault();

        setBtnContent(null)
        setLoading(true)
        setInptDisabled('disabled')

        axios.post(`${baseURL}/auth/sign-up`, cadastro)
        .then( resp => navigate('/'))
        .catch(error => reloadingForm(error))
    }

    return (
        <PageContainer>
            <Logo />
            <StyledForm onSubmit={sendRegstration} loading={inptDisabled}>
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
                <input 
                    data-test="user-name-input"
                    type="text" 
                    placeholder="nome" 
                    value={name} 
                    onChange={e => setName(e.target.value)}
                    disabled={loading}
                    required
                    />
                <input 
                    data-test="user-image-input"
                    type="URL" 
                    placeholder="foto" 
                    value={image} 
                    onChange={e => setImage(e.target.value)}
                    disabled={loading}
                    required
                    />
                <button type="submit" data-test="signup-btn" disabled={loading}>
                    {btnContent}
                    <ThreeDots color="#FFFFFF" width="51px" visible={loading}></ThreeDots>
                </button>
            </StyledForm>
            <Link to={'/'}>
                <p data-test="login-link"> Já tem uma conta? Faça login!</p>
            </Link>
        </PageContainer>
    )
}
