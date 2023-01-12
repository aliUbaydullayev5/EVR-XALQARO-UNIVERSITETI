import React, { useEffect, useState } from 'react'
import Container, { BtnCon, IconBox, InputCont, TextCon } from './style.js'
import { Input, Button } from "../../generic";
import UploadFiler from "../../../assets/icons/uploadeFile.svg"
import { useRouter } from 'next/router.js';
import AntSelect from "../Antd/style.js"
import UploadMobile from "../../../assets/mobile/icon/UploadMobile.svg"
<<<<<<< HEAD
import {useDispatch, useSelector} from "react-redux"
import deployFile, {deployFileFetch} from "../../../redux/slices/deployFile"
import {receptionPostFetch, resetVerify} from "../../../redux/slices/receptionPost"
import {startMessage} from "../../../redux/slices/message"
import getStudyTypes, {getStudyTypesFetch} from "../../../redux/slices/getStudyTypes"
=======
import { useDispatch, useSelector } from "react-redux";
import deployFile, { deployFileFetch } from "../../../redux/slices/deployFile";
import homeAllData, { homeAllDataFetch } from "../../../redux/slices/homeAllData";
import { receptionPostFetch, resetVerify } from "../../../redux/slices/receptionPost";
import { startMessage } from "../../../redux/slices/message";
>>>>>>> origin/magistratura/v1

