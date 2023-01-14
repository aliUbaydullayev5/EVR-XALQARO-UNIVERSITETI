import Container, {BtnCon, IconBox, InputCont, TextCon} from './style'
import {Button, Input} from "../../generic";
import AntSelect from "../../reception/Antd/style";
import UploadFiler from "../../../assets/icons/uploadeFile.svg";
import {useRouter} from "next/router";
import { useState } from "react";
import UploadMobile from "../../../assets/mobile/icon/UploadMobile.svg"
import CustomInput from 'react-phone-number-input/input';

const AgentFormComponent = () => {


    const router = useRouter()



    const [numPasSeriya, setNumPasSeriya] = useState('')
    const [pasSerLength, setPasSerLength] = useState(0)

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



    const [numState, setNumState] = useState('')
    const [length, setLength] = useState(0)

    const changeNumState = (event) => {
        if (length < event.length) {
            setLength(event.length - 1)
            if (event.length == 2) return setNumState(event + ' ')
            if (event.length == 6) return setNumState(event + ' ')
            if (event.length == 9) return setNumState(event + ' ')
        }
        if (length >= event.length) {
            setLength(event.length)
            setNumState(event)
        }
        return setNumState(event)
    }


    const [numState2, setNumState2] = useState('')
    const [length2, setLength2] = useState(0)
    const changeNumState2 = (event) => {
        if (length2 < event.length) {
            setLength1(event.length - 1)
            if (event.length == 2) {
                return setNumState2(event + ' ')
            }
            if (event.length == 6) {
                return setNumState2(event + ' ')
            }
            if (event.length == 9) {
                return setNumState2(event + ' ')
            }
        }
        if (length2 >= event.length) {
            setLength2(event.length)
            setNumState2(event)
        }
        return setNumState2(event)
    }

    return(
        <Container>
            <TextCon>
                <h1>Agent</h1>
            </TextCon>
            <InputCont>
                <div>
                    <Input placeholder={'Firma nomi' } mradius={'5px'} mpadding={'0px 10px'} mwidth={'290px'} mheight={'36px'} msize={'14px'} width={'513px'} height={'46px'} size={'24px'} />
                </div>

                <div>
                    <CustomInput
                        placeholder="Enter phone number"
                        onChange={(value) => funPhoneNumber({ value, type: 'phoneNumber' })}
                        maxLength={17}
                        value={numState}
                        className={'customPhoneInput'}
                    />
                </div>

                <div>
                    <Input placeholder={'Firma Rahbari FIO'} mradius={'5px'} mpadding={'0px 10px'} mwidth={'290px'} mheight={'36px'} msize={'14px'} width={'513px'} height={'46px'} size={'24px'} />
                </div>

                <div>
                    <IconBox>
                        <Container.InputCustom1 type={'file'} />
                        <UploadFiler className={'UploadFile1'} />
                        <UploadMobile className={'UploadFile2'} />
                    </IconBox>
                </div>

                <div>
                    <Input placeholder={'Firma rahbarining pasport seriyasi'} mradius={'5px'} mpadding={'0px 10px'} mwidth={'290px'} mheight={'36px'} msize={'14px'} width={'513px'} height={'46px'} size={'24px'} onchange={(e) => changeMumPass(e.target.value)} value={numPasSeriya} maxlength={'12'} />
                </div>

                <div>
                    <IconBox>
                        <Container.InputCustom2 type={'file'} />
                        <UploadFiler className={'UploadFile1'} />
                        <UploadMobile className={'UploadFile2'} />
                    </IconBox>
                </div>


                <div>
                    <CustomInput
                        placeholder="Enter phone number"
                        onChange={(value) => funForPhoneinput({ value, type: 'extraPhoneNumber' })}
                        maxLength={17}
                        value={phonePatron}
                        className={'customPhoneInput'}
                    />
                </div>
                <div>
                    <Input placeholder={'Firmaning nechta filiali mavjud'} mradius={'5px'} mpadding={'0px 10px'} mwidth={'290px'} mheight={'36px'} msize={'14px'} width={'513px'} height={'46px'} size={'24px'} />
                </div>
                <div>
                    <CustomInput
                        placeholder="Enter phone number"
                        onChange={(value) => funForPhoneinput({ value, type: 'extraPhoneNumber' })}
                        maxLength={17}
                        value={phonePatron}
                        className={'customPhoneInput'}
                    />
                </div>
              
                
                <div></div>

                <div></div>

                <BtnCon>
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