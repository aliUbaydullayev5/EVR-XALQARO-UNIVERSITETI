import Container from "./style"
import {Button, Input} from "../../generic"
import CustomInput from 'react-phone-number-input/input'
import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {firstVerifyFetch, resetTimerVerify} from "../../../redux/slices/firstVerify"
import {useRouter} from "next/router"
import {startMessage} from "../../../redux/slices/message"
import {getUserIdFetch, resetData} from "../../../redux/slices/getId"
import { Modal, Spin } from 'antd'

const PasswordComponent = () => {

    const router = useRouter()

    const dispatch = useDispatch()
    const getUserId = useSelector((store)=> store.getUserId)
    const firstVerify = useSelector((store)=> store.firstVerify)

    const [data, setData] = useState({
        phoneNumber: '+998',
        idNumber: '',
        verifyDode: '',
        password: '',
        prePassword: ''
    })

    const [modelHidden, setModalHidden] = useState(false)
    const pushNumber = () => dispatch(getUserIdFetch({userNumber: data.phoneNumber}))

    const pushSmsFunc = () => {
        if (data.password.length >= 8 && data.password === data.prePassword) {
            dispatch(firstVerifyFetch({firstName: 'forgot password', phoneNumber: data.phoneNumber}))
        } else {
            dispatch(
                startMessage({
                    time: 5,
                    type: 'error',
                    message: 'Parol 8 honadan kop va bir hil bolishi kere',
                }),
            );
        }
    }

    useEffect(()=> {
        dispatch(resetData())
        dispatch(resetTimerVerify())
        setData({
            ...data,
            idNumber: '',
            verifyDode: '',
            password: '',
            prePassword: ''
        })
        setModalHidden(false)
    }, [data.phoneNumber.length])


    const changeAllDataFunc = ({ type, value }) => {
        const fakeData = data
        fakeData[type] = value
        setData(fakeData)
        setData({ ...data, [type]: value })
    }

    useEffect(()=> {
        if(firstVerify.status === 'success') setModalHidden(true)
    }, [firstVerify])



    return(
        <Container>

            <Container.Block>
                <Container.BlockTop className={'nocopy'}>
                    ID raqamni tiklash
                </Container.BlockTop>
                <Container.BlockBottom>

                    <CustomInput
                        className={'customPhoneInput'}
                        value={data.phoneNumber}
                        onChange={(e)=> changeAllDataFunc({type: 'phoneNumber', value: e})}
                        maxLength={17}
                    />

                    <h1>{getUserId?.message || ''}</h1>

                    {
                        getUserId?.status === 'success' ?
                            <div>
                                <Input onchange={(e)=> changeAllDataFunc({type: 'password', value: e.target.value})} type={'password'} placeholder={'password'} mradius={'5px'} radius={'5px'} height={'30px'} width={'333px'} mwidth={'300px'} mheight={'30px'} />
                                <Input onchange={(e)=> changeAllDataFunc({type: 'prePassword', value: e.target.value})} type={'password'} placeholder={'pre password'} mradius={'5px'} radius={'5px'} height={'30px'} width={'333px'} mwidth={'300px'} mheight={'30px'} />
                            </div>
                            :
                            <div></div>
                    }

                    {
                        getUserId?.status === 'success' ?
                            <div>
                                <Button onclick={()=> pushSmsFunc()} radius={'5px'} size={'32px'} width={'333px'} height={'40px'} msize={'22px'} mheight={'40px'} mwidth={'300px'} mradius={'5px'} >Raqam tastiqlash</Button>
                                <Button onclick={()=> router.push('/auth')} radius={'5px'} size={'32px'} width={'333px'} height={'40px'} msize={'22px'} mheight={'40px'} mwidth={'300px'} mradius={'5px'}>KIrish</Button>
                            </div>
                            :
                            <Button onclick={()=> pushNumber()} radius={'5px'} size={'32px'} width={'333px'} height={'40px'} msize={'22px'} mheight={'40px'} mwidth={'300px'} mradius={'5px'}>ID Topish</Button>
                    }

                </Container.BlockBottom>
            </Container.Block>


            <Modal
                open={modelHidden}
                onOk={() => setModalHidden(!modelHidden)}
                onCancel={() => setModalHidden(!modelHidden)}
                footer={false}
            >
                <Container.Model>
                    <p>Sms ni kiriting</p>
                    <Input
                        placeholder={'_ _ _ _ _ _'}
                        align={'center'}
                        malign={'center'}
                        maxlength={6}
                        mradius={'5px'}
                        value={data.verifyDode}
                        onchange={(e) => changeAllDataFunc({type: 'verifyDode', value: e.target.value})}
                    />
                    <Button radius={'5px'} size={'32px'} width={'333px'} height={'40px'} msize={'22px'} mheight={'40px'} mwidth={'300px'} mradius={'5px'}>Parol ozgartirish</Button>
                </Container.Model>
            </Modal>

        </Container>
    )
}

export default PasswordComponent