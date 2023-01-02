
import React from 'react'
import Container from './style.js'
import LogoEvr from "../../assets/icons/EvrLogoTest.svg"


import Input from "../generic/Input/index.jsx"
import Button from "../generic/Button/index.jsx"

export const TestTopshirishComp = () => {
    return (
      <Container>
        
        <Container.Logo>
          <LogoEvr/>
          <b></b>
          <div><h1>EVR XALQARO</h1><h1>universiteti</h1></div>
        </Container.Logo>
        
        <Container.Text>
          <h1>Evr Xalqaro Universiteti jamoasi
            testni muvaffaqiyatli topshirishingiz
            uchun omad tilaydi.</h1>
        </Container.Text>
        

        <Container.Placeholder>
          Test topshirish uchun ID raqam va Parolni kiriting
          <Container.Input>
            <Input radius={'15px'} width={'421px'} height={'61px'} placeholder={'ID raqamingiz'} />
            <Input radius={'15px'} width={'421px'} height={'61px'} placeholder={'Pasport seriyangiz'} />
          </Container.Input>
        </Container.Placeholder>
        
        <Container.Btn>
          <Button width={'244px'} height={'61px'} radius={'74px'}>
            Kirsh
          </Button>
        </Container.Btn>
        </Container>
  )
}

export default TestTopshirishComp