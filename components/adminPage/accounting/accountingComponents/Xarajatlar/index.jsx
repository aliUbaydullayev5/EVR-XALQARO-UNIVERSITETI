import Container from './style'
import {FaRegMoneyBillAlt} from "react-icons/fa"
import {Button, Input} from "../../../../generic"
import {IoSearch} from "react-icons/io5"
import {HiOutlineRefresh} from "react-icons/hi"
import {Button as AntButton, Modal, Spin, Upload} from "antd"
import {InView} from "react-intersection-observer"
import {API_GLOBAL} from "../../../../../globalApi"
import {FiUpload} from "react-icons/fi"
import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {addPageCount, resetPageToZero, xarajatlarFetch} from "../../../../../redux/sliceAdmin/moliyaSlices/xarajatlar"
import {xarajatlarAddFetch} from "../../../../../redux/sliceAdmin/moliyaSlices/xarajatlarAdd"
import {startMessage} from "../../../../../redux/slices/message"

const Xarajatlar = ({subTitle}) => {


    const dispatch = useDispatch()
    const xarajatlar = useSelector((store)=> store.xarajatlar)
    const xarajatlarAdd = useSelector((store)=> store.xarajatlarAdd)
    const [inView, setInView] = useState(false);
    const [modalHidden, setModalHidden] = useState(false)

    useEffect(()=> {
        if (inView){
            if((xarajatlar.data.length % 20 === 0) || (xarajatlar.data.length === 0)){
                dispatch(addPageCount())
                dispatch(xarajatlarFetch({page: xarajatlar?.pageCount, query: ''}))
            }
        }
    }, [inView])

    const [fileList, setFileList] = useState([])
    const [pushData, setPushData] = useState({
        name: '',
        amount: '',
        paymentType: 'CASH',
        description: '',
        attachment: []
    })
    const uploadFunc = (event) => {
        setFileList([...event.fileList])
        if(event.file.status === 'done'){
            if(event?.file?.response?.success){
                setPushData({
                    ...pushData,
                    attachment: [
                        ...pushData.attachment,
                        event.file.response.data
                    ]
                })
            }
        }
        if(event.file.status === 'removed'){
            let attachment = pushData.attachment.filter((value)=> value !== event.file.response.data)
            setPushData({...pushData, attachment})
        }
    }
    const pushToSliceFunc = () => {
        if(!!pushData.name.length && !!pushData.amount.length && !!pushData.paymentType && !!pushData.attachment.length){
            dispatch(xarajatlarAddFetch({
                name: pushData.name,
                paymentType: pushData.paymentType,
                amount: pushData.amount,
                description: pushData.description,
                attachmentIds: pushData.attachment
            }))
        }else dispatch(startMessage({time: 3, message: 'Toliq toldiring'}))
    }

    useEffect(()=> {
        if(xarajatlarAdd?.status === 'success'){
            dispatch(startMessage({time: 3, type: 'success', message: ''}))
            refreshDataFunc()
            setFileList([])
            setPushData({
                name: '',
                amount: '',
                paymentType: 'CASH',
                description: '',
                attachment: []
            })
        }
    }, [xarajatlarAdd])

    const [refreshButtonLogin, setRefreshButtonLogin] = useState(false)
    const refreshDataFunc = () => {
        if (!refreshButtonLogin) {
            dispatch(xarajatlarFetch({page: 0, query: ''}))
            dispatch(resetPageToZero())
            setRefreshButtonLogin(true)
            setTimeout(() => {
                setRefreshButtonLogin(false)
            }, 1000)
        }
    }


    return(
        <Container>
            <div className={'title nocopy'}>
                <div><FaRegMoneyBillAlt size={'38px'} color={'#fff'}/>&nbsp;&nbsp;Moliya&nbsp;<span className={'subTitle'}> &gt; {subTitle}</span></div>
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
                {xarajatlar.status === 'loading' && <Container.ButtonLoader><Spin/></Container.ButtonLoader>}
                {
                    <Container.DataAreaInset>
                        {
                            xarajatlar?.data?.map((value, index) => (
                                    <Container.Section>
                                        <p className="number">{index + 1}</p>
                                        <p className={'textWithTitle'} title={value.name}>{value.name}</p>
                                        <div className="line"></div>
                                        <p className={'textWithTitle'} title={value.amount}>{value.amount}</p>
                                        <div className="line"></div>
                                        <p className={'textWithTitle'} title={value.paymentType}>{value.paymentType}</p>
                                        <div className="line"></div>
                                        <p className={'textWithTitle'} title={value.date}>{value.date}</p>
                                        <div className="line"></div>
                                        <p className={'textWithTitle'} title={value.description}>{value.description}</p>
                                    </Container.Section>
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
                            placeholder={'Maoshi'}
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
                            placeholder={'Tafsif'}
                            msize={'22px'}
                            size={'22px'}
                            bc={'#241F69'}
                            onchange={(e) => setPushData({...pushData, description: e.target.value})}
                            value={pushData.description}
                        />
                    </div>
                    <div className="inputs">
                        <Upload
                            listType="picture"
                            defaultFileList={fileList}
                            className="upload-list-inline"
                            action={`${API_GLOBAL}v1/attachment/upload`}
                            method={"POST"}
                            onChange={(e) => uploadFunc(e)}
                            fileList={fileList}
                            headers={{
                                "Secret": "eyJhbGciOiJIUzI1NiJ9.e30.ZRrHA1JJJW8opsbCGfG_HACGpVUMN_a9IV7pAx"
                            }}
                        >
                            <AntButton style={{
                                backgroundColor: '#221F51',
                                color: '#fff',
                                border: '0',
                                boxShadow: '0 3.09677px 11.6129px rgba(0, 0, 0, 0.54)'
                            }} icon={<span> <FiUpload/> &nbsp; </span>}>Upload</AntButton>
                        </Upload>
                    </div>
                    <div className={'buttonArea'}>
                        {
                            xarajatlarAdd?.status === 'loading' ?
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

export default Xarajatlar