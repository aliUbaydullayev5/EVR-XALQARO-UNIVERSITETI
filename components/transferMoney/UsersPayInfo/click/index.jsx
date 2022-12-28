import Container, { AntModal, BoxCon, BtnText, ImgBox, TextCon } from './style.js'
import Click from "../../../../assets/icons/click.png"

import { Button, Input } from '../../../generic'
import Orqaga from "../../../../assets/icons/orqaga.svg"
import { useRouter } from 'next/router.js'
import React, { useState } from "react";
import Image from 'next/image.js'

// mobile Img 
import ClickMobile from "../../../../assets/mobile/icon/click.png"
// import OrqagaMobile from "../../../../assets/mobile/icon/Orqaga.svg"

import Tolov from "../../../../assets/icons/tolov.svg"

export const Clickpay = () => {
  const [time, setTime] = useState("00:000")

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const changeHidden = () => setIsModalOpen(!isModalOpen)


  const query = useRouter()
  // input  1 probel joy tashash
   const [numState, setNumState] = useState('')
   const [length, setLength] = useState(0)
   const changeNumState = (event) => {
        if(length < event.length){
            setLength(event.length-1)
            if(event.length == 4){
                return setNumState(event+' ')
            }
            if(event.length == 9){
                return setNumState(event+' ')
            }
            if(event.length == 14){
                return setNumState(event+' ')
            }
        }
        if(length >= event.length){
            setLength(event.length)
            setNumState(event)
        }
        return setNumState(event)
    }

    const [numState1, setNumState1] = useState('')
    const [length1, setLength1] = useState(0)

    const changeNumState1 = (event) => {
        if(length1 < event.length){
            setLength1(event.length-1)
            if(event.length == 2){
                return setNumState1(event+' / ')
            }
        }
        if(length1 >= event.length){
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
            <Image alt='rasm' src={Click} className={'border'} />
            <Image alt='rasm' src={ClickMobile} className={'ClickMobile'} />
          </ImgBox>
        <div>
          <p className='textSmall'>To‘lov miqdori</p>
            <Input mradius='5px' mpadding='0px 0px 0px 20px' mwidth="136px" mheight="36px" msize='13px' width="410px" disabled={true} defaultValue="150 000 so’m" height="48px"  />
        </div>
      </BoxCon> 

      <BoxCon>
        <div>
            <p className='textSmall'>Karta raqamingizni kiriting</p>
            <Input mradius='5px' mpadding='0px 0px 0px 20px' mwidth="196px" mheight="20px" msize='13px'   size="30px" width="410px" height="55px"  placeholder="0000 0000 0000 0000 "  maxlength={'19'} margin='10px 0px 0px 0px' value={numState} onchange={(e)=> changeNumState(e.target.value)} />
        </div>
        <div className='InputLeft'>
          <p className='textSmall'>Amal qilish muddati</p>
            <Input mradius='5px' msize="16px" minwidth={'84px'} mpadding='0px 0px 0px 20px' mwidth='84px' width='234px' mheight="21px" height='36px' placeholder="мм/гг"   maxlength={'7'} value={numState1} onchange={(e)=> changeNumState1(e.target.value)} />
        </div>
      </BoxCon>
      <BoxCon>
        <div className={'formatMain'}>
          <p className='textSmall'>Telefon raqamingiz</p>
            <p className={'format'}>+998</p>
            <Input msize="16px" mradius='5px' mwidth="166px" mheight="21px" mpadding='0px 0px 2px 60px' size="30px" width="410px" height="55px" disabled={true} margin='10px 0px 0px 0px' defaultValue={'99 999 99 99'} padding={'0 0 0 110px'}  />
        </div>
        <div className='InputLeft'>
          <p className='textSmall'>Pasport seriyangiz</p>
            <Input mradius='5px' mpadding='0px 0px 0px 10px' msize="16px" mwidth="117px" mheight="21px" size="29px" width="290px" defaultValue={'AA 000 00 00'} disabled={true}  maxlength={'12'} height="55px" margin='10px 0px 0px 0px' placeholder={'AA 000 00 00'} />
        </div>
      </BoxCon>
      <BoxCon>
        <div>
            <Button onclick={() => query.push('/receptionPage/application/UsersCardInfo')} className='nocopy'  mpadding={'0px 0px 0px 30px'} mheight={"30px"} mwidth={'143.47px'} msize={'13px'} mradius='5px' height={"40px"} width={'267.47px'} size={'22px'}>Ortga qaytish</Button>
            <Orqaga className={'BtnCon'} />
        </div>

          <div>
            <AntModal open={isModalOpen} onOk={changeHidden} onCancel={changeHidden}>
              <Input align={'center'} width='379px' height='100px' padding="0px 0px 0px 25px" placeholder={'_ _ _ _ _ _'} maxlength='6'></Input>
              <Button mheight={'25px'} mmargin={'10px 0px 0px 0px'} onclick={() => query.push('/receptionPage/application/UsersCardInfo/click/arizafinaly')} height={'41px'} margin="20px 0px 0px 0px" bc={'#ffff'}>
                <BtnText>tasdiqlash</BtnText>
              </Button>
            </AntModal>
            <Button mradius={'5px'} width={'344px'} mwidth={'74px'} msize={'19px'} mheight={'30px'} height={'40px'} type="primary" alt='click' onclick={showModal} className='Tolov' >
              Tolov              
            </Button>
          </div>
      </BoxCon>
    </Container>
  )
}
export default Clickpay


