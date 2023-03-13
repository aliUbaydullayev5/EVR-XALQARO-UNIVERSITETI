import React, {useEffect, useState} from 'react'
import Container, {Dean, Founder, Rector, Prorektor, Center, Bolim1, Bolim2,} from './stayle.js'
import {useDispatch, useSelector} from "react-redux";
import {getManagementFetch} from "../../../redux/sliceAdmin/management/boshqaruv";

export const ManagementCom = () => {

    const dispatch = useDispatch()


    // get data
    const getManagementData = useSelector(store => store.getManagementData)
    const [data, setData] = useState([])
    useEffect(() => {
        dispatch(getManagementFetch())
    }, [])
    useEffect(() => {
        setData(getManagementData.data)
    }, [getManagementData])


    function go(managements = []) {
        if (!managements.length) {
            return
        }
        go(managements.managements);

    }

    return (
        <Container>
            {/*<Founder>*/}
            {/*    <div><p>Ta’sischi</p></div>*/}
            {/*</Founder> */}

            {/*<Rector>*/}
            {/*    <div><p>Rektor</p></div>*/}
            {/*</Rector>*/}

            {/*<Prorektor>*/}
            {/*    <div><p>Prorektor</p></div>*/}
            {/*    <div><p>Prorektor</p></div>*/}
            {/*</Prorektor>*/}

            {/*<Dean>*/}
            {/*    <div><p>Dekan</p></div>*/}
            {/*    <div><p>Dekan</p></div>*/}
            {/*    <div><p>Dean</p></div>*/}
            {/*</Dean>*/}

            <Center>
                {/*{data?.map((value) => value && (        */}
                {/*    <Bolim1 key={value?.id}>*/}
                {/*        <div><p>{value?.title}</p></div>*/}
                {/*        <div><p>{value?.title}</p></div>*/}
                {/*    </Bolim1>*/}
                {/*))}*/}
                {
                    data.map(i => (
                        <Bolim1 key={i.id}>
                            <div><p>{i.name}</p></div>
                        </Bolim1>
                    ))
                }
            </Center>

        </Container>
    )
}


export default ManagementCom