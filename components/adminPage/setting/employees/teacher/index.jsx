import { useRouter } from 'next/router.js'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { examsubjectCreatePost } from '../../../../../redux/sliceAdmin/exam/exsamsubjectcreate/index.js'
import Button from '../../../../generic/Button/index.jsx'
import Input from '../../../../generic/Input/index.jsx'
import Edit from "../../../../../assets/icons/edit.svg"
import Trash from "../../../../../assets/icons/trash.svg"
import Container, { ConTable, Wrapper } from './style.js'
import { examdeleteIdFetch } from '../../../../../redux/sliceAdmin/exam/examdeleteId/index.js'
import { startMessage } from '../../../../../redux/slices/message/index.js'
import { reset } from '../../../../../redux/sliceAdmin/talimyunlishAdd/index.js'
import { getAllexamsubjectFetch } from "../../../../../redux/sliceAdmin/exam/getAllexamsubject";
import { Antmodal } from "../../libary/bookLaunguage/style";
import Plus from "../../../../../assets/icons/plus.svg";

export const TeacherComponent = () => {
    const quary = useRouter()
    const dispatch = useDispatch()

    const [open, setOpen] = useState(false)
    const [name, setName] = useState({
        nameUz: '',
        nameRu: '',
    })
    const [dataList, setDataList] = useState([])


    const getAllexamsubject = useSelector((store) => store.getAllexamsubject)
    const examsubjectcreate = useSelector((store) => store.examsubjectcreate)
    const examdeleteId = useSelector((store) => store.examdeleteId)



    useEffect(() => {
        if (examsubjectcreate.status === 'success') dispatch(startMessage({ time: 3, message: 'Muvofiyaqatli Yakulandi', type: 'success' })), setName({ ...name, nameUz: '', nameRu: '' })
        else if (examsubjectcreate.status === 'notFound') dispatch(startMessage({ time: 3, message: examsubjectcreate.message.split('_').join(' ') }))
        setTimeout(() => { dispatch(reset()) }, 500);
    }, [examsubjectcreate])

    useEffect(() => {
        if (examdeleteId.status === 'success') dispatch(startMessage({ time: 3, message: 'Muvofiyaqatli Yakulandi', type: 'success' })), setName({ ...name, nameUz: '', nameRu: '' })
        else if (examdeleteId.status === 'notFound') dispatch(startMessage({ time: 3, message: examdeleteId.message.split('_').join(' ') }))
        setTimeout(() => { dispatch(reset()) }, 500);
    }, [examdeleteId])


    useEffect(() => {
        if ((examsubjectcreate.status === 'success' || examdeleteId.status === 'success'))
            dispatch(getAllexamsubjectFetch())
    }, [examsubjectcreate, examdeleteId])

    useEffect(() => {
        dispatch(getAllexamsubjectFetch())
    }, [getAllexamsubjectFetch])
    useEffect(() => {
        if (getAllexamsubject.status === 'success') setDataList(getAllexamsubject.data)
    }, [getAllexamsubject])
    console.log(getAllexamsubject?.data, 'getAllexamsubject')
    const findEditID = (id) => {
        setDataList(dataList.map((value) => ({
            id: value.id,
            nameUz: value.nameUz,
            nameRu: value.nameRu,
            studyType: value.studyType,
            status: id === value.id ? (!value.id || true) : false
        })))
    }
    const editPush = (id, i) => dispatch(examsubjectCreatePost({
        id: id,
        nameUz: dataList[i].nameUz,
        nameRu: dataList[i].nameRu,
    }))
    const findDeleteID = (findDeleteID) => dispatch(examdeleteIdFetch({ id: findDeleteID }))
    const addFacultet = () => dispatch(examsubjectCreatePost({
        id: 0,
        nameUz: name?.nameUz,
        nameRu: name?.nameRu,
    }))
    const modalAdd = () => setOpen(true)
    const handleCancel = () => setOpen(false);

    return (<Container>
        <Container.Bottom>
            <h1>O’qtuvchilar </h1>
            <Antmodal open={open} onOk={addFacultet} onCancel={handleCancel}>
                <Container.Add>
                    <div>
                        <h1>O’qtuvchilar</h1>
                    </div>
                    <br />
                    <div>
                        <p>Yunalish nomi</p>
                    </div> <br />
                    <div>
                        <Input onchange={(e) => setName({ ...name, nameUz: e.target.value })} value={name.nameUz} mwidth={"340px"} mheight={"40px"} width={"440px"} height={"45px"} padding={"0px 10px"} size={"20px"} radius={"5px"} placeholder={`Nomi`} />
                        <Input onchange={(e) => setName({ ...name, nameRu: e.target.value })} value={name.nameRu} mwidth={"340px"} mheight={"40px"} width={"440px"} height={"45px"} padding={"0px 10px"} size={"20px"} radius={"5px"} placeholder={`Nomi`} />

                    </div>

                </Container.Add>
            </Antmodal>
            <div onClick={modalAdd}>
                <Plus /> &nbsp;   Qo’shish
            </div>
        </Container.Bottom>
        <Container.Table>
            <Container.Scrool style={{ overflowY: "scroll" }}>
                <Container.Top>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <Container.Nav>
                            <div className="row">
                                <div>№</div>
                                <div className="colum">Ism</div>
                                <div className="colum">Familyasi</div>
                                <div className="colum">Telefon raqami</div>
                                <div className="colum">Tug’ilgan sanasi</div>
                                <div className="colum">Guruh ID</div>
                                <div className="colum">Boshqaruv ID</div>
                                <div className="colum">Password</div>
                                <div className="colum">Jins</div>
                                <div className="colum">Dars vaqti</div>
                                <div className="colum">Premium</div>
                                <div className="colum">Rasm</div>
                                <div className="colum">Fayillar</div>
                                <div className="colum">Ish turi</div>
                                <div className="colum">Action</div>
                            </div>
                        </Container.Nav>
                    </div>
                </Container.Top>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {dataList?.map((value, index) => {
                        return (
                            <ConTable key={value.id}>
                                <div className="row">
                                    <div>{index + 1}</div>
                                    <div className="colum">
                                        {value?.status ? (
                                            <input value={value.nameUz} onChange={(e) => setDataList(dataList.map((val) => ({
                                                id: val.id,
                                                nameUz: value.id === val.id ? e.target.value : val.nameUz,
                                                nameRu: val.nameRu,
                                                studyType: val.studyType,
                                                status: val.status,
                                            })))}
                                            />
                                        ) : (
                                            <>{value.nameUz}</>
                                        )}
                                    </div>
                                    <div className="colum">2</div>
                                    <div className="colum">2</div>
                                    <div className="colum">2</div>
                                    <div className="colum">2</div>
                                    <div className="colum">2</div>
                                    <div className="colum">2</div>
                                    <div className="colum">2</div>
                                    <div className="colum">2</div>
                                    <div className="colum">2</div>
                                    <div className="colum">2</div>
                                    <div className="colum">2</div>
                                    <div className="colum">2</div>

                                    <div className="action">
                                        {value?.status ? (
                                            <Button
                                                onclick={() => editPush(value.id, index)}
                                                width={"70px"}
                                                height={"40px"}
                                                size={"18px"}
                                                radius={"5px"}
                                                border={"1px solid red"}
                                            >
                                                OK
                                            </Button>
                                        ) : (
                                            <Button onclick={() => findEditID(value.id)} width={"70px"} height={"40px"} size={"12px"} radius={"5px"} border={"1px solid red"}  > <Edit /> </Button>
                                        )}

                                        <Button onclick={() => findDeleteID(value.id)} width={"70px"} height={"40px"} size={"13px"} radius={"5px"} border={"1px solid red"}> <Trash /></Button>
                                    </div>
                                </div>
                            </ConTable>
                        );
                    })}
                </div>
            </Container.Scrool>
        </Container.Table>
    </Container>
    )
}

export default TeacherComponent

