import React, {useEffect, useState, memo} from "react"
import {useDispatch, useSelector} from "react-redux"
import {HiOutlineRefresh} from "react-icons/hi"
import {FaRegMoneyBillAlt} from "react-icons/fa"
import {FiUpload} from "react-icons/fi"
import {IoSearch} from "react-icons/io5"

import Container from './style'

import {Button, Input} from "../../../../generic"
import {Button as AntButton, Modal, Spin, Upload} from "antd"

import {InView} from "react-intersection-observer"
import {API_GLOBAL} from "../../../../../globalApi"

// tolov get slice and with pagination functions
import {resetPageToZero, tolovlarFetch} from "../../../../../redux/sliceAdmin/moliyaSlices/tolovlar"

// tolov slice add new section
import {tolovAddFetch} from "../../../../../redux/sliceAdmin/moliyaSlices/tolovlarAdd"

// message slice
import {startMessage} from "../../../../../redux/slices/message"

const Tolovlar = memo(({subTitle}) => {

    const dispatch= useDispatch()
    const tolovlar = useSelector((store) => store.tolovlar)
    const tolovAdd = useSelector((store) => store.tolovAdd)
    const [modalHidden, setModalHidden] = useState(false)
    const [inView, setInView] = useState(null)

    useEffect(() => {
        if (inView) {
            if ((tolovlar?.data.length % 20 === 0) || (tolovlar?.data.length === 0)) {
                dispatch(tolovlarFetch({pageCount: tolovlar?.pageCount}))
            }
        }
    }, [inView])

    const [pushData, setPushData] = useState({
        amount: '',
        paymentType: 'PAYME',
        payType: 'APPLICATION',
        courseLevel: '0',
        idNumber: ''
    })

    const changeAllDataFunc = ({ type, value }) => {
        const fakeData = pushData
        fakeData[type] = value
        setPushData(fakeData)
        setPushData({ ...pushData, [type]: value })
    }

    const pushToSliceFunc = () => {
        if (!!pushData.amount.length && !!pushData.idNumber.length) {
            dispatch(tolovAddFetch({
                amount: pushData.amount,
                paymentType: pushData.paymentType,
                payType: pushData.payType,
                courseLevel: pushData.courseLevel,
                idNumber: pushData.idNumber
            }))
        } else dispatch(startMessage({time: 3, message: 'Toliq toldiring'}))
    }

    useEffect(() => {
        if (tolovAdd?.status === 'success') {
            refreshDataFunc()
            setPushData({
                amount: '',
                paymentType: 'CLICK',
                payType: 'APPLICATION',
                courseLevel: '0',
                idNumber: ''
            })
        }
    }, [tolovAdd])

    const [refreshButtonLogin, setRefreshButtonLogin] = useState(false)
    const refreshDataFunc = () => {
        if (!refreshButtonLogin) {
            setRefreshButtonLogin(true)
            dispatch(resetPageToZero())
            dispatch(tolovlarFetch({pageCount: 0}))
            setTimeout(() => {
                setRefreshButtonLogin(false)
            }, 1000)
        }
    }

    const searchFunc = (e) => {
        console.log(e, 'search_text')
    }

    const xarajatlar = useSelector((store)=> store.xarajatlar)

    console.log(xarajatlar, 'xarajatlar')

    return (
        <Container>
            <div className={'title nocopy'}>
                <div><FaRegMoneyBillAlt size={'38px'} color={'#fff'}/>&nbsp;&nbsp;Moliya&nbsp;<span
                    className={'subTitle'}> &gt; {subTitle}</span></div>
                <div>
                    <Button
                        mwidth={'204px'}
                        width={'204px'}
                        mheight={'48px'}
                        height={'48px'}
                        msize={'20px'}
                        size={'20px'}
                        mweight={'400'}
                        weight={'400'}
                        radius={'10px'}
                        mradius={'10px'}
                        shadow={'0px 3.09677px 11.6129px rgba(0, 0, 0, 0.54)'}
                        bc={'#221F51'}
                        onclick={() => setModalHidden(!modalHidden)}
                    > + Moash berish</Button>
                </div>
            </div>
            <div className={'filter'}>
                <div className={'iconSection'}>
                    <IoSearch size={'28px'} color={'#fff'} className={'icon'}/>
                    <Input
                        mwidth={'542px'}
                        width={'542px'}
                        height={'45px'}
                        mheight={'45px'}
                        radius={'15px'}
                        mradius={'15px'}
                        placeholder={'Filter'}
                        size={'22px'}
                        msize={'22px'}
                        mweight={'500'}
                        weight={'500'}
                        className={'input'}
                        padding={'0 0 0 50px'}
                        mpadding={'0 0 0 50px'}
                        onchange={(e)=> searchFunc(e.target.value)}
                    />
                </div>

                <Container.RefreshArea loading={refreshButtonLogin} onClick={() => refreshDataFunc()}>
                    <HiOutlineRefresh color={'#fff'} size={'22px'} className={'refreshIcon'}/>
                </Container.RefreshArea>
            </div>
            <div className={'dataArea'}>
                {tolovlar?.status === 'loading' && <Container.ButtonLoader><Spin/></Container.ButtonLoader>}
                {
                    <Container.DataAreaInset>
                        {
                            tolovlar?.data?.map((value, index) => (
                                <>
                                    {
                                        index === 0 &&
                                        <Container.Section key={value?.id}>
                                            <p className="number">%</p>
                                            <p className={'textWithTitle'} title={'Toliq ismi sharif'}>Toliq ismi sharif</p>
                                            <div className="line"></div>
                                            <p className={'textWithTitle'} title={'Id nomer'}>Id nomer</p>
                                            <div className="line"></div>
                                            <p className={'textWithTitle'} title={`pull narhi va tolov turi`}>pull narhi va tolov turi</p>
                                            <div className="line"></div>
                                            <p className={'textWithTitle'} title={'tolov turi'}>tolov turi</p>
                                            <div className="line"></div>
                                            <p className={'textWithTitle'} title={'telefon raqam'}>telefon raqam</p>
                                            <div className="line"></div>
                                            <p className={'textWithTitle'} title={'Qoshimcha tel nomer'}>Qoshimcha tel nomer</p>
                                            <div className="line"></div>
                                            <p className={'textWithTitle'} title={'kurs'}>kurs</p>
                                        </Container.Section>
                                    }
                                    <Container.Section key={value?.id}>
                                        <p className="number">{index + 1}</p>
                                        <p className={'textWithTitle'} title={value?.user?.fullName}>{value?.user?.fullName}</p>
                                        <div className="line"></div>
                                        <p className={'textWithTitle'} title={value?.user?.idNumber}>{value?.user?.idNumber}</p>
                                        <div className="line"></div>
                                        <p className={'textWithTitle'} title={`${value?.amount} ${value.paymentType}`}>{value?.amount} &nbsp;&nbsp; {value.paymentType}</p>
                                        <div className="line"></div>
                                        <p className={'textWithTitle'} title={value?.payType}>{value?.payType}</p>
                                        <div className="line"></div>
                                        <p className={'textWithTitle'} title={value?.user?.phoneNumber}>{value?.user?.phoneNumber}</p>
                                        <div className="line"></div>
                                        <p className={'textWithTitle'} title={value?.user?.extraPhoneNumber}>{value?.user?.extraPhoneNumber}</p>
                                        <div className="line"></div>
                                        <p className={'textWithTitle'} title={value?.courseLevel}>{value?.courseLevel}</p>
                                    </Container.Section>
                                </>
                                )
                            )
                        }
                        <div className="viewTag">
                            <InView onChange={setInView} className={'viewTag'}/>
                        </div>
                    </Container.DataAreaInset>
                }

            </div>
            <Modal
                open={modalHidden}
                onOk={() => setModalHidden(!modalHidden)}
                onCancel={() => setModalHidden(!modalHidden)}
                footer={false}
                width={'50%'}
            >
                <Container.ModanInset>
                    <p className="title">Moash berish</p>
                    <Input
                        mweight={'880px'}
                        mheight={'40px'}
                        height={'40px'}
                        mradius={'8px'}
                        radius={'8px'}
                        placeholder={'Amount'}
                        msize={'22px'}
                        size={'22px'}
                        bc={'#241F69'}
                        type={'number'}
                        onchange={(e) => changeAllDataFunc({type: 'amount', value: e.target.value})}
                        value={pushData.amount}
                    />
                    <div className="twoInput">
                        <Input
                            mheight={'40px'}
                            height={'40px'}
                            mradius={'8px'}
                            radius={'8px'}
                            placeholder={'course level'}
                            type={'number'}
                            msize={'22px'}
                            size={'22px'}
                            bc={'#241F69'}
                            onchange={(e) => changeAllDataFunc({type: 'courseLevel', value: e.target.value})}
                            value={pushData.courseLevel}
                        />
                        <Input
                            mheight={'40px'}
                            height={'40px'}
                            mradius={'8px'}
                            radius={'8px'}
                            placeholder={'Id Number'}
                            msize={'22px'}
                            size={'22px'}
                            bc={'#241F69'}
                            onchange={(e) => changeAllDataFunc({type: 'idNumber', value: e.target.value})}
                            value={pushData.idNumber}
                        />
                    </div>
                    <div className="twoInput">
                        <select defaultChecked={'PAYME'} defaultValue={'PAYME'} onChange={(e) => changeAllDataFunc({type: 'paymentType', value: e.target.value})}>
                            <option value={'PAYME'}>PAYME</option>
                            <option value={'CLICK'}>CLICK</option>
                            <option value={'CASH'}>CASH</option>
                            <option value={'APELSIN'}>APELSIN</option>
                        </select>
                        <select defaultChecked={'APPLICATION'} defaultValue={'APPLICATION'} onChange={(e) => changeAllDataFunc({type: 'payType', value: e.target.value})}>
                            <option value={'APPLICATION'}>APPLICATION</option>
                            <option value={'CONTRACT'}>CONTRACT</option>
                        </select>
                    </div>
                    <div className={'buttonArea'}>
                        {
                            tolovAdd?.status === 'loading' ?
                                <Button
                                    width={'157px'}
                                    mwidth={'157px'}
                                    height={'48px'}
                                    mheight={'48px'}
                                    bc={'#221F51'}
                                    shadow={'0 3.09677px 11.6129px rgba(0, 0, 0, 0.54)'}
                                    mradius={'10px'}
                                    radius={'10px'}
                                    size={'20px'}
                                    msize={'20px'}
                                    disabled={true}
                                >
                                    <Container.ButtonLoader><Spin/></Container.ButtonLoader>
                                </Button>
                                :
                                <Button
                                    width={'157px'}
                                    mwidth={'157px'}
                                    height={'48px'}
                                    mheight={'48px'}
                                    bc={'#221F51'}
                                    shadow={'0 3.09677px 11.6129px rgba(0, 0, 0, 0.54)'}
                                    mradius={'10px'}
                                    radius={'10px'}
                                    size={'20px'}
                                    msize={'20px'}
                                    onclick={() => pushToSliceFunc()}
                                >
                                    Saqlash
                                </Button>
                        }

                    </div>
                </Container.ModanInset>
            </Modal>
        </Container>
    )
})

export default Tolovlar