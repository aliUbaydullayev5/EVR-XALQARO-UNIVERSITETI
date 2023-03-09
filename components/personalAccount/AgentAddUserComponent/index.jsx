import Container, {BtnCon, IconBox} from './style'
import {Button, Input} from "../../generic"
import CustomInput from 'react-phone-number-input/input'
import UploadFiler from "../../../assets/icons/uploadeFile.svg"
import UploadMobile from "../../../assets/mobile/icon/UploadMobile.svg"
import {Spin} from "antd"
import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {deployFileFetch} from "../../../redux/slices/deployFile"
import {getDirectTypeFetch} from "../../../redux/slices/getStudyTypes/getDirectType"
import {checkAllInputs2} from "./checkAllInputs"
import {startMessage} from "../../../redux/slices/message"
import {getFacultyLanguageFetch} from "../../../redux/slices/getStudyTypes/getFacultyLanguage"
import {getFacultyTypeFetch, resetData} from "../../../redux/slices/getStudyTypes/getFacultyType"
import {agentAddUserFetch, resetPushData} from "../../../redux/slices/agentAddUser"

const AgentAddUserComponent = () => {
    const dispatch = useDispatch()
    const [numPasSeriya, setNumPasSeriya] = useState('')
    const [pasSerLength, setPasSerLength] = useState(0)
    const getDirectType = useSelector((store) => store.getDirectType.data)
    const { fileId, by } = useSelector((store) => store.deployFile)
    const receptionData = useSelector((store) => store.agentAddUser)
    const getFacultyLanguage = useSelector((store)=> store.getFacultyLanguage)
    const getFacultyType = useSelector((store)=> store.getFacultyType)

    const changeMumPass = (event) => {
        if (pasSerLength < event.length) {
            setPasSerLength(event.length - 1)
            if (event.length == 2) return setNumPasSeriya(event.toUpperCase() + ' ')
        } else if (pasSerLength >= event.length) {
            setPasSerLength(event.length)
            setNumPasSeriya(event.toUpperCase())
        }
        changeAllDataFunc({
            type: 'passportSeries',
            value: event.split(' ').join('').toUpperCase(),
        })
        return setNumPasSeriya(event.toUpperCase())
    };

    const [width, setWidth] = useState(null);
    useEffect(() => {
        if (window.innerWidth < 1000) setWidth('100%')
        else setWidth('513px')
    })
    const [allData, setAllData] = useState({
        lastName: "",
        studyType: "",
        firstName: "",
        patron: "",
        password: "",
        prePassword: "",
        verifyCode: "00000000",
        passportSeries: "",
        phoneNumber: "+998",
        extraPhoneNumber: "+998",
        courseLevel: 0,
        studyLanguage: "",
        educationType: "",
        facultyId: "",
        diplomaId: "",
        passportId: ""
    })
    const changeAllDataFunc = ({ type, value }) => {
        const fakeData = allData;
        fakeData[type] = value;
        setAllData(fakeData);
        setAllData({ ...allData, [type]: value })
    }
    const findFileFunc = ({ file, by }) => dispatch(deployFileFetch({ file: file, by }))
    useEffect(() => {
        dispatch(getDirectTypeFetch({ type: 'BACHELOR' }))
    }, [])
    useEffect(() => changeAllDataFunc({ type: by, value: fileId }), [fileId])
    useEffect(() => changeAllDataFunc({ type: 'studyType', value: 'BACHELOR' }), [])
    const checkAllInputs = () => {
        const result = checkAllInputs2({ allData })
        if (result?.status) return true
        else {
            dispatch(startMessage({time: result.message.time, message: result.message.message}))
            return false
        }
    }

    useEffect(() => {

        if (receptionData?.status === 'error') dispatch(startMessage({time: 5, type: 'error', message: receptionData.message}))

        if (receptionData.status === 'success') {
            setTimeout(() => {dispatch(resetPushData())}, 2000)
            setAllData({
                lastName: "",
                studyType: "",
                firstName: "",
                patron: "",
                password: "",
                prePassword: "",
                verifyCode: "00000000",
                passportSeries: "",
                phoneNumber: "+998",
                extraPhoneNumber: "+998",
                courseLevel: 0,
                studyLanguage: "",
                educationType: "",
                facultyId: "",
                diplomaId: "",
                passportId: ""
            })

            setNumPasSeriya('')

            dispatch(
                startMessage({
                    time: 5,
                    type: 'success',
                    message: receptionData.message,
                })
            )
        }
    }, [receptionData])

    const pushAllInfo = () => {
        if (checkAllInputs()) dispatch(agentAddUserFetch(allData))
    }

    const selectDirectFunc = ({type, value}) => {
        dispatch(getFacultyLanguageFetch({id: value}))
        changeAllDataFunc({ type, value})
    }

    useEffect(()=> {
        changeAllDataFunc({ type: 'studyLanguage', value: 'OQISH TILLINI TANLANG'})
        changeAllDataFunc({ type: 'educationType', value: 'OQISH TURINI TANLANG'})
        dispatch(resetData())
    }, [getFacultyLanguage])

    useEffect(()=> {
        dispatch(getFacultyLanguageFetch({id: allData.facultyId}))
    }, [getDirectType])

    const selectLanguageFunc = ({type, value}) => {
        dispatch(getFacultyTypeFetch({id: allData.facultyId, lang: value}))
        changeAllDataFunc({ type, value})
    }

    return(
        <Container>
            <Container.Top className={'nocopy'} >
                Talaba qo’shish
            </Container.Top>
            <Container.Bottom>
                <div className='row1'>
                    <Input
                        placeholder={'Familyangiz'}
                        mradius={'5px'}
                        mpadding={'0 0 0 19px '}
                        mwidth={'290px'}
                        mheight={'27px'}
                        msize={'16px'}
                        width={'513px'}
                        height={'46px'}
                        size={'24px'}
                        value={allData.lastName}
                        onchange={(e) =>
                            changeAllDataFunc({ type: 'lastName', value: e.target.value })
                        }
                    />
                </div>

                <IconBox className='row9'>
                    <select value={allData.educationType} name="cars" id="cars" style={{width}} onChange={(e) => changeAllDataFunc({ type: 'educationType', value: e.target.value })}  >
                        {
                            getFacultyType?.data?.length && getFacultyType?.data?.map((value) => (
                                <option id={value} value={value} selected={value === 'OQISH TURINI TANLANG'} disabled={value === 'OQISH TURINI TANLANG'}>{value}</option>
                            ))
                        }
                    </select>
                </IconBox>

                <div className='row2'>
                    <Input
                        placeholder={'Ismingiz'}
                        mradius={'5px'}
                        mpadding={'0 0 0 19px '}
                        mwidth={'100%'}
                        mheight={'27px'}
                        msize={'16px'}
                        width={'513px'}
                        height={'46px'}
                        size={'24px'}
                        value={allData.firstName}
                        onchange={(e) => changeAllDataFunc({ type: 'firstName', value: e.target.value })}
                    />
                </div>

                <div className='row5'>
                    <Container.Number>
                        <CustomInput
                            placeholder='Enter phone number'
                            onChange={(value) => changeAllDataFunc({ value, type: 'phoneNumber' })}
                            maxLength={17}
                            value={allData.phoneNumber}
                            className={'customPhoneInput'}
                        />
                        <Container.NumberText>Enter phone number</Container.NumberText>
                    </Container.Number>
                </div>

                <div className='row3'>
                    <Input
                        mpadding={'0 0 0 19px '}
                        mradius={'5px'}
                        mwidth={'100%'}
                        mheight={'26px'}
                        msize={'16px'}
                        width={'513px'}
                        height={'46px'}
                        placeholder={'Otangizni ismi'}
                        padding={'7px 0px 0px 30px'}
                        size={'24px'}
                        onchange={(e) => changeAllDataFunc({ type: 'patron', value: e.target.value })}
                        value={allData.patron}
                    />
                </div>

                <div className='row6'>
                    <Container.Number>
                        <CustomInput
                            placeholder='Enter phone number'
                            onChange={(value) => changeAllDataFunc({ value, type: 'extraPhoneNumber' })}
                            maxLength={17}
                            value={allData.extraPhoneNumber}
                            className={'customPhoneInput'}
                        />
                        <Container.NumberText>Enter phone number</Container.NumberText>
                    </Container.Number>
                </div>
                <div className='row4'>
                    <Input
                        placeholder={'Pasport seriyasingiz'}
                        mradius={'5px'}
                        mpadding={'0 0 0 19px '}
                        mwidth={'290px'}
                        mheight={'26px'}
                        msize={'16px'}
                        width={'513px'}
                        height={'46px'}
                        size={'24px'}
                        onchange={(e) => changeMumPass(e.target.value)}
                        value={numPasSeriya}
                        maxlength={'10'}
                    />
                </div>

                <div className='row11'>
                    <div>
                        <div>
                            <IconBox>
                                <Container.InputCustom2
                                    type={'file'}
                                    onChange={(e) => findFileFunc({ file: e, by: 'diplomaId' })}
                                />
                                <UploadFiler className={'UploadFile2'} />
                                <UploadMobile className={'UploadFileMobile'} />
                            </IconBox>
                        </div>
                        <div>
                            <IconBox>
                                <Input
                                    type={'password'}
                                    mpadding={'0 0 0 19px '}
                                    mradius={'5px'}
                                    mwidth={'100%'}
                                    mheight={'26px'}
                                    msize={'16px'}
                                    width={'251px'}
                                    height={'46px'}
                                    placeholder={'Parol'}
                                    padding={'0 8px'}
                                    size={'24px'}
                                    onchange={(e) =>
                                        changeAllDataFunc({
                                            type: 'password',
                                            value: e.target.value,
                                        })
                                    }
                                    value={allData.password}
                                />
                            </IconBox>
                        </div>
                    </div>
                </div>

                <IconBox className='row7'>
                    <select name="cars" id="cars"style={{width}} onChange={(e) => selectDirectFunc({type: 'facultyId', value: e.target.value})} >
                        {
                            getDirectType.length && getDirectType?.map((value) => (
                                <option id={value.id} value={value.id} selected={value.name === 'OQISH FAKULTETINI TALLANG'} disabled={value.name === 'OQISH FAKULTETINI TALLANG'} >{value.name}</option>
                            ))
                        }
                    </select>
                </IconBox>

                <div className='row10'>
                    <div>
                        <div>
                            <IconBox>
                                <Container.InputCustom1
                                    type={'file'}
                                    onChange={(e) => findFileFunc({ file: e, by: 'passportId' })}
                                />
                                <UploadFiler className={'UploadFile1'} />
                                <UploadMobile className={'UploadFileMobile2'} />
                            </IconBox>
                        </div>
                        <div>
                            <IconBox>
                                <Input
                                    type={'password'}
                                    mpadding={'0 0 0 19px '}
                                    mradius={'5px'}
                                    mwidth={'100%'}
                                    mheight={'26px'}
                                    msize={'16px'}
                                    width={'251px'}
                                    height={'46px'}
                                    placeholder={'Parol Qayta Kiriting'}
                                    padding={'0 8px'}
                                    size={'24px'}
                                    onchange={(e) =>
                                        changeAllDataFunc({
                                            type: 'prePassword',
                                            value: e.target.value,
                                        })
                                    }
                                    value={allData.prePassword}
                                />
                            </IconBox>
                        </div>
                    </div>
                </div>
                <IconBox className='row8'>
                    <select name="cars" id="cars" value={allData.studyLanguage} style={{width}} onChange={(e) => selectLanguageFunc({ type: 'studyLanguage', value: e.target.value })}  >
                        {
                            getFacultyLanguage?.data.length && getFacultyLanguage?.data?.map((value) => (
                                <option selected={value === 'OQISH TILLINI TANLANG'} disabled={value === 'OQISH TILLINI TANLANG'} id={value} value={value} >{value}</option>
                            ))
                        }
                    </select>
                </IconBox>
                <BtnCon className='row12'>
                    <>
                        {receptionData.status == 'loading' && (
                            <Button
                                mradius={'5px'}
                                mwidth={'177px'}
                                mheight={'26px'}
                                msize={'16px'}
                                width={'250px'}
                                height={'43px'}
                                size={'21px'}
                                cursor={'none'}
                                disabled={true}>
                                <Container.ButtonLoader>
                                    <Spin />
                                </Container.ButtonLoader>
                            </Button>
                        )}
                        {receptionData.status !== 'loading' && (
                            <Button
                                mradius={'5px'}
                                mwidth={'177px'}
                                mheight={'26px'}
                                msize={'16px'}
                                width={'250px'}
                                height={'43px'}
                                size={'21px'}
                                onclick={() => pushAllInfo()}>
                                QOLDIRISH
                            </Button>
                        )}
                    </>
                </BtnCon>
            </Container.Bottom>
        </Container>
    )
}

export default AgentAddUserComponent