import Container from "./style"
import {Button, Input} from "../../generic"
import CustomInput from 'react-phone-number-input/input'
import {useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {getUserIdFetch} from "../../../redux/slices/getId";


const PasswordComponent = () => {

    const dispatch = useDispatch()
    const getUserId = useSelector((store)=> store.getUserId)

    const [number, setNumber] = useState('+998')
    const pushNumber = () => dispatch(getUserIdFetch({userNumber: number}))

    return(
        <Container>
            <CustomInput className={'customPhoneInput'} value={number} onChange={(e)=> setNumber(e)} maxLength={17} />
            <Button onclick={()=> pushNumber()} msize={'22px'} mheight={'40px'} mwidth={'300px'} mradius={'5px'}>Keyingi</Button>
        </Container>
    )
}

export default PasswordComponent