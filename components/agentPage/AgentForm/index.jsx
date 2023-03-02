import Container, { BtnCon, IconBox, InputCont, TextCon } from './style'
import { Button, Input } from "../../generic";
import UploadFiler from "../../../assets/icons/uploadeFile.svg";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import UploadMobile from "../../../assets/mobile/icon/UploadMobile.svg"
import CustomInput from 'react-phone-number-input/input';
import { Modal, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { reseptionSmsCheckSliceFetch } from "../../../redux/slices/receptionVerifyPhone";
import { checkAllInputs2 } from './checkAllInputs';
import { startMessage } from "../../../redux/slices/message";
import { deployFileFetch } from "../../../redux/slices/deployFile";
const AgentFormComponent = () => {


    const router = useRouter()

    const [phoneNumber, setPhoneNumber] = useState('+998')
    const [phoneExtraNumber, setPhoneExtraNumber] = useState('+998')

    const [modelHidden, setModalHidden] = useState(false)
    const [smsInput, setSmsInput] = useState('');

    const [numPasSeriya, setNumPasSeriya] = useState('')
    const [pasSerLength, setPasSerLength] = useState(0)

    const { fileId, by } = useSelector((store) => store.deployFile);

    const dispatch = useDispatch()

    const findFileFunc = ({ file, by }) => dispatch(deployFileFetch({ file: file, by }));


    useEffect(() => {
        changeAllDataFunc({ type: by, value: fileId });
    }, [fileId]);

    const [allData, setAllData] = useState({
        firmaName: '',
        password: '',
        prePassword: '',
        verifyCode: '',
        fio: '',
        passportSeries: '',
        phoneNumber: '',
        extraPhoneNumber: '',
        countFirma: '',
        passportId: '',
        certificateId: ''
    })

    const receptionSmsVerify = useSelector((store) => store.receptionSmsVerify);

    const changeAllDataFunc = ({ type, value }) => {
        const fakeData = allData
        fakeData[type] = value
        setAllData(fakeData)
        setAllData({ ...allData, [type]: value })
    }

    const changeMumPass = (event) => {
        if (pasSerLength < event.length) {
            setPasSerLength(event.length - 1)
            if (event.length == 2) return setNumPasSeriya(event.toUpperCase() + ' ')
        }
        if (pasSerLength >= event.length) {
            setPasSerLength(event.length)
            setNumPasSeriya(event.toUpperCase())
        }
        changeAllDataFunc({
            type: 'passportSeries',
            value: event.split(' ').join('').toUpperCase(),
        });
        return setNumPasSeriya(event.toUpperCase())
    }


    const checkAllInputs = () => {
        const result = checkAllInputs2({ allData });
        if (result?.status) return true;
        else {
            dispatch(
                startMessage({
                    time: result.message.time,
                    message: result.message.message,
                }),
            );
            return false;
        }
    };

    const smsFunc = () => {
        if (checkAllInputs())
            dispatch(
                reseptionSmsCheckSliceFetch({
                    firstName: allData.firstName,
                    phoneNumber: allData.phoneNumber,
                }),
            );
    };



    return (
        <Container>
            <TextCon>
                <h1>Agent</h1>
            </TextCon>
            <InputCont>
                <div className='row1'>
                    <Input placeholder={'Firma nomi'} mradius={'5px'} mpadding={'0px 10px'} mwidth={'290px'} mheight={'36px'} msize={'14px'} width={'513px'} height={'46px'} size={'24px'} onchange={(e) => changeAllDataFunc({ type: 'firmaName', value: e.target.value })} />
                </div>

                <div className='row2'>
                    <Input placeholder={'Firma Rahbari FIO'} mradius={'5px'} mpadding={'0px 10px'} mwidth={'290px'} mheight={'36px'} msize={'14px'} width={'513px'} height={'46px'} size={'24px'} onchange={(e) => changeAllDataFunc({ type: 'fio', value: e.target.value })} />
                </div>

                <div className='row7'>
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
                                    mheight={'36px'}
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
                                />
                            </IconBox>
                        </div>
                    </div>
                </div>


                <div className='row3'>
                    <Input placeholder={'Firma rahbarining pasport seriyasi'} mradius={'5px'} mpadding={'0px 10px'} mwidth={'290px'} mheight={'36px'} msize={'14px'} width={'513px'} height={'46px'} size={'24px'} onchange={(e) => changeMumPass(e.target.value)} value={numPasSeriya} maxlength={'10'} />
                </div>


                <div className='row8'>
                    <div>
                        <div>
                            <IconBox>
                                <Container.InputCustom2 type={'file'} onChange={(e) => findFileFunc({ file: e, by: 'passportId' })} />
                                <UploadFiler className={'UploadFile1'} />
                                <UploadMobile className={'UploadFile2'} />
                            </IconBox>
                        </div>
                        <div>
                            <IconBox>
                                <Input
                                    type={'password'}
                                    mpadding={'0 0 0 19px '}
                                    mradius={'5px'}
                                    mwidth={'100%'}
                                    mheight={'36px'}
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
                                />
                            </IconBox>
                        </div>
                    </div>
                </div>


                <div className='row4'>
                    <Container.Number >
                        <CustomInput
                            placeholder="Enter phone number"
                            onChange={(value) => {
                                changeAllDataFunc({ type: 'phoneNumber', value: value?.match(/[0-9]+/g).join('') })
                                setPhoneNumber(value)
                            }}
                            maxLength={17}
                            value={phoneNumber}
                            className={'customPhoneInput'}
                        />
                        <Container.NumberText>
                            Firmaning telefon raqami
                        </Container.NumberText>
                    </Container.Number>
                </div>

                <div className='row6'>
                    <Input type={'number'} placeholder={'Firmaning nechta filiali mavjud'} mradius={'5px'} mpadding={'0px 10px'} mwidth={'290px'} mheight={'36px'} msize={'14px'} width={'513px'} height={'46px'} size={'24px'} onchange={(e) => changeAllDataFunc({ type: 'countFirma', value: e.target.value })} />
                </div>

                <div className='row5'>
                    <Container.Number >
                        <CustomInput
                            placeholder="Enter phone number"
                            onChange={(value) => {
                                changeAllDataFunc({ type: 'extraPhoneNumber', value: value?.match(/[0-9]+/g).join('') })
                                setPhoneExtraNumber(value)
                            }}
                            value={phoneExtraNumber}
                            maxLength={17}
                            className={'customPhoneInput'}
                        />
                        <Container.NumberText>
                            Firma rahbarining telefon raqami
                        </Container.NumberText>
                    </Container.Number>
                </div>

                <div></div>

                <BtnCon className='row9'>
                    {receptionSmsVerify.status === 'success' ? (
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
                    ) : (
                        <Button
                            mradius={'5px'}
                            mwidth={'250px'}
                            mheight={'26px'}
                            msize={'16px'}
                            width={'300px'}
                            height={'43px'}
                            size={'21px'}
                            padding={'0 10px'}
                            onclick={() => smsFunc()}>
                            Telefon raqamni tastiqlash
                        </Button>
                    )}
                </BtnCon>
            </InputCont>


            <Modal
                open={modelHidden}
                onOk={() => setModalHidden(!modelHidden)}
                onCancel={() => setModalHidden(!modelHidden)}>
                <Container.Model>
                    <p>Sms ni kiriting</p>
                    <Input
                        placeholder={'_ _ _ _ _ _'}
                        align={'center'}
                        malign={'center'}
                        maxlength={6}
                        onKeyDown={(e) => e.key === 'Enter' && verifyCodeFunc()}
                        value={smsInput}
                        onchange={(e) => {
                            setSmsInput(e.target.value);
                            changeAllDataFunc({ type: 'verifyCode', value: e.target.value });
                        }}
                    />
                    {receptionSmsVerify.status === 'loading' ? (
                        <>
                            <Button width={'400px'} height={'50px'}>
                                <Container.ButtonLoader>
                                    <Spin />
                                </Container.ButtonLoader>
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button
                                width={'400px'}
                                height={'50px'}
                                msize={'24px'}
                                mheight={'40px'}
                                mwidth={'300px'}
                                onclick={() => verifyCodeFunc()}>
                                Tastiqlash
                            </Button>
                        </>
                    )}
                </Container.Model>
            </Modal>


        </Container>
    )
}
export default AgentFormComponent