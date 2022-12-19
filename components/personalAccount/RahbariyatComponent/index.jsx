import Container from './style'
import Image from "next/image";
import personImg from "../../../assets/icon/personalAcauntPerson.png";
import {Button, Input} from "../../generic";
import FileIcon from "../../../assets/icon/personalAcauntFile.svg";
import BlockIcon from "../../../assets/icon/personalAcauntBlock.svg";
import ExitIcon from "../../../assets/icon/personalAcauntExit.svg";
import CloseIcon from "../../../assets/icon/rahmariyatCloseIcon.svg";
import {useRouter} from "next/router";

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
                        <Image src={personImg} alt={'icons person'} />
                    </div>
                    <Container.LeftMenu>
                        <div>
                            <Button justify={'start'} padding={'0 0 0 82px'} height={'35px'} width={'305px'} size={'20px'} color={'rgba(255, 255, 255, 0.5);'}>Rasm yuklash</Button>
                            <FileIcon className={'icon'} />
                        </div>
                        <div>
                            <Button onclick={()=> query.push('/personalAccount/rahbariyat/parolniOzgartirish')} justify={'start'} padding={'0 0 0 82px'} height={'35px'} width={'305px'} size={'20px'} color={'rgba(255, 255, 255, 0.5);'}>Parolni o’zgartirish</Button>
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
                            <Input disabled={true} height={'43px'} padding={'0 0 0 40px'} size={'20px'} weight={'600'} radius={'5px'} placeholder={'G‘ulomov Elbek Ilg‘or o‘g ‘li'} />
                        </div>
                    </Container.Row>

                    <Container.Row>
                        <div>
                            <p>Mansabi</p>
                            <Input disabled={true} height={'43px'} padding={'0 0 0 40px'} size={'20px'} weight={'600'} radius={'5px'} placeholder={'O’qituvchi'} />
                        </div>
                    </Container.Row>

                    <Container.Row disabled={true}>
                        <div>
                            <p>Ilmiy darajasi</p>
                            <Input disabled={true} height={'43px'} padding={'0 0 0 40px'} size={'20px'} weight={'600'} radius={'5px'} placeholder={'Falsafa fanlari doktori PhD'} />
                        </div>
                    </Container.Row>
                    <Container.Row columns={'1fr 1fr 1fr'} gap={'30px'}>
                        <Button height={'48px'} width={'180px'} size={'24px'} color={'#fff'}>EK-101</Button>
                        <Button height={'48px'} width={'180px'} padding={'0 20px 0 20px'} size={'24px'} color={'#fff'} onclick={()=> query.push('/adminPage/homePage')}>Admin Panel</Button>
                        <Button height={'48px'} width={'180px'} size={'24px'} color={'#fff'}>Xabarlar</Button>
                    </Container.Row>
                </Container.Right>
            </Container.Bottom>
        </Container>
    )
}

export default RahbariyatComponent