import Container, { BtnCon, IconBox, InputCont, TextCon } from "./style.js";
import UploadFiler from "../../../assets/icons/uploadeFile.svg";
import { Button, Input } from "../../generic";
import AntSelect from "../Antd/style";
import { useRouter } from "next/router.js";
import { useEffect, useState } from "react";
import UploadMobile from "../../../assets/mobile/icon/UploadMobile.svg"

import { useDispatch, useSelector } from "react-redux";
import deployFile, { deployFileFetch } from "../../../redux/slices/deployFile";
import homeAllData, { homeAllDataFetch } from "../../../redux/slices/homeAllData";
import { receptionPostFetch, resetVerify } from "../../../redux/slices/receptionPost";
import { startMessage } from "../../../redux/slices/message";
const OqishniKochirishComponent = () => {
    const router = useRouter()
    const dispatch = useDispatch()


    const [numPasSeriya, setNumPasSeriya] = useState('')
    const [pasSerLength, setPasSerLength] = useState(0)


    const [numState, setNumState] = useState('')
    const [length, setLength] = useState(0)

    const [width, setWidth] = useState(null)
    useEffect(() => {
        if (window.innerWidth < 1000) {
            setWidth('100%')
        } else {
            setWidth('513px')
        }
    })
    
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





    const changeMumPass = (event) => {
        if (pasSerLength < event.length) {
            setPasSerLength(event.length - 1)
            if (event.length == 2) {
                return setNumPasSeriya(event + ' ')
            }
            if (event.length == 6) {
                return setNumPasSeriya(event + ' ')
            }
            if (event.length == 9) {
                return setNumPasSeriya(event + ' ')
            }
        }
        if (pasSerLength >= event.length) {
            setPasSerLength(event.length)
            setNumPasSeriya(event)
        }
        changeAllDataFunc({ type: 'passportSeries', value: event.split(' ').join('') })
        return setNumPasSeriya(event)
    }
    const [allData, setAllData] = useState({
        lastName: '',
        admissionName: '',
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

    useEffect(() => {
        dispatch(homeAllDataFetch())
    }, [])
    const { educationTypes, faculties, studyLanguages } = useSelector((store) => store.homeAllData.data)
    console.log(educationTypes,'sdds');
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

    useEffect(() => {
        changeAllDataFunc({ type: 'admissionName', value: 'BACHELOR' })
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

        if (!(allData.phoneNumber.length == 9)) {
            dispatch(startMessage({ time: 5, message: 'Telefon raqamni togri kiritilgan' }))
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
        if (checkAllInputs()) {
            dispatch(receptionPostFetch(allData))
        }
        console.log(allData)
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
                <h1>O‘qishni ko‘chirish</h1>
            </TextCon>
            <InputCont>

                <div className={'row1'}>
                    <Input placeholder={'Familyangiz'} msize={'16px'} mradius={'5px'} mpadding={'0 19px'} mwidth={'290px'} mheight={'26px'} width={'513px'} height={'46px'} size={'24px'} />
                </div>

                <div className={'row7'}>
                    <IconBox>
                        <AntSelect
                            showSearch
                            style={{
                                width,
                                borderRadius: '5px'
                            }}
                            placeholder='Talim shaklingiz'
                            optionFilterProp="children"
                            filterOption={(input, option) => (option?.label ?? '').includes(input)}
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                            }
                            options={[

                                {
                                    value: '1',
                                    label: 'Kunduzgi',
                                },
                                {
                                    value: '2',
                                    label: 'Kechki',
                                },
                                {
                                    value: '3',
                                    label: 'Sirtqi ta`lim',
                                },

                            ]}
                        />
                    </IconBox>
                </div>

                <div className={'row2'}>
                    <Input placeholder={'Ismingiz'} mpadding={'0 19px'} msize={'16px'} mradius={'5px'} mwidth={'290px'} mheight={'26px'} width={'513px'} height={'46px'} size={'24px'} />
                </div>

                <div className={'row8'}>
                    <IconBox>
                        <AntSelect
                            showSearch
                            style={{
                                width,
                            }}
                            placeholder='Uqishingizni qaysi kursga kuchiryabsiz'
                            optionFilterProp="children"
                            filterOption={(input, option) => (option?.label ?? '').includes(input)}
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                            }
                            options={[
                                {
                                    value: '1',
                                    label: '1',
                                },
                                {
                                    value: '2',
                                    label: '2',
                                },
                                {
                                    value: '3',
                                    label: '3',
                                },
                                {
                                    value: '4',
                                    label: '4',
                                }

                            ]}
                        />
                    </IconBox>
                </div>

                <div className={'row3'}>
                    <Input placeholder={'Otangizni ismi'} mpadding={'0 19px'} msize={'16px'} mradius={'5px'} mwidth={'290px'} mheight={'26px'} width={'513px'} height={'46px'} size={'24px'} />
                </div>



                <div>
                    <div className='phoNumber'>
                        <Input width={'513px'} height={'46px'} mpadding={'4px 19px 0 62px'} msize={'16px'} mradius={'5px'} placeholder={'__ ___ __ __'} mheight={'26px'} mwidth={'100%'} maxlength={12} padding={'0 0 0 95px'} size={'24px'} value={numState} onchange={(e) => changeNumState(e.target.value)} />
                        <p className='phoNumbers'>+998</p>
                    </div>
                </div>

                <div className={'row4'}>
                    <Input placeholder={'Pasport seriyasingiz'} mpadding={'0 19px'} msize={'16px'} mradius={'5px'} width={'513px'} mwidth={'290px'} mheight={'26px'} height={'46px'} size={'24px'} onchange={(e) => changeMumPass(e.target.value)} value={numPasSeriya} maxlength={'12'} />
                </div>

                <div className={'row10'}>
                    <div className='phoNumber'>
                        <Input width={'513px'} height={'46px'} mpadding={'4px 19px 0 62px'} msize={'16px'} mradius={'5px'} placeholder={'Otangiz yoki onangizni raqami'} mheight={'26px'} mwidth={'100%'} maxlength={12} padding={'0 0 0 95px'} size={'24px'} value={numState1} onchange={(e) => changeNumState1(e.target.value)} />
                        <p className='phoNumbers'>+998</p>
                    </div>
                </div>


                <div className={'row5'}>
                    <IconBox>
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
                            options={[
                                {
                                    value: '1',
                                    label: 'Rus tili',
                                },
                                {
                                    value: '2',
                                    label: 'Uzbek tili',
                                },
                            ]}
                        />
                    </IconBox>
                </div>

                <div>
                    <IconBox>
                        <Container.InputCustom1 type={'file'} />
                        <UploadFiler className={'UploadFile'} />
                        <UploadMobile className={'UploadFileMobile'} />
                    </IconBox>
                </div>

                <div className={'row6'}>
                    <IconBox>
                        <AntSelect
                            showSearch
                            style={{
                                width,
                            }}
                            placeholder='Talim yunalishingiz'
                            optionFilterProp="children"
                            filterOption={(input, option) => (option?.label ?? '').includes(input)}
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                            }
                            options={[
                                {
                                    value: '1',
                                    label: 'Not Identified',
                                },
                                {
                                    value: '2',
                                    label: 'Closed',
                                },
                                {
                                    value: '3',
                                    label: 'Communicated',
                                }
                            ]}
                        />
                    </IconBox>
                </div>

                <div>
                    <IconBox>
                        <Container.InputCustom2 type={'file'} />
                        <UploadFiler className={'UploadFile'} />
                        <UploadMobile className={'UploadFileMobile'} />
                    </IconBox>
                </div>

                <div className={'mobileDivNone'}></div>

                <BtnCon>
                    <div className={'mobileDivNone'}></div>
                    <Button mwidth={'187px'} mradius={'5px'} msize={'20px'} mheight={'28px'} width={'200px'} height={'28px'} size={'21px'} margin={'10px 60px 0 0'} onclick={() => router.push('/receptionPage/application/UsersCardInfo')}>QOLDIRISH</Button>
                </BtnCon>

            </InputCont>
        </Container>
    )
}

export default OqishniKochirishComponent