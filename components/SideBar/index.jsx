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


const SideBar = () => {

    const [hidden, setHidden] = useState(false)

    const changeHidden = () => setHidden(!hidden)








  return (
    <Container>
        <div className={'main'}>
            <SideNav className={'nocopy'}>
                <Instagram className={'icon mobileIcon'} />
                <Telagram className={'icon mobileIcon'} />
                <Yotube className={'icon mobileIcon'} />
                <Tictoce className={'icon mobileIcon'} />
                <Facebook className={'icon mobileIcon'} />
                <Whatsapp className={'icon mobileIcon'} />
                <Location className={'icon mobileIcon'} />

                <MobileInstagram className={'icon laptopIcon'} />
                <MobileTelagram className={'icon laptopIcon'} />
                <MobileYotube className={'icon laptopIcon'} />
                <MobileTictoce className={'icon laptopIcon'} />
                <MobileFacebook className={'icon laptopIcon'} />
                <MobilePhone className={'icon laptopIcon'} />
                <MobileLocation className={'icon laptopIcon'} />

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
