import Container from './style'
import CloseIcon from "../../../assets/icon/rahmariyatCloseIcon.svg";
import Image from "next/image";
import personImg from "../../../assets/icon/personalAcauntPerson.png";
import {Button, Input} from "../../generic";
import FileIcon from "../../../assets/icon/personalAcauntFile.svg";
import BlockIcon from "../../../assets/icon/personalAcauntBlock.svg";
import ExitIcon from "../../../assets/icon/personalAcauntExit.svg";
import DownIcon from "../../../assets/icon/personDown.svg";
import MobileFile from '../../../assets/mobile/icon/mobileFile.svg'
import MobileRestor from '../../../assets/mobile/icon/mobileRestor.svg'
import MobileExit from '../../../assets/mobile/icon/mobileExit.svg'
import {useSelector} from "react-redux"
import {Spin} from "antd"
import {useRouter} from "next/router"
import {mockData} from "./mock"
import {useEffect, useState} from "react";

const Agentomponent = () => {

    const query = useRouter()

    const exitFromAccount = () => {
        localStorage.removeItem('access-token')
        query.push('/homePage')
    }

    const {data, status} = useSelector((store)=> store.getInfoUserCabinet)

    // ================================


    // const [allData, setAllData] = useState([]);
    //
    // function flattenData(data) {
    //     data.forEach(item => {
    //         setAllData(prevData => [...prevData, item])
    //         if (item.managements && item.managements.length > 0) flattenData(item.managements)
    //     })
    // }
    // useEffect(() => flattenData(mockData.data), [])



    return(
        <Container>


            {/*<h1>Sorted Management Tree</h1>*/}
            {/*<div>*/}
            {/*    /!* отображаем все объекты из массива allData *!/*/}
            {/*    {allData.slice(0, allData.length / 2).map(item => (*/}
            {/*        <div key={item.id}>{item.name}</div>*/}
            {/*    ))}*/}
            {/*</div>*/}

            {/*/!*----------------*!/*/}

            {/*<div>*/}
            {/*    /!* отображаем все объекты из массива allData *!/*/}
            {/*    {allData.map(item => (*/}
            {/*        <div key={item.id}>{item.name}</div>*/}
            {/*    ))}*/}
            {/*</div>*/}


            <Container.Top>
                Shaxsiy kabinet
                <CloseIcon className={'closeIcon'} onClick={()=> query.push('/auth/agent')} />
            </Container.Top>
            <Container.Bottom>
                {
                    status === 'loading' &&
                    <>
                        <Container.ButtonLoader>
                            <Spin />
                        </Container.ButtonLoader>
                    </>
                }
                {
                    status === 'success' &&
                    <>
                        <Container.Left>
                            <div>
                                <Image src={personImg} alt={'icons person'} className={'personIcon'} />
                            </div>
                            <Container.LeftMenu>
                                <div>
                                    <Button mwidth={'171px'} mheight={'20px'} msize={'12px'} mradius={'5px'} justify={'start'} padding={'0 0 0 82px'} height={'35px'} width={'305px'} size={'20px'} color={'rgba(255, 255, 255, 0.5);'}>Rasm yuklash</Button>
                                    <FileIcon className={'icon laptopIcon'} />
                                    <MobileFile className={'mobileIcon icon'} />
                                </div>
                                <div>
                                    <Button mwidth={'171px'} mheight={'20px'} msize={'12px'} mradius={'5px'} onclick={()=> query.push('/personalAccount/agent/parolniOzgartirish')} justify={'start'} padding={'0 0 0 82px'} height={'35px'} width={'305px'} size={'20px'} color={'rgba(255, 255, 255, 0.5);'}>Parolni o’zgartirish</Button>
                                    <BlockIcon className={'icon laptopIcon'} />
                                    <MobileRestor className={'mobileIcon icon'} />
                                </div>
                                <div>
                                    <Button onclick={()=> exitFromAccount()} mwidth={'171px'} mheight={'20px'} msize={'12px'} mradius={'5px'} justify={'start'} padding={'0 0 0 82px'} height={'35px'} width={'305px'} size={'20px'} color={'rgba(255, 255, 255, 0.5);'}>Chiqish</Button>
                                    <ExitIcon className={'icon laptopIcon'} />
                                    <MobileExit className={'mobileIcon icon'} />
                                </div>
                            </Container.LeftMenu>
                        </Container.Left>
                        <Container.Right>
                            <Container.Row>
                                <div>
                                    <p>Agentlik nomi</p>
                                    <Input mheight={'33px'} mpadding={'0 19px'} mradius={'5px'} msize={'16px'} disabled={true} height={'33px'} padding={'0 0 0 40px'} size={'20px'} weight={'600'} radius={'5px'} placeholder={data.fullName} />
                                </div>
                            </Container.Row>
                            <Container.Row>
                                <div>
                                    <p>Manzil</p>
                                    <Input mheight={'33px'} mpadding={'0 19px'} mradius={'5px'} msize={'16px'} disabled={true} height={'33px'} padding={'0 0 0 40px'} size={'20px'} weight={'600'} radius={'5px'} placeholder={'Uzbekistan, Tashkent'} />
                                </div>
                            </Container.Row>
                            <Container.Row disabled={true} columns={'1fr 1fr'} gap={'31px'}>
                                <div>
                                    <p>ID raqam</p>
                                    <Input mheight={'33px'} mpadding={'0 19px'} mradius={'5px'} msize={'16px'} disabled={true} height={'33px'} padding={'0 0 0 40px'} size={'20px'} weight={'600'} radius={'5px'} placeholder={data.passportSeries} />
                                </div>
                                <div>
                                    <p>Litsenziya raqami</p>
                                    <Input mheight={'33px'} mpadding={'0 19px'} mradius={'5px'} msize={'16px'} disabled={true} height={'33px'} padding={'0 0 0 40px'} size={'20px'} weight={'600'} radius={'5px'} placeholder={'123 456 789'} />
                                </div>
                            </Container.Row>
                            <Container.Row>
                                <div>
                                    <p>Telefon raqam</p>
                                    <Input mheight={'33px'} mpadding={'0 19px'} mradius={'5px'} msize={'16px'} disabled={true} height={'33px'} padding={'0 0 0 40px'} size={'20px'} weight={'600'} radius={'5px'} placeholder={data.phoneNumber} />
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
                                <Button onclick={()=> query.push('/personalAccount/agent/addUserAgent')} mheight={'31px'} msize={'16px'} mpadding={'0 5px'} wrap={true} height={'36px'} size={'20px'} width={'240px'} color={'#fff'}>Ro’yxatdan o’tkazish</Button>
                                <div></div>
                            </Container.Row>
                        </Container.Right>
                    </>
                }
            </Container.Bottom>
        </Container>
    )
}

export default Agentomponent