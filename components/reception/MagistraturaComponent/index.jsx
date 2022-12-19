import Container from "./style"
import { BtnCon, IconBox, InputCont, TextCon } from "./style";
import { Button, Input } from "../../generic";
import UploadFiler from "../../../assets/icons/uploadeFile.svg";
import AntSelect from "../Antd/style";
import { useRouter } from "next/router.js";
import { useState } from "react";
import UploadMobile from "../../../assets/mobile/icon/UploadMobile.svg";


const MagistraturaComponent = () => {
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
                <h1>Magistratura</h1>
            </TextCon>

            <InputCont>

                <div>
                    <Input placeholder={'Familyangiz'} mheight={'26px'} mradius={'5px'} mwidth={'290px'} mpadding={'0 19px'} msize={'16px'} width={'513px'} height={'46px'} size={'24px'} />
                </div>

                <div>
                    <IconBox>
                        <AntSelect
                            showSearch
                            style={{
                                width: 513,
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
                </div>

                <div>
                    <Input placeholder={'Ismingiz'} msize={'16px'} mheight={'26px'} mradius={'5px'} mwidth={'290px'} mpadding={'0 19px'} width={'513px'} height={'46px'} size={'24px'} />
                </div>

                <div>
                    <div className='phNumber'>
                        <Input width={'513px'} mheight={'26px'} msize={'16px'} mradius={'5px'} mwidth={'290px'} mpadding={'2px 19px 0 60px'} height={'46px'} placeholder={'__ ___ __ __'} maxlength={'12'} padding={'0 0 0 95px'} size={'24px'} />
                        <p className='phNumbers'>+998</p>
                    </div>
                </div>

                <div>
                    <Input placeholder={'Otangizni ismi'} msize={'16px'} mheight={'26px'} mradius={'5px'} mwidth={'290px'} mpadding={'0 19px'} width={'513px'} height={'46px'} size={'24px'} />
                </div>

                <div>
                    <Input placeholder={'Otangiz yoki onangizni raqami'} msize={'16px'} mheight={'26px'} mradius={'5px'} mwidth={'290px'} mpadding={'0 19px'} width={'513px'} height={'46px'} size={'24px'} />
                </div>

                <div>
                    <Input placeholder={'Pasport seriyasingiz'} msize={'16px'} mheight={'26px'} mradius={'5px'} mwidth={'290px'} mpadding={'0 19px'} width={'513px'} height={'46px'} size={'24px'} onchange={(e) => changeMumPass(e.target.value)} value={numPasSeriya} maxlength={'12'} />
                </div>

                <div>
                    <IconBox>
                        <Container.InputCustom1 type={'file'} />
                        <UploadFiler className={'UploadFile'} />
                        <UploadMobile className={'UploadFileMobile'} />
                    </IconBox>
                </div>

                <div>
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


                <div>
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
                                    label: 'Rus ',
                                },
                                {
                                    value: '2',
                                    label: 'Uzbek',
                                },
                            ]}
                        />
                    </IconBox>
                </div>


                <BtnCon>
                    <div className={'mobileDivNone'}></div>
                    <div>
                        <Button mwidth={'187px'} mradius={'5px'} msize={'20px'} mheight={'28px'} width={'177px'} height={'43px'} size={'21px'} margin={'0 60px 0 0'} onclick={() => router.push('/receptionPage/application/UsersCardInfo')}>QOLDIRISH</Button>
                    </div>
                </BtnCon>

                <div className={'mobileDivNone'}></div>

            </InputCont>

        </Container>
    )
}

export default MagistraturaComponent