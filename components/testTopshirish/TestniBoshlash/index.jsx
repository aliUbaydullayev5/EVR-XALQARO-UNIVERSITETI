import React from 'react'
import Container from './style.js'
import CursTuri from "../../../assets/image/TesTuri.png"
import Image from 'next/image.js'

import { Button } from "../../generic";
import { useRouter } from 'next/router.js';

export const TestBoshlashCom = () => {
const   quary = useRouter()
  return (
    <Container>
      <Container.Text>
        <h1>Test</h1>
      </Container.Text>
      
    <Container.Img>
        <Image src={CursTuri} alt='big'/>
    </Container.Img>
      
      <Container.Btn>
        <Button size={'36px'} height={'71px'} width={'434px'} onclick={() => quary.push('/testTopshirish/testBoshlash/TestQuestionsFirst')} >Testni boshlash</Button>
      </Container.Btn>
    </Container>
  )
}
export default TestBoshlashCom
