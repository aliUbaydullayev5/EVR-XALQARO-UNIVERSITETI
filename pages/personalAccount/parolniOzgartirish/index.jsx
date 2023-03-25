import Root from "../../../root";
import ParolniOzgartirishComponent from "../../../components/personalAccount/parolniOzgartirishComponent";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getInfoUserCabinetFetch} from "../../../redux/slices/getInfoUserCabinet";


const ParolniOzgartirish = () => {
    const dispatch = useDispatch()
    useEffect(()=> {dispatch(getInfoUserCabinetFetch())}, [])
    const {data, status} = useSelector((store)=> store.getInfoUserCabinet)

    return(
        <Root>
            <ParolniOzgartirishComponent backPath={'/personalAccount/account'} name={`${data.lastName}, ${data.firstName}, ${data.patron}`} />
        </Root>
    )
}

export default ParolniOzgartirish