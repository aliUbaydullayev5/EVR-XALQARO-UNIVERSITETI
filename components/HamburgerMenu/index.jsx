import Container from "./style"
import Close from '../../assets/icon/bigClose.svg'
import MobileClose from '../../assets/mobile/icon/closeMobile.svg'
import {Button} from "../generic";
import {useRouter} from "next/router";

const HamburgerMenu = ({changeHidden}) => {

    const query = useRouter()

    return(
        <Container>
            <Close className={'close'} onClick={()=> changeHidden()} />
            <MobileClose className={'closeMobile'} onClick={()=> changeHidden()} />
            <Container.ButtonArea>
                <Button mwidth={'41px'} mheight={'20px'} msize={'14px'} width={'64px'} height={'32px'} size={'19px'} padding={'4px'}>UZ</Button>
                <Button mwidth={'41px'} mheight={'20px'} msize={'14px'} width={'64px'} height={'32px'} size={'19px'} padding={'4px'}>RUS</Button>
                <Button mwidth={'41px'} mheight={'20px'} msize={'14px'} width={'64px'} height={'32px'} size={'19px'} padding={'4px'}>ENG</Button>
            </Container.ButtonArea>
            <ul className={'nocopy'}>
                <li onClick={()=> query.push('/ourTeamPage')}>Bizning jamoa</li>
                <li onClick={() => query.push('/testTopshirish')}>Test topshirish</li>
                <li>Test natijalari</li>
                <li>Shartnoma yuklab olish</li>
                <li>Biz bilan aloqa</li>
                <li>Elektron kutubxona</li>
                <li>Yangiliklar</li>
                <li>Savol-javoblar</li>
                <li>Litsenziya</li>
                <li>Umumiy chat</li>
                <li>Reytinglar</li>
            </ul>
        </Container>
    )
}
// onclick={()=> query.push('/OurTeamPage')}

export default HamburgerMenu