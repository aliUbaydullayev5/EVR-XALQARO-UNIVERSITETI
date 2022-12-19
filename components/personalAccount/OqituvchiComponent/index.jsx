import Container from './style'
import Image from "next/image";
import personImg from "../../../assets/icon/personalAcauntPerson.png";
import {Button, Input} from "../../generic";
import FileIcon from "../../../assets/icon/personalAcauntFile.svg";
import BlockIcon from "../../../assets/icon/personalAcauntBlock.svg";
import ExitIcon from "../../../assets/icon/personalAcauntExit.svg";
import CloseIcon from "../../../assets/icon/rahmariyatCloseIcon.svg";
import {useRouter} from "next/router";

const OqituvchiComponent = () => {

    const query = useRouter()

    return(
        <Container>
            <Container.Top>
                <CloseIcon className={'closeIcon'} onClick={()=> query.push('/auth/oqituvchi')} />
                Shaxsiy kabinet
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
                            <Button onclick={()=> query.push('/personalAccount/oqituvchi/parolniOzgartirish')} justify={'start'} padding={'0 0 0 82px'} height={'35px'} width={'305px'} size={'20px'} color={'rgba(255, 255, 255, 0.5);'}>Parolni o’zgartirish</Button>
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
                            <Input disabled={true} height={'38px'} padding={'0 0 0 40px'} size={'20px'} weight={'600'} radius={'5px'} placeholder={'G‘ulomov Elbek Ilg‘or o‘g ‘li'} />
                        </div>
                    </Container.Row>
                    <Container.Row gap={'31px'}>
                        <div>
                            <p>Mansabi</p>
                            <Input disabled={true} height={'38px'} padding={'0 0 0 40px'} size={'20px'} weight={'600'} radius={'5px'} placeholder={'O’qituvchi'} />
                        </div>
                    </Container.Row>
                    <Container.Row disabled={true}>
                        <div>
                            <p>Ilmiy darajasi</p>
                            <Input disabled={true} height={'38px'} padding={'0 0 0 40px'} size={'20px'} weight={'600'} radius={'5px'} placeholder={'Falsafa fanlari doktori PhD'} />
                        </div>
                    </Container.Row>
                    <Container.Row>
                        <div>
                            <p>Ta’Telefon raqam</p>
                            <Input disabled={true} height={'38px'} padding={'0 0 0 40px'} size={'20px'} weight={'600'} radius={'5px'} placeholder={'+998 99 759 04 80'} />
                        </div>
                    </Container.Row>
                    <Container.Row>
                        <div>
                            <p>Email</p>
                            <Input disabled={true} height={'38px'} padding={'0 0 0 40px'} size={'20px'} weight={'600'} radius={'5px'} placeholder={'elbekgulomov0@gmail.com'} />
                        </div>
                    </Container.Row>
                    <Container.Row columns={'1fr 0.5fr'} gap={'30px'}>
                        <div></div>
                        <Button height={'35px'} size={'24px'} color={'#fff'}>Xabarlar</Button>
                    </Container.Row>
                </Container.Right>
            </Container.Bottom>
        </Container>
    )
}

export default OqituvchiComponent