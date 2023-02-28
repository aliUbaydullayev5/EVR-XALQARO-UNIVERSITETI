
import { useRouter } from 'next/router.js'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quationgetAll } from '../../../../../redux/sliceAdmin/quation/quationgett/index.js'
import { Button } from '../../../../generic/index.jsx'

import Container, { ConTable } from './style.js'


export const QuationResalt = () => {

    const quary = useRouter()
    const dispatch = useDispatch()
    const [name, setName] = useState({
        id: 0,
        nameUz: '',
        nameRu: '',
    })

    const [dataList, setDataList] = useState([])

    const quationget = useSelector((store) => store.quationget)

    useEffect(() => {
        dispatch(quationgetAll())
    }, [quationgetAll])

    useEffect(() => {
        if (quationget.status === 'success') setDataList(quationget.data)
    })

    // useEffect(() => {
    //     if (getTalimYunalish.status === 'success') dispatch(startMessage({ time: 3, message: 'Muvofiyaqatli Yakulandi', type: 'success' }), setName({
    //         ...name, nameUz: '',
    //         ...name, nameRu: '',

    //     }))
    //     else if (getTalimYunalish.status === 'notFound') dispatch(startMessage({ time: 3, message: getStudyTypes.message }))
    //     setTimeout(() => { dispatch(reset()) }, 500);
    // }, [getTalimYunalish || deleteAbuturentId])


    // useEffect(() => { dispatch(getStudyTypesFetch({ type: 'MASTER' })) }, [])
    // useEffect((e) => {
    //     if (getTalimYunalish.status === true) setName('')
    // }, [getTalimYunalish])


    // const findDeleteID = (deleteId) => dispatch(deleteAbuturentFetch({ id: deleteId }))

    // const findEditID = (id) => {
    //     setDataList(dataList.map((value) => ({
    //         id: value.id,
    //         nameUz: value.nameUz,
    //         nameRu: value.nameRu,
    //         studyType: value.studyType,
    //         status: id === value.id ? (!value.id || true) : false
    //     })))
    // }

    // const editPush = (id) => dispatch(getTalimYunalishFetch(
    //     {
    //         id: id,
    //         nameUz: dataList[0].nameUz,
    //         nameRu: dataList[0].nameRu,
    //     }));


    // useEffect(() => {
    //     if (deleteAbuturentId.status === 'success')
    //         dispatch(getStudyTypesFetch({ type: 'MASTER' }))
    // }, [deleteAbuturentId])


    // useEffect(() => {
    //     if (getTalimYunalish.status === 'success') dispatch(getStudyTypesFetch({ type: 'MASTER' }))
    // }, [getTalimYunalish])


    // useEffect(() => {
    //     if ((getStudyTypesAbuturent.status === 'success')) setDataList(getStudyTypesAbuturent.data)
    // }, [getStudyTypesAbuturent])

    // useEffect(() => {
    //     if (editAbuturentId.status === 'success') dispatch(getStudyTypesFetch({ type: 'MASTER' }))
    // }, [editAbuturentId])
    return (
        <Container>
            <div>
                <ConTable>
                    <Container.Bottom>
                        <Container.BottomInset>
                            <Container.Nav>
                                <Container.Box>
                                    <div>№</div>
                                    <div>Imthon Fani</div>
                                    <div>Savol Uz</div>
                                    <div><b>A</b> &nbsp; JavobUz </div>
                                    <div><b>B</b> &nbsp;JavobUz </div>
                                    <div><b>C</b>&nbsp;JavobUz </div>
                                    <div><b>D</b>&nbsp;JavobUz </div>
                                    <div>Savol Ru</div>
                                    <div><b>A</b> &nbsp; JavobRu</div>
                                    <div><b>B</b>&nbsp; JavobRu</div>
                                    <div><b>C</b> &nbsp; JavobRu </div>
                                    <div><b>D</b> &nbsp; JavobRu </div>
                                    <div>Tahrirlash </div>
                                </Container.Box>
                            </Container.Nav>
                            {
                                dataList?.map((value, ind) => (
                                    <Container.Section key={value.id}>
                                        <Container.Map>
                                            <div>{ind + 1}</div>
                                            <div>{value?.examSubject?.name}</div>
                                            <div>{value?.textUz}</div>
                                            <div><b>A</b> &nbsp; &nbsp;{value?.answers[0]?.nameUz}</div>
                                            <div><b>B</b>&nbsp; &nbsp; {value?.answers[1]?.nameUz}</div>
                                            <div><b>C</b>&nbsp; &nbsp; {value?.answers[2]?.nameUz}</div>
                                            <div><b>D</b>&nbsp; &nbsp; {value?.answers[3]?.nameUz}</div>
                                          
                                            <div>{value?.textRu}</div>
                                            <div><b>A</b> &nbsp; &nbsp;{value?.answers[0]?.nameRu}</div>
                                            <div><b>B</b>&nbsp; &nbsp; {value?.answers[1]?.nameRu}</div>
                                            <div><b>C</b>&nbsp; &nbsp; {value?.answers[2]?.nameRu}</div>
                                            <div><b>D</b>&nbsp; &nbsp; {value?.answers[3]?.nameRu}</div>
                                        </Container.Map>
                                    </Container.Section>
                                ))
                            }
                        </Container.BottomInset>
                    </Container.Bottom>
                </ConTable>
            </div>
        </Container>
    )
}

export default QuationResalt