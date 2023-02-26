import Container, { ConText } from './style'
import Logo from "../../../assets/icon/download.svg"
import { useRouter } from 'next/router.js'

const NavBar = () => {
    const query=useRouter()
    return(
        <Container>
            <Container.Logo>
                <Logo/>
                <ConText onClick={() => query.push('/admin/home')}> 
                    <p>EVR XALQARO</p>
                    <p>universiteti</p>
                 </ConText >
            </Container.Logo>
        </Container>
    )
}

export default NavBar