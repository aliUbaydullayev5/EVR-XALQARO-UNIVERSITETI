import Container from './style'
import {Button, Input} from "../../generic";
import PersonIcon from '../../../assets/icon/inputIcon.svg'
import BlockIcon from '../../../assets/icon/inputBlock.svg'

import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {fetchAuthLogin, resetAuthLogin} from "../../../redux/slices/authLogin";
import React, {useEffect, useState} from "react";
import {startMessage} from "../../../redux/slices/message";
import {Spin} from "antd";

const GenericAuthComponent = ({pushPath, tokenName}) => {
    const router = useRouter()
    const dispatch = useDispatch()

    const [logPas, setLogPas] = useState({
        userName: '',
        password: ''
    })

    const authLogin = useSelector((store)=> store.authLogin)

    useEffect(()=> {
        if(authLogin.status === 'success'){
            dispatch(startMessage({time: 3, message: "Siz muvofiyaqatli kirdingiz", type: 'success'}))
            router.push('/receptionPage/account')
            setTimeout(()=> {
                dispatch(resetAuthLogin())
            }, 500)
        }else if(authLogin.status === 'error'){
            dispatch(startMessage({time: 3, message: "Login yoki parol no to'g'ri"}))
            setTimeout(()=> {
                dispatch(resetAuthLogin())
            }, 500)
        }
    }, [authLogin])

    const loginFunc = () => {
        dispatch(fetchAuthLogin({
            userName: logPas.userName,
            password: logPas.password,
            tokenName: tokenName
        }))
    }


    return(
        <Container>
            <Container.Block>
                <Container.Top>
                    <Container.Title>Kirish</Container.Title>
                </Container.Top>
                <Container.Bottom>
                    <Container.InputArea>
                        <PersonIcon className={'personIcon'} />
                        <Input
                            mwidth={'200px'}
                            mheight={'30px'}
                            borderBoT={'2px solid #fff'}
                            mborderBoT={'2px solid #fff'}
                            mradius={'0px'}
                            radius={'0px'}
                            placeholder={'ID raqam kiriting'}
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
                            type={'text'}
                            onchange={(e) => setLogPas({...logPas, userName: e.target.value})}
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
                            {
                                authLogin.status === 'success' &&
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
                                    disabled={true}
                                ></Button>
                            }
                            {
                                authLogin.status === 'loading' &&
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
                                    disabled={true}
                                >
                                    <Container.ButtonLoader>
                                        <Spin />
                                    </Container.ButtonLoader>
                                </Button>
                            }

                            {
                                (authLogin.status === null || authLogin.status === 'error') &&
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
                            }

                        </div>
                        <Container.Desc className={'nocopy'} onClick={()=> router.push('/auth/password')} >ID yoki parolingiz unuttingizmi ?</Container.Desc>
                    </Container.ButtonArea>
                </Container.Bottom>
            </Container.Block>
        </Container>
    )
}

export default GenericAuthComponent