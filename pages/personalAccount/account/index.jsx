import React, {useEffect} from 'react'
import Root from "../../../root";
import {getInfoUserCabinetFetch, resetStatusCode} from "../../../redux/slices/getInfoUserCabinet";
import {useDispatch, useSelector} from "react-redux";
import ShaxsiyKabinetComponent from "../../../components/personalAccount/ShaxsiyKabinetComponent";
import {useRouter} from "next/router";
import Agentomponent from "../../../components/personalAccount/AgentComponent";
import styled from "styled-components";
import Container from "../../../components/personalAccount/AgentAddUserComponent/style";
import {Spin} from "antd";
import {startMessage} from "../../../redux/slices/message";

const Account = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    useEffect(()=> {dispatch(getInfoUserCabinetFetch())}, [])
    const { data, status, errorCode, message } = useSelector((store)=> store.getInfoUserCabinet)

    useEffect(()=> {
        if(errorCode === 401 || errorCode === 403 || status === 'error') {
            localStorage.removeItem('access-token')
            router.push('/auth')
            dispatch(resetStatusCode())
        }
        if (status === 'error') dispatch(startMessage({time: 5, type: 'error', message}))
    }, [status])

    const ruleComTypeFunc = (type) => {
        switch (type){
            case 'STUDENT': return  <ShaxsiyKabinetComponent />
            case 'BOSHQARUV': return  <div />
            case 'OQITUVCHI': return  <div />
            case 'AGENT': return  <Agentomponent />
        }
    }


    const Container = styled.div`
      text-align: center;
      background: rgba(0, 0, 0, 0.05);	  
      border-radius: 4px;
      padding: 40px 0;
    `
    if(status === 'loading') return <Root><Container><Spin size={'large'} /></Container></Root>
    return <Root>{status === 'success' && ruleComTypeFunc(data?.role?.name)}</Root>
}

export default Account