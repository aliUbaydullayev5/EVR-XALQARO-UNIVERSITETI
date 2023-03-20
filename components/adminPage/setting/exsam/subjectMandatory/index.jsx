import { useRouter } from 'next/router.js'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { examsubjectCreatePost } from '../../../../../redux/sliceAdmin/exam/exsamsubjectcreate'
import Button from '../../../../generic/Button'
import Input from '../../../../generic/Input'
import Container, { ConTable } from './style.js'
import { startMessage } from '../../../../../redux/slices/message'
import { reset } from '../../../../../redux/sliceAdmin/talimyunlishAdd'
import {subjectMandatoryFetch} from "../../../../../redux/sliceAdmin/majburiy-fanlar/majburiy-fanlar-fetch";
import {Antmodal} from "../../libary/bookLaunguage/style";
import Plus from "../../../../../assets/icons/plus.svg";
import Edit from "../../../../../assets/icons/edit.svg";


export const SubjectMandatory = () => {
    const quary = useRouter()
    const dispatch = useDispatch()

    const [name, setName] = useState({
        nameUz: '',
        nameRu: '',
    })
    const [dataList, setDataList] = useState([])
    const [open, setOpen] = useState(false)

    const getAllexamsubject = useSelector((store) => store.subjectMandatoryData)
    const examsubjectcreate = useSelector((store) => store.examsubjectcreate)



    useEffect(() => {
        if (examsubjectcreate.status === 'success') dispatch(startMessage({ time: 3, message: 'Muvofiyaqatli Yakulandi', type: 'success' })), setName({...name, nameUz: '', nameRu:''});
        else if (examsubjectcreate.status === 'notFound') dispatch(startMessage({ time: 3, message: examsubjectcreate.message.split('_').join(' ') }))
        setTimeout(() => { dispatch(reset()) }, 500);
    }, [examsubjectcreate])



    useEffect(() => {
        if ((examsubjectcreate.status === 'success'))
            dispatch(subjectMandatoryFetch())
    }, [examsubjectcreate])


    useEffect(() => {
        dispatch(subjectMandatoryFetch())
    }, [subjectMandatoryFetch])

    useEffect(() => {
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

    const editPush = (id, i) => dispatch(examsubjectCreatePost({
        id: id,
        nameUz: dataList[i].nameUz,
        nameRu: dataList[i].nameRu,
        important: true
    }))
    const addFacultet = () => dispatch(examsubjectCreatePost({
        id: 0,
        nameUz: name?.nameUz,
        nameRu: name?.nameRu,
        important: true
    }))
    const modalAdd = () => setOpen(true)
    const handleCancel = () => setOpen(false);

    return (
        <Container>
            <Container.Bottom>
                <h1>Majburiy Fanlar</h1>
                <Antmodal open={open} onOk={addFacultet} onCancel={handleCancel}>
                    <Container.Add>
                        <div>
                            <h1>Majburiy Fan yaratish</h1>
                        </div>
                        <br />
                        <div>
                            <p>Yunalish nomi</p>
                        </div> <br />
                        <div>
                            <Input onchange={(e) => setName({...name, nameUz: e.target.value} )} value={name.nameUz} mwidth={"240px"} mheight={"40px"} width={"340px"} height={"45px"} padding={"0px 10px"} size={"20px"} radius={"5px"} placeholder={`Nomi`} />
                            <Input onchange={(e) => setName({...name, nameRu: e.target.value} )} value={name.nameRu} mwidth={"240px"} mheight={"40px"} width={"340px"} height={"45px"} padding={"0px 10px"} size={"20px"} radius={"5px"} placeholder={`Nomi`} />
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
                                    <div className="colum nocopy">Nomi</div>
                                    <div className="colum nocopy">Vaqt</div>

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
                                                    status: val.status, })) )}
                                                />
                                            ) : (
                                                <>{value.nameUz}</>
                                            )}
                                        </div>
                                        <div className="colum">
                                            {value?.status ? (
                                                <input
                                                    value={value.nameRu}
                                                    onChange={(e) =>
                                                        setDataList(
                                                            dataList.map((val) => ({
                                                                id: val.id,
                                                                nameUz: val.nameUz,
                                                                nameRu:
                                                                    value.id === val.id
                                                                        ? e.target.value
                                                                        : val.nameRu,
                                                                studyType: val.studyType,
                                                                status: val.status,
                                                            }))
                                                        )}
                                                />
                                            ) : (
                                                <>{value.nameRu}</>
                                            )}
                                        </div>
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

export default SubjectMandatory