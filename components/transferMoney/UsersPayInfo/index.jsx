import { Button, Input } from '../../generic/index.jsx'
import Container, { BoxCon, BtnCon, ConTainerImg, HerBox, ImgBox, InputCon, TextBox, TextCon } from './style.js'
import Orqaga from "../../../assets/icons/orqaga.svg"
import Click from "../../../assets/icons/click.png"
import Paynet from "../../../assets/icons/paynet.png"
import Tolov from "../../../assets/icons/tolov.svg"
import Apelsin from "../../../assets/icons/Apelsin-01 2.png"
import Payme from "../../../assets/icons/payme.png"
import Alif from "../../../assets/icons/Alif.png"
import osonMobile from '../../../assets/mobile/icon/Oson.png'
import Image from 'next/image.js'
// Mobile Img 
import NaqtTulov from "../../../assets/mobile/icon/NaqtTulov.svg"
import PaymeMobile from "../../../assets/mobile/icon/payme.png"

import { useRouter } from 'next/router.js'
import React, { useEffect, useState } from 'react'
import { AntModal } from '../../reception/OqishniKochirishComponent/style.js'


export const UsersPayInfo = () => {
  const query = useRouter()

  const [obj, setObj] = useState()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleOk = () => {
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }



  useEffect(() => {
    const data = localStorage.getItem("user-info");
    setObj(JSON.parse(data))
    if (!localStorage.getItem("user-info")) {
     query.push('/receptionPage')
    }
  }, []);

  console.log(obj, 'obj');
  return (
      <Container>
        <TextCon>
          <p>Ariza qoldirish</p>
        </TextCon>
        <HerBox>
          <BoxCon>
            <InputCon mawidth={'290px'} mheight={'290px'}>
              <p>FiO</p>
              <Input mradius={'5px'} mpadding={'0 0 0 19px '} mwidth={'290px'} mheight={'21px'} msize={'16px'} size={'20px'} weight={'600'} placeholder={`${obj?.lastName}  ${obj?.firstName} `} width={'459px'} height={'33px'} padding={'0px 30px'} disabled={true} />
            </InputCon>

            <InputCon>
              <p>Pasport seriyangiz</p>
              <Input mradius={'5px'} mpadding={'0 0 0 19px '} mwidth={'290px'} mheight={'21px'} msize={'16px'} size={'20px'} weight={'600'} placeholder={obj?.passportSeries} width={'459px'} height={'33px'} padding={'6px 30px'} disabled={true} />
            </InputCon>
            <InputCon>
              <p>Ta’lim tilingiz</p>
              <Input mradius={'5px'} mpadding={'0 0 0 19px '} mwidth={'290px'} mheight={'21px'} msize={'16px'} size={'20px'} weight={'600'} placeholder={obj?.studyLanguage} width={'459px'} height={'33px'} padding={'6px 30px'} disabled={true} />
            </InputCon>

            <InputCon>
              <p>Ta’lim yo‘nalishingiz </p>
              <Input mradius={'5px'} mpadding={'0 0 0 19px '} mwidth={'290px'} mheight={'21px'} msize={'16px'} size={'20px'} weight={'600'} placeholder={obj?.facultyId} width={'459px'} height={'33px'} padding={'6px 30px'} disabled={true} />
            </InputCon>

            <InputCon>
              <p>Ta’lim shakli</p>
              <Input mradius={'5px'} mpadding={'0 0 0 19px '} mwidth={'330px'} mheight={'21px'} msize={'16px'} size={'20px'} weight={'600'} placeholder={obj?.educationType} width={'459px'} height={'33px'} padding={'6px 30px'} disabled={true} />
            </InputCon>
            <InputCon>
              <p>Asosiya Raqamingiz</p>
              <Input mradius={'5px'} mpadding={'0 0 0 19px '} mwidth={'290px'} mheight={'21px'} msize={'16px'} size={'20px'} weight={'600'} placeholder={`+${obj?.phoneNumber}`} width={'459px'} height={'33px'} padding={'6px 30px'} disabled={true} />
            </InputCon>

            <BtnCon>
              <Button mradius={'5px'} mpadding={'0 0 0 19px '} mwidth={'290px'} mheight={'21px'} msize={'16px'} onclick={() => query.push('/receptionPage/abiturient')} className='nocopy' margin={'10px 0px 17px 0px'} height={"37px"} width={'267.47px'} size={'22px'}>Ortga qaytish</Button>
              <Orqaga className={'BtnCon'} />
            </BtnCon>
          </BoxCon>
          {/* Con2 pul o`tqazish */}
          <BoxCon>
            <TextBox>
              <p>Siz muvaffaqiyatli ro’yxatdan o’tdingiz imtihonga kirish uchun quyidagi usullardan orqali yarim aklatga teng 200 ming so’m to’lovni amalga oshirishingiz kerak.</p>
            </TextBox>
            <ConTainerImg>


              <div>
                <form method="POST" action="https://checkout.paycom.uz">
                  <Input type="hidden" name="merchant"
                    value="63fc573ec6ebaa46493d6ee4" />
                  <Input type="hidden" name="amount" value="20000000" />
                  <Input type="hidden" name="account[order]" value={obj?.phoneNumber} />
                  <button type="submit" style={{ border: 'none', cursor: 'pointer' }}>
                    < Image src={Payme} alt='click' className='Payme' />
                    <Image src={PaymeMobile} alt='click' className='PaymeMobile' />
                  </button>
                </form>
              </div>

              {/* <div onClick={() => query.push('/receptionPage/application/UsersCardInfo/paynet')}>
              <Image src={Paynet} alt='click' className='Paynet' />
              <Image src={PaynetMobile} alt='click' className='PaynetMobile' />
            </div> */}
              {/* <div onClick={() => query.push('/receptionPage/application/UsersCardInfo/appelsin')}>
              <Image src={Apelsin} alt='click' className='Apelsin' />
              <Image src={AppelsinMobile} alt='click' className='ApelsinMobile' />
            </div> */}

              <div>
                <Tolov type="primary" alt='click' onClick={showModal} className='Tolov' />
                <NaqtTulov type="primary" alt='click' onClick={showModal} className='TolovMobile' />
                <AntModal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                  <p className='talaba'>Hurmatli talaba, agar naqd pul ko'rinishida to'lovni amalga oshirmoqchi bo'lsangiz institutimizga borgan holda to'lovni amalga oshirishingiz kerak bo'ladi. Shunda xodimlarimiz pul qabul qilinganligini tasdiqlashadi. Agarda bu sizga noqulaylik tug'dirsa  ilovalar orqali to'lashingiz mumkin.</p>
                </AntModal>
              </div>

              {/* <div onClick={() => query.push('/receptionPage/application/UsersCardInfo/oson')}>
              <Image src={AlifMobile} alt='click' className='Oson' />
              <Image src={AlifMobile} alt='click' className='OsonMobile' />
            </div> */}
            </ConTainerImg>
            <div className='btnEnd'>
            </div>
          </BoxCon>
        </HerBox>
      </Container>
  )
}
export default UsersPayInfo