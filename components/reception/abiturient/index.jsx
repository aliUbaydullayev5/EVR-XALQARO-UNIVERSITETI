import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import Container, { BtnCon, IconBox,  InputCont, TextCon } from './style.js'
import AntSelect from "../Antd/style.js"
import { Modal, Spin } from "antd"
import { Input, Button } from "../../generic";
import UploadFiler from "../../../assets/icons/uploadeFile.svg"
import UploadMobile from "../../../assets/mobile/icon/UploadMobile.svg"
import { useRouter } from 'next/router.js'
import CustomInput from 'react-phone-number-input/input'
import {deployFileFetch} from "../../../redux/slices/deployFile"
import {startMessage} from "../../../redux/slices/message"
import {getStudyTypesFetch} from "../../../redux/slices/getStudyTypes"
import {receptionPostFetch, resetVerify} from "../../../redux/slices/receptionPost"
import {reseptionSmsCheckSliceFetch, resetTimerVerify} from "../../../redux/slices/receptionVerifyPhone"
import {receptionSmsVerifyFetch, resetSmsVerify} from "../../../redux/slices/receptionSmsVerify"
import {checkAllInputs2} from "./checkAllInputs"

export const AbiturientQabul = (searchElement, fromIndex) => {

    const router = useRouter()
    const dispatch = useDispatch()
    const [numPasSeriya, setNumPasSeriya] = useState('')
    const [pasSerLength, setPasSerLength] = useState(0)
    const reseptionCheckPhoneSlice = useSelector((store)=> store.reseptionCheckPhoneSlice)
    const {educationTypes, facultyDTOForHomeList, studyLanguages} = useSelector((store)=> store.getStudyTypes.data)
    const { fileId, by } = useSelector((store) => store.deployFile)
    const receptionSmsVerify = useSelector((store)=> store.receptionSmsVerify)
    const receptionData = useSelector((store) => store.receptionPost)
    const changeMumPass = (event) => {
        if (pasSerLength < event.length) {
            setPasSerLength(event.length - 1)
            if (event.length == 2) return setNumPasSeriya(event.toUpperCase() + ' ')
        }
        else if (pasSerLength >= event.length) {
            setPasSerLength(event.length)
            setNumPasSeriya(event.toUpperCase())
        }
        changeAllDataFunc({type: 'passportSeries', value: event.split(' ').join('').toUpperCase()})
        return setNumPasSeriya(event.toUpperCase())
    }

    const [width, setWidth] = useState(null)
    useEffect(() => {
        if (window.innerWidth < 1000) setWidth('100%')
        else setWidth('513px')
    })

    const [allData, setAllData] = useState({
        lastName: '',
        studyType: '',
        firstName: '',
        patron: '',
        password: '',
        prePassword: '',
        passportSeries: '',
        phoneNumber: '',
        extraPhoneNumber: '',
        courseLevel: 0,
        studyLanguage: '',
        educationType: '',
        facultyId: 0,
        diplomaId: '',
        passportId: '',
        verifyCode: ''
    })

    const findFileFunc = ({file, by}) => dispatch(deployFileFetch({file: file, by}))

    useEffect(()=> {
        dispatch(getStudyTypesFetch({type: 'BACHELOR'}))
    }, [])

    const changeAllDataFunc = ({ type, value }) => {
        const fakeData = allData
        fakeData[type] = value
        setAllData(fakeData)
        setAllData({ ...allData, [type]: value })
    }

    useEffect(() => {
        changeAllDataFunc({ type: by, value: fileId })
    }, [fileId])

    useEffect(()=> {
        changeAllDataFunc({type: 'studyType', value: 'BACHELOR'})
    }, [])

    const checkAllInputs = () => {
        const result = checkAllInputs2({allData})
        if(result?.status) return true
        else{
            dispatch(startMessage({ time: result.message.time, message: result.message.message}))
            return false
        }
    }

    useEffect(() => {
        if (receptionData?.status === 'error') {
            dispatch(startMessage({ time: 5, type: 'error', message: receptionData.message }))
        }
    }, [receptionData])

    if (receptionData.pushAnswer) {
        router.push('/receptionPage/application/UsersCardInfo')
        if (receptionData.status === 'success') dispatch(startMessage({ time: 5, type: 'success', message: receptionData.message }))
        setTimeout(() => {
            dispatch(resetVerify())
        }, 2000)
    }

    const [phonePatron, setphonePatron] = useState('+998')
    const [numState, setNumState] = useState('+998')

    const funForPhoneinput = ({ value, type }) => {
        setphonePatron(value)
        changeAllDataFunc({ value: (value?.match(/[0-9]+/g)).join(''), type })
    }
    const funPhoneNumber = ({ value, type }) => {
        setNumState(value)
        changeAllDataFunc({ value: (value?.match(/[0-9]+/g)).join(''), type })
    }

    // status, pushToHome, message
    const [modelHidden, setModalHidden] = useState(false)
    const [smsInput, setSmsInput] = useState('')

    const smsFunc = () => {
        if (checkAllInputs()) dispatch(reseptionSmsCheckSliceFetch({
            firstName: allData.firstName,
            phoneNumber: allData.phoneNumber
        }))
    }

    useEffect(()=> {
        if(reseptionCheckPhoneSlice.status === 'success') setModalHidden(true)
    }, [reseptionCheckPhoneSlice])

    const verifyCodeFunc = () => {
        if(smsInput.length === 6) dispatch(receptionSmsVerifyFetch({verifyCode: allData.verifyCode, phoneNumber: allData.phoneNumber}))
        else dispatch(startMessage({ time: 3, message: 'Sms 6 honali bolishi kerak' }))
    }

    const pushAllInfo = () => {
        if (checkAllInputs()) dispatch(receptionPostFetch(allData))
    }

    useEffect(()=> {
        receptionSmsVerify?.status === 'success' && setModalHidden(false)
        receptionSmsVerify?.status === 'error' && dispatch(startMessage({ time: 3, message: 'Sms no togri' }))
    }, [receptionSmsVerify])

    useEffect(()=> {
        if(receptionData.status === 'success'){
            router.push('/receptionPage/application/UsersCardInfo')
            setTimeout(() => {
                dispatch(resetVerify())
                dispatch(resetTimerVerify())
                dispatch(resetSmsVerify())
            }, 4000)
        }
    })

    return (
        <Container>
            <TextCon>
                <h1>Abiturient</h1>
            </TextCon>
            <InputCont>
                <div className='row1'>
                    <Input placeholder={'Familyangiz'} mradius={'5px'} mpadding={'0 0 0 19px '} mwidth={'290px'} mheight={'26px'} msize={'16px'} width={'513px'} height={'46px'} size={'24px'} onchange={(e) => changeAllDataFunc({ type: 'lastName', value: e.target.value })} />
                </div>
                <IconBox className='row9' >
                    <AntSelect
                        showSearch
                        style={{
                            width,
                        }}
                        placeholder='Talim shaklingiz'
                        optionFilterProp="children"
                        filterOption={(input, option) => (option?.label ?? '').includes(input)}
                        options={educationTypes?.map((value) => ({
                            value,
                            label: value
                        })) || []}
                        onChange={(e) => changeAllDataFunc({ type: 'educationType', value: e })}
                    />
                </IconBox>
                <div className='row2'>
                    <Input placeholder={'Ismingiz'} mradius={'5px'} mpadding={'0 0 0 19px '} mwidth={'100%'} mheight={'27px'} msize={'16px'} width={'513px'} height={'46px'} size={'24px'} onchange={(e) => changeAllDataFunc({ type: 'firstName', value: e.target.value })} />
                </div>
                <div className='row5'>
                    <Container.Number>
                        <CustomInput
                            placeholder="Enter phone number"
                            onChange={(value) => funPhoneNumber({ value, type: 'phoneNumber' })}
                            maxLength={17}
                            value={numState}
                            className={'customPhoneInput'}
                        />
                        <Container.NumberText>
                            Enter phone number
                        </Container.NumberText>
                    </Container.Number>
                </div>
                <div className='row3'>
                    <Input mpadding={'0 0 0 19px '} mradius={'5px'} mwidth={'100%'} mheight={'26px'} msize={'16px'} width={'513px'} height={'46px'} placeholder={'Otangizni ismi'} padding={'7px 0px 0px 30px'} size={'24px'} onchange={(e) => changeAllDataFunc({ type: 'patron', value: e.target.value })} />
                </div>
                <div className='row6'>
                    <Container.Number>
                        <CustomInput
                            placeholder="Enter phone number"
                            onChange={(value) => funForPhoneinput({ value, type: 'extraPhoneNumber' })}
                            maxLength={17}
                            value={phonePatron}
                            className={'customPhoneInput'}
                        />
                        <Container.NumberText>
                            Enter phone number
                        </Container.NumberText>
                    </Container.Number>
                </div>
                <div className='row4'>
                    <Input placeholder={'Pasport seriyasingiz'} mradius={'5px'} mpadding={'0 0 0 19px '} mwidth={'290px'} mheight={'26px'} msize={'16px'} width={'513px'} height={'46px'} size={'24px'} onchange={(e) => changeMumPass(e.target.value)} value={numPasSeriya} maxlength={'10'} />
                </div>
                <div className='row11'>
                    <div>
                        <div>
                            <IconBox>
                                <Container.InputCustom2 type={'file'} onChange={(e) => findFileFunc({file: e, by: 'diplomaId'})} />
                                <UploadFiler className={'UploadFile2'} />
                                <UploadMobile className={'UploadFileMobile'} />
                            </IconBox>
                        </div>
                        <div>
                            <IconBox>
                                <Input type={'password'} mpadding={'0 0 0 19px '} mradius={'5px'} mwidth={'100%'} mheight={'26px'} msize={'16px'} width={'251px'} height={'46px'} placeholder={'Parol'} padding={'0 8px'} size={'24px'} onchange={(e) => changeAllDataFunc({ type: 'password', value: e.target.value })} />
                            </IconBox>
                        </div>
                    </div>
                </div>
                <IconBox className='row8'>
                    <AntSelect 
                        showSearch
                        style={{
                            width,
                        }}
                        placeholder='Talim yunalishingiz'
                        optionFilterProp="children"

                        options={facultyDTOForHomeList?.map((value)=> ({
                            value: value.id,
                            label: value.name
                        })) || []}
                        onChange={(e)=> changeAllDataFunc({type: 'facultyId', value: e})}
                    />
                </IconBox>
                <div className='row10'>
                    <div>
                        <div>
                            <IconBox>
                                <Container.InputCustom1 type={'file'} onChange={(e) => findFileFunc({ file: e, by: 'passportId' })} />
                                <UploadFiler className={'UploadFile1'} />
                                <UploadMobile className={'UploadFileMobile2'} />
                            </IconBox>
                        </div>
                        <div>
                            <IconBox>
                                <Input type={'password'} mpadding={'0 0 0 19px '} mradius={'5px'} mwidth={'100%'} mheight={'26px'} msize={'16px'} width={'251px'} height={'46px'} placeholder={'Parol Qayta Kiriting'} padding={'0 8px'} size={'24px'} onchange={(e) => changeAllDataFunc({ type: 'prePassword', value: e.target.value })} />
                            </IconBox>
                        </div>
                    </div>
                </div>
                <IconBox className='row7'>
                    <AntSelect
                        showSearch
                        style={{
                            width,
                        }}
                        placeholder='Talim tilingiz'
                        optionFilterProp="children"
                        filterOption={(input, option) => (option?.label ?? '').includes(input)}
                        filterSort={(optionA, optionB) =>
                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                        }
                        options={studyLanguages?.map((value) => ({
                            value: value,
                            label: value
                        })) || []}
                        onChange={(e) => changeAllDataFunc({ type: 'studyLanguage', value: e })}
                    />
                </IconBox>
                <BtnCon className='row12'>
                    <div className='mobileNone'></div>
                    {
                        receptionSmsVerify.status === 'success' ?
                            <>
                                {receptionData.status == 'loading' &&
                                    <Button mradius={'5px'} mwidth={'177px'} mheight={'26px'} msize={'16px'} width={'250px'} height={'43px'} size={'21px'} margin={'0 60px 0 0'} cursor={'none'} disabled={true}>
                                        <Container.ButtonLoader>
                                            <Spin />
                                        </Container.ButtonLoader>
                                    </Button>
                                }
                                {receptionData.status !== 'loading'&&
                                    <Button mradius={'5px'} mwidth={'177px'} mheight={'26px'} msize={'16px'} width={'250px'} height={'43px'} size={'21px'} margin={'0 60px 0 0'} onclick={()=> pushAllInfo()}>
                                        QOLDIRISH
                                    </Button>
                                }
                            </>
                            :
                            <Button mradius={'5px'} mwidth={'250px'} mheight={'26px'} msize={'16px'} width={'300px'} height={'43px'} size={'21px'} margin={'0 60px 0 0'} onclick={()=> smsFunc()}>
                                Telefon raqamni tastiqlash
                            </Button>
                    }
                </BtnCon>
                <div className='mobileNone'></div>
            </InputCont>
            <Modal open={modelHidden} onOk={()=> setModalHidden(!modelHidden)} onCancel={()=> setModalHidden(!modelHidden)}>
                <Container.Model>
                    <p>Sms ni kiriting</p>
                    <Input
                        placeholder={'_ _ _ _ _ _'}
                        align={'center'}
                        malign={'center'}
                        maxlength={6}
                        onKeyDown={(e)=> e.key === 'Enter' && verifyCodeFunc()}
                        onchange={(e)=> {
                            setSmsInput(e.target.value)
                            changeAllDataFunc({type: 'verifyCode', value: e.target.value})
                        }}
                    />
                    {
                        receptionSmsVerify.status === 'loading'
                        ?
                            <>
                                <Button
                                    width={'400px'}
                                    height={'50px'}
                                >
                                    <Container.ButtonLoader>
                                        <Spin />
                                    </Container.ButtonLoader>
                                </Button>
                            </>
                            :
                            <>
                                <Button
                                    width={'400px'}
                                    height={'50px'}
                                    msize={'24px'}
                                    mheight={'40px'}
                                    mwidth={'300px'}
                                    onclick={()=> verifyCodeFunc()}
                                >
                                    Tastiqlash
                                </Button>
                            </>
                    }
                </Container.Model>
            </Modal>
        </Container>
    )
}

export default AbiturientQabul