import Container from './style'
import data from "../../Mock/rahbariyat/data";
import person from '../../../assets/icon/personalAcauntPerson.png'
import Image from "next/image.js";
import {Button, Input} from "../../generic";

const AboutPersonUniq = ({id}) => {
    const userId = id
    const [singleUser] = data.filter(({id})=> id == userId)

    return(
        <Container>
            <Container.Top>
                John Smith
            </Container.Top>
            <Container.Bottom>
                <Container.Left>
                    <Image src={person} alt={'icon of person'} className={'img'} />
                </Container.Left>
                <Container.Right>
                        <Container.Row>
                            <div>
                                <p>IFO</p>
                                <Input disabled={true} height={'39px'} padding={'0 0 0 40px'} size={'20px'} weight={'600'} radius={'5px'} placeholder={singleUser.name} />
                            </div>
                        </Container.Row>
                        <Container.Row>
                            <div>
                                <p>Mansabi</p>
                                <Input disabled={true} height={'39px'} padding={'0 0 0 40px'} size={'20px'} weight={'600'} radius={'5px'} placeholder={singleUser.status} />
                            </div>
                        </Container.Row>
                        <Container.Row>
                            <div>
                                <p>Ilmiy darajasi</p>
                                <Input disabled={true} height={'39px'} padding={'0 0 0 40px'} size={'20px'} weight={'600'} radius={'5px'} placeholder={'Falsafa fanlari doktori PhD'} />
                            </div>
                        </Container.Row>
                        <Container.Row>
                            <div>
                                <p>Telefon raqam</p>
                                <Input disabled={true} height={'39px'} padding={'0 0 0 40px'} size={'20px'} weight={'600'} radius={'5px'} placeholder={singleUser.phoneNumber} />
                            </div>
                        </Container.Row>
                        <Container.Row>
                            <div>
                                <p>Email</p>
                                <Input disabled={true} height={'39px'} padding={'0 0 0 40px'} size={'20px'} weight={'600'} radius={'5px'} placeholder={singleUser.email} />
                            </div>
                        </Container.Row>
                        <Container.Row columns={'1fr 0.5fr'}>
                            <div></div>
                            <div>
                                <Button size={'24px'} height={'36px'} width={'244px'}>Xabar qoldirish</Button>
                            </div>
                        </Container.Row>
                    </Container.Right>
            </Container.Bottom>
        </Container>
    )
}

export default AboutPersonUniq