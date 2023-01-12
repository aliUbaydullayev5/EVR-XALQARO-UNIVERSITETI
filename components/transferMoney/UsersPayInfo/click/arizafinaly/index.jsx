import { useRouter } from 'next/router.js'
import React, {useState} from 'react'
import { Input } from '../../../../generic/index.jsx'
import Container, { AntModal, BoxCon, BoxContainer, BtnCon, TexContainer } from './style.js'
import Orqaga from "../../../../../assets/icons/orqaga.svg"
import Button from "../../../../generic/Button";

export const ArizafinalyComponent = () => {
    const query = useRouter()
  return (
      <Container>
          <BoxCon>
             <BoxCon.Text>
              <h1>To’lovingiz muvaffaqiyatli</h1>
              <h1> amalga oshirildi.</h1>
              </BoxCon.Text>
              
              <BoxCon.TextP>
                  <p>ID raqamingizni eslab qoling.</p>
                  <Input mwidth='170px'  msize={'23px'} mpadding={'0px 0px 0px 20px'} mheight={'45px'} mradius={'5px'} disabled={true} height={'61px'} width={'500px'} placeholder='№: 101004 ' />
              </BoxCon.TextP>
              <BoxCon.TextP>
              <p>Parolingizni eslab qoling.</p>
                  <Input mwidth='170px' msize={'23px'} mpadding={'0px 0px 0px 20px'}  mheight={'45px'} mradius={'5px'} disabled={true} height={'61px'} width={'500px'} placeholder='AA2223344' margin={'10px 0px 15px 0px'} />
              </BoxCon.TextP>
              <Button mwidth='170px' width={'344px'} mheight={'45px'} msize={"25px"} mradius={'5px'} height={'48px'} >yuklab olish</Button>
           
              <BtnCon>
                  <Button mwidth='170px' msize={'16px'} mpadding={'0px 0px 0px 30px'} width={'267.47px'} mheight={'45px'}  mradius={'5px'} onclick={() => query.push('/receptionPage/application/UsersCardInfo')} className='btnEnd nocopy' height={"40px"} size={'22px'}>Ortga qaytish</Button>
                  <Orqaga className='Orqaga' />
              </BtnCon>
          </BoxCon>
          
          <BoxContainer>
              <TexContainer>
                  <TexContainer.Frist>
                      <h1>Evr Xalqaro Universiteti
                      tomonidan siz uchun
                          shaxsiy kabinet ochildi.
                      </h1>
                  </TexContainer.Frist>

                  <TexContainer.InputCon>
                      <Input disabled={true} width={'303px'} mpadding={'0px 0px 0px 10px'} mwidth={'120px'} msize={'15px'} placeholder={'Shaxsiy kabinet'}  size={'24px'} height={'49px'} mheight={'32px'}  padding={'0px 60px'} mradius={'5px'}/>
                      <Input disabled={true} width={'303px'} mpadding={'0px 0px 0px 10px'} mwidth={'120px'} placeholder={'Test topshirish'} msize={'15px'}  size={'24px'} height={'49px'} mheight={'32px'}  padding={'0px 60px'} mradius={'5px'} />
                  </TexContainer.InputCon>
              </TexContainer>
          </BoxContainer>

      </Container>
  )
}

export default ArizafinalyComponent
