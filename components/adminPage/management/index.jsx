import React, {useEffect, useState} from 'react'
import Container, {Dean, Founder, Rector, Prorektor, Center, Bolim1, Bolim2,} from './stayle.js'
import {useDispatch, useSelector} from "react-redux";
import {getManagementFetch, reset} from "../../../redux/sliceAdmin/management/boshqaruv";

export const ManagementCom = () => {

    const dispatch = useDispatch()


    // get data
    const getManagementData = useSelector(store => store.getManagementData)

    // const [allData, setAllData] = useState([])
    // const [data, setData] = useState([])

    useEffect(() => {
        dispatch(getManagementFetch())
    }, [])

    // function flattenData(data) {
    //     data.forEach(item => {
    //         setAllData(prevData => [...prevData, item])
    //         if (item.managements && item.managements.length > 0) flattenData(item.managements)
    //     })
    // }
    //
    // useEffect(() => {
    //     if(getManagementData.status === 'Success') {
    //         setAllData(getManagementData.data)
    //         flattenData()
    //     }
    // }, [getManagementData])


    const [allData, setAllData] = useState([]);

    function flattenData(data) {
        if(getManagementData.status === 'success'){
            data.forEach(item => {
                setAllData(prevData => [...prevData, item])
                if (item.managements && item.managements.length > 0) flattenData(item.managements)
            })
        }

    }

    useEffect(() => {
        if(getManagementData.status === 'success'){
            flattenData(getManagementData.data)
            dispatch(reset())
            console.log('dsadasdasd')
        }
    }, [getManagementData.status])

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
                    allData.slice(0, allData.length / 2).map(i => (
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