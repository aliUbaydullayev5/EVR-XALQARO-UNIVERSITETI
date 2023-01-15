import Container, {BtnCon, IconBox, InputCont, TextCon} from './style'
import {Button, Input} from "../../generic";
import UploadFiler from "../../../assets/icons/uploadeFile.svg";
import {useRouter} from "next/router";
import { useState } from "react";
import UploadMobile from "../../../assets/mobile/icon/UploadMobile.svg"
import CustomInput from 'react-phone-number-input/input';

const AgentFormComponent = () => {


    const router = useRouter()

    const [phoneNumber1, setphoneNumber1] = useState('+998')
    const [phoneNumber2, setphoneNumber2] = useState('+998')
    const [phoneNumber3, setphoneNumber3] = useState('+998')

    
    const [numPasSeriya, setNumPasSeriya] = useState('')
    const [pasSerLength, setPasSerLength] = useState(0)

    const FuncNumbe1 = ({ value, type }) => {
        setphoneNumber1(value)
        changeAllDataFunc({ value: (value?.match(/[0-9]+/g)).join(''), type })
    }
    const FuncNumbe2 = ({ value, type }) => {
        setphoneNumber2(value)
        changeAllDataFunc({ value: (value?.match(/[0-9]+/g)).join(''), type })
    }
    const FuncNumbe3 = ({ value, type }) => {
        setphoneNumber3(value)
        changeAllDataFunc({ value: (value?.match(/[0-9]+/g)).join(''), type })
    }


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

    const changeAllDataFunc = ({ type, value }) => {
        const fakeData = allData
        fakeData[type] = value
        setAllData(fakeData)
        setAllData({ ...allData, [type]: value })
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
        return setNumPasSeriya(event.toUpperCase())
    }




    return(
        <Container>
            <TextCon>
                <h1>Agent</h1>
            </TextCon>
            <InputCont>
                <div className='row1'>
                    <Input placeholder={'Firma nomi' } mradius={'5px'} mpadding={'0px 10px'} mwidth={'290px'} mheight={'26px'} msize={'14px'} width={'513px'} height={'46px'} size={'24px'} />
                </div>

                <div className='row4'>
                    <Container.Number>
                        <CustomInput
                            placeholder="Firma rahbarining qo’shimcha raqami"
                            onChange={(value) => FuncNumbe1({ value, type: 'phoneNumber' })}
                            maxLength={17}
                            value={phoneNumber1}
                            className={'customPhoneInput'}
                        />
                        <Container.NumberText>
                            Firma rahbarining qo’shimcha raqami
                        </Container.NumberText>
                    </Container.Number>
                </div>

                <div className='row2'>
                    <Input placeholder={'Firma Rahbari FIO'} mradius={'5px'} mpadding={'0px 10px'} mwidth={'290px'} mheight={'26px'} msize={'14px'} width={'513px'} height={'46px'} size={'24px'} />
                </div>
                <div className='row8'>
                    <div>
                        <div>
                            <IconBox>
                                <Container.InputCustom1 type={'file'} onChange={(e) => findFileFunc({ file: e, by: 'passportId' })} />
                                <UploadFiler className={'UploadFile1'} />
                                <UploadMobile className={'UploadFileMobile'} />
                            </IconBox>
                        </div>
                        <div>
                            <IconBox>
                                <Input type={'password'} mpadding={'0 0 0 19px '} mradius={'5px'} mwidth={'100%'} mheight={'26px'} msize={'16px'} width={'251px'} height={'46px'} placeholder={'Parol Qayta Kiriting'} padding={'0 8px'} size={'24px'} onchange={(e) => changeAllDataFunc({ type: 'prePassword', value: e.target.value })} />
                            </IconBox>
                        </div>
                    </div>
                </div>

                <div className='row3'>
                    <Input placeholder={'Firma rahbarining pasport seriyasi'} mradius={'5px'} mpadding={'0px 10px'} mwidth={'290px'} mheight={'26px'} msize={'14px'} width={'513px'} height={'46px'} size={'24px'} onchange={(e) => changeMumPass(e.target.value)} value={numPasSeriya} maxlength={'12'} />
                </div>
                <div className='row9'>
                    <div>
                        <div>
                            <IconBox>
                                <Container.InputCustom2 type={'file'} onChange={(e) => findFileFunc({ file: e, by: 'diplomaId' })} />
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


                <div className='row5'>
                    <Container.Number>
                        <CustomInput
                            placeholder="Firmaning telefon raqami"
                            onChange={(value) => FuncNumbe2({ value, type: 'phoneNumber' })}
                            maxLength={17}
                            value={phoneNumber2}
                            className={'customPhoneInput'}
                        />
                        <Container.NumberText>
                            
                            Firmaning telefon raqami
                        </Container.NumberText>
                    </Container.Number>
                </div>

                <div className='row7'>
                    <Input placeholder={'Firmaning nechta filiali mavjud'} mradius={'5px'} mpadding={'0px 10px'} mwidth={'290px'} mheight={'36px'} msize={'14px'} width={'513px'} height={'46px'} size={'24px'} />
                </div>

                <div className='row6'>
                    <Container.Number>
                        <CustomInput
                            placeholder="Firma rahbarining telefon raqami"
                            onChange={(value) => FuncNumbe3({ value, type: 'phoneNumber' })}
                            maxLength={17}
                            value={phoneNumber3}
                            className={'customPhoneInput'}
                        />
                        <Container.NumberText>
                            Firma rahbarining telefon raqami
                        </Container.NumberText>
                    </Container.Number>
                </div>
                
                <BtnCon className='row10'>
                    <div className='btnEnd'></div>
                    <div>
                        <Button width={'177px'} height={'43px'} size={'21px'} mradius={'5px'} mmargin={'0px auto'} mpadding={'0px 10px'} mwidth={'290px'} mheight={'36px'} msize={'14px'} margin={'0 60px 0 0'} onclick={()=> router.push('/receptionPage/agent/agentFinally')}>QOLDIRISH</Button>
                    </div>
                </BtnCon>
            </InputCont>
        </Container>
    )
}
export default AgentFormComponent