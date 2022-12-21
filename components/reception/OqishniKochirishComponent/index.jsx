import Container, { BtnCon, IconBox, InputCont, TextCon } from "./style.js";
import UploadFiler from "../../../assets/icons/uploadeFile.svg";
import { Button, Input } from "../../generic";
import AntSelect from "../Antd/style";
import { useRouter } from "next/router.js";
import { useState } from "react";
import UploadMobile from "../../../assets/mobile/icon/UploadMobile.svg"

const OqishniKochirishComponent = () => {
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

    return (
        <Container>
            <TextCon>
                <h1>O‘qishni ko‘chirish</h1>
            </TextCon>
            <InputCont>

                <div className={'row1'}>
                    <Input placeholder={'Familyangiz'} msize={'16px'} mradius={'5px'} mpadding={'0 19px'} mwidth={'290px'} mheight={'26px'} width={'513px'} height={'46px'} size={'24px'} />
                </div>

                <div className={'row8'}>
                    <IconBox>
                        <AntSelect
                            showSearch
                            style={{
                                width: 513,
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

                <div className={'row9'}>
                    <IconBox>
                        <AntSelect
                            showSearch
                            style={{
                                width: 513,
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

                <div className={'row3'}>
                    <Input placeholder={'Otangizni ismi'} mpadding={'0 19px'} msize={'16px'} mradius={'5px'} mwidth={'290px'} mheight={'26px'} width={'513px'} height={'46px'} size={'24px'} />
                </div>

                <div className={'row5'}>
                    <div className='phoNumber'>
                        <Input width={'513px'} height={'46px'} mpadding={'4px 19px 0 62px'} msize={'16px'} mradius={'5px'} placeholder={'___ __ __'} mheight={'26px'} mwidth={'290px'} maxlength={'9'} padding={'0 0 0 95px'} size={'24px'} />
                        <p className='phoNumbers'>+998</p>
                    </div>
                </div>

                <div className={'row4'}>
                    <Input placeholder={'Pasport seriyasingiz'} mpadding={'0 19px'} msize={'16px'} mradius={'5px'} width={'513px'} mwidth={'290px'} mheight={'26px'} height={'46px'} size={'24px'} onchange={(e) => changeMumPass(e.target.value)} value={numPasSeriya} maxlength={'12'} />
                </div>

                <div className={'row6'}>
                    <Input placeholder={'Otangiz yoki onangizni raqami'} mpadding={'0 19px'} msize={'16px'} mradius={'5px'} mheight={'26px'} mwidth={'290px'} width={'513px'} height={'46px'} size={'24px'} />
                </div>

                <div className={'row7'}>
                    <IconBox>
                        <AntSelect
                            showSearch
                            style={{
                                width: 513,
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

                <div className={'row10'}>
                    <IconBox>
                        <AntSelect
                            showSearch
                            style={{
                                width: 513,
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