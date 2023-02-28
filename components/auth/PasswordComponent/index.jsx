import Container from "./style"
import {Button, Input} from "../../generic"
import CustomInput from 'react-phone-number-input/input'
import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {getUserIdFetch, resetTimerVerify} from "../../../redux/slices/getId";
import {firstVerifyFetch} from "../../../redux/slices/firstVerify";

const PasswordComponent = () => {

    const dispatch = useDispatch()
    const getUserId = useSelector((store)=> store.getUserId)
    const firstVerify = useSelector((store)=> store.firstVerify)

    const [number, setNumber] = useState('+998')
    const pushNumber = () => dispatch(getUserIdFetch({userNumber: number}))
    const pushSmsFunc = () => dispatch(firstVerifyFetch({firstName: 'forgot password', phoneNumber:  number}))


    useEffect(()=> {
        dispatch(resetTimerVerify())
    }, [number])


    console.log(firstVerify, 'firstVerify')

    const [data, setData] = useState({
        phoneNumber: '',
        idNumber: '',
        verifyDode: '',
        password: '',
        prePassword: ''
    })
    const changeAllDataFunc = ({ type, value }) => {
        const fakeData = data
        fakeData[type] = value
        setData(fakeData)
        setData({ ...data, [type]: value })
    }

    // phoneNumber
    // idNumber
    // verifyDode
    // password
    // prePassword

    return(
        <Container>

            <Container.Block>
                <Container.BlockTop className={'nocopy'}>
                    ID raqamni tiklash
                </Container.BlockTop>
                <Container.BlockBottom>
                    <CustomInput className={'customPhoneInput'} value={number} onChange={(e)=> setNumber(e)} maxLength={17} />

                    <h1>{`${getUserId.message}` || ''}</h1>


                    {
                        getUserId?.status === 'success' ?
                            <Button onclick={()=> pushSmsFunc()} radius={'5px'} size={'32px'} width={'333px'} height={'40px'} msize={'22px'} mheight={'40px'} mwidth={'300px'} mradius={'5px'}>Nomer tastiqlash</Button>
                            :
                            <Button onclick={()=> pushNumber()} radius={'5px'} size={'32px'} width={'333px'} height={'40px'} msize={'22px'} mheight={'40px'} mwidth={'300px'} mradius={'5px'}>ID Topish</Button>
                    }


                    {
                        firstVerify.status === 'success' ?
                            <div>

                            </div>
                            :
                            <div></div>
                    }


                </Container.BlockBottom>
            </Container.Block>
        </Container>
    )
}

export default PasswordComponent