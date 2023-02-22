
import { Spin } from 'antd'
import { useRouter } from 'next/router.js'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { examsubjectCreatePost } from '../../../../../redux/sliceAdmin/exam/exsamsubjectcreate/index.js'
import Button from '../../../../generic/Button/index.jsx'
import Input from '../../../../generic/Input/index.jsx'
import Container, { ConTable } from './style.js'
import { getAllexamsubjectFetch } from "../.../../../../../../redux/sliceAdmin/exam/getAllexamsubject"
import examsubjectcreate from "../../../../../redux/sliceAdmin/exam/exsamsubjectcreate"
import examdeleteId, { examdeleteIdFetch } from '../../../../../redux/sliceAdmin/exam/examdeleteId/index.js'
import { startMessage } from '../../../../../redux/slices/message/index.js'
import { reset } from '../../../../../redux/sliceAdmin/talimyunlishAdd/index.js'
export const ExamSubjectCreate = () => {

    const quary = useRouter()
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState('')

    const [name, setName] = useState({
        createAd: '',
        valueSet: '',
    })
    const [dataList, setDataList] = useState([])


    const getAllexamsubject = useSelector((store) => store.getAllexamsubject)
    const examsubjectcreate = useSelector((store) => store.examsubjectcreate)
    const exammdeleteId = useSelector((store) => store.examdeleteId)

    useEffect(() => {
        if (examsubjectcreate.status === 'success') dispatch(startMessage({ time: 3, message: 'Muvofiyaqatli Yakulandi', type: 'success' })), setName({ ...name, createAd: '' })

        else if (examsubjectcreate.status === 'notFound') dispatch(startMessage({ time: 3, message: 'Bu Talim   oldin Qo`shilgan !!!' }))
        setTimeout(() => { dispatch(reset()) }, 500);
    }, [examsubjectcreate])

    useEffect(() => {
        if (examsubjectcreate.status === 'success') dispatch(getAllexamsubjectFetch())
    }, [])


    useEffect(() => {
        dispatch(getAllexamsubjectFetch({ type: 'BACHELOR' }))
    }, [getAllexamsubjectFetch])

    useEffect(() => {
        if ((getAllexamsubject.status === 'success'))
            setDataList(getAllexamsubject.data)
    }, [getAllexamsubject])

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
    const editPush = (id) => dispatch(examsubjectCreatePost({ id: id, name: inputValue }))
    const findDeleteID = (findDeleteID) => dispatch(examdeleteIdFetch({ id: findDeleteID }))
    const addFacultet = () => dispatch(examsubjectCreatePost({
        name: name?.createAd,
    }))
    console.log(getAllexamsubject.data, 'dataList');
    return (
        <Container>
            <Container.Scrool style={{ overflowY: 'scroll', maxHeight: '550px' }}>
                <Container.Add>
                    <Input onchange={(e) => setName({ ...name, createAd: e.target.value })} width={'330px'} height={'45px'} padding={'0px 10px'} size={'20px'} radius={'15px'} />
                    <Button onclick={() => addFacultet()} width={'100px'} height={'45px'} size={'20px'} padding={'0px 10px'} > Add</Button>
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

export default ExamSubjectCreate