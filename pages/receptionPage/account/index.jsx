import React, {useEffect} from 'react'
import Root from "../../../root";
import {getInfoUserCabinetFetch, resetStatusCode} from "../../../redux/slices/getInfoUserCabinet";
import {useDispatch, useSelector} from "react-redux";
import ShaxsiyKabinetComponent from "../../../components/personalAccount/ShaxsiyKabinetComponent";
import {useRouter} from "next/router";

const Account = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    useEffect(()=> {dispatch(getInfoUserCabinetFetch())}, [])
    const { data, status, errorCode } = useSelector((store)=> store.getInfoUserCabinet)

    useEffect(()=> {
        if(errorCode === 401 || errorCode === 403) {
            localStorage.removeItem('talaba-token')
            router.push('/auth')
            dispatch(resetStatusCode())
        }
    }, [status])

    const ruleComTypeFunc = (type) => {
        switch (type){
            case 'STUDENT': return  <ShaxsiyKabinetComponent />
            case 'BOSHQARUV': return  <div />
            case 'OQITUVCHI': return  <div />
            case 'AGENT': return  <div />
        }
    }
    return <Root>{status === 'success' && ruleComTypeFunc(data?.role?.name)}</Root>
}

export default Account