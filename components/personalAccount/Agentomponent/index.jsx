import Container from './style'
import CloseIcon from "../../../assets/icon/rahmariyatCloseIcon.svg";
import Image from "next/image";
import personImg from "../../../assets/icon/personalAcauntPerson.png";
import {Button, Input} from "../../generic";
import FileIcon from "../../../assets/icon/personalAcauntFile.svg";
import BlockIcon from "../../../assets/icon/personalAcauntBlock.svg";
import ExitIcon from "../../../assets/icon/personalAcauntExit.svg";
import DownIcon from "../../../assets/icon/personDown.svg";
import {useRouter} from "next/router";

const Agentomponent = () => {

    const query = useRouter()

    return(
        <Container>
            <Container.Top>
                Shaxsiy kabinet
                <CloseIcon className={'closeIcon'} onClick={()=> query.push('/auth/agent')} />
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
                            <Button onclick={()=> query.push('/personalAccount/agent/parolniOzgartirish')} justify={'start'} padding={'0 0 0 82px'} height={'35px'} width={'305px'} size={'20px'} color={'rgba(255, 255, 255, 0.5);'}>Parolni o’zgartirish</Button>
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
                            <p>Agentlik nomi</p>
                            <Input disabled={true} height={'33px'} padding={'0 0 0 40px'} size={'20px'} weight={'600'} radius={'5px'} placeholder={'EVR Consulting'} />
                        </div>
                    </Container.Row>
                    <Container.Row>
                        <div>
                            <p>Manzil</p>
                            <Input disabled={true} height={'33px'} padding={'0 0 0 40px'} size={'20px'} weight={'600'} radius={'5px'} placeholder={'Uzbekistan, Tashkent'} />
                        </div>
                    </Container.Row>
                    <Container.Row disabled={true} columns={'1fr 1fr'} gap={'31px'}>
                        <div>
                            <p>ID raqam</p>
                            <Input disabled={true} height={'33px'} padding={'0 0 0 40px'} size={'20px'} weight={'600'} radius={'5px'} placeholder={'101006'} />
                        </div>
                        <div>
                            <p>Litsenziya raqami</p>
                            <Input disabled={true} height={'33px'} padding={'0 0 0 40px'} size={'20px'} weight={'600'} radius={'5px'} placeholder={'123 456 789'} />
                        </div>
                    </Container.Row>
                    <Container.Row>
                        <div>
                            <p>Telefon raqam</p>
                            <Input disabled={true} height={'33px'} padding={'0 0 0 40px'} size={'20px'} weight={'600'} radius={'5px'} placeholder={'+998'} />
                        </div>
                    </Container.Row>
                    <Container.Row columns={'1fr 1fr'} gap={'31px'}>
                        <div>
                            <p>Ishonchnoma</p>
                            <Container.InputCustom1 type={'file'} />
                            <DownIcon className={'icon'} />
                        </div>
                        <div>
                            <p>Shartnoma raqami</p>
                            <Container.InputCustom1 type={'file'} />
                            <DownIcon className={'icon'} />
                        </div>
                    </Container.Row>
                    <Container.Row columns={'1fr 1fr 1fr'} gap={'30px'}>
                        <div></div>
                        <Button height={'36px'} size={'20px'} width={'240px'} color={'#fff'}>Ro’yxatdan o’tkazish</Button>
                        <div></div>
                    </Container.Row>
                </Container.Right>
            </Container.Bottom>
        </Container>
    )
}

export default Agentomponent