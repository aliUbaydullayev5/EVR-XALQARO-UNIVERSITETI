import Container from "./style"
import Logo from "../../assets/image/logo-icon.png"
import {Input, Button} from "../generic"
import {useEffect, useState} from "react"
import LogoMobile from "../../assets/icon/download.svg"
import {firstVerifyFetch, resetTimerVerify} from "../../redux/slices/firstVerify"
import {firstSmsCodeFetch} from "../../redux/slices/firstSmsVerifyCode"
import {startMessage} from "../../redux/slices/message"
import CustomInput from "react-phone-number-input/input"


import {useSelector, useDispatch} from "react-redux"
import {useRouter} from "next/router"
import {homeCarouselFetch} from "../../redux/slices/homeCarusel";
import Image from "next/image.js"



const FirstPageMainCom = () => {

    const router = useRouter()

    const [smsState, setSmsState] = useState('')

    const [timeLeft, setTimeLeft] = useState(2 * 60)
    const [isCounting, setIsCounting] = useState(false)
    const [minut, setMinut] = useState()
    const [secund, setSecund] = useState()

    const [hidden, setHidden] = useState(false)

    const [nameState, setNameState] = useState('')
    const [numberState, setNumberState] = useState('+998')

    // ---------------------- Redux ----------------------

    const dispatch = useDispatch()
    const {verifyCode} = useSelector((store) => store.firstVerify)
    const {pushToHome, status, message} = useSelector((store) => store.firstSmsCodeFetch)

    useEffect(()=> {
        if(pushToHome) router.push('/homePage')
        if(status === 'error') dispatch(startMessage({time: 3, message}))
    }, [pushToHome, status])

    useEffect(()=> {
        dispatch(homeCarouselFetch())
        if (localStorage.getItem('firstToken')) router.push('/homePage')
        window.replainSettings = { id: '94bba5bb-71c4-4fd4-9533-145d5ccd5b9b' };
        (function (u) {
            var s = document.createElement('script'); s.async = true; s.src = u;
            var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
        })('https://widget.replain.cc/dist/client.js');


    }, [])

    // ---------------------- Timer Logic ----------------------

    const getParTime = (time) => time.toString().padStart(2, '0')
    useEffect(()=> {
        setMinut(getParTime(Math.floor(timeLeft / 60)))
        setSecund(getParTime(timeLeft - minut * 60))
        if(minut == '00' && secund == '00' && verifyCode){
            handleStop()
            setHidden(false)
            dispatch(resetTimerVerify())
        }
    })

    useEffect(() => {
        const interval = setInterval(() => {
            if (isCounting) setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0))
        }, 1000)
        if (timeLeft === 0) setIsCounting(false)
        return () => clearInterval(interval)
    }, [isCounting])

    const handleStart = () => {
        if (timeLeft === 0) setTimeLeft(2 * 60)
        setIsCounting(true)
    }

    //------------ Timer Stop Func

    const handleStop = () => setIsCounting(false)

    useEffect(()=> {
        if(verifyCode == true) setHidden(true)
    }, [verifyCode, status])

    const pushFunc = () => {
        handleStart()
        if(nameState.length >= 3 && (numberState.match(/[0-9]+/g) || []).join('').length == 12) dispatch(firstVerifyFetch({firstName: nameState, phoneNumber: (numberState.match(/[0-9]+/g) || []).join('')}))
        else dispatch(startMessage({time: '3', message: 'The phone number is incorrect'}))
    }
    const pushSmsToBackend = () => {
        dispatch(firstSmsCodeFetch({
            verifyCode: smsState.split(' ').join(''),
            phoneNumber: (numberState.match(/[0-9]+/g) || []).join('')
        }))
    }


    return(
        <Container>
            <Container.AreaLogo>
                <div className={'logoMain'}>
                    <Image className={'logo'} src={Logo}/>
                </div>
                <Container.LogoLine />
                <Container.LogoTitle className={'g'}>
                    NAVOIY INSTITUTI  <br />
                    INNOVATSIYALAR
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
                            <Input malign={'center'} width={'356px'} mpadding={'0 0 0 0'} padding={'0 0 0 20px'} mradius={'5px'} mwidth={'80vw'} msize={'26px'} height={'60px'} mheight={'52px'} placeholder={'_ _ _ _ _ _'} align={'center'} value={smsState} maxlength={6} onchange={(e)=> setSmsState(e.target.value)} />
                            <Input align={'center'} malign={'center'} mradius={'5px'} width={'290px'} mwidth={'80vw'} msize={'26px'} height={'60px'} mheight={'52px'} placeholder={`${minut} : ${secund}`}  maxlength={'12'} mpadding={'3px 0px 0px 0px'} padding={'0 20px 0 20px'} />
                        </>
                        :
                        <>
                            <Input mpadding={'0 0 0 10px'} padding={'0 0 0 20px'} mradius={'5px'} value={nameState} mwidth={'80vw'} msize={'26px'} height={'60px'} mheight={'52px'} placeholder={'Ismingiz'} onchange={(e)=> setNameState(e.target.value)} />
                            <Container.Number>
                                <CustomInput
                                    placeholder="+998 __ ___ __ __"
                                    value={numberState}
                                    onChange={setNumberState}
                                    maxLength={17}
                                    className={'customPhoneInput'}
                                    onKeyDown={(e)=> e.key === 'Enter' && pushSmsToBackend()}
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
                        <Button mradius={'5px'} msize={'32px'}  mpadding={'5px'} mwidth={'80vw'} height={'60px'} mheight={'48px'} width={'290px'} margin={'15px 0 0 0'} onclick={()=> pushFunc()}>TASTIQLASH</Button>
                }
            </Container.Row>
        </Container>
    )
}

export default FirstPageMainCom