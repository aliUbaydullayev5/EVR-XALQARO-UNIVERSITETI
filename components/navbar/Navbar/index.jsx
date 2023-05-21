import Container from './style'
import { Button } from "../../generic";
import User from '../../../assets/icon/person.svg'
import Chat from '../../../assets/icon/chat.svg'
import MenuIcon from '../../../assets/icons/menu.svg'
// import Logo from '../../../assets/icon/logo.svg'
import Logo from "../../../assets/icon/navoiLogoWhite.png"
import { useRouter } from "next/router";
import { useState } from "react";
import PersonComponent from "../PersonComponent";
import HamburgerMenu from "../../HamburgerMenu";
import MobileLogo from '../../../assets/mobile/icon/logoMobile.svg'
import MobilProfile from '../../../assets/mobile/icon/profile.svg'
import MobileHamburgerIcon from '../../../assets/mobile/icon/menu.svg'
import { useDispatch } from "react-redux";
import Image from 'next/image.js';


const Navbar = () => {

    const dispatch = useDispatch()
    const query = useRouter()

    const [hidden, setHidden] = useState(false)

    const [hiddenMenu, setHiddenMenu] = useState(false)

    const changeHidden = () => setHidden(!hidden);
    const changeHiddenMenu = () => setHiddenMenu(!hiddenMenu);

    return (
        <Container className={'nocopy'}>
            <Container.Logo onClick={() => query.push('/homePage')}>
                <div>
                    {/* <Logo className={'logo'} /> */}
                    <Image className='logo' src={Logo} />
                    <Image className={'mobileLogo logo'} src={Logo} />

                    {/* <MobileLogo className={'mobileLogo logo'} /> */}
                </div>

                <Container.LogoText>
                    NAVOIY  INSTITUTI <br />
                    INNOVATSIYALAR
                </Container.LogoText>
            </Container.Logo>

            <div style={{}} className={'noneMobile'}>
            </div>

            <div className={'forMobileCenter'}>
                <div>
                    <Button mhover={false} mweight={'400'} wrap={'true'} mheight={'22px'} msize={'12px'} mwidth={'105px'} weidth={'400'} size={'24px'} height={'32px'} width={'245px'} onclick={() => query.push('/aboutUsPage')}>Biz haqimizda</Button>
                </div>
                <div>
                    <Button mheight={'31px'} msize={'22px'} mwidth={'101px'} weight={'400'} size={'40px'} height={'49px'} width={'225px'} wight={'900'} onclick={() => query.push('/receptionPage')}>Qabul</Button>
                </div>
                <div>
                    <Button mhover={false} mweight={'400'} wrap={'true'} mline={'7px'} mheight={'22px'} msize={'12px'} mwidth={'105px'} weidth={'400'} onclick={() => query.push('/trainingDirections')} size={'24px'} height={'32px'} width={'245px'}>Ta’lim yo’nalishlari</Button>
                </div>
            </div>

            <Container.IconArea>
                <Container.UserBlock>
                    <User className={'scale iconLaptop'} onClick={() => changeHidden()} />
                    <MobilProfile className={'scale iconMobile'} onClick={() => changeHidden()} />
                    {
                        hidden && <PersonComponent onclick={() => changeHidden()} />
                    }
                    <div></div>
                </Container.UserBlock>
                <Container.MenuArea>
                    <MenuIcon onClick={() => changeHiddenMenu()} className={'scale iconLaptop'} />
                    <MobileHamburgerIcon onClick={() => changeHiddenMenu()} className={'scale iconMobile'} />
                    {
                        hiddenMenu &&
                        <HamburgerMenu changeHidden={() => setHiddenMenu()} />
                    }
                </Container.MenuArea>
            </Container.IconArea>
        </Container>
    )
}

export default Navbar
