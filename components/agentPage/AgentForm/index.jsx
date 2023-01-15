import Container, {BtnCon, IconBox, InputCont, TextCon} from './style'
import {Button, Input} from "../../generic";
import UploadFiler from "../../../assets/icons/uploadeFile.svg";
import {useRouter} from "next/router";
import { useState } from "react";
import UploadMobile from "../../../assets/mobile/icon/UploadMobile.svg"
import CustomInput from 'react-phone-number-input/input';

const AgentFormComponent = () => {


    const router = useRouter()

    const [phoneFirm, setphoneFirm] = useState('+998')
    const [phoneLeader, setphoneLeader] = useState('+998')
    const [phoneLeaderadd , setphoneLeaderadd] = useState('+998')

    
    const [numPasSeriya, setNumPasSeriya] = useState('')
    const [pasSerLength, setPasSerLength] = useState(0)

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
        return setNumPasSeriya(event)
    }
    const FunFirmPhoneinput = ({ value, type }) => {
        setphoneFirm(value)
        changeAllDataFunc({ value: (value?.match(/[0-9]+/g)).join(''), type })
    }
    const FunLiderPhone = ({ value, type }) => {
        setphoneLeader(value)
        changeAllDataFunc({ value: (value?.match(/[0-9]+/g)).join(''), type })
    }
    const FunLiderPhoneAdd = ({ value, type }) => {
        setphoneLeaderadd(value)
        changeAllDataFunc({ value: (value?.match(/[0-9]+/g)).join(''), type })
    }



    return(
        <Container>
            <TextCon>
                <h1>Agent</h1>
            </TextCon>
            <InputCont>
                <div className='row1'>
                    <Input placeholder={'Firma nomi' } mradius={'5px'} mpadding={'0px 10px'} mwidth={'290px'} mheight={'36px'} msize={'14px'} width={'513px'} height={'46px'} size={'24px'} />
                </div>

                <div className="row4">
                    <Container.Number >
                        <CustomInput
                            placeholder="Enter phone number"
                            onChange={(value) => FunFirmPhoneinput({ value, type: 'phoneNumber' })}
                            maxLength={17}
                            value={phoneLeaderadd}
                            className={'customPhoneInput'}
                        />
                        <Container.NumberText >
                            Firma rahbarining qo’shimcha raqami               
                        </Container.NumberText>
                    </Container.Number>
                </div>

                <div className='row2'>
                    <Input placeholder={'Firma Rahbari FIO'} mradius={'5px'} mpadding={'0px 10px'} mwidth={'290px'} mheight={'36px'} msize={'14px'} width={'513px'} height={'46px'} size={'24px'} />
                </div>

                <div className='row8'>
                    <IconBox>
                        <Container.InputCustom1 type={'file'} />
                        <UploadFiler className={'UploadFile1'} />
                        <UploadMobile className={'UploadFile2'} />
                    </IconBox>
                </div>

                <div className='row3'>
                    <Input placeholder={'Firma rahbarining pasport seriyasi'} mradius={'5px'} mpadding={'0px 10px'} mwidth={'290px'} mheight={'36px'} msize={'14px'} width={'513px'} height={'46px'} size={'24px'} onchange={(e) => changeMumPass(e.target.value)} value={numPasSeriya} maxlength={'12'} />
                </div>

                <div className='row9'>
                    <IconBox>
                        <Container.InputCustom2 type={'file'} />
                        <UploadFiler className={'UploadFile1'} />
                        <UploadMobile className={'UploadFile2'} />
                    </IconBox>
                </div>


                <div className='row5'>
                    <Container.Number >
                        <CustomInput
                            placeholder="Enter phone number"
                            onChange={(value) => FunLiderPhone({ value, type: 'extraPhoneNumber' })}
                            maxLength={17}
                            value={phoneFirm}
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

                <div className="row6">
                    <Container.Number >
                        <CustomInput
                            placeholder="Enter phone number"
                            onChange={(value) => FunLiderPhoneAdd({ value, type: 'extraPhoneNumber' })}
                            maxLength={17}
                            value={phoneLeaderadd}
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
                        <Button width={'177px'} height={'43px'} size={'21px'} mradius={'5px'} mpadding={'0px 10px'} mwidth={'290px'} mheight={'36px'} msize={'14px'} margin={'0 60px 0 0'} onclick={()=> router.push('/receptionPage/agent/agentFinally')}>QOLDIRISH</Button>
                    </div>
                </BtnCon>
            </InputCont>
        </Container>
    )
}
export default AgentFormComponent