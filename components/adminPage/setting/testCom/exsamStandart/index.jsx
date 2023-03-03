
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
import { examdeleteIdFetch } from '../../../../../redux/sliceAdmin/exam/examdeleteId/index.js'
import { startMessage } from '../../../../../redux/slices/message/index.js'
import { reset } from '../../../../../redux/sliceAdmin/talimyunlishAdd/index.js'


export const ExsamStandart = () => {
    const quary = useRouter()
    const dispatch = useDispatch()

    const [name, setName] = useState({
        firstExamSubjectBall: '',
        secondExamSubjectBall: '',
        importantExamSubjectBall: '',
        entranceBall: '',
        examTime: ''

    })
    const [dataList, setDataList] = useState([])


    const getAllexamsubject = useSelector((store) => store.getAllexamsubject)
    const examsubjectcreate = useSelector((store) => store.examsubjectcreate)
    const examdeleteId = useSelector((store) => store.examdeleteId)

    const getStudyTypesAbuturent = useSelector((store) => store.getStudyTypesAbuturent)


    useEffect(() => {
        if (examsubjectcreate.status === 'success') dispatch(startMessage({ time: 3, message: 'Muvofiyaqatli Yakulandi', type: 'success' })), setName('')

        else if (examsubjectcreate.status === 'notFound') dispatch(startMessage({ time: 3, message: examsubjectcreate.message.split('_').join('') }))
        setTimeout(() => { dispatch(reset()) }, 500);
    }, [examsubjectcreate])


    useEffect(() => {
        if ((examsubjectcreate.status === 'success' || examdeleteId.status === 'success'))
            dispatch(getAllexamsubjectFetch({ type: 'BACHELOR' }))
    }, [examsubjectcreate, examdeleteId])


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
            nameUz: value.nameUz,
            nameRu: value.nameRu,
            studyType: value.studyType,
            status: id === value.id ? (!value.id || true) : false
        })))
    }

    const editPush = (id, i) => dispatch(examsubjectCreatePost(
        {
            id: id,
            nameUz: dataList[i].nameUz,
            nameRu: dataList[i].nameRu,
        }))
    const findDeleteID = (findDeleteID) => dispatch(examdeleteIdFetch({ id: findDeleteID }))
    const addFacultet = () => dispatch(examsubjectCreatePost({
        id: 0,
        firstExamSubjectBall: name,
        secondExamSubjectBall: name,
        importantExamSubjectBall: name,
        entranceBall: name,
        examTime: name,
    }))

    console.log(name?.firstExamSubjectBall, 'firstExamSubjectBall');
    console.log(name?.secondExamSubjectBall, 'firstExamSubjectBall');
    console.log(name?.importantExamSubjectBall, 'firstExamSubjectBall');
    console.log(name?.firstExamSubjectBall, 'firstExamSubjectBall');
    console.log(name?.entranceBall, 'firstExamSubjectBall');
    console.log(name?.examTime, 'examTime');


    // "id": 0,
    //  "firstExamSubjectBall": 3.1,
    //   "secondExamSubjectBall": 2.1,
    //   "importantExamSubjectBall": 1.1,
    //   "entranceBall": 56.7,
    //                     "examTime": 123456678
    return (
        <Container>

            <Container.Scrool style={{ overflowY: 'scroll', maxHeight: '550px' }}>

                <Container.Nav>
                    <div className='row'>
                        <div >№</div>
                        <div className='colum'>1-Blog uchun</div>
                        <div className='colum'>2-Blog uchun</div>
                        <div className='colum'>Majburiy Fan uchun</div>
                        <div className='colum'>Umumiy Kirish uchun Ball</div>
                        <div className='colum'>Imtxon uchun Vaqt Kiritish</div>
                        <div className='colum' >Action</div>
                    </div>
                </Container.Nav>
                <Container.Add>
                    <Input placeholder={'1-Blog uchun'} onchange={(e) => setName({ ...name, firstExamSubjectBall: e.target.value })} width={'150px'} height={'45px'} padding={'0px 10px'} size={'18px'} radius={'10px'} />
                    <Input placeholder={'2-Blog uchun'} onchange={(e) => setName({ ...name, secondExamSubjectBall: e.target.value })} width={'150px'} height={'45px'} padding={'0px 10px'} size={'18px'} radius={'10px'} />
                    <Input placeholder={'Majburiy Fan uchun'} onchange={(e) => setName({ ...name, importantExamSubjectBall: e.target.value })} width={'170px'} height={'45px'} padding={'0px 10px'} size={'18px'} radius={'10px'} />
                    <Input placeholder={'Umumiy Kirish uchun Ball'} onchange={(e) => setName({ ...name, entranceBall: e.target.value })} width={'200px'} height={'45px'} padding={'0px 10px'} size={'18px'} radius={'10px'} />
                    <Input placeholder={'Imtxon uchun Vaqt Kiritish'} onchange={(e) => setName({ ...name, examTime: e.target.value })} width={'250px'} height={'45px'} padding={'0px 10px'} size={'18px'} radius={'10px'} />
                    <Button onclick={() => addFacultet()} width={'100px'} height={'45px'} size={'20px'} padding={'0px 10px'} radius={'10px'}> Add</Button>
                </Container.Add>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', }}>

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
                                                <input value={value.nameUz} onChange={(e) => setDataList(dataList.map((val) => ({
                                                    id: val.id,
                                                    nameUz: value.id === val.id ? e.target.value : val.nameUz,
                                                    nameRu: val.nameRu,
                                                    studyType: val.studyType,
                                                    status: val.status
                                                })))} />
                                                :
                                                <>
                                                    {value.nameUz}
                                                </>}

                                    </div>
                                    <div className='colum'>
                                        {
                                            value?.status ?
                                                <input value={value.nameRu} onChange={(e) => setDataList(dataList.map((val) => ({
                                                    id: val.id,
                                                    nameUz: val.nameUz,
                                                    nameRu: value.id === val.id ? e.target.value : val.nameRu,
                                                    studyType: val.studyType,
                                                    status: val.status
                                                })))} />
                                                :
                                                <>
                                                    {value.nameRu}
                                                </>
                                        }
                                    </div>
                                    <div className='colum'>
                                        {
                                            value?.status ?
                                                <input value={value.nameRu} onChange={(e) => setDataList(dataList.map((val) => ({
                                                    id: val.id,
                                                    nameUz: val.nameUz,
                                                    nameRu: value.id === val.id ? e.target.value : val.nameRu,
                                                    studyType: val.studyType,
                                                    status: val.status
                                                })))} />
                                                :
                                                <>
                                                    {value.nameRu}
                                                </>
                                        }
                                    </div>
                                    <div className='colum'>
                                        {
                                            value?.status ?
                                                <input value={value.nameRu} onChange={(e) => setDataList(dataList.map((val) => ({
                                                    id: val.id,
                                                    nameUz: val.nameUz,
                                                    nameRu: value.id === val.id ? e.target.value : val.nameRu,
                                                    studyType: val.studyType,
                                                    status: val.status
                                                })))} />
                                                :
                                                <>
                                                    {value.nameRu}
                                                </>
                                        }
                                    </div>
                                    <div className='colum'>
                                        {
                                            value?.status ?
                                                <input value={value.nameRu} onChange={(e) => setDataList(dataList.map((val) => ({
                                                    id: val.id,
                                                    nameUz: val.nameUz,
                                                    nameRu: value.id === val.id ? e.target.value : val.nameRu,
                                                    studyType: val.studyType,
                                                    status: val.status
                                                })))} />
                                                :
                                                <>
                                                    {value.nameRu}
                                                </>
                                        }
                                    </div>

                                    <div className='action'>
                                        {
                                            value?.status ?
                                                <Button onclick={() => editPush(value.id, index)} width={'70px'} height={'40px'} size={'18px'} radius={'5px'} border={'1px solid red'}>OK</Button>
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

export default ExsamStandart