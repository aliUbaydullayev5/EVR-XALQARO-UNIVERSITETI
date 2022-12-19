import Container, { ConText } from './style'
import Logo from "../../../assets/icon/download.svg"

const NavBar = () => {
    return(
        <Container>
            <Container.Logo>
                <Logo/>
                <ConText> 
                    <p>EVR XALQARO</p>
                    <p>universiteti</p>
                 </ConText >
            </Container.Logo>
        </Container>
    )
}

export default NavBar