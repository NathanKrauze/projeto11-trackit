import styled from "styled-components"
import smallLogo from "../../assets/imgs/smallLogo.png"
import { useContext } from "react"
import { accessAuth } from "../../contexts/accessAuth"

export default function Topbar () {

    const {auth}= useContext(accessAuth)

    return (
        <NavbarContainer data-test="header">
            <SmallLogo  src={smallLogo} alt="TrackIt" />
            <Profile data-test="avatar" src={auth.image} alt="avatar" />
        </NavbarContainer>
    )
}

const NavbarContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    align-items: center;
    justify-content: space-between;
`

const SmallLogo = styled.img`
    width: 97px;
    height: auto;
    margin-left: 18px;
`

const Profile = styled.img`
    width: 51px;
    height: 51px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 18px;
`