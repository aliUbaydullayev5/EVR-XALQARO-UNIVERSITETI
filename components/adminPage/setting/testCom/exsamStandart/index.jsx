
import { Spin } from 'antd'
import { useRouter } from 'next/router.js'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../../generic/Button/index.jsx'
import Input from '../../../../generic/Input/index.jsx'
import Container, { ConTable } from './style.js'
import { getAllexamsubjectFetch } from "../.../../../../../../redux/sliceAdmin/exam/getAllexamsubject"
import { examdeleteIdFetch } from '../../../../../redux/sliceAdmin/exam/examdeleteId/index.js'
import { startMessage } from '../../../../../redux/slices/message/index.js'
import { reset } from '../../../../../redux/sliceAdmin/talimyunlishAdd/index.js'
import { exsamManegemntFetch } from '../../../../../redux/sliceAdmin/quation/exsamMenegmnt/index.js'
import { exsamMenegmntgetFetch } from '../../../../../redux/sliceAdmin/quation/exsamMenegmnt/exsamMenegmntget/index.js'

export const ExsamStandart = (props) => {
    const quary = useRouter()
    const dispatch = useDispatch()

    const [dataList, setDataList] = useState([])
    const [name, setName] = useState({
        firstExamSubjectBall: '',
        secondExamSubjectBall: '',
        importantExamSubjectBall: '',
        entranceBall: '',
        examTime: ''
    })


    const exsamMenegmntget = useSelector((store) => store.exsamMenegmntget);


    const addFacultet = () => dispatch(exsamManegemntFetch({
        id: 0,
        firstExamSubjectBall: name.firstExamSubjectBall,
        secondExamSubjectBall: name.secondExamSubjectBall,
        importantExamSubjectBall: name.importantExamSubjectBall,
        entranceBall: name.entranceBall,
        examTime: name.examTime,
    }))

    useEffect(() => {
        if (exsamMenegmntget.status === 'success') setDataList(exsamMenegmntget.data)
    }, [exsamMenegmntget])

    useEffect(() => {
        dispatch(exsamMenegmntgetFetch())
    }, [exsamMenegmntgetFetch])

    function handleTimeChange(event) {
        const timeValue = event.target.value; const timeInMilliseconds = new Date(`1970-01-01T${timeValue}:00Z`).getTime()
        setName({ ...name, examTime: timeInMilliseconds })
    }

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
                    <Input type="time" onchange={handleTimeChange} width={'250px'} height={'45px'} padding={'0px 10px'} size={'18px'} radius={'10px'} />
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