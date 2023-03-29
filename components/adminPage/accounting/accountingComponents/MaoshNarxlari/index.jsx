import Container from './style'
import {TbReportMoney} from "react-icons/tb"
import {Button, Input} from "../../../../generic"
import {IoSearch} from "react-icons/io5"
import {HiOutlineRefresh} from "react-icons/hi"
import {Modal, Spin} from "antd"
import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {startMessage} from "../../../../../redux/slices/message"
import {mashNarxlariFetch} from "../../../../../redux/sliceAdmin/moliyaSlices/mashNaxlari"
import {mashNarxlariAddFetch} from "../../../../../redux/sliceAdmin/moliyaSlices/mashNaxlariAdd";


const MaoshNarxlari = ({subTitle}) => {

    const dispatch = useDispatch()
    const mashNarxlari = useSelector((store)=> store.mashNarxlari)
    const mashNarxlariAdd = useSelector((store)=> store.mashNarxlariAdd)
    const [modalHidden, setModalHidden] = useState(false)

    useEffect(()=> {
        dispatch(mashNarxlariFetch())
    }, [])

    const [pushData, setPushData] = useState({
        name: '',
        amount: '',
        type: ''
    })

    console.log(mashNarxlariAdd, 'mashNarxlariAdd')
    // error
    const pushToSliceFunc = () => {
        if(!!pushData.name.length && !!pushData.amount.length && !!pushData.type.length){
            dispatch(mashNarxlariAddFetch({
                name: pushData.name,
                amount: pushData.amount,
                type: pushData.type
            }))
        }else dispatch(startMessage({time: 3, message: 'Toliq toldiring'}))
    }

    useEffect(()=> {
        if(mashNarxlariAdd?.status === 'success'){
            dispatch(startMessage({time: 3, type: 'success', message: ''}))
            refreshDataFunc()
            setPushData({
                name: '',
                amount: '',
                type: ''
            })
        }
        if(mashNarxlariAdd.status === 'error'){
            dispatch(startMessage({time: 3, type: 'error', message: mashNarxlariAdd.message.split('.').join(' ')}))
        }
    }, [mashNarxlariAdd])

    const [refreshButtonLogin, setRefreshButtonLogin] = useState(false)
    const refreshDataFunc = () => {
        if (!refreshButtonLogin) {
            dispatch(mashNarxlariFetch())
            setRefreshButtonLogin(true)
            setTimeout(() => {
                setRefreshButtonLogin(false)
            }, 1000)
        }
    }


    return(
        <Container>
            <div className={'title nocopy'}>
                <div><TbReportMoney size={'38px'} color={'#fff'}/>&nbsp;&nbsp;Moliya&nbsp;<span className={'subTitle'}> &gt; {subTitle}</span></div>
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
                <Container.RefreshArea loading={refreshButtonLogin} onClick={()=> refreshDataFunc()}>
                    <HiOutlineRefresh color={'#fff'} size={'22px'} className={'refreshIcon'} />
                </Container.RefreshArea>
            </div>
            <div className={'dataArea'}>
                {mashNarxlari.status === 'loading' && <Container.ButtonLoader><Spin/></Container.ButtonLoader>}
                {
                    <Container.DataAreaInset>
                        {
                            mashNarxlari?.data?.map((value, index) => (
                                    <Container.Section key={value.id}>
                                        <p className="number">{index + 1}</p>
                                        <p className={'textWithTitle'} title={value.name}>{value.name}</p>
                                        <div className="line"></div>
                                        <p className={'textWithTitle'} title={value.type}>{value.type}</p>
                                        <div className="line"></div>
                                        <p className={'textWithTitle'} title={value.amount}>{value.amount}</p>
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
                        placeholder={'Name'}
                        msize={'22px'}
                        size={'22px'}
                        bc={'#241F69'}
                        onchange={(e) => setPushData({...pushData, name: e.target.value})}
                        value={pushData.name}
                    />

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
                            onchange={(e) => setPushData({...pushData, amount: e.target.value.match(/\d+/g) ? e.target.value.match(/\d+/g).join('') : '' })}
                            value={pushData.amount}
                        />
                        <Input
                            mheight={'40px'}
                            height={'40px'}
                            mradius={'8px'}
                            radius={'8px'}
                            placeholder={'Type'}
                            msize={'22px'}
                            size={'22px'}
                            bc={'#241F69'}
                            onchange={(e) => setPushData({...pushData, type: e.target.value})}
                            value={pushData.type}
                        />
                    </div>

                    <div className={'buttonArea'}>
                        {
                            mashNarxlariAdd?.status === 'loading' ?
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

export default MaoshNarxlari