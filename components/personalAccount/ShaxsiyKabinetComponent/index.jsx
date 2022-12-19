import Container from './style'
import personImg from '../../../assets/icon/personalAcauntPerson.png'
import BlockIcon from '../../../assets/icon/personalAcauntBlock.svg'
import ExitIcon from '../../../assets/icon/personalAcauntExit.svg'
import FileIcon from '../../../assets/icon/personalAcauntFile.svg'
import DownIcon from '../../../assets/icon/personDown.svg'
import Image from "next/image.js";
import {Button, Input} from "../../generic";
import {useRouter} from "next/router";
import CloseIcon from "../../../assets/icon/rahmariyatCloseIcon.svg";

const ShaxsiyKabinetComponent = () => {

    const query = useRouter()

    return(
        <Container>
            <Container.Top>
                Shaxsiy kabinet
                <CloseIcon className={'closeIcon'} onClick={()=> query.push('/auth/talaba')} />
            </Container.Top>
            <Container.Bottom>
                <Container.Left>
                    <div>
                        <Image src={personImg} alt={'icons person'} />
                    </div>
                    <Container.LeftMenu>
                        <div>
                            <Button justify={'start'} padding={'0 0 0 82px'} height={'35px'} width={'305px'} size={'20px'} color={'rgba(255, 255, 255, 0.5);'}>Rasm yuklash</Button>
                            <FileIcon className={'icon'} />
                        </div>
                        <div>
                            <Button onclick={()=> query.push('/personalAccount/talaba/parolniOzgartirish')} justify={'start'} padding={'0 0 0 82px'} height={'35px'} width={'305px'} size={'20px'} color={'rgba(255, 255, 255, 0.5);'}>Parolni o’zgartirish</Button>
                            <BlockIcon className={'icon'} />
                        </div>
                        <div>
                            <Button justify={'start'} padding={'0 0 0 82px'} height={'35px'} width={'305px'} size={'20px'} color={'rgba(255, 255, 255, 0.5);'}>Chiqish</Button>
                            <ExitIcon className={'icon'} />
                        </div>
                    </Container.LeftMenu>
                </Container.Left>
                <Container.Right>
                    <Container.Row>
                        <div>
                            <p>FIO</p>
                            <Input disabled={true} height={'33px'} padding={'0 0 0 40px'} size={'20px'} weight={'600'} radius={'5px'} placeholder={'G‘ulomov Elbek Ilg‘or o‘g ‘li'} />
                        </div>
                    </Container.Row>
                    <Container.Row columns={'1fr 1fr 1fr'} gap={'31px'}>
                        <div>
                            <p>Test natijasi</p>
                            <Input disabled={true} height={'33px'} padding={'0 0 0 40px'} size={'20px'} weight={'600'} radius={'5px'} placeholder={'87.6 %'} />
                        </div>
                        <div>
                            <p>Kursingiz</p>
                            <Input disabled={true} height={'33px'} padding={'0 0 0 40px'} size={'20px'} weight={'600'} radius={'5px'} placeholder={'3-kurs'} />
                        </div>
                        <div>
                            <p>ID raqam</p>
                            <Input disabled={true} height={'33px'} padding={'0 0 0 40px'} size={'20px'} weight={'600'} radius={'5px'} placeholder={'101006'} />
                        </div>
                    </Container.Row>
                    <Container.Row disabled={true} columns={'1fr 1fr'} gap={'31px'}>
                        <div>
                            <p>Ta’lim turi</p>
                            <Input disabled={true} height={'33px'} padding={'0 0 0 40px'} size={'20px'} weight={'600'} radius={'5px'} placeholder={'Bakalavr'} />
                        </div>
                        <div>
                            <p>Yo‘nalishingiz</p>
                            <Input disabled={true} height={'33px'} padding={'0 0 0 40px'} size={'20px'} weight={'600'} radius={'5px'} placeholder={'Iqtisodiyot'} />
                        </div>
                    </Container.Row>
                    <Container.Row>
                        <div>
                            <p>Ta’lim shakli</p>
                            <Input disabled={true} height={'33px'} padding={'0 0 0 40px'} size={'20px'} weight={'600'} radius={'5px'} placeholder={'Kunduzgi'} />
                        </div>
                    </Container.Row>
                    <Container.Row columns={'1fr 1fr'} gap={'31px'}>
                        <div>
                            <p>Shartnoma</p>
                            <Container.InputCustom1 type={'file'} />
                            <DownIcon className={'icon'} />
                        </div>
                        <div>
                            <p>Ma’lumotnoma</p>
                            <Container.InputCustom1 type={'file'} />
                            <DownIcon className={'icon'} />
                        </div>
                    </Container.Row>
                    <Container.Row columns={'1fr 1fr'} gap={'31px'}>
                        <div>
                            <p>Aloqa xati</p>
                            <Container.InputCustom1 type={'file'} />
                            <DownIcon className={'icon'} />
                        </div>
                        <div>
                            <p>Chaqiruv xati</p>
                            <Container.InputCustom1 type={'file'} />
                            <DownIcon className={'icon'} />
                        </div>
                    </Container.Row>
                    <Container.Row columns={'1fr 1fr 1fr'} gap={'30px'}>
                        <Button height={'31px'} size={'24px'} color={'#fff'} onclick={()=> query.push('/personalAccount/talaba/tolovlar')}>To’lovlar</Button>
                        <Button height={'31px'} size={'24px'} color={'#fff'}>EK-101</Button>
                        <Button height={'31px'} size={'24px'} color={'#fff'}>Xabarlar</Button>
                    </Container.Row>
                </Container.Right>
            </Container.Bottom>
        </Container>
    )
}

export default ShaxsiyKabinetComponent