import Container from './style'
import Logo from '../../assets/icon/firstlogo.svg'
import {Input, Button} from "../generic"
import {useRouter} from "next/router"
import {useEffect, useState} from "react"
import LogoMobile from '../../assets/icon/download.svg'
import {firstVerifyFetch, resetTimerVerify} from "../../redux/slices/firstVerify"
import {useSelector, useDispatch} from 'react-redux'
import {firstSmsCodeFetch} from "../../redux/slices/firstSmsVerifyCode"
import {startMessage} from "../../redux/slices/message";
import CustomInput from 'react-phone-number-input/input';
const FirstPageMainCom = () => {

    const router = useRouter()

    const [numState, setNumState] = useState('')
    const [length, setLength] = useState(0)

    const [numState1, setNumState1] = useState('')
    const [length1, setLength1] = useState(0)

    const [timeLeft, setTimeLeft] = useState(2 * 60)
    const [isCounting, setIsCounting] = useState(false)
    const [minut, setMinut] = useState()
    const [secund, setSecund] = useState()

    const [hidden, setHidden] = useState(false)

    const [nameState, setNameState] = useState('')
    const [numberState, setNumberState] = useState('+998')

    const [errorRed, setErrorRed] = useState(true)


    // ---------------------- Redux ----------------------

    const dispatch = useDispatch()
    const {verifyCode} = useSelector((store) => store.firstVerify)
    const {pushToHome} = useSelector((store)=> store.firstSmsCodeFetch)

    // ---------------------- Empty area for input Logic ----------------------


    const changeNumState1 = (event) => {
        setNumberState(event)
        if(length1 < event.length){
            setLength1(event.length-1)
            if(event.length == 3){
                return setNumState1(event+' ')
            }
        }
        if(length1 >= event.length){
            setLength1(event.length)
            setNumState1(event)
        }
        if(nameState)
        return setNumState1(event)

    }
  




    // ---------------------- Timer Logic ----------------------

    const getParTime = (time) => time.toString().padStart(2, '0')

    useEffect(()=> {
        setMinut(getParTime(Math.floor(timeLeft / 60)))
        setSecund(getParTime(timeLeft - minut * 60))
        if(minut == '00' && secund == '00' ){
            setHidden(false)
            dispatch(resetTimerVerify())
        }
    })

    useEffect(()=> {
        const interval = setInterval(()=> {
            if(isCounting) setTimeLeft((timeLeft)=> (timeLeft >= 1 ? timeLeft - 1 : 0))
        }, 1000)
        if(timeLeft === 0) {
            setIsCounting(false)
        }
        return ()=> clearInterval(interval)
    }, [isCounting])



    //------------ Timer Start Func
    const handleStart = () => {
        if(timeLeft === 0) setTimeLeft(2 * 60)
        setIsCounting(true)
    }

    // ---------------------- Input filter Logic ----------------------


    // for check input filters

    // useEffect(()=> {
    //     setErrorRed(true)
    // }, [nameState, numberState])

    useEffect(()=> {
        if(nameState.length >= 3 && numberState.length == 12 || verifyCode){
            handleStart()
            setHidden(true)
        }
    }, [verifyCode])


    // push request
    const pushFunc = () => {
        if(nameState.length >= 3 && numberState.length == 12){
            dispatch(firstVerifyFetch({firstName: nameState, phoneNumber: numberState.split(' ').join('')}))
        }else{
            dispatch(startMessage({time: '3', message: 'The phone number is incorrect'}))
            setErrorRed(false)
        }
        console.log(numberState)
    }


    // ---------------------- Sms Code Logic ----------------------

    const pushSmsToBackend = () => {
        dispatch(firstSmsCodeFetch({verifyCode: numState1.split(' ').join(''), phoneNumber: '998'+numState.split(' ').join('')}))
    }

    useEffect(()=> {
        if(pushToHome) router.push('/homePage')
        if(localStorage.getItem('firstToken')) router.push('/homePage')
    }, [pushToHome])


    return(
        <Container>
            <Container.AreaLogo>
                <div className={'logoMain'}>
                    <Logo className={'logo'} />
                </div>
                <Container.LogoLine />
                <Container.LogoTitle className={'g'}>
                    EVR XALQARO <br />
                    UNIVERSITETI
                </Container.LogoTitle>
            </Container.AreaLogo>

            <Container.AreaLogoMobile>
                <div>
                    <LogoMobile alt={'logo'} className={'logo'} />
                </div>
                <Container.MobileText>
                    <b>  </b>
                     EVR XALQARO <br />
                    UNIVERSITETI
                </Container.MobileText>
            </Container.AreaLogoMobile>

            <Container.Title>
                Bizning saytimizga <br />
                xush kelibsiz, sizning <br />
                tashrifingizdan minnatdormiz.
            </Container.Title>
            <Container.SubTitle>
                Saytga kirish uchun ismingiz va telefon <br />
                raqamingizni qoldiring.
            </Container.SubTitle>
            <Container.Row mjs={'center'}>
                {
                    hidden ?
                        <>
                            <Input malign={'center'} width={'356px'} mpadding={'0 0 0 0'} padding={'0 0 0 20px'} mradius={'5px'} mwidth={'80vw'} msize={'26px'} height={'60px'} mheight={'52px'} placeholder={'_ _ _ _ _ _'} align={'center'} value={numState1} maxlength={7} onchange={(e)=> changeNumState1(e.target.value)} />
                            <Input align={'center'} malign={'center'} mradius={'5px'} width={'290px'} mwidth={'80vw'} msize={'26px'} height={'60px'} mheight={'52px'} placeholder={`${minut} : ${secund}`}  maxlength={'12'} mpadding={'3px 0px 0px 0px'} padding={'0 20px 0 20px'} />
                        </>
                        :
                        <>
                            <Input mpadding={'0 0 0 10px'} padding={'0 0 0 20px'} mradius={'5px'} value={nameState} mwidth={'80vw'} msize={'26px'} height={'60px'} mheight={'52px'} placeholder={'Ismingiz'} onchange={(e)=> setNameState(e.target.value)} />
                            <Container.Number>
                                <CustomInput
                                    placeholder="Enter phone number"
                                    value={numberState}
                                    onChange={setNumberState}
                                    maxLength={17}
                                    className={'customPhoneInput'}
                                />

                            </Container.Number>
                        </>
                }
            </Container.Row>
            <Container.Row js={'end'} mjs={'center'}>
                {
                    hidden ?
                        <Button mradius={'5px'} msize={'32px'}  mpadding={'5px'} mwidth={'80vw'} height={'60px'} mheight={'48px'} width={'290px'} margin={'15px 0 0 0'} onclick={()=> pushSmsToBackend()}>KIRISH</Button>
                        :
                        <Button mradius={'5px'} msize={'32px'}  mpadding={'5px'} mwidth={'80vw'} height={'60px'} mheight={'48px'} width={'290px'} margin={'15px 0 0 0'} onclick={()=> pushFunc()}>KIRISH</Button>
                }
            </Container.Row>
        </Container>
    )
}

export default FirstPageMainCom