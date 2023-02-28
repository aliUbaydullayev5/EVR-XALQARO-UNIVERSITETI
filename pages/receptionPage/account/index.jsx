import React, {useEffect} from 'react'
import Root from "../../../root";
import {getInfoUserCabinetFetch} from "../../../redux/slices/getInfoUserCabinet";
import {useDispatch, useSelector} from "react-redux";
import ShaxsiyKabinetComponent from "../../../components/personalAccount/ShaxsiyKabinetComponent";

const Account = () => {
    const dispatch = useDispatch()
    useEffect(()=> {dispatch(getInfoUserCabinetFetch())}, [])
    const { data, status } = useSelector((store)=> store.getInfoUserCabinet)

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