import { useRouter } from 'next/router.js'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { examsubjectCreatePost } from '../../../../../redux/sliceAdmin/exam/exsamsubjectcreate/index.js'
import Button from '../../../../generic/Button/index.jsx'
import Input from '../../../../generic/Input/index.jsx'
import Edit from "../../../../../assets/icons/edit.svg"
import Trash from "../../../../../assets/icons/trash.svg"
import Container, { Antmodal, AntSelect, ConTable, Wrapper } from './style.js'
import { examdeleteIdFetch } from '../../../../../redux/sliceAdmin/exam/examdeleteId/index.js'
import { startMessage } from '../../../../../redux/slices/message/index.js'
import { reset } from '../../../../../redux/sliceAdmin/talimyunlishAdd/index.js'
import { getAllexamsubjectFetch } from "../../../../../redux/sliceAdmin/exam/getAllexamsubject";
import Plus from "../../../../../assets/icons/plus.svg";
import CustomInput from 'react-phone-number-input/input'
import { groupGetFetch } from '../../../../../redux/sliceAdmin/group/getbook.js'
import { genderData } from '../../../../Mock/facultyType/index.js'
import { getManagementFetch } from '../../../../../redux/sliceAdmin/management/boshqaruv/index.js'
import { contentPriceGetFetch } from '../../../../../redux/sliceAdmin/moliyaSlices/contentPrice/contentPriceGet/index.js'

