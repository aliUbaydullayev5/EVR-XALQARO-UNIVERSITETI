import React, {useState} from 'react'
import Container, { SideNav } from './style.js'
import Instagram from "../../assets/icons/instagram.svg"
import Telagram from "../../assets/icons/telegram.svg"
import Yotube from "../../assets/icons/youtube.svg"
import Tictoce from "../../assets/icons/tiktoc.svg"
import Facebook from "../../assets/icons/facebook.svg"
import Whatsapp from "../../assets/icons/whatsapp.svg"
import Location from "../../assets/icons/location.svg"
import Message from "../../assets/icons/message.svg"
import Voise from "../../assets/icons/voise.svg"

import MobileInstagram from '../../assets/mobile/icon/instagram.svg'
import MobileTelagram from '../../assets/mobile/icon/telegram.svg'
import MobileYotube from '../../assets/mobile/icon/youtube.svg'
import MobileTictoce from '../../assets/mobile/icon/tiktoc.svg'
import MobileFacebook from '../../assets/mobile/icon/facebook.svg'
import MobileChat from '../../assets/mobile/icon/messanger.svg'
import MobileLocation from '../../assets/mobile/icon/location.svg'
import MobilePhone from '../../assets/mobile/icon/phone.svg'
import MobileVoise from '../../assets/mobile/icon/voise.svg'

import MassageComponent from "../MessageComponent";
import {useRouter} from "next/router";


const SideBar = () => {

    const [hidden, setHidden] = useState(false)

    const changeHidden = () => setHidden(!hidden)

  return (
    <Container>
        <div className={'main'}>
            <SideNav className={'nocopy'}>
                <a href={'https://www.instagram.com/exuedu_uz/'} target={'_blank'}>
                    <Instagram className={'icon mobileIcon'} />
                </a>
                <a href={'https://t.me/exuedu_uz'} target={'_blank'}>
                    <Telagram className={'icon mobileIcon'} />
                </a>
                <a href={'https://www.youtube.com/'} target={'_blank'}>
                    <Yotube className={'icon mobileIcon'} />
                </a>
                <a href={'https://www.tiktok.com/'} target={'_blank'}>
                    <Tictoce className={'icon mobileIcon'} />
                </a>
                <a href={'https://www.facebook.com/'} target={'_blank'}>
                    <Facebook className={'icon mobileIcon'} />
                </a>
                <a href={'tel:+998997777575'} target={'_blank'}>
                    <Whatsapp className={'icon mobileIcon'} />
                </a>
                <a href={'#'} target={'_blank'}>
                    <Location className={'icon mobileIcon'} />
                </a>



                <a href={'https://www.instagram.com/exuedu_uz/'} target={'_blank'}>
                    <MobileInstagram className={'icon laptopIcon'} />
                </a>

                <a href={'https://t.me/exuedu_uz'} target={'_blank'}>
                    <MobileTelagram className={'icon laptopIcon'} />
                </a>
                <a href={'https://www.youtube.com/'} target={'_blank'}>
                    <MobileYotube className={'icon laptopIcon'} />
                </a>
                <a href={'https://www.tiktok.com/'} target={'_blank'}>
                    <MobileTictoce className={'icon laptopIcon'} />
                </a>
                <a href={'https://www.facebook.com/'} target={'_blank'}>
                    <MobileFacebook className={'icon laptopIcon'} />
                </a>
                <a href={'tel:+998997777575'} target={'_blank'}>
                    <MobilePhone className={'icon laptopIcon'} />
                </a>
                <a href={'#'} target={'_blank'}>
                    <MobileLocation className={'icon laptopIcon'} />
                </a>
            </SideNav>
            <Container.Messanger>
                <Voise className={'voice mobileIcon'} />
                <MobileVoise className={'voice laptopIcon'} />
                <Container.MeesengerArea className={'nocopy'}>
                    <Message className={'message mobileIcon'} onClick={()=> changeHidden()} />
                    <MobileChat className={'laptopIcon message'} onClick={()=> changeHidden()} />

                    <Container.MeesengerYellow onClick={()=> changeHidden()}>1</Container.MeesengerYellow>
                    {
                        hidden &&
                        <MassageComponent changeHidden={changeHidden} />
                    }
                </Container.MeesengerArea>
            </Container.Messanger>
        </div>
    </Container>
  )
}


export default SideBar
