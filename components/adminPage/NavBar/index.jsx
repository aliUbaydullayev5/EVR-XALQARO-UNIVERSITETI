import Container, { ConText } from './style'
import { useRouter } from 'next/router.js'
import Logo from "../../../assets/icons/logo.svg"

const NavBar = () => {
    const quarey =useRouter()
    return(
        <Container>
            <Container.Logo >
                <div>
                    <Logo onClick={() => quarey.push('/admin/home')} /></div>
                <div onClick={() => quarey.push('/admin/home')} className={'nocopy'}>
                    <p>EVR XALQARO</p>
                    <p>universiteti</p>
                </div>
            </Container.Logo>
        </Container>
    )
}

export default NavBar