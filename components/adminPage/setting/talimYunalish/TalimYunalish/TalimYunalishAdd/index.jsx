
import { Spin } from 'antd'
import { useRouter } from 'next/router.js'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAbuturentFetch } from '../../../../../../redux/sliceAdmin/talimyunlishAdd/deleteAbuturent/index.js'
import { editAbuturentFetch } from '../../../../../../redux/sliceAdmin/talimyunlishAdd/editPutAbuturent/index.js'
import { getTalimYunalishFetch, reset } from '../../../../../../redux/sliceAdmin/talimyunlishAdd/index.js'
import { getStudyTypesFetch } from '../../../../../../redux/slices/getStudyTypes/index.jsx'
import { startMessage } from '../../../../../../redux/slices/message/index.js'
import Button from '../../../../../generic/Button/index.jsx'
import Input from '../../../../../generic/Input/index.jsx'
import Container, { ConTable } from './style.js'

export const TalimYunlishAddCom = () => {

    const quary = useRouter()
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [dataList, setDataList] = useState([])
    const [inputValue, setInputValue] = useState('')

    const getStudyTypes = useSelector((store) => store.getStudyTypes)
    const getStudyTypesAbuturent = useSelector((store) => store.getStudyTypesAbuturent)
    const deleteAbuturentId = useSelector((store) => store.deleteAbuturentId)
    const talimYunalishAdmin = useSelector((store) => store.talimYunalishAdmin)
    const editAbuturentId = useSelector((store) => store.editAbuturentId)

    useEffect(() => {
        if (talimYunalishAdmin.status === 'success') dispatch(startMessage({ time: 3, message: 'Muvofiyaqatli qoshildi', type: 'success' })), setName('')
        else if (talimYunalishAdmin.status === 'notFound') dispatch(startMessage({ time: 3, message: 'Bu Talim Yunalish oldin Qo`shilgan' }))
        setTimeout(() => { dispatch(reset()) }, 500);
    }, [talimYunalishAdmin])


    useEffect(() => { dispatch(getStudyTypesFetch({ type: 'BACHELOR' })) }, [])
    useEffect((e) => {
        if (getTalimYunalishFetch.status === true) setName(e.target.value)
    }, [getTalimYunalishFetch])


    const addFacultet = () => dispatch(getTalimYunalishFetch({ name: name }))
    const findDeleteID = (deleteId) => dispatch(deleteAbuturentFetch({ id: deleteId }))

    const findEditID = (id) => {
        setDataList(dataList.map((value) => ({
            id: value.id,
            name: value.name,
            studyType: value.studyType,
            status: id === value.id ? (!value.id || true) : false
        })))
        const uniqInputValue = dataList.filter((value) => value.id === id)[0].name
        setInputValue(uniqInputValue)
    }
    const editPush = (id) => dispatch(editAbuturentFetch({ id: id, value: inputValue}));


    useEffect(() => {
        if (deleteAbuturentId.status === 'success') dispatch(getStudyTypesFetch({ type: 'BACHELOR' }))
    }, [deleteAbuturentId])

    useEffect(() => {
        if ((getStudyTypesAbuturent.status === 'success') || (getStudyTypes.status === 'success')) setDataList(getStudyTypesAbuturent.data)
    }, [getStudyTypesAbuturent || getStudyTypes])

    useEffect(() => {
        if (editAbuturentId.status === 'success') dispatch(getStudyTypesFetch({ type: 'BACHELOR' }))
    }, [editAbuturentId])

    return (
        <Container>
            <Container.Scrool style={{ overflowY: 'scroll', maxHeight: '550px' }}>
                <Container.Add>
                    <Input onchange={(e) => setName(e.target.value)} value={name} width={'330px'} height={'45px'} padding={'0px 10px'} size={'20px'} radius={'15px'} />

                    {
                        talimYunalishAdmin.status === 'loading' &&
                        <Container.ButtonLoader>
                            <Button width={'100px'} height={'45px'} size={'20px'} padding={'0px 10px'} disabled={true}>
                                <Spin />
                            </Button>
                        </Container.ButtonLoader>
                    }

                    {
                        talimYunalishAdmin.status !== 'loading' &&
                        <Button onclick={() => addFacultet()} width={'100px'} height={'45px'} size={'20px'} padding={'0px 10px'} > Add</Button>
                    }

                </Container.Add>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', }}>
                    <Container.Nav>
                        <div className='row'>
                            <div >№</div>
                            <div className='colum'>Talim Yunalish Turlari</div>
                            <div className='colum' >Action</div>
                        </div>
                    </Container.Nav>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', }}>
                    {dataList?.map((value, index) => {
                        return (
                            <ConTable key={value.id}>
                                <div className='row'>
                                    <div >{index + 1}</div>
                                    <div className='colum'>
                                        {
                                            value?.status ?
                                                <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                                                :
                                                <>
                                                    {value.name}
                                                </>
                                        }
                                    </div>

                                    <div className='action'>

                                        {
                                            value?.status ?
                                                <Button onclick={() => editPush(value.id)} width={'70px'} height={'40px'} size={'18px'} radius={'5px'} border={'1px solid red'}>OK</Button>
                                                :
                                                <Button onclick={() => findEditID(value.id)} width={'70px'} height={'40px'} size={'18px'} radius={'5px'} border={'1px solid red'}>Edit</Button>
                                        }

                                        <Button onclick={() => findDeleteID(value.id)} width={'70px'} height={'40px'} size={'18px'} radius={'5px'} border={'1px solid red'}>Delete</Button>
                                    </div>
                                </div>
                            </ConTable>
                        )
                    })}
                </div>
            </Container.Scrool>
        </Container>
    )
}

export default TalimYunlishAddCom