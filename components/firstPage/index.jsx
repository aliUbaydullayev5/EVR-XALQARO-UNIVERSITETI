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


    const [hidden, setHidden] = useState(false)

    const changeNumState = (event) => {
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



    const [minut, setMinut] = useState(null)
    const [secund, setSecund] = useState(null)

    const getParTime = (time) => time.toString().padStart(2, '0')

    const [timeLeft, setTimeLeft] = useState(2 * 60)
    const [isCounting, setIsCounting] = useState(false)

    let minutes = getParTime(Math.floor(timeLeft / 60))
    let secondResult = getParTime(timeLeft - minutes * 60)

    // setMinut(minutes)
    // setSecund(secondResult)

    console.log(minut, secund)

    useEffect(()=> {
        const interval = setInterval(()=> {
            isCounting &&
            setTimeLeft((timeLeft)=> (timeLeft >= 1 ? timeLeft - 1 : 0))

        }, 1000)

        if(timeLeft === 0) setIsCounting(false)
        return () => {
            clearInterval(interval)
        }
    }, [])


    const handleStart = () => {
        if(timeLeft === 0) setTimeLeft(2 * 60)
        setIsCounting(true)
    }
    const handleStop = () => {
        setIsCounting(false)
    }
    const handleReset = () => {
        setIsCounting(false)
        setTimeLeft(2 * 60)
    }


    return(
        <Container>


            {/*<h1>{minut} : {second}</h1>*/}

            {
                isCounting ?
                    <button onClick={()=> handleStop()}>Stop</button>
                    :
                    <button onClick={()=> handleStart()}>Start</button>
            }
            <button onClick={()=> handleReset()}>Reset</button>



            {/*<Container.AreaLogo>*/}
            {/*    <div className={'logoMain'}>*/}
            {/*        <Logo className={'logo'} />*/}
            {/*    </div>*/}
            {/*    <Container.LogoLine />*/}
            {/*    <Container.LogoTitle className={'g'}>*/}
            {/*        EVR XALQARO <br />*/}
            {/*        UNIVERSITETI*/}
            {/*    </Container.LogoTitle>*/}
            {/*</Container.AreaLogo>*/}

            {/*<Container.AreaLogoMobile>*/}
            {/*    <div>*/}
            {/*        <LogoMobile alt={'logo'} className={'logo'} />*/}
            {/*    </div>*/}
            {/*    <Container.MobileText>*/}
            {/*        /!* <Image src={textLgo} alt={'text of logo'} className={'textLogo'} /> *!/*/}
            {/*        <b>  </b>*/}
            {/*         EVR XALQARO <br />*/}
            {/*        UNIVERSITETI*/}
            {/*    </Container.MobileText>*/}
            {/*</Container.AreaLogoMobile>*/}

            {/*<Container.Title>*/}
            {/*    Bizning saytimizga <br />*/}
            {/*    xush kelibsiz, sizning <br />*/}
            {/*    tashrifingizdan minnatdormiz.*/}
            {/*</Container.Title>*/}
            {/*<Container.SubTitle>*/}
            {/*    Saytga kirish uchun ismingiz va telefon <br />*/}
            {/*    raqamingizni qoldiring.*/}
            {/*</Container.SubTitle>*/}
            {/*<Container.Row mjs={'center'}>*/}
            {/*    {*/}
            {/*        hidden ?*/}
            {/*            <>*/}
            {/*                <Input width={'356px'} mpadding={'0 0 0 10px'} padding={'0 0 0 20px'} mradius={'5px'} mwidth={'80vw'} msize={'26px'} height={'60px'} mheight={'52px'} placeholder={'_ _ _ _ _ _'} align={'center'} />*/}
            {/*                <Input align={'center'} mradius={'5px'} width={'290px'} mwidth={'80vw'} msize={'26px'} height={'60px'} mheight={'52px'} placeholder={`${minutes} : ${second}`}  maxlength={'12'} mpadding={'3px 0px 0px 77px'} padding={'0 20px 0 20px'} />*/}
            {/*            </>*/}
            {/*            :*/}
            {/*            <>*/}
            {/*                <Input mpadding={'0 0 0 10px'} padding={'0 0 0 20px'} mradius={'5px'} mwidth={'80vw'} msize={'26px'} height={'60px'} mheight={'52px'} placeholder={'Ismingiz'}  />*/}
            {/*                <Container.Number>*/}
            {/*                    <Input mradius={'5px'} mwidth={'80vw'} msize={'26px'} height={'60px'} mheight={'52px'} placeholder={'__ ___ __ __'} maxlength={'12'} mpadding={'3px 0px 0px 77px'} padding={'3px 0px 0px 97px'} value={numState} onchange={(e)=> changeNumState(e.target.value)} />*/}
            {/*                    <Container.FormatNumber>+998</Container.FormatNumber>*/}
            {/*                </Container.Number>*/}
            {/*            </>*/}
            {/*    }*/}
            {/*</Container.Row>*/}
            {/*<Container.Row js={'end'} mjs={'center'}>*/}
            {/*    <Button mradius={'5px'} msize={'32px'}  mpadding={'5px'} mwidth={'80vw'} height={'60px'} mheight={'48px'} width={'290px'} margin={'15px 0 0 0'} onclick={()=> router.push('/homePage')}>KIRISH</Button>*/}
            {/*</Container.Row>*/}
        </Container>
    )
}

export default FirstPageMainCom