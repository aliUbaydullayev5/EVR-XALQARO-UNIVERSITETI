import { Button, Input } from '../../generic/index.jsx'
import Container, { BoxCon, BtnCon, ConTainerImg, HerBox, ImgBox, InputCon, TextBox, TextCon } from './style.js'

import Orqaga from "../../../assets/icons/orqaga.svg"
import Click from "../../../assets/icons/click.png"
import Paynet from "../../../assets/icons/paynet.png"
import Tolov from "../../../assets/icons/tolov.svg"
import Apelsin from "../../../assets/icons/Apelsin-01 2.png"
import Payme from "../../../assets/icons/payme.png"
import Oson from "../../../assets/icons/oson.png"
import Image from 'next/image.js'

// Mobile Img 
import CilckMobile from "../../../assets/mobile/icon/click.png"
import PaynetMobile from "../../../assets/mobile/icon/paynet.png"
import NaqtTulov from "../../../assets/mobile/icon/NaqtTulov.svg"
import AppelsinMobile from "../../../assets/mobile/icon/Apelsin.png"
import PaymeMobile from "../../../assets/mobile/icon/payme.png"
import OsonMobile from "../../../assets/mobile/icon/Oson.png"






import { useRouter } from 'next/router.js'
import React, { useState } from 'react'
import { AntModal } from '../../reception/OqishniKochirishComponent/style.js'


export const UsersPayInfo = () => {
  const query = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Container>
      <TextCon>
        <p>Ariza qoldirish</p>
      </TextCon>
      <HerBox>
        <BoxCon>
          <InputCon mawidth={'290px'} mheight={'290px'}>
            <p>FiO</p>
            <Input mradius={'5px'} mpadding={'0 0 0 19px '} mwidth={'290px'} mheight={'27px'} msize={'16px'} size={'20px'} weight={'600'} placeholder={'G‘ulomov Elbek Ilg‘or o‘g ‘li'} width={'459px'} height={'33px'} padding={'0px 30px'} disabled={true} />
          </InputCon>

          <InputCon>
            <p>Pasport seriyangiz</p>
            <Input  mradius={'5px'} mpadding={'0 0 0 19px '} mwidth={'290px'} mheight={'27px'} msize={'16px'} size={'20px'} weight={'600'} placeholder={'AA 222 33 44'} width={'459px'} height={'33px'} padding={'6px 30px'} disabled={true} />
          </InputCon>
          <InputCon>
            <p>Ta’lim tilingiz</p>
            <Input mradius={'5px'} mpadding={'0 0 0 19px '} mwidth={'290px'} mheight={'27px'} msize={'16px'} size={'20px'} weight={'600'} placeholder={'O‘zbek'} width={'459px'} height={'33px'} padding={'6px 30px'} disabled={true} />
          </InputCon>

          <InputCon>
            <p>Ta’lim yo‘nalishingiz </p>
            <Input mradius={'5px'} mpadding={'0 0 0 19px '} mwidth={'290px'} mheight={'27px'} msize={'16px'} size={'20px'} weight={'600'} placeholder={'Iqtisodiyot'} width={'459px'} height={'33px'} padding={'6px 30px'} disabled={true} />
          </InputCon>

          <InputCon>
            <p>Ta’lim shakli</p>
            <Input mradius={'5px'} mpadding={'0 0 0 19px '} mwidth={'290px'} mheight={'27px'} msize={'16px'} size={'20px'} weight={'600'} placeholder={'Kunduzgi'} width={'459px'} height={'33px'} padding={'6px 30px'} disabled={true} />
          </InputCon>
          <InputCon>
            <p>Asosiya Raqamingiz</p>
            <Input mradius={'5px'} mpadding={'0 0 0 19px '} mwidth={'290px'} mheight={'27px'} msize={'16px'} size={'20px'} weight={'600'} placeholder={'+998 99 999 99 99'} width={'459px'} height={'33px'} padding={'6px 30px'} disabled={true} />
          </InputCon>

          <BtnCon>
            <Button mradius={'5px'} mpadding={'0 0 0 19px '} mwidth={'290px'} mheight={'27px'} msize={'16px'} onclick={() => query.push('/receptionPage/abiturient')} className='nocopy' margin={'10px 0px 17px 0px'} height={"37px"} width={'267.47px'} size={'22px'}>Ortga qaytish</Button>
            <Orqaga className={'BtnCon'} />
          </BtnCon>
        </BoxCon>
        {/* Con2 pul o`tqazish */}
        <BoxCon>
          <TextBox>
            <p>Siz muvaffaqiyatli ro’yxatdan o’tdingiz imtihonga kirish uchun quyidagi usullardan bir orqali yarim aklatga teng 150 ming so’m to’lovni amalga oshirishingiz kerak.</p>
          </TextBox>
          <ConTainerImg>
            <div onClick={() => query.push('/receptionPage/application/UsersCardInfo/click')}>
              <Image src={Click} alt='click'  className='Click' />
              <Image src={CilckMobile} alt='click' className='CilckMobile' />
            </div>
            <div onClick={() => query.push('/receptionPage/application/UsersCardInfo/payme')}>
              < Image src={Payme} alt='click' className='Payme'/>
              <Image src={PaymeMobile} alt='click' className='PaymeMobile' />
            </div>
            <div onClick={() => query.push('/receptionPage/application/UsersCardInfo/paynet')}>
              <Image src={Paynet} alt='click' className='Paynet'/>
              <Image src={PaynetMobile} alt='click' className='PaynetMobile' />
            </div>
            <div onClick={() => query.push('/receptionPage/application/UsersCardInfo/appelsin')}>
              < Image src={Apelsin} alt='click' className='Apelsin'/>
              <Image src={AppelsinMobile} alt='click' className='ApelsinMobile' />
            </div>
            <div>
              <Tolov type="primary" alt='click' onClick={showModal} className='Tolov' />
              <NaqtTulov type="primary" alt='click' onClick={showModal} className='TolovMobile'/>
              <AntModal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Hurmatli talaba, agar naqd pul ko'rinishida to'lovni amalga oshirmoqchi bo'lsangiz institutimizga borgan holda to'lovni amalga oshirishingiz kerak bo'ladi. Shunda xodimlarimiz pul qabul qilinganligini tasdiqlashadi. Agarda bu sizga noqulaylik tug'dirsa  ilovalar orqali to'lashingiz mumkin.</p>
              </AntModal>
            </div>
            <div onClick={() => query.push('/receptionPage/application/UsersCardInfo/oson')}>
              <Image src={Oson} alt='click' className='Oson'/>
              <Image src={OsonMobile} alt='click' className='OsonMobile' />
            </div>
          </ConTainerImg>
          <div className='btnEnd'>
          </div>
        </BoxCon>
      </HerBox>
    </Container>
  )
}
export default UsersPayInfo