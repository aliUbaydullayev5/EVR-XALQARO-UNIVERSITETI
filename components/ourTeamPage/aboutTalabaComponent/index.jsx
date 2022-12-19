import Container from './style'
import personImg from '../../../assets/icon/personalAcauntPerson.png'
import Image from "next/image.js";
import {Button, Input} from "../../generic";

const AboutTalabaComponent = () => {
    return(
        <Container>
            <Container.Top>
                Elbek Gulomov
            </Container.Top>
            <Container.Bottom>
                <div className={'center'}>
                    <Image src={personImg} alt={'icon of person'} className={'img'} />
                </div>
                <div className={'rightSection'}>
                    <Container.Row>
                        <div>
                            <p>IFO</p>
                            <Input size={'20px'} weight={'600'} padding={'0 40px'} radius={'5px'} placeholder={'G‘ulomov Elbek Ilg‘or o‘g ‘li'} height={'33px'} />
                        </div>
                    </Container.Row>
                    <Container.Row>
                        <div>
                            <p>Kursingiz</p>
                            <Input size={'20px'} weight={'600'} padding={'0 40px'} radius={'5px'} placeholder={'3-kurs'} height={'33px'} />
                        </div>
                    </Container.Row>
                    <Container.Row>
                        <div>
                            <p>Yo‘nalishi</p>
                            <Input size={'20px'} weight={'600'} padding={'0 40px'} radius={'5px'} placeholder={'Iqtisodiyot'} height={'33px'} />
                        </div>
                    </Container.Row>
                    <Container.Row>
                        <div>
                            <p>Guruhi</p>
                            <Input size={'20px'} weight={'600'} padding={'0 40px'} radius={'5px'} placeholder={'EK-101'} height={'33px'} />
                        </div>
                    </Container.Row>
                    <Container.Row>
                        <div>
                            <p>Ta’lim turi</p>
                            <Input size={'20px'} weight={'600'} padding={'0 40px'} radius={'5px'} placeholder={'Bakalavr'} height={'33px'} />
                        </div>
                    </Container.Row>
                    <Container.Row>
                        <div>
                            <p>Ta’lim shakli</p>
                            <Input size={'20px'} weight={'600'} padding={'0 40px'} radius={'5px'} placeholder={'Kunduzgi'} height={'33px'} />
                        </div>
                    </Container.Row>
                    <Container.Row columns={'1fr 1fr 1fr'}>
                        <div></div>
                        <div></div>
                        <div>
                            <Button width={'215px'} height={'37px'} radius={'100px'} size={'20px'}>Xabar qoldirish</Button>
                        </div>
                    </Container.Row>
                </div>
            </Container.Bottom>
        </Container>
    )
}

export default AboutTalabaComponent