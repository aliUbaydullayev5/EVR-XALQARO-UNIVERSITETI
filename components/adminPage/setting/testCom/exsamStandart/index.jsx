import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../../generic/Button/index.jsx'
import Input from '../../../../generic/Input/index.jsx'
import Container, { ConTable,Wrapper } from './style.js'
import { exsamManegemntFetch } from '../../../../../redux/sliceAdmin/quation/exsamMenegmnt/index.js'
import { exsamMenegmntgetFetch } from '../../../../../redux/sliceAdmin/quation/exsamMenegmnt/exsamMenegmntget/index.js'
import { startMessage } from '../../../../../redux/slices/message/index.js'
import { reset } from '../../../../../redux/sliceAdmin/talimyunlishAdd/index.js'
import { useRouter } from 'next/router.js'
import Edit from "../../../../../assets/icons/edit.svg";
import Plus from "../../../../../assets/icons/plus.svg";
import {Antmodal} from "../../libary/bookLaunguage/style";
export const ExsamStandart = () => {
    const dispatch = useDispatch()
    const quary = useRouter()
    const [dataList, setDataList] = useState([])
    const [name, setName] = useState({ firstExamSubjectBall: '', secondExamSubjectBall: '', importantExamSubjectBall: '', entranceBall: '', examTime: '' })
    const [open, setOpen] = useState(false)

    const exsamMenegmntget = useSelector((store) => store.exsamMenegmntget);
    const exsamManegemnt = useSelector((store) => store.exsamManegemnt)


    useEffect(() => {
        if (exsamManegemnt.status === "success")
            dispatch(startMessage({ time: 3, message: "Muvofiyaqatli Yakulandi", type: "success", }),
                setDataList());
        else if (exsamManegemnt.status === "notFound")
            dispatch(startMessage({ time: 3, message: exsamManegemnt.message.split('_').join(' '), type: "error", }));
        setTimeout(() => {
            dispatch(reset());
        }, 500);
    }, [exsamMenegmntget]);


    useEffect(() => { exsamManegemnt.status === 'success' && dispatch(exsamMenegmntgetFetch()) }, [exsamManegemnt])
    useEffect(() => { dispatch(exsamMenegmntgetFetch()) }, [exsamMenegmntgetFetch])
    useEffect(() => {
        if (exsamMenegmntget.status === 'success')
            setDataList(exsamMenegmntget.data?.map((value) => ({ id: value.id, firstExamSubjectBall: value.firstExamSubjectBall, secondExamSubjectBall: value.secondExamSubjectBall, importantExamSubjectBall: value.importantExamSubjectBall, entranceBall: value.entranceBall, examTime: value.examTime * 1000 && new Date(value.examTime).toISOString().slice(11, 16) })))
    }, [exsamMenegmntget])

    // add
    const addFacultet = () => dispatch(exsamManegemntFetch({ id: 0, firstExamSubjectBall: name.firstExamSubjectBall, secondExamSubjectBall: name.secondExamSubjectBall, importantExamSubjectBall: name.importantExamSubjectBall, entranceBall: name.entranceBall, examTime: name.examTime, }))
     // date hours change second

    // find id
    const findEditID = (id) => {
        setDataList(dataList.map((value) => ({ id: value.id, firstExamSubjectBall: value.firstExamSubjectBall, secondExamSubjectBall: value.secondExamSubjectBall, importantExamSubjectBall: value.importantExamSubjectBall, entranceBall: value.entranceBall, examTime: value.examTime, status: id === value.id ? !value.id || true : false, })))
    }

    // hours change secondd
    function handleTimeChange(event) {

        const timeValue = event.target.value;
        const timeInMilliseconds = new Date(`1970-01-01T${timeValue}:00Z`).getTime()
        setName({...name, examTime: timeInMilliseconds})
    }
    // edit fuction push back
    const editPush = (id, i) =>
        dispatch(
            exsamManegemntFetch({
                id: id,
                firstExamSubjectBall: dataList[i].firstExamSubjectBall,
                secondExamSubjectBall: dataList[i].secondExamSubjectBall,
                importantExamSubjectBall: dataList[i].importantExamSubjectBall,
                entranceBall: dataList[i].entranceBall,
                examTime: new Date(`1970-01-01T${dataList[i].examTime}:00Z`).getTime()
            }))

    const modalAdd = () => setOpen(true)
    const handleCancel = () => setOpen(false);
    return (
        <Wrapper>

            <div>
                <h1> Imthon uchun vaqt berish kirish bal kiritish</h1>
                <Antmodal open={open} onOk={addFacultet} onCancel={handleCancel}>
                    <Container.Add>
                        <div>
                            <h1>Imthon uchun Test Vaqi Kirish Bali</h1>
                        </div>
                        <br/>

                        <div>
                            <p>Yunalish nomi</p>
                        </div>
                        <br/>
                        <Container.Add>
                            <Input placeholder={'1-Blog uchun'} onchange={(e) => setName({ ...name, firstExamSubjectBall: e.target.value })} width={'150px'} height={'45px'} padding={'0px 10px'} size={'18px'} radius={'10px'} />
                            <Input placeholder={'2-Blog uchun'} onchange={(e) => setName({ ...name, secondExamSubjectBall: e.target.value })} width={'150px'} height={'45px'} padding={'0px 10px'} size={'18px'} radius={'10px'} />
                            <Input placeholder={'Majburiy Fan uchun'} onchange={(e) => setName({ ...name, importantExamSubjectBall: e.target.value })} width={'170px'} height={'45px'} padding={'0px 10px'} size={'18px'} radius={'10px'} />
                            <Input placeholder={'Umumiy Kirish uchun Ball'} onchange={(e) => setName({ ...name, entranceBall: e.target.value })} width={'200px'} height={'45px'} padding={'0px 10px'} size={'18px'} radius={'10px'} />
                            <Input type="time" onchange={handleTimeChange} width={'250px'} height={'45px'} padding={'0px 10px'} size={'18px'} radius={'10px'} />
                            {/*<Button onclick={() => addFacultet()} width={'100px'} height={'45px'} size={'20px'} padding={'0px 10px'} radius={'10px'}> Add</Button>*/}
                        </Container.Add>

                    </Container.Add>
                </Antmodal>
                <Container.BtnAdd onClick={modalAdd}>
                    <Plus/> &nbsp;   Qo’shish
                </Container.BtnAdd>
            </div>
            <Container>
                <Container.Scrool style={{overflowY: 'scroll', maxHeight: '550px'}}>
                    <Container.Nav>
                        <div className='row'>
                            <div>№</div>
                            <div className='colum'>1-Blog uchun</div>
                            <div className='colum'>2-Blog uchun</div>
                            <div className='colum'>Majburiy Fan uchun</div>
                            <div className='colum'>Umumiy Kirish uchun Ball</div>
                            <div className='colum'>Imtxon uchun Vaqt Kiritish</div>
                            <div className='colum'>Action</div>
                        </div>
                    </Container.Nav>

                    <div style={{display: 'flex', flexDirection: 'column', gap: '10px',}}>

                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '10px',}}>
                        {dataList?.map((value, index) => {
                            return (
                                <ConTable key={value.id}>
                                    <div className='row'>
                                        <div>{index + 1}</div>
                                        <div className='colum'>
                                            {value?.status ?
                                                <input value={value.firstExamSubjectBall}
                                                       onChange={(e) => setDataList(dataList.map((val) => ({
                                                           id: val.id,
                                                           firstExamSubjectBall: value.id === val.id ? e.target.value : val.firstExamSubjectBall,
                                                           secondExamSubjectBall: val.secondExamSubjectBall,
                                                           importantExamSubjectBall: val.importantExamSubjectBall,
                                                           entranceBall: val.entranceBall,
                                                           examTime: val.examTime,
                                                           status: val.status,
                                                       })))}/>
                                                :
                                                <>
                                                    {value.firstExamSubjectBall}
                                                </>}

                                        </div>
                                        <div className='colum'>
                                            {
                                                value?.status ?
                                                    <input value={value.secondExamSubjectBall}
                                                           onChange={(e) => setDataList(dataList.map((val) => ({
                                                               id: val.id,
                                                               firstExamSubjectBall: val.firstExamSubjectBall,
                                                               secondExamSubjectBall: value.id === val.id ? e.target.value : val.secondExamSubjectBall,
                                                               importantExamSubjectBall: val.importantExamSubjectBall,
                                                               entranceBall: val.entranceBall,
                                                               examTime: val.examTime,
                                                               status: val.status,
                                                           })))}/>
                                                    :
                                                    <>
                                                        {value.secondExamSubjectBall}
                                                    </>
                                            }
                                        </div>
                                        <div className='colum'>
                                            {
                                                value?.status ?
                                                    <input value={value.importantExamSubjectBall}
                                                           onChange={(e) => setDataList(dataList.map((val) => ({
                                                               id: val.id,
                                                               firstExamSubjectBall: val.firstExamSubjectBall,
                                                               secondExamSubjectBall: val.secondExamSubjectBall,
                                                               importantExamSubjectBall: value.id === val.id ? e.target.value : val.importantExamSubjectBall,
                                                               entranceBall: val.entranceBall,
                                                               examTime: val.examTime,
                                                               status: val.status,
                                                           })))}/>
                                                    :
                                                    <>
                                                        {value.importantExamSubjectBall}
                                                    </>
                                            }
                                        </div>
                                        <div className='colum'>
                                            {
                                                value?.status ?
                                                    <input value={value.entranceBall}
                                                           onChange={(e) => setDataList(dataList.map((val) => ({
                                                               id: val.id,
                                                               firstExamSubjectBall: val.firstExamSubjectBall,
                                                               secondExamSubjectBall: val.secondExamSubjectBall,
                                                               importantExamSubjectBall: val.importantExamSubjectBall,
                                                               entranceBall: value.id === val.id ? e.target.value : val.entranceBall,
                                                               examTime: val.examTime,
                                                               status: val.status,
                                                           })))}/>
                                                    :
                                                    <>
                                                        {value.entranceBall}
                                                    </>
                                            }
                                        </div>
                                        <div className='colum'>
                                            {
                                                value?.status ?
                                                    <input value={value.examTime}
                                                           onChange={(e) => setDataList(dataList.map((val) => ({
                                                               id: val.id,
                                                               firstExamSubjectBall: val.firstExamSubjectBall,
                                                               secondExamSubjectBall: val.secondExamSubjectBall,
                                                               importantExamSubjectBall: val.importantExamSubjectBall,
                                                               entranceBall: val.entranceBall,
                                                               examTime: value.id === val.id ? e.target.value : val.examTime,
                                                               status: val.status,
                                                           })))}/>
                                                    :
                                                    <>
                                                        {value.examTime}
                                                    </>
                                            }
                                        </div>

                                        <div className='action'>
                                            {
                                                value?.status ?
                                                    <Button onclick={() => editPush(value.id, index)} width={'70px'}
                                                            height={'40px'} size={'18px'} radius={'5px'}
                                                            border={'1px solid red'}>OK</Button>
                                                    :
                                                    <Button onclick={() => findEditID(value.id)} width={'70px'}
                                                        height={'40px'} size={'18px'} radius={'5px'} 
                                                            border={'1px solid red'}><Edit/></Button>
                                            }
                                        </div>
                                    </div>
                                </ConTable>
                            )
                        })}
                    </div>
                </Container.Scrool>
            </Container>
        </Wrapper>
    );

}

export default ExsamStandart