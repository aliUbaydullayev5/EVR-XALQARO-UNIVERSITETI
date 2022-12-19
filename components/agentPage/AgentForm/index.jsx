import Container, {BtnCon, IconBox, InputCont, TextCon} from './style'
import {Button, Input} from "../../generic";
import AntSelect from "../../reception/Antd/style";
import UploadFiler from "../../../assets/icons/uploadeFile.svg";
import {useRouter} from "next/router";
import {useState} from "react";

const AgentFormComponent = () => {


    const router = useRouter()

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
                    <Input placeholder={'Firma nomi'} width={'513px'} height={'46px'} size={'24px'} />
                </div>

                <div className='mainForm'>
                    <div>
                        <Input placeholder={'Firma rahbarining qo’shimcha raqami'} width={'513px'} height={'46px'} maxlength={'9'} padding={'0 0 0 75px'} size={'24px'} onchange={(e) => changeNumState2(e.target.value)} value={numState2} maxlength={'12'} />
                        <p>+998</p>
                    </div>
                </div>


                <div>
                    <Input placeholder={'Firma Rahbari FIO'} width={'513px'} height={'46px'} size={'24px'} />
                </div>
                <div>
                    <IconBox>
                        <Container.InputCustom1 type={'file'} />
                        <UploadFiler className={'UploadFile1'} />
                    </IconBox>
                </div>

                <div>
                    <Input placeholder={'Firma rahbarining pasport seriyasi'} width={'513px'} height={'46px'} size={'24px'} onchange={(e) => changeMumPass(e.target.value)} value={numPasSeriya} maxlength={'12'} />
                </div>




                <div>
                    <IconBox>
                        <Container.InputCustom2 type={'file'} />
                        <UploadFiler className={'UploadFile1'} />
                    </IconBox>
                </div>



                <div className='mainForm'>
                    <div>
                        <Input placeholder={'Firmaning telefon raqami'} width={'513px'} height={'46px'} maxlength={'9'} padding={'0 0 0 75px'} size={'24px'} onchange={(e) => changeNumState1(e.target.value)} value={numState1} maxlength={'12'} />
                        <p>+998</p>
                    </div>
                </div>


                <div>
                    <Input placeholder={'Firmaning nechta filiali mavjud'} width={'513px'} height={'46px'} size={'24px'} />
                </div>




                <div className={'mainForm'}>
                    <div>
                        <Input placeholder={'Firma rahbarining telefon raqami'} width={'513px'} height={'46px'} maxlength={'9'} padding={'0 0 0 75px'} size={'24px'} onchange={(e) => changeNumState(e.target.value)} value={numState} maxlength={'12'} />
                        <p>+998</p>
                    </div>
                </div>


                <div></div>

                <div></div>

                <BtnCon>
                    <div></div>
                    <div>
                        <Button width={'177px'} height={'43px'} size={'21px'} margin={'0 60px 0 0'} onclick={()=> router.push('/receptionPage/agent/agentFinally')}>QOLDIRISH</Button>
                    </div>
                </BtnCon>

            </InputCont>
        </Container>
    )
}
export default AgentFormComponent