export const TeacherComponent = () => {
    const quary = useRouter()
    const dispatch = useDispatch()

    const [open, setOpen] = useState(false)
    const [phoneFace, setphoneFace] = useState('+998')
    const [content, setcontent] = useState([]);
    const [dataList, setDataList] = useState([])
    const [group, setGroup] = useState([])

    const [dataPush, setDataPush] = useState({
        firstName: '',
        lastName: '',
        patron: '',
        phoneNumber: '',
        date: '',
        managementId: '',
        password: '',
        gender: '',
        lessonTime: '',
        premiumId: '',
        logoId: '',
        type: '',
        documents: '',
        contentPriceId: '',
    })

    const [manegemnt, setManegemnt] = useState([])
    const getAllexamsubject = useSelector((store) => store.getAllexamsubject)
    const examsubjectcreate = useSelector((store) => store.examsubjectcreate)
    const examdeleteId = useSelector((store) => store.examdeleteId)
    const groupGet = useSelector((store) => store.groupGet);
    const getManagementData = useSelector((store) => store.getManagementData);
    const contentPriceGet = useSelector((store) => store.contentPriceGet);






    useEffect(() => {
        if (examsubjectcreate.status === 'success') dispatch(startMessage({ time: 3, message: 'Muvofiyaqatli Yakulandi', type: 'success' })), setDataPush({ ...name, nameUz: '', nameRu: '' })
        else if (examsubjectcreate.status === 'notFound') dispatch(startMessage({ time: 3, message: examsubjectcreate.message.split('_').join(' ') }))
        setTimeout(() => { dispatch(reset()) }, 500);
    }, [examsubjectcreate])

    useEffect(() => {
        if (examdeleteId.status === 'success') dispatch(startMessage({ time: 3, message: 'Muvofiyaqatli Yakulandi', type: 'success' })), setDataPush({ ...name, nameUz: '', nameRu: '' })
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

    // useEffect(() => {
    //     dispatch(contentPriceGetFetch())
    // }, [contentPriceGetFetch])
    useEffect(() => {
        if (open === true) dispatch(groupGetFetch())
        if (open === true) dispatch(getManagementFetch())
        if (open === true) dispatch(contentPriceGetFetch())
    }, [groupGetFetch, contentPriceGetFetch, open])

    useEffect(() => {
        if (getAllexamsubject.status === 'success') setDataList(getAllexamsubject.data)
        if (groupGet.status === 'success') setGroup(groupGet.data)
        if (getManagementData.status === 'success') setManegemnt(getManagementData.data)
        if (contentPriceGet.status === 'success') setcontent(contentPriceGet.data)
    }, [getAllexamsubject, groupGet, getManagementData, contentPriceGet])

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
    // delete id 
    const findDeleteID = (findDeleteID) => dispatch(examdeleteIdFetch({ id: findDeleteID }))
    // add funck


    const modalAdd = () => setOpen(true)
    const handleCancel = () => setOpen(false);

    // // hours change secondd
    // function handleTimeChange(event) {
    //     const timeValue = event.target.value;
    //     const timeInMilliseconds = new Date(`1970-01-01T${timeValue}:00Z`).getTime()
    //     setDataPush({ ...dataPush, date: timeInMilliseconds })
    // }

    // date conver long
    const dates = new Date(dataPush.date)
    const timestamp = dates.getTime()

    console.log(dataPush, 'contendataPushtPriceGet ');
    console.log(timestamp,'timestamp');

    const addFacultet = () => dispatch(examsubjectCreatePost({
        id: 0,
        nameUz: name?.nameUz,
        nameRu: name?.nameRu,
    }))
    return (<Container>
        <Container.Bottom>
            <h1>O’qtuvchilar </h1>
            <Antmodal open={open} onOk={addFacultet} onCancel={handleCancel}>
                <Container.Add>
                    <div>
                        <div className='inputCon'>
                            <p>Ismi *</p>
                            <Input onchange={(e) => setDataPush({ ...dataPush, firstName: e.target.value })} bc={"#241F69"} width={'470px'} height={'40px'} radius={'0px'} padding={'10px'} size={'19px'} margin={'10px 0px 0px 0px'} placeholder={'Ismi'} />
                        </div>
                        <br />
                        <div className='inputCon'>
                            <p>Otasining ismi</p>
                            <Input onchange={(e) => setDataPush({ ...dataPush, patron: e.target.value })} bc={"#241F69"} width={'470px'} height={'40px'} radius={'0px'} padding={'10px'} size={'19px'} margin={'10px 0px 0px 0px'} placeholder={'Otasining ismi'} />
                        </div>
                        <br />
                        <Container.Grid>
                            <div>
                                <p>Guruh</p>
                                <AntSelect
                                    style={{ width: '230px', }}
                                    placeholder='Guruh'
                                    optionFilterProp="children"
                                    options={groupGet.status === 'success' && group?.map((value) => ({
                                        value: value.id,
                                        label: value.name,
                                    })) || []}
                                    onChange={(e) => setDataPush({ ...dataPush, group: e })}
                                />
                            </div>

                            <div>
                                <p>Boshqaruv *</p>
                                <AntSelect
                                    style={{ width: '230px', }}
                                    placeholder='Boshqaruv *'
                                    optionFilterProp="children"
                                    options={getManagementData.status === 'success' && manegemnt?.map((value) => ({
                                        value: value.id,
                                        label: value.name,
                                    })) || []}
                                    onChange={(e) => setDataPush({ ...dataPush, managementId: e })}
                                />
                            </div>
                        </Container.Grid>

                        <Container.Grid>

                            <div>
                                <p>Ish turi **</p>
                                <AntSelect
                                    style={{ width: '230px', }}
                                    placeholder='Ish turi *'
                                    optionFilterProp="children"
                                    options={content?.map((value) => ({
                                        value: value.id,
                                        label: value.name,
                                    })) || []}
                                    onChange={(e) => setDataPush({ ...dataPush, contentPriceId: e })}
                                />
                            </div>

                            <div>
                                <p>Jinsi*</p>
                                <AntSelect
                                    style={{ width: '230px', }}
                                    placeholder='Jinsi*'
                                    optionFilterProp="children"
                                    options={genderData?.map((value) => ({
                                        value: value.gender,
                                        label: value.name,
                                    })) || []}
                                    onChange={(e) => setDataPush({ ...dataPush, gender: e })}
                                />
                            </div>
                        </Container.Grid>
                    </div>
                    <div>
                        <div className='inputCon'>
                            <p>Familiya *</p>
                            <Input onchange={(e) => setDataPush({ ...dataPush, lastName: e.target.value })} radius={'0xp'} bc={"#241F69"} width={'470px'} height={'40px'} padding={'10px'} size={'19px'} margin={'10px 0px 0px 0px'} placeholder={'Familiya *'} />
                        </div>
                        <br />
                        <div className='inputCon'>
                            <p>Paroli *</p>
                            <Input onchange={(e) => setDataPush({ ...dataPush, password: e.target.value })} radius={'0xp'} bc={"#241F69"} width={'470px'} height={'40px'} padding={'10px'} size={'19px'} margin={'10px 0px 0px 0px'} placeholder={'Paroli *'} />
                        </div>
                        <br />
                        <Container.Grid>
                            <div>
                                <p>Telefon raqami *</p>
                                <Container.PhoneIn>
                                    <CustomInput
                                        maxLength={17}
                                        className={'customPhoneInput'}
                                        onChange={(e) => setDataPush({ ...dataPush, phoneNumber: e })}
                                        value={phoneFace}
                                    />
                                </Container.PhoneIn>
                            </div>

                            <div>
                                <p>Tug’ilgan sanasi *</p>
                                <Input radius={'0xp'} onchange={(e) => setDataPush({ ...dataPush, date: e.target.value })} min="1950-01-01" max="9999-12-31" bc={"#241F69"} mheight={'48px'} msize={'20px'} mwidth={'175px'} mpadding={'0px 18px'} height={'45px'} size={'23px'} width={'230px'} type="date" id="start" name="trip-start" />
                            </div>
                        </Container.Grid>

                        <Container.Grid>
                            <div>
                                <p>Premium *</p>
                                <Input onchange={(e) => setDataPush({ ...dataPush, premiumId: e.target.value })} bc={"#241F69"} width={'230px'} height={'40px'} radius={'5px'} mwidth={'470px'} mheight={'40px'} mradius={'5px'} padding={'10px'} size={'19px'} margin={'10px 0px 0px 0px'} placeholder={'Premium *'} />
                            </div>
                            <div>
                                <p>Dars Vaqti*</p>
                                <Input onchange={(e) => setDataPush({ ...dataPush, lessonTime: e.target.value })} radius={'0xp'} bc={"#241F69"} height={'45px'} width={'230px'} mheight={'45px'} mwidth={'230px'} mradius={'0px'} padding={'10px'} size={'19px'} margin={'10px 0px 0px 0px'} placeholder={'Dars Vaqti *'} />

                            </div>
                        </Container.Grid>
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