export const AbiturientQabul = (searchElement, fromIndex) => {
    const router = useRouter()
    const dispatch = useDispatch()

    const [numState, setNumState] = useState('')
    const [length, setLength] = useState(0)

    const changeNumState = (event) => {
        if (length < event.length) {
            setLength(event.length - 1)
            if (event.length == 2) {
                return setNumState(event + ' ')
            }
            if (event.length == 6) {
                return setNumState(event + ' ')
            }
            if (event.length == 9) {
                return setNumState(event + ' ')
            }
        }
        if (length >= event.length) {
            setLength(event.length)
            setNumState(event)
        }
        changeAllDataFunc({ type: 'phoneNumber', value: event.split(' ').join('') })
        return setNumState(event)
    }


    const [numState1, setNumState1] = useState('')
    const [length1, setLength1] = useState(0)

    const changeNumState1 = (event) => {
        if (length1 < event.length) {
            setLength1(event.length - 1)
            if (event.length == 2) {
                return setNumState1(event + ' ')
            }
            if (event.length == 6) {
                return setNumState1(event + ' ')
            }
            if (event.length == 9) {
                return setNumState1(event + ' ')
            }
        }
        if (length1 >= event.length) {
            setLength1(event.length)
            setNumState1(event)
        }
        changeAllDataFunc({ type: 'extraPhoneNumber', value: event.split(' ').join('') })
        return setNumState1(event)
    }

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
<<<<<<< HEAD
        changeAllDataFunc({type: 'passportSeries', value: event.split(' ').join('')})
        return setNumPasSeriya(event.toUpperCase())
=======
        changeAllDataFunc({ type: 'passportSeries', value: event.split(' ').join('') })
        return setNumPasSeriya(event)
>>>>>>> origin/magistratura/v1
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

<<<<<<< HEAD
    const findFileFunc = ({file, by}) => {
        if(file.target.files[0]) {
            dispatch(deployFileFetch({file, by}))
        }
    }

    useEffect(()=> {
        dispatch(getStudyTypesFetch({type: 'MASTERS'}))
    }, [])

    const {educationTypes, facultyDTOForHomeList, studyLanguages} = useSelector((store)=> store.getStudyTypes.data)
=======
    const findFileFunc = ({ file, by }) => {
        if (file.target.files[0]) dispatch(deployFileFetch({ file, by }))
    }

    useEffect(() => {
        dispatch(homeAllDataFetch())
        console.log(allData,'ds');
    }, [])

    const { educationTypes, faculties, studyLanguages } = useSelector((store) => store.homeAllData.data)
>>>>>>> origin/magistratura/v1

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

<<<<<<< HEAD
    useEffect(()=> {
        changeAllDataFunc({type: 'studyType', value: 'BACHELOR'})
=======
    useEffect(() => {
        changeAllDataFunc({ type: 'admissionName', value: 'BACHELOR' })
>>>>>>> origin/magistratura/v1
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
<<<<<<< HEAD
        if(!(allData.phoneNumber.length == 9)) {
            dispatch(startMessage({time: 5, message: 'Telefon raqamni togri kiritilgan'}))
=======

        if (!(allData.phoneNumber.length == 9)) {
            dispatch(startMessage({ time: 5, message: 'Telefon raqamni togri kiritilgan' }))
>>>>>>> origin/magistratura/v1
            return false
        }
        if (!(allData.extraPhoneNumber.length == 9)) {
            dispatch(startMessage({ time: 5, message: 'Telefon raqamni togri kiritilgan' }))
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
<<<<<<< HEAD
        console.log(allData)
        if(checkAllInputs()){
=======
        if (checkAllInputs()) {
>>>>>>> origin/magistratura/v1
            dispatch(receptionPostFetch(allData))
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
                    <div>
                        <Input className='inputPhone' mradius={'5px'} mwidth={'352px'} mheight={'27px'} msize={'16px'} mpadding={'0px 0px 0px 60px'} width={'513px'} height={'46px'} placeholder={'Telfon Raqamingiz'} padding={'7px 0px 0px 90px'} size={'24px'} onchange={(e) => changeNumState(e.target.value)} value={numState} maxlength={'12'} />
                        <Container.FormatNumber className=''>+998</Container.FormatNumber>
                    </div>
                </Container.Number>

                <div className='row3'>
                    <Input mpadding={'0 0 0 19px '} mradius={'5px'} mwidth={'100%'} mheight={'26px'} msize={'16px'} width={'513px'} height={'46px'} placeholder={'Otangizni ismi'} padding={'7px 0px 0px 30px'} size={'24px'} onchange={(e) => changeAllDataFunc({ type: 'patron', value: e.target.value })} />
                </div>

                <Container.Number className='row6'>
                    <div>
                        <Input placeholder={'Otangiz yoki onangizni raqami'} mradius={'5px'} mwidth={'352px'} mheight={'26px'} mpadding={'0px 0 0 60px'} msize={'16px'} width={'513px'} height={'46px'} maxlength={'12'} padding={'7px 0 0 90px'} size={'24px'} value={numState1} onchange={(e) => changeNumState1(e.target.value)} />
                        <Container.FormatNumber>+998</Container.FormatNumber>
                    </div>
                </Container.Number>

                <div className='row4'>
                    <Input placeholder={'Pasport seriyasingiz'} mradius={'5px'} mpadding={'0 0 0 19px '} mwidth={'290px'} mheight={'26px'} msize={'16px'} width={'513px'} height={'46px'} size={'24px'} onchange={(e) => changeMumPass(e.target.value)} value={numPasSeriya} maxlength={'10'} />
                </div>

                <div className='row11'>
                    <div>
                        <div>
                            {/*<input type="file" onMouseUp={} />*/}
                            <IconBox>
<<<<<<< HEAD
                                <Container.InputCustom2 type={'file'} onMouseUp={(e) => findFileFunc({file: e, by: 'diplomaId'})} />
=======
                                <Container.InputCustom2 type={'file'} onChange={(e) => findFileFunc({ file: e, by: 'diplomaId' })} />
>>>>>>> origin/magistratura/v1
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
<<<<<<< HEAD

                        options={facultyDTOForHomeList?.map((value)=> ({
                            value: value.id,
                            label: value.name
                        })) || []}
                        onChange={(e)=> changeAllDataFunc({type: 'facultyId', value: e})}

=======
                        options={faculties?.map((value) => ({
                            value: value.id,
                            label: value.name
                        })) || []}
                        onChange={(e) => changeAllDataFunc({ type: 'facultyId', value: e })}
>>>>>>> origin/magistratura/v1
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
<<<<<<< HEAD
                    {receptionData.status !== 'loading'  ?
=======
                    {receptionData.status !== 'loading' && receptionData.status !== 'success' ?
>>>>>>> origin/magistratura/v1
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