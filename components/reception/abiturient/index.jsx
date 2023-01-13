import React, { useEffect, useState } from 'react'
import Container, { BtnCon, IconBox, InputCont, TextCon } from './style.js'
import { Input, Button } from "../../generic";
import UploadFiler from "../../../assets/icons/uploadeFile.svg"
import { useRouter } from 'next/router.js';
import AntSelect from "../Antd/style.js"
import UploadMobile from "../../../assets/mobile/icon/UploadMobile.svg"
import CustomInput from 'react-phone-number-input/input';
import {useDispatch, useSelector} from "react-redux"
import {deployFileFetch} from "../../../redux/slices/deployFile"
import {receptionPostFetch, resetVerify} from "../../../redux/slices/receptionPost"
import {startMessage} from "../../../redux/slices/message"
import {getStudyTypesFetch} from "../../../redux/slices/getStudyTypes"


export const AbiturientQabul = (searchElement, fromIndex) => {
    const router = useRouter()
    const dispatch = useDispatch()

  

    const [numPasSeriya, setNumPasSeriya] = useState('')
    const [pasSerLength, setPasSerLength] = useState(0)

    const changeMumPass = (event) => {
        if (pasSerLength < event.length) {
            setPasSerLength(event.length - 1)
            if (event.length == 2) {
                return setNumPasSeriya(event + ' ')
            }
        }
        if (pasSerLength >= event.length) {
            setPasSerLength(event.length)
            setNumPasSeriya(event)
        }


        changeAllDataFunc({type: 'passportSeries', value: event.split(' ').join('')})
        return setNumPasSeriya(event.toUpperCase())
    }

    const [width, setWidth] = useState(null)
    useEffect(() => {
        if (window.innerWidth < 1000) {
            setWidth('100%')
        } else {
            setWidth('513px')
        }
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
        passportId: ''
    })

    const findFileFunc = ({file, by}) => {
        if(file.target.files[0]) {
            dispatch(deployFileFetch({file, by}))
        }
    }

    useEffect(()=> {
        dispatch(getStudyTypesFetch({ type: 'BACHELOR'}))
    }, [])

    const {educationTypes, facultyDTOForHomeList, studyLanguages} = useSelector((store)=> store.getStudyTypes.data)
    const changeAllDataFunc = ({ type, value }) => {
        const fakeData = allData
        fakeData[type] = value
        setAllData(fakeData)
        setAllData({ ...allData, [type]: value })
    }

    const { fileId, status, by } = useSelector((store) => store.deployFile)

    useEffect(() => {
        changeAllDataFunc({ type: by, value: fileId })
    }, [fileId])

    useEffect(()=> {
        changeAllDataFunc({type: 'studyType', value: 'BACHELOR'})
    }, [])

    const checkAllInputs = () => {
        if (!(allData.lastName.length > 3)) {
            dispatch(startMessage({ time: 5, message: 'Isim no togri kiritilgan' }))
            return false
        }
        if (!(allData.firstName.length > 3)) {
            dispatch(startMessage({ time: 5, message: 'Isim no togri kiritilgan' }))
            return false
        }
        if (!(allData.patron.length > 3)) {
            dispatch(startMessage({ time: 5, message: 'Isim no togri kiritilgan' }))
            return false
        }
        if (!(allData.passportSeries.length == 9)) {
            dispatch(startMessage({ time: 5, message: 'Passport seriya rakami no togri kiritilgan' }))
            return false
        }
        if(!(allData.phoneNumber.length == 9)) {
            dispatch(startMessage({time: 5, message: 'Telefon raqamni togri kiritilganmagan'}))

            return false
        }
        if (!(allData.extraPhoneNumber.length == 9)) {
            dispatch(startMessage({ time: 5, message: 'Telefon raqamni togri kiritilganMaGan' }))
            return false
        }
        if (!(allData.diplomaId.length > 3)) {
            dispatch(startMessage({ time: 5, message: 'Diplomingizni yulang' }))
            return false
        }
        if (!(allData.passportId.length > 3)) {
            dispatch(startMessage({ time: 5, message: 'Passportingizni yuklang' }))
            return false
        }
        if (!(allData.password.length > 8)) {
            dispatch(startMessage({ time: 5, message: 'Parolni kiriting' }))
            return false
        }
        if (!(allData.prePassword.length > 8)) {
            dispatch(startMessage({ time: 5, message: 'Parolni kiriting' }))
            return false
        }

        if (!(allData.studyLanguage.length)) {
            dispatch(startMessage({ time: 5, message: 'Oqish tilini tallang' }))
            return false
        }
        if (!(allData.facultyId)) {
            dispatch(startMessage({ time: 5, message: 'Oqish turini tallang' }))
            return false
        }
        if (!(allData.educationType.length)) {
            dispatch(startMessage({ time: 5, message: 'Oqish shaklini tallang' }))
            return false
        }
        return true
    }

    const pushAllInfo = () => {
        if(checkAllInputs()){
            dispatch(receptionPostFetch(allData))
            console.log(allData, 'push')
        }
    }

    const receptionData = useSelector((store) => store.receptionPost)

    useEffect(() => {
        if (receptionData?.status === 'error') {
            dispatch(startMessage({ time: 5, type: 'error', message: receptionData.message }))
        }
    }, [receptionData])


    if (receptionData.pushAnswer) {
        router.push('/receptionPage/application/UsersCardInfo')
        if (receptionData.status === 'success') {
            dispatch(startMessage({ time: 5, type: 'success', message: receptionData.message }))
        }
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
    return (
        <Container>
            <TextCon>
                <h1>Abiturient</h1>
            </TextCon>
            <InputCont>
                <div className='row1'>
                    <Input placeholder={'Familyangiz'} mradius={'5px'} mpadding={'0 0 0 19px '} mwidth={'290px'} mheight={'27px'} msize={'16px'} width={'513px'} height={'46px'} size={'24px'} onchange={(e) => changeAllDataFunc({ type: 'lastName', value: e.target.value })} />
                </div>

                <IconBox className='row9'  >
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

                <Container.Number className='row5'>
                    <CustomInput
                        placeholder="Enter phone number"
                        onChange={(value) => funPhoneNumber({ value, type: 'phoneNumber' })}
                        maxLength={17}
                        value={numState}
                        className={'customPhoneInput'}
                    />
                </Container.Number>

                <div className='row3'>
                    <Input mpadding={'0 0 0 19px '} mradius={'5px'} mwidth={'100%'} mheight={'26px'} msize={'16px'} width={'513px'} height={'46px'} placeholder={'Otangizni ismi'} padding={'7px 0px 0px 30px'} size={'24px'} onchange={(e) => changeAllDataFunc({ type: 'patron', value: e.target.value })} />
                </div>

                <Container.Number className='row6'>
                    <CustomInput
                        placeholder="Enter phone number"
                        onChange={(value) => funForPhoneinput({ value, type: 'extraPhoneNumber' })}
                        maxLength={17}
                        value={phonePatron}
                        className={'customPhoneInput'}
                    />
                </Container.Number>

                <div className='row4'>
                    <Input placeholder={'Pasport seriyasingiz'} mradius={'5px'} mpadding={'0 0 0 19px '} mwidth={'290px'} mheight={'26px'} msize={'16px'} width={'513px'} height={'46px'} size={'24px'} onchange={(e) => changeMumPass(e.target.value)} value={numPasSeriya} maxlength={'10'} />
                </div>

                <div className='row11'>
                    <div>
                        <div>
                            <IconBox>
                                <Container.InputCustom2 type={'file'} onMouseUp={(e) => findFileFunc({file: e, by: 'diplomaId'})} />

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
                        })) || [{
                        
                            }]}
                        onChange={(e) => changeAllDataFunc({ type: 'studyLanguage', value: e })}
                    />
                </IconBox>

                <BtnCon className='row12'>
                    <div className='mobileNone'></div>

                    {receptionData.status !== 'loading'  ?
                        <Button mradius={'5px'} mwidth={'177px'} mheight={'26px'} msize={'16px'} width={'250px'} height={'43px'} size={'21px'} margin={'0 60px 0 0'} onclick={() => pushAllInfo()}>QOLDIRISH</Button>
                        :
                        <div></div>
                    }
                </BtnCon>

                <div className='mobileNone'></div>
            </InputCont>
        </Container>
    )
}
export default AbiturientQabul