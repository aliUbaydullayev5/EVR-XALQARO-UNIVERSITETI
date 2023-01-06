
import React from 'react'
import Container, { Box, SecondBox } from './style.js'
import LogoEvr from "../../../assets/icons/EvrLogoTest.svg"

import { useRouter } from 'next/router.js'
import { useState } from 'react'


export const TestResaltCom = () => {


  
  const quarey = useRouter()

  const data = [
    { 
      yunalishi: 'Ingilis Tili',
      ball: '3.1 ball',
      topgani: 10,
      natija: 31

    },
    {
      yunalishi: 'Matematika',
      ball: '2.1 ball',
      topgani: 20,
      natija: 31

    },
    {
      yunalishi: 'Matematika',
      ball: '2.1 ball',
      topgani: 20,
      natija: 42

    },
    {
      yunalishi: 'Matematika',
      ball: '2.1 ball',
      topgani: 20,
      natija: 42

    },

  ] 

  const [state, setState] = useState(data)
  

  return (
    <Container>
      <div>
        <Container.Logo>
          <LogoEvr />
          <b></b>
          <div><h1>EVR XALQARO</h1><h1>universiteti</h1></div>
        </Container.Logo>

        <Container.Text>
          <h1>Tabriklaymiz!
          Siz Kontrakt to’lovi asosida
          o’qishga qabul qilindingiz</h1>
        </Container.Text>

        <Box>
          {data.map((value) => (
            <>
              <Container.Resalt>
                <div>{value.yunalishi}</div>
                <div> {value.ball}</div>
                <div> {value.topgani}</div>
                <div> {value.natija}  ball</div>
              </Container.Resalt>
            </>
          ))}
        </Box>
   </div>
      <SecondBox>
        <div></div>
        <div>
          <h1>106 ball</h1>
        </div>
      </SecondBox>
    </Container>
  )
}

export default TestResaltCom