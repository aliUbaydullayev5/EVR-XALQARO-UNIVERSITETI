import Container from './style'
import CloseIcon from "../../../assets/icon/rahmariyatCloseIcon.svg";
import Image from "next/image";
import personImg from "../../../assets/icon/personalAcauntPerson.png";
import {Button, Input} from "../../generic";
import ExitIcon from "../../../assets/icon/personalAcauntExit.svg";
import {useRouter} from "next/router";

const ParolniOzgartirishComponent = ({name, backPath, savePath}) => {

    const query = useRouter()

    return(
        <Container>
            <Container.Top>
                Shaxsiy kabinet
            </Container.Top>
            <Container.Bottom>
                <Container.Left>
                    <div>
                        <Image src={personImg} alt={'icons person'} />
                    </div>
                    <Container.LeftMenu>
                        <div>
                            <Button onclick={()=> query.push(backPath)} justify={'start'} padding={'0 0 0 82px'} height={'37px'} width={'305px'} size={'20px'} color={'rgba(255, 255, 255, 0.5);'}>Ortga qaytish</Button>
                            <ExitIcon className={'icon'} />
                        </div>
                    </Container.LeftMenu>
                </Container.Left>
                <Container.Right>
                    <Container.Row>
                        <div>
                            <p>FIO</p>
                            <Input width={'575px'} height={'38px'} padding={'0 0 0 40px'} size={'20px'} weight={'600'} radius={'5px'} placeholder={'G‘ulomov Elbek Ilg‘or o‘g ‘li'} />
                        </div>
                    </Container.Row>
                    <Container.Row>
                        <div>
                            <p>Hozirgi Parol</p>
                            <Input type={'password'} width={'575px'} height={'38px'} padding={'0 0 0 40px'} size={'20px'} weight={'600'} radius={'5px'} placeholder={'******'} />
                        </div>
                    </Container.Row>
                    <Container.Row>
                        <div>
                            <p>Yangi Parol</p>
                            <Input type={'password'} width={'575px'} height={'38px'} padding={'0 0 0 40px'} size={'20px'} weight={'600'} radius={'5px'} placeholder={'******'} />
                        </div>
                    </Container.Row>
                    <Container.Row>
                        <div>
                            <p>Parolni takrorlang</p>
                            <Input type={'password'}  width={'575px'} height={'38px'} padding={'0 0 0 40px'} size={'20px'} weight={'600'} radius={'5px'} placeholder={'******'} />
                        </div>
                    </Container.Row>
                    <Container.Row>

                    </Container.Row>
                    <Container.Row>

                    </Container.Row>
                    <Container.Row justofy={'end'} columns={'1fr 0.5fr'}>
                        <div></div>
                        <Button color={'rgba(255, 255, 255, 0.5);'} height={'37px'} width={'194px'} size={'20px'}>Saqlash</Button>
                    </Container.Row>
                </Container.Right>
            </Container.Bottom>
        </Container>
    )
}

export default ParolniOzgartirishComponent