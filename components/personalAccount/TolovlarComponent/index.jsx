import Container from './style'
import CloseIcon from '../../../assets/icon/rahmariyatCloseIcon.svg'
import {useRouter} from "next/router";
import personImg from '../../../assets/icon/personalAcauntPerson.png'
import Image from "next/image.js";
import {Input} from "../../generic";


const TolovlarComponent = () => {

    const query = useRouter()

    return(
        <Container>
            <Container.Top>
                <CloseIcon className={'closeIcon'} onClick={()=> query.push('/personalAccount/talaba')} />
                To’lovlar
            </Container.Top>
            <Container.Bottom>

                <Container.Person>
                    <Container.InsetPerson>
                        <div>
                            <Image src={personImg} alt={'icon if porsen'} className={'personIcon'} />
                        </div>
                        <div>
                            <Container.Row>
                                <div>
                                    <p className={'nocopy'}>FIO</p>
                                    <Input mwidth={'171px'} mheight={'31px'} mpadding={'0 11px'} mradius={'5px'} mweight={'600'} msize={'12px'} disabled={true} placeholder={'G‘ulomov Elbek Ilg‘or o‘g ‘li'} width={'513px'} height={'46px'} radius={'5px'} weight={'600'} size={'24px'} />
                                </div>
                            </Container.Row>
                            <Container.Row>
                                <div>
                                    <p className={'nocopy'}>ID raqam</p>
                                    <Input mwidth={'171px'} mheight={'31px'} mpadding={'0 11px'} mradius={'5px'} mweight={'600'} msize={'12px'} disabled={true} placeholder={'101006'} width={'513px'} height={'46px'} radius={'5px'} weight={'600'} size={'24px'} />
                                </div>
                            </Container.Row>
                        </div>
                    </Container.InsetPerson>
                </Container.Person>

                <Container.BottomSections>

                    <Container.Row columns={'1fr 1fr 1fr'} gap={'44px'} mgap={'12px'}>
                        <div>
                            <p className={'nocopy'}>Testga kirish uchun to’lov</p>
                            <Input mwidth={'80px'} mheight={'32px'} mpadding={'0 9px'} msize={'12px'} mradius={'5px'} disabled={true} placeholder={'200 000 so’m'} width={'319px'} height={'46px'} radius={'5px'} weight={'600'} size={'24px'} />
                        </div>
                        <div>
                            <p className={'nocopy'}>To’langan</p>
                            <Input mwidth={'80px'} mheight={'32px'} mpadding={'0 9px'} msize={'12px'} mradius={'5px'} disabled={true} placeholder={'200 000 so’m'} width={'319px'} height={'46px'} radius={'5px'} weight={'600'} size={'24px'} />
                        </div>
                        <div>
                            <p className={'nocopy'}>Qarzdorligi</p>
                            <Input mwidth={'80px'} mheight={'32px'} mpadding={'0 9px'} msize={'12px'} mradius={'5px'} disabled={true} placeholder={'0 so’m'} width={'319px'} height={'46px'} radius={'5px'} weight={'600'} size={'24px'} />
                        </div>
                    </Container.Row>


                    <Container.Row columns={'1fr 1fr 1fr'} gap={'44px'} mgap={'12px'}>
                        <div>
                            <p className={'nocopy'}>Umumiy kontrakt miqdori</p>
                            <Input mwidth={'80px'} mheight={'32px'} mpadding={'0 9px'} msize={'12px'} mradius={'5px'} disabled={true} placeholder={'12 000 000 so’m'} width={'319px'} height={'46px'} radius={'5px'} weight={'600'} size={'24px'} />
                        </div>
                        <div>
                            <p className={'nocopy'}>To’langan</p>
                            <Input mwidth={'80px'} mheight={'32px'} mpadding={'0 9px'} msize={'12px'} mradius={'5px'} disabled={true} placeholder={'5 000 000 so’m'} width={'319px'} height={'46px'} radius={'5px'} weight={'600'} size={'24px'} />
                        </div>
                        <div>
                            <p className={'nocopy'}>Qarzdorligi</p>
                            <Input mwidth={'80px'} mheight={'32px'} mpadding={'0 9px'} msize={'12px'} mradius={'5px'} disabled={true} placeholder={'7 000 000 so’m'} width={'319px'} height={'46px'} radius={'5px'} weight={'600'} size={'24px'} />
                        </div>
                    </Container.Row>

                </Container.BottomSections>

            </Container.Bottom>
        </Container>
    )
}
export default TolovlarComponent