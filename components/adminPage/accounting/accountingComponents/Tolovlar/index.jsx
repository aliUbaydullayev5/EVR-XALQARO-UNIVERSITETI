import Container from './style'
import {TbPigMoney} from "react-icons/tb"
import {Button, Input} from "../../../../generic"
import {IoSearch} from "react-icons/io5"
import {useDispatch, useSelector} from "react-redux"
import React, {useEffect, useState} from "react"
import {addPageCount, xarajatlarFetch} from "../../../../../redux/sliceAdmin/moliyaSlices/xarajatlar"
import {Modal, Spin} from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import {Button as AntButton, Upload } from 'antd'
import {deployFileFetch} from "../../../../../redux/slices/deployFile"
const Tolovlar = ({subTitle}) => {

    const dispatch = useDispatch()

    const xarajatlar = useSelector((store)=> store.xarajatlar)

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

    // const findFileFunc = ({ file, by }) => dispatch(deployFileFetch({ file: file, by }))


    // const fileList = [
    //     {
    //         uid: '0',
    //         name: 'xxx.png',
    //         status: 'uploading',
    //         percent: 33,
    //     },
    //     {
    //         uid: '1',
    //         name: 'yyy.png',
    //         status: 'done',
    //         url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    //         thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    //     },
    //     {
    //         uid: '2',
    //         name: 'zzz.png',
    //         status: 'error',
    //     },
    // ];

    const [uploadFile, setUploadFile] = useState([])
    const uploadFunc = (event) => {
        dispatch(deployFileFetch({
            file: {
                target: {
                    files: [
                        event.file.originFileObj
                    ]
                }
            }, by: 'file'
        }))
        setUploadFile([...uploadFile, {
            uid: event.lastModified,
            name: event.name,
            status: 'done'
        }])
    }

    // <Container.InputCustom2
    //     type={'file'}
    //     onChange={(e) => findFileFunc({ file: e, by: 'diplomaId' })}
    // />

    return (
        <Container>
            <div className={'title nocopy'}>
                <div><TbPigMoney size={'38px'} color={'#fff'}/>&nbsp;&nbsp;Moliya&nbsp;<span
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
                    Tartiblash
                </Button>
            </div>
            <div className={'dataArea'}>
                {
                    xarajatlar.status === 'loading' &&
                    <Container.ButtonLoader>
                        <Spin/>
                    </Container.ButtonLoader>
                }
                {
                    <Container.DataAreaInset>
                        {
                            xarajatlar?.data?.map((value, index) => {
                                return (
                                    <Container.Section>
                                        <p className="number">{index + 1}</p>
                                        <p>{value.name}</p>
                                        <div className="line"></div>
                                        <p>{value.amount}</p>
                                        <div className="line"></div>
                                        <p>{value.paymentType}</p>
                                        <div className="line"></div>
                                        <p>{value.date}</p>
                                        <div className="line"></div>
                                        <p>{value.description}</p>
                                    </Container.Section>
                                )
                            })
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
                    <Input mweight={'880px'} mheight={'40px'} height={'40px'} mradius={'8px'} radius={'8px'}
                           placeholder={'Name'} msize={'22px'} size={'22px'}/>
                    <div className="twoInput">
                        <Input mheight={'40px'} height={'40px'} mradius={'8px'} radius={'8px'} placeholder={'Maoshi'} msize={'22px'} size={'22px'}/>
                        <Input mheight={'40px'} height={'40px'} mradius={'8px'} radius={'8px'} placeholder={'Tafsif'} msize={'22px'} size={'22px'}/>
                    </div>
                    <div className="inputs">
                        <Upload
                            listType="picture"
                            defaultFileList={uploadFile}
                            fileList={uploadFile}
                            className="upload-list-inline"
                            onChange={(e)=> uploadFunc(e)}
                        >
                            <AntButton icon={<UploadOutlined/>}>Upload</AntButton>
                        </Upload>
                    </div>
                </Container.ModanInset>
            </Modal>
        </Container>
    );
}

export default Tolovlar