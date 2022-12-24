import { useRouter } from 'next/router.js'
import React, { useState } from 'react'
import { Input } from '../../generic/Input/index.jsx'
import Container, { AntModal, BoxCon, BtnCon, BtnCon1 } from './style.js'
import Orqaga from "../../../assets/icons/orqaga.svg"
import Button from "../../generic/Button";
import Dowload from "../../../assets/mobile/icon/dowalond.svg"

export const AgentFinallyComponent = () => {
    const query = useRouter()
    return (
        <Container>
            <BoxCon>
                <h1>Arizangiz
                    muvaffaqiyatli
                    </h1>
                <h1> qabul qilindi.</h1>
                <p>ID raqamingizni eslab qoling.</p>
                <Input mwidth='100%' mheight={'45px'} mradius={'5px'} disabled={true} height={'61px'} width={'500px'} placeholder='№: 101004 ' />
                <p>Parolingizni eslab qoling.</p>
                <Input mwidth='100%' mheight={'45px'} mradius={'5px'} disabled={true} height={'61px'} width={'500px'} placeholder='AA2223344' margin={'10px 0px 15px 0px'} />
           
                <BtnCon1>
                    <Button mwidth='100%' width={'344px'} mheight={'45px'} msize={"20px"} mradius={'5px'} height={'48px'} >yuklab olish</Button>
                    <Dowload className='dowlad' />
                </BtnCon1>
                 <BtnCon>
                    <Button mwidth='100%' width={'267.47px'} mheight={'45px'} msize={"20px"} mradius={'5px'} onclick={() => query.push('/receptionPage')} className='btnEnd nocopy' height={"40px"} size={'22px'}>Ortga qaytish</Button>
                    <Orqaga className='Orqaga' />
                </BtnCon>

            </BoxCon>
            
        </Container>
    )
}

export default AgentFinallyComponent