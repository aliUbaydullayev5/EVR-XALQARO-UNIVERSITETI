import Container from './style'
import Image from "next/image";
import personImg from "../../../assets/icon/personalAcauntPerson.png";
import {Button, Input} from "../../generic";
import FileIcon from "../../../assets/icon/personalAcauntFile.svg";
import BlockIcon from "../../../assets/icon/personalAcauntBlock.svg";
import ExitIcon from "../../../assets/icon/personalAcauntExit.svg";
import CloseIcon from "../../../assets/icon/rahmariyatCloseIcon.svg";
import {useRouter} from "next/router";


import MobileFile from '../../../assets/mobile/icon/mobileFile.svg'
import MobileRestor from '../../../assets/mobile/icon/mobileRestor.svg'
import MobileExit from '../../../assets/mobile/icon/mobileExit.svg'

const RahbariyatComponent = () => {

    const query = useRouter()

    return(
        <Container>
            <Container.Top>
                <CloseIcon className={'closeIcon'} onClick={()=> query.push('/auth/rahbariyat')} />
                Shaxsiy kabinet
            </Container.Top>
            <Container.Bottom>
                <Container.Left>
                    <div>
                        <Image src={personImg} alt={'icons person'} className={'personIcon'} />
                    </div>
                    <Container.LeftMenu>
                        <div>
                            <Button mwidth={'171px'} mheight={'20px'} mradius={'5px'} msize={'12px'} justify={'start'} padding={'0 0 0 82px'} height={'35px'} width={'305px'} size={'20px'} color={'rgba(255, 255, 255, 0.5);'}>Rasm yuklash</Button>
                            <FileIcon className={'icon laptopIcon'} />
                            <MobileFile className={'mobileIcon icon'} />
                        </div>
                        <div>
                            <Button mwidth={'171px'} mheight={'20px'} mradius={'5px'} msize={'12px'} onclick={()=> query.push('/personalAccount/rahbariyat/parolniOzgartirish')} justify={'start'} padding={'0 0 0 82px'} height={'35px'} width={'305px'} size={'20px'} color={'rgba(255, 255, 255, 0.5);'}>Parolni o’zgartirish</Button>
                            <BlockIcon className={'icon laptopIcon'} />
                            <MobileRestor className={'mobileIcon icon'} />
                        </div>
                        <div>
                            <Button mwidth={'171px'} mheight={'20px'} mradius={'5px'} msize={'12px'} justify={'start'} padding={'0 0 0 82px'} height={'35px'} width={'305px'} size={'20px'} color={'rgba(255, 255, 255, 0.5);'}>Chiqish</Button>
                            <ExitIcon className={'icon laptopIcon'} />
                            <MobileExit className={'mobileIcon icon'} />
                        </div>
                    </Container.LeftMenu>
                </Container.Left>

                <Container.Right>

                    <Container.Row>
                        <div>
                            <p>FIO</p>
                            <Input mwidth={'287px'} mheight={'33px'} msize={'16px'} mradius={'5px'} mpadding={'0 19px'} disabled={true} height={'43px'} padding={'0 0 0 40px'} size={'20px'} weight={'600'} radius={'5px'} placeholder={'G‘ulomov Elbek Ilg‘or o‘g ‘li'} />
                        </div>
                    </Container.Row>

                    <Container.Row>
                        <div>
                            <p>Mansabi</p>
                            <Input mwidth={'287px'} mheight={'33px'} msize={'16px'} mradius={'5px'} mpadding={'0 19px'} disabled={true} height={'43px'} padding={'0 0 0 40px'} size={'20px'} weight={'600'} radius={'5px'} placeholder={'O’qituvchi'} />
                        </div>
                    </Container.Row>

                    <Container.Row disabled={true}>
                        <div>
                            <p>Ilmiy darajasi</p>
                            <Input mwidth={'287px'} mheight={'33px'} msize={'16px'} mradius={'5px'} mpadding={'0 19px'} disabled={true} height={'43px'} padding={'0 0 0 40px'} size={'20px'} weight={'600'} radius={'5px'} placeholder={'Falsafa fanlari doktori PhD'} />
                        </div>
                    </Container.Row>
                    <Container.Row columns={'1fr 1fr 1fr'} gap={'30px'} mgap={'10px'}>
                        <Button mheight={'31px'} msize={'16px'} height={'48px'} width={'180px'} size={'24px'} color={'#fff'}>EK-101</Button>
                        <Button mpadding={'0 5px'} wrap={true} mheight={'31px'} msize={'16px'} height={'48px'} width={'180px'} padding={'0 20px 0 20px'} size={'24px'} color={'#fff'} onclick={()=> query.push('/adminPage/homePage')}>Admin Panel</Button>
                        <Button mheight={'31px'} msize={'16px'} height={'48px'} width={'180px'} size={'24px'} color={'#fff'}>Xabarlar</Button>
                    </Container.Row>
                </Container.Right>
            </Container.Bottom>
        </Container>
    )
}

export default RahbariyatComponent