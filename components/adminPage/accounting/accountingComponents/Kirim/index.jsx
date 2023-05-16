import Container from './style'
import {GiReceiveMoney} from "react-icons/gi"
import {Button, Input} from "../../../../generic"
import {IoSearch} from "react-icons/io5"
import {HiOutlineRefresh} from "react-icons/hi"
import {Modal, Spin} from "antd"
import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {startMessage} from "../../../../../redux/slices/message"
import {kirimFetch} from "../../../../../redux/sliceAdmin/moliyaSlices/kirim"
import {kirimAddFetch} from "../../../../../redux/sliceAdmin/moliyaSlices/kirimAdd"
import {kirimUserInfoFetch} from "../../../../../redux/sliceAdmin/moliyaSlices/kirimUserInfo"


const Kirim = ({subTitle}) => {

    const dispatch = useDispatch()
    const kirim = useSelector((store) => store.kirim)
    const kirimAdd = useSelector((store) => store.kirimAdd)
    const kirimUserInfo = useSelector((store) => store.kirimUserInfo)
    const [modalHidden, setModalHidden] = useState(false)
    const [userId, setUserId] = useState('')


    useEffect(() => {
        dispatch(kirimFetch())
    }, [])

    const [pushData, setPushData] = useState({
        name: '',
        amount: '',
        paymentType: 'CASH',
        description: '',
        userId: '',
        courseLevel: ''
    })
    const changeAllDataFunc = ({type, value}) => {
        const fakeData = pushData
        fakeData[type] = value
        setPushData(fakeData)
        setPushData({...pushData, [type]: value})
    }
    const pushToSliceFunc = () => {
        if (!!pushData.name.length && !!(pushData.amount + '').length && !!pushData.paymentType && !!pushData.userId.length && !!pushData.courseLevel.length) {
            dispatch(kirimAddFetch({
                name: pushData.name,
                amount: pushData.amount,
                paymentType: pushData.paymentType,
                description: pushData.description,
                userId: pushData.userId,
                courseLevel: pushData.courseLevel
            }))
        } else dispatch(startMessage({time: 3, message: 'Toliq toldiring', type: 'warning'}))
    }

    useEffect(() => {
        if (kirimAdd?.status === 'success') {
            dispatch(startMessage({time: 3, type: 'success', message: 'Malumot qoshildi'}))
            refreshDataFunc()
            setPushData({
                name: '',
                amount: '',
                paymentType: 'CASH',
                description: '',
                userId: '',
                courseLevel: ''
            })
        }
    }, [kirimAdd])

    const [refreshButtonLogin, setRefreshButtonLogin] = useState(false)
    const refreshDataFunc = () => {
        if (!refreshButtonLogin) {
            dispatch(kirimFetch())
            setRefreshButtonLogin(true)
            setTimeout(() => {
                setRefreshButtonLogin(false)
            }, 1000)
        }
    }

    const kirimUserInfoFunc = () => dispatch(kirimUserInfoFetch({idOrNumber: userId}))

    useEffect(() => {
        if (kirimUserInfo.status === 'success') changeAllDataFunc({type: 'userId', value: kirimUserInfo?.data[0]?.id})
    }, [kirimUserInfo])

    console.log(kirimUserInfo.status === 'success' && `${kirimUserInfo?.data[0]?.id}`.length, kirimUserInfo.status === 'success' && `${kirimUserInfo?.data[0]?.id}` && kirimUserInfo?.data[0]?.id !== undefined, 'pushData')

    return (
        <Container>
            <div className={'title nocopy'}>
                <div><GiReceiveMoney size={'38px'} color={'#fff'}/>&nbsp;&nbsp;Moliya&nbsp;<span
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
                    />
                </div>

                <input type="date" className={'dataInput'}/>
                <input type="date" className={'dataInput'}/>

                <Button
                    width={'92px'}
                    mwidth={'92px'}
                    height={'36px'}
                    mheight={'36px'}
                    radius={'7px'}
                    mradius={'7px'}
                    color={'#fff'}
                    size={'14px'}
                    msize={'14px'}
                >
                    <p className={'nocopy'}>
                        Tartiblash
                    </p>
                </Button>
                <Container.RefreshArea loading={refreshButtonLogin} onClick={() => refreshDataFunc()}>
                    <HiOutlineRefresh color={'#fff'} size={'22px'} className={'refreshIcon'}/>
                </Container.RefreshArea>
            </div>
            <div className={'dataArea'}>
                {kirim?.status === 'loading' && <Container.ButtonLoader><Spin/></Container.ButtonLoader>}
                {
                    <Container.DataAreaInset>
                        {
                            kirim?.data?.map((value, index) => (
                                    <Container.Section key={value?.id}>
                                        <p className="number">{index + 1}</p>
                                        <p className={'textWithTitle'}
                                           title={value?.user.firstName + ' ' + value?.user.lastName}>{`${value?.user.firstName}, ${value?.user.lastName}`}</p>
                                        <div className="line"></div>
                                        <p className={'textWithTitle'}
                                           title={value?.user.passportSeries}>P.Seriya: {value?.user.passportSeries}</p>
                                        <div className="line"></div>
                                        <p className={'textWithTitle'}
                                           title={value?.user.role.name}>{value?.user.role.name}</p>
                                        <div className="line"></div>
                                        <p className={'textWithTitle'}
                                           title={value?.user.patron}>Sharif: {value?.user.patron}</p>
                                        <div className="line"></div>
                                        <p className={'textWithTitle'}
                                           title={value?.user.idNumber}>ID: {value?.user.idNumber}</p>
                                        <div className="line"></div>
                                        <p className={'textWithTitle'} title={value?.user.phoneNumber}>Nomer:
                                            +{value?.user.phoneNumber}</p>
                                        <div className="line"></div>
                                        <p className={'textWithTitle'} title={value?.user.extraPhoneNumber}>Q. Nomer:
                                            +{value?.user.extraPhoneNumber}</p>
                                    </Container.Section>
                                )
                            )
                        }
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
                        placeholder={'User Id, Phone Number'}
                        msize={'22px'}
                        size={'22px'}
                        bc={'#241F69'}
                        onchange={(e) => setUserId(e.target.value)}
                    />
                    <div className={'buttonArea'}>
                        {
                            kirimUserInfo?.status === 'loading' ?
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
                                    onclick={() => kirimUserInfoFunc()}
                                >
                                    Istash
                                </Button>
                        }
                    </div>

                    <pre style={{wordWrap: 'break-word', whiteSpace: 'pre-wrap', color: 'white'}}>
                        {
                            kirimUserInfo.status === 'success' &&
                            kirimUserInfo.data.length ?
                                String(JSON.stringify(kirimUserInfo.data[0])).split('"').join('').split('').map((value) => value === ',' ?
                                    <br/> : value)
                                :
                                <h1>User Not Found</h1>
                        }
                    </pre>

                    <br/>
                    <div className="twoInput">
                        <Input
                            mweight={'880px'}
                            mheight={'40px'}
                            height={'40px'}
                            mradius={'8px'}
                            radius={'8px'}
                            placeholder={'Name'}
                            msize={'22px'}
                            size={'22px'}
                            bc={'#241F69'}
                            onchange={(e) => changeAllDataFunc({type: 'name', value: e.target.value})}
                            value={pushData.name}
                        />
                        <select
                            defaultValue={'CASH'}
                            defaultChecked={'CASH'}
                            onChange={(e) => changeAllDataFunc({type: 'paymentType', value: e.target.value})}
                            value={pushData.paymentType}
                        >
                            <option value={'PAYME'}>PAYME</option>
                            <option value={'CLICK'}>CLICK</option>
                            <option value={'CASH'}>CASH</option>
                            <option value={'APELSIN'}>APELSIN</option>
                        </select>
                    </div>
                    <div className="twoInput">
                        <Input
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
                        <Input
                            mheight={'40px'}
                            height={'40px'}
                            mradius={'8px'}
                            radius={'8px'}
                            placeholder={'Description'}
                            msize={'22px'}
                            size={'22px'}
                            bc={'#241F69'}
                            onchange={(e) => changeAllDataFunc({type: 'description', value: e.target.value})}
                            value={pushData.description}
                        />
                    </div>
                    <div className="twoInput">
                        <Input
                            mheight={'40px'}
                            height={'40px'}
                            mradius={'8px'}
                            radius={'8px'}
                            placeholder={'User Id'}
                            msize={'22px'}
                            size={'22px'}
                            bc={'#241F69'}
                            disabled={kirimUserInfo.status === 'success' && `${kirimUserInfo?.data[0]?.id}`.length, kirimUserInfo.status === 'success' && `${kirimUserInfo?.data[0]?.id}` && kirimUserInfo?.data[0]?.id !== undefined}
                            onchange={(e) => changeAllDataFunc({type: 'userId', value: e.target.value})}
                            value={pushData.userId}
                        />
                        <Input
                            mheight={'40px'}
                            height={'40px'}
                            mradius={'8px'}
                            radius={'8px'}
                            placeholder={'Course Level'}
                            msize={'22px'}
                            size={'22px'}
                            bc={'#241F69'}
                            onchange={(e) => changeAllDataFunc({type: 'courseLevel', value: e.target.value})}
                            value={pushData.courseLevel}
                        />
                    </div>
                    <div className={'buttonArea'}>
                        {
                            kirimAdd?.status === 'loading' ?
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
}

export default Kirim