import Container from './style'
import Logo from '../../assets/icon/firstlogo.svg'


import {Input, Button} from "../generic";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

import LogoMobile from '../../assets/icon/download.svg'


const FirstPageMainCom = () => {

    const router = useRouter()

    const [numState, setNumState] = useState('')
    const [length, setLength] = useState(0)



    const changeNumState = (event) => {
        setNumberState(event)
        if(length < event.length){
            setLength(event.length-1)
            if(event.length == 2){
                return setNumState(event+' ')
            }
            if(event.length == 6){
                return setNumState(event+' ')
            }
            if(event.length == 9){
                return setNumState(event+' ')
            }
        }
        if(length >= event.length){
            setLength(event.length)
            setNumState(event)
        }
        return setNumState(event)
    }
    const numberType=()=>{
        consloe.log(setNumState ,'d')
    }

    const [hidden, setHidden] = useState(false)
    const getParTime = (time) => time.toString().padStart(2, '0')
    const [timeLeft, setTimeLeft] = useState(2 * 60)
    const [isCounting, setIsCounting] = useState(false)
    const [minut, setMinut] = useState()
    const [secund, setSecund] = useState()
    useEffect(()=> {
        setMinut(getParTime(Math.floor(timeLeft / 60)))
        setSecund(getParTime(timeLeft - minut * 60))
    })
    useEffect(()=> {
        const interval = setInterval(()=> {
            if(isCounting) setTimeLeft((timeLeft)=> (timeLeft >= 1 ? timeLeft - 1 : 0))
        }, 1000)
        if(timeLeft === 0) setIsCounting(false)
        return ()=> clearInterval(interval)
    }, [isCounting])

    const handleStart = () => {
        if(timeLeft === 0) setTimeLeft(2 * 60)
        setIsCounting(true)
    }
    const handleStop = () => setIsCounting(false)
    const handleReset = () => {
        setIsCounting(false)
        setTimeLeft(2 * 60)
    }


    const [errorRed, setErrorRed] = useState(true)
    const [nameState, setNameState] = useState('')
    const [numberState, setNumberState] = useState('')

    useEffect(()=> {
        setErrorRed(true)
    }, [nameState, numberState])


    const pushFunc = () => {
        if(nameState.length >= 3 && numberState.length == 12){
            setHidden(!hidden)
            handleStart()
            if(hidden === true){
                router.push('/homePage')
            }
        }else{
            setErrorRed(false)
        }
    }


    const [numState1, setNumState1] = useState('')
    const [length1, setLength1] = useState(0)

    const changeNumState1 = (event) => {
        setNumberState(event)
        if(length1 < event.length){
            setLength1(event.length-1)
            if(event.length == 2){
                return setNumState1(event+' ')
            }
            if(event.length == 6){
                return setNumState1(event+' ')
            }
            if(event.length == 9){
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
                            <Input  malign={'center'} width={'356px'} mpadding={'0 0 0 0'} padding={'0 0 0 20px'} mradius={'5px'} mwidth={'80vw'} msize={'26px'} height={'60px'} mheight={'52px'} placeholder={'_ _ _ _ _ _'} align={'center'} value={numState1} onchange={(e)=> changeNumState1(e.target.value)} />
                            <Input align={'center'} malign={'center'} mradius={'5px'} width={'290px'} mwidth={'80vw'} msize={'26px'} height={'60px'} mheight={'52px'} placeholder={`${minut} : ${secund}`}  maxlength={'12'} mpadding={'3px 0px 0px 0px'} padding={'0 20px 0 20px'} />
                        </>
                        :

                        <>
                            <Input merror={!errorRed} error={!errorRed} mpadding={'0 0 0 10px'} padding={'0 0 0 20px'} mradius={'5px'} mwidth={'80vw'} msize={'26px'} height={'60px'} mheight={'52px'} placeholder={'Ismingiz'} onchange={(e)=> setNameState(e.target.value)} />
                            {/*<input style={ errorRed ? {} : {border: '5px solid red'}} type={'text'} onChange={(e)=> setNameState(e.target.value)} />*/}
                            <Container.Number>
                                <Input  merror={!errorRed} error={!errorRed} mradius={'5px'} mwidth={'80vw'} msize={'26px'} height={'60px'} mheight={'52px'} placeholder={'__ ___ __ __'} maxlength={'12'} mpadding={'3px 0px 0px 77px'} padding={'3px 0px 0px 97px'} value={numState} onchange={(e)=> changeNumState(e.target.value)} />
                                <Container.FormatNumber>+998</Container.FormatNumber>
                            </Container.Number>
                        </>
                }
            </Container.Row>
            <Container.Row js={'end'} mjs={'center'}>
                <Button mradius={'5px'} msize={'32px'}  mpadding={'5px'} mwidth={'80vw'} height={'60px'} mheight={'48px'} width={'290px'} margin={'15px 0 0 0'} onclick={()=> pushFunc()}>KIRISH</Button>
            </Container.Row>
        </Container>
    )
}

export default FirstPageMainCom