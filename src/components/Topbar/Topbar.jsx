import styled from "styled-components"
import smallLogo from "../../assets/imgs/smallLogo.png"

export default function Topbar () {
    return (
        <NavbarContainer>
            <SmallLogo  src={smallLogo} alt="TrackIt" />
            <Profile src="https://i0.wp.com/omeudiadia.com.br/wp-content/uploads/2022/04/gatinho-fofo-segurando-as-suas-2-patinhas-1.jpg?resize=564%2C564&ssl=1" alt="Profile" />
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
    height: auto;
    border-radius: 51px;
    margin-right: 18px;
`