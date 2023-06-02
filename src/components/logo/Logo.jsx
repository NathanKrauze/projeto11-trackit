import styled from "styled-components"
import logo from "../../assets/imgs/logo.png"


export default function Logo () {
    return (
        <StyledLogo src={logo} alt="TrackIt"/>
    )
}

const StyledLogo = styled.img`
    width: 180px;
    margin-top: 68px;
    margin-bottom: 45px;
`