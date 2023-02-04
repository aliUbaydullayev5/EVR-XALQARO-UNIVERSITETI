import Container from './style'
import {Button, Input} from "../../generic";
import PersonIcon from '../../../assets/icon/inputIcon.svg'
import BlockIcon from '../../../assets/icon/inputBlock.svg'

import {useRouter} from "next/router";
import {useDispatch} from "react-redux";
import {fetchAuthLogin} from "../../../redux/slices/authLogin";
import React, {useState} from "react";

import CustomInput from 'react-phone-number-input/input';
const GenericAuthComponent = ({title, pushPath, royxat = true}) => {
    const router = useRouter()
    const dispatch = useDispatch()

    const [logPas, setLogPas] = useState({
        phoneNumber: '+998',
        password: ''
    })

    // const pushFunc = () => {
    //     if(pushPath){
    //         router.push(pushPath)
    //     }
    // }

    const loginFunc = () => {
        dispatch(fetchAuthLogin({phoneNumber: '+998', password: ''}))
    }

    console.log(logPas)


    return(
        <Container>
            <Container.Block>
                <Container.Top>
                    <Container.Title>{title}</Container.Title>
                </Container.Top>
                <Container.Bottom>
                    <Container.InputArea>
                        <PersonIcon className={'personIcon'} />

                        <CustomInput
                            placeholder='Enter phone number'
                            onChange={(e) => setLogPas({...logPas, phoneNumber: e})}
                            maxLength={17}
                            value={logPas.phoneNumber}
                            className={'customPhoneInput'}
                        />

                    </Container.InputArea>
                    <Container.InputArea>
                        <BlockIcon className={'blockIcon'} />
                        <Input
                            mwidth={'200px'}
                            mheight={'30px'}
                            borderBoT={'2px solid #fff'}
                            mborderBoT={'2px solid #fff'}
                            mradius={'0px'}
                            radius={'0px'}
                            placeholder={'Parollingiz'}
                            width={'333px'}
                            height={'32px'}
                            mbc={'rgba(255,255,255,0)'}
                            bc={'rgba(255,255,255,0)'}
                            mshadowOff={true}
                            shadowOff={true}
                            msize={'16px'}
                            size={'24px'}
                            mpadding={'0 0 0 40px'}
                            padding={'0 0 0 40px'}
                            type={'password'}
                            onchange={(e) => setLogPas({...logPas, password: e.target.value})}
                        />
                    </Container.InputArea>
                    <Container.ButtonArea>
                        <div>
                            <Button
                                mwidth={'200px'}
                                mheight={'30px'}
                                msize={'24px'}
                                mradius={'6px'}
                                color={'#221F51'}
                                bc={'#fff'}
                                radius={'6px'}
                                width={'333px'}
                                height={'52px'}
                                onclick={()=> loginFunc()}
                            >KIRISH</Button>
                        </div>
                        <Container.Desc className={'nocopy'}>ID raqamingizni esdan chiqardingizmi?</Container.Desc>
                        {
                            royxat &&
                            <Container.SubDesc className={'nocopy'} >Ro’yxatdan o’tish</Container.SubDesc>
                        }
                    </Container.ButtonArea>
                </Container.Bottom>
            </Container.Block>
        </Container>
    )
}
export default GenericAuthComponent