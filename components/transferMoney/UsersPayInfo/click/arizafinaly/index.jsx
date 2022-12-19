import { useRouter } from 'next/router.js'
import React, {useState} from 'react'
import { Input } from '../../../../generic/index.jsx'
import Container, { BoxCon, BtnCon } from './style.js'
import Orqaga from "../../../../../assets/icons/orqaga.svg"
import Button from "../../../../generic/Button";

export const ArizafinalyComponent = () => {
    const query = useRouter()

  return (
      <Container>
          <BoxCon>
              <h1>To’lovingiz muvaffaqiyatli</h1>
              <h1> amalga oshirildi.</h1>
              <p>ID raqamingizni eslab qoling.</p>
              <Input disabled={true} height={'61px'} width={'500px'} placeholder='№: 101004 ' />
              <p>Parolingizni eslab qoling.</p>
              <Input disabled={true} height={'61px'} width={'500px'} placeholder='AA2223344'   margin={'10px 0px 15px 0px'} />
              <Button width={'344px'} height={'48px'} >yuklab olish</Button>
          </BoxCon>
          <div></div>
          <div></div>
          <BtnCon>
              <Button onclick={() => query.push('/receptionPage/application/UsersCardInfo')} className='btnEnd nocopy' height={"40px"} width={'267.47px'} size={'22px'}>Ortga qaytish</Button>
              <Orqaga className='Orqaga' />
          </BtnCon>
      </Container>
  )
}

export default ArizafinalyComponent