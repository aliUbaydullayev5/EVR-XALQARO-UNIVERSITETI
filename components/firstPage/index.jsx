import Container from './style'
import Logo from '../../assets/icon/firstlogo.svg'


import {Input, Button} from "../generic";
import {useRouter} from "next/router";
import {useState} from "react";

import LogoMobile from '../../assets/icon/download.svg'

// import Logo from '../../assets/icons/logo.svg'
// import textLgo from '../../assets/mobile/image/logoText.png'
import Image from "next/image.js";

const FirstPageMainCom = () => {

    const router = useRouter()

    const [numState, setNumState] = useState('')
    const [length, setLength] = useState(0)


    const changeNumState = (event) => {
        if(length < event.length){
            setLength(event.length-1)
            if(event.length == 2){
                return setNumState(event+' ')
            }
            if(event.length == 6){
                return setNumState(event+' ')
            }
            if(event.length == 9){
                return setNumState(event+' ')
            }
        }
        if(length >= event.length){
            setLength(event.length)
            setNumState(event)
        }
        return setNumState(event)
    }

    return(
        <Container>
            <Container.AreaLogo>
                <div className={'logoMain'}>
                    <Logo className={'logo'} />
                </div>
                <Container.LogoLine />
                <Container.LogoTitle className={'g'}>
                    EVR XALQARO <br />
                    UNIVERSITETI
                </Container.LogoTitle>
            </Container.AreaLogo>

            <Container.AreaLogoMobile>
                <div>
                    <LogoMobile alt={'logo'} className={'logo'} />
                </div>
                <Container.MobileText>
                    {/* <Image src={textLgo} alt={'text of logo'} className={'textLogo'} /> */}
                    <b>  </b> 
                     EVR XALQARO <br />
                    UNIVERSITETI
                </Container.MobileText>
            </Container.AreaLogoMobile>

            <Container.Title>
                Bizning saytimizga <br />
                xush kelibsiz, sizning <br />
                tashrifingizdan minnatdormiz.
            </Container.Title>
            <Container.SubTitle>
                Saytga kirish uchun ismingiz va telefon <br />
                raqamingizni qoldiring.
            </Container.SubTitle>
            <Container.Row mjs={'center'}>
                <Input mpadding={'0 0 0 10px'} padding={'0 0 0 20px'} mradius={'5px'} mwidth={'80vw'} msize={'26px'} height={'60px'} mheight={'52px'} placeholder={'Ismingiz'}  />
                <Container.Number>
                    <Input mradius={'5px'} mwidth={'80vw'} msize={'26px'} height={'60px'} mheight={'52px'} placeholder={'__ ___ __ __'} maxlength={'12'} mpadding={'3px 0px 0px 77px'} padding={'3px 0px 0px 97px'} value={numState} onchange={(e)=> changeNumState(e.target.value)} />
                    <Container.FormatNumber>+998</Container.FormatNumber>
                </Container.Number>
            </Container.Row>
            <Container.Row js={'end'} mjs={'center'}>
                <Button mradius={'5px'} msize={'32px'}  mpadding={'5px'} mwidth={'80vw'} height={'60px'} mheight={'48px'} width={'290px'} margin={'15px 0 0 0'} onclick={()=> router.push('/homePage')}>KIRISH</Button>
            </Container.Row>
        </Container>
    )
}

export default FirstPageMainCom