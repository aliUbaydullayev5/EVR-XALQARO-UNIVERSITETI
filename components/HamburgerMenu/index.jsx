import Container from "./style"
import Close from '../../assets/icon/bigClose.svg'
import MobileClose from '../../assets/mobile/icon/closeMobile.svg'
import { useRouter } from "next/router"

const HamburgerMenu = ({ changeHidden }) => {

    const query = useRouter()

    return (
        <Container>
            <Close className={'close'} onClick={() => changeHidden()} />
            <MobileClose className={'closeMobile'} onClick={() => changeHidden()} />
            <Container.ButtonArea>
                {/*<Button mwidth={'41px'} mheight={'20px'} msize={'14px'} width={'64px'} height={'32px'} size={'19px'} padding={'4px'}>UZ</Button>*/}
                {/*<Button mwidth={'41px'} mheight={'20px'} msize={'14px'} width={'64px'} height={'32px'} size={'19px'} padding={'4px'}>RUS</Button>*/}
                {/*<Button mwidth={'41px'} mheight={'20px'} msize={'14px'} width={'64px'} height={'32px'} size={'19px'} padding={'4px'}>ENG</Button>*/}
            </Container.ButtonArea>
            <ul className={'nocopy'}>
                <li onClick={() => query.push('/ourTeamPage')}>Bizning jamoa</li>
                <li onClick={() => query.push('/testTopshirish')}>Test topshirish</li>
                <li onClick={() => query.push('/examResults')}>Test natijalari</li>
                <li onClick={() => query.push('/contractDown')}>Shartnoma yuklab olish</li>
                <li onClick={() => query.push('/contactUs')}>Biz bilan aloqa</li>
                <li onClick={() => query.push('/library')}>Elektron kutubxona</li>
                <li onClick={() => query.push('/news')}>Yangiliklar</li>
                {/* <li>Savol-javoblar</li> */}
                <li onClick={() => query.push('/license')}>Litsenziya</li>
                <li onClick={() => query.push('/gallery')}>Galereya</li>
                {/*<li onClick={()=> query.push('/ratings')}>Reytinglar</li>*/}
            </ul>
        </Container>
    )
}
// onclick={()=> query.push('/OurTeamPage')}

export default HamburgerMenu