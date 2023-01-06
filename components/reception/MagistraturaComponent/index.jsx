import React, { useEffect, useState } from 'react'
import Container, { BtnCon, IconBox, InputCont, TextCon } from './style.js'
import { Input, Button } from "../../generic";
import UploadFiler from "../../../assets/icons/uploadeFile.svg"
import { useRouter } from 'next/router.js';
import AntSelect from "../Antd/style.js"
import UploadMobile from "../../../assets/mobile/icon/UploadMobile.svg"

export const MagistraturaComponent = () => {
    const router = useRouter()

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

    const [width, setWidth] = useState(null)
    useEffect(() => {
        if (window.innerWidth < 1000) {
            setWidth('100%')
        } else {
            setWidth('513px')
        }
    })
    return (
        <Container>
            <TextCon>
                <h1>Magistratura</h1>
            </TextCon>
            <InputCont>
                <div className='row1'>
                    <Input placeholder={'Familyangiz'} mradius={'5px'} mpadding={'0 0 0 19px '} mwidth={'290px'} mheight={'27px'} msize={'16px'} width={'513px'} height={'46px'} size={'24px'} />
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
                            }
                        ]}
                    />
                </IconBox>

                <div className='row2'>
                    <Input placeholder={'Ismingiz'} mradius={'5px'} mpadding={'0 0 0 19px '} mwidth={'100%'} mheight={'27px'} msize={'16px'} width={'513px'} height={'46px'} size={'24px'} />
                </div>

                <Container.Number className='row5'>
                    <div>
                        <Input className='inputPhone' mradius={'5px'} mwidth={'352px'} mheight={'27px'} msize={'16px'} mpadding={'0px 0px 0px 60px'} width={'513px'} height={'46px'} placeholder={'Telfon Raqamingiz'} padding={'7px 0px 0px 90px'} size={'24px'} onchange={(e) => changeNumState(e.target.value)} value={numState} maxlength={'12'} />
                        <Container.FormatNumber className=''>+998</Container.FormatNumber>
                    </div>
                </Container.Number>

                <div className='row3'>
                    <Input mpadding={'0 0 0 19px '} mradius={'5px'} mwidth={'100%'} mheight={'26px'} msize={'16px'} width={'513px'} height={'46px'} placeholder={'Otangizni ismi'} padding={'7px 0px 0px 30px'} size={'24px'} />
                </div>

                <Container.Number className='row6'>
                    <div>
                        <Input placeholder={'Otangiz yoki onangizni raqami'} mradius={'5px'} mwidth={'352px'} mheight={'26px'} mpadding={'0px 0 0 60px'} msize={'14px'} width={'513px'} height={'46px'} maxlength={'12'} padding={'7px 0 0 90px'} size={'24px'} value={numState1} onchange={(e) => changeNumState1(e.target.value)} />
                        <Container.FormatNumber>+998</Container.FormatNumber>
                    </div>
                </Container.Number>

                <div className='row4'>
                    <Input placeholder={'Pasport seriyasingiz'} mradius={'5px'} mpadding={'0 0 0 19px '} mwidth={'290px'} mheight={'26px'} msize={'16px'} width={'513px'} height={'46px'} size={'24px'} onchange={(e) => changeMumPass(e.target.value)} value={numPasSeriya} maxlength={'12'} />
                </div>

                <div className='row11'>
                    <IconBox>
                        <Container.InputCustom2 type={'file'} />
                        <UploadFiler className={'UploadFile2'} />
                        <UploadMobile className={'UploadFileMobile'} />
                    </IconBox>
                </div>

                <IconBox className='row8'>
                    <AntSelect
                        showSearch
                        style={{
                            width,
                        }}
                        placeholder='Talim yunalishingiz'
                        optionFilterProp="children"
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

                <div className='row10'>
                    <IconBox>
                        <Container.InputCustom1 type={'file'} />
                        <UploadFiler className={'UploadFile1'} />
                        <UploadMobile className={'UploadFileMobile2'} />
                    </IconBox>
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
                        options={[
                            {
                                value: '1',
                                label: 'Rus ',
                            },
                            {
                                value: '2',
                                label: 'Uzbek',
                            },
                        ]}
                    />
                </IconBox>

                <BtnCon className='row12'>
                    <div className='mobileNone'></div>
                    <Button mradius={'5px'} mwidth={'177px'} mheight={'26px'} msize={'16px'} width={'250px'} height={'43px'} size={'21px'} margin={'0 60px 0 0'} onclick={() => router.push('/receptionPage/application/UsersCardInfo')}>QOLDIRISH</Button>
                </BtnCon>

                <div className='mobileNone'></div>
            </InputCont>
        </Container>
    )
}

export default MagistraturaComponent

    
    
    
    