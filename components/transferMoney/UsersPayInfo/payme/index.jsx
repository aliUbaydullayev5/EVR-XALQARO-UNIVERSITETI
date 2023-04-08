import Container, { BoxCon, ImgBox, TextCon } from './style.js'
import Payme from "../../../../assets/icons/payme.png"

import { Button, Input } from '../../../generic'
import Orqaga from "../../../../assets/icons/orqaga.svg"
import { useRouter } from 'next/router.js'
import React, { useState } from "react";
import Image from 'next/image.js'

// mobile Img 
import PaymeMobile from "../../../../assets/mobile/image/payme.png"



export const Paymepay = () => {
    const query = useRouter()
    const [numState, setNumState] = useState('')
    const [length, setLength] = useState(0)
    const changeNumState = (event) => {
        if (length < event.length) {
            setLength(event.length - 1)
            if (event.length == 4) {
                return setNumState(event + ' ')
            }
            if (event.length == 9) {
                return setNumState(event + ' ')
            }
            if (event.length == 14) {
                return setNumState(event + ' ')
            }
        }
        if (length >= event.length) {
            setLength(event.length)
            setNumState(event)
        }
        return setNumState(event)
    }

    const [numState1, setNumState1] = useState('')
    const [length1, setLength1] = useState(0)

    const changeNumState1 = (event) => {
        if (length1 < event.length) {
            setLength1(event.length - 1)
            if (event.length == 2) {
                return setNumState1(event + ' / ')
            }
        }
        if (length1 >= event.length) {
            setLength1(event.length)
            setNumState1(event)
        }
        return setNumState1(event)
    }
    // onchange={(e) => changeMumPass(e.target.value)} value={numPasSeriya} maxlength={'12'}
    return (
        <Container>
            <TextCon>
                <h1>
                    G’ulomov Elbek Ilg‘or o‘g‘li
                </h1>
            </TextCon>
            <BoxCon>
                <ImgBox>
                    <Image alt='rasm' src={Payme} className={'border'} />
                    <Image alt='rasm' src={PaymeMobile} className={'ClickMobile'} />
                </ImgBox>
                <div>
                    <p className='textSmall'>To‘lov miqdori</p>
                    <Input mradius='5px' mpadding='0px 0px 0px 20px' mwidth="136px" mheight="36px" msize='13px' width="410px" disabled={true} defaultValue="150 000 so’m" height="48px" />
                </div>
            </BoxCon>

            <BoxCon>
                <div>
                    <p className='textSmall'>Karta raqamingizni kiriting</p>
                    <Input mradius='5px' mpadding='0px 0px 0px 20px' mwidth="196px" mheight="20px" msize='13px' size="30px" width="410px" height="55px" placeholder="0000 0000 0000 0000 " maxlength={'19'} margin='10px 0px 0px 0px' value={numState} onchange={(e) => changeNumState(e.target.value)} />
                </div>
                <div className='InputLeft'>
                    <p className='textSmall'>Amal qilish muddati</p>
                    <Input mradius='5px' msize="16px" minwidth={'84px'} mpadding='0px 0px 0px 20px' mwidth='84px' width='234px' mheight="21px" height='36px' placeholder="мм/гг" maxlength={'7'} value={numState1} onchange={(e) => changeNumState1(e.target.value)} />
                </div>
            </BoxCon>
            <BoxCon>
                <div className={'formatMain'}>
                    <p className='textSmall'>Telefon raqamingiz</p>
                    <p className={'format'}>+998</p>
                    <Input msize="16px" mradius='5px' mwidth="166px" mheight="21px" mpadding='0px 0px 2px 60px' size="30px" width="410px" height="55px" disabled={true} margin='10px 0px 0px 0px' defaultValue={'99 999 99 99'} padding={'0 0 0 110px'} />
                </div>
                <div className='InputLeft'>
                    <p className='textSmall'>Pasport seriyangiz</p>
                    <Input mradius='5px' mpadding='0px 0px 0px 10px' msize="16px" mwidth="117px" mheight="21px" size="29px" width="290px" defaultValue={'AA 000 00 00'} disabled={true} maxlength={'12'} height="55px" margin='10px 0px 0px 0px' placeholder={'AA 000 00 00'} />
                </div>
            </BoxCon>



            <BoxCon>
                <div>
                    <Button onclick={() => query.push('/receptionPage/application/UsersCardInfo')} className='nocopy' mpadding={'0px 0px 0px 30px'} mheight={"30px"} mwidth={'143.47px'} msize={'13px'} mradius='5px' height={"40px"} width={'267.47px'} size={'22px'}>Ortga qaytish</Button>
                    <Orqaga className={'BtnCon'} />
                </div>
                <div className='btnEnd'>
                    <Button onclick={() => query.push('/receptionPage/application/UsersCardInfo/click/arizafinaly')} mheight={"30px"} mradius='5px' mwidth={'127.47px'} msize={'16px'} width={'290px'} height='45px' margin={'10px 0px 0px 0px'}>
                        To’lash
                    </Button>
                </div>
            </BoxCon>
        </Container>
    )
}
export default Paymepay




