import React from 'react'
import { useState } from 'react'
import Button from '../../generic/Button/index.jsx'
import Input from '../../generic/Input/index.jsx'
import Container from './style.js'
import Show from "../../../assets/icons/admin/show.svg"
import CustomInput from 'react-phone-number-input/input'
import { useRouter } from 'next/router.js'

export const LoginCom = () => {
const query=useRouter()
  const [phonePatron, setphonePatron] = useState('+998991006010')
  const [phonePassword, setPassword] = useState('evr7777')

  const [phonecheck, setPhonecheck] = useState('');
  const [message, setMessage] = useState('');
  const [phoneFace, setPhoneface] = useState('+998');


  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  const Phonehandle = (event) => {
    setPhonecheck(event);
  }
  console.log(phonecheck, 'tel');
  console.log(message,'pass');
  const CheckAll = () => {
    if (phonePatron === phonecheck && message === phonePassword  ) {
      query.push('admin/home')
    }
    else if (message.length === 0) {
      <p>password kiri</p>
    }
    else { 
      query.push('/homePage')
    }
  }
  return (
    <Container>
      <Container.Box>
        <div >
          <Container.Number>
            <p>Login</p>
            <CustomInput
              maxLength={17}
              className={'customPhoneInput'}
              onChange={Phonehandle}
              value={phoneFace}
            />
     
          </Container.Number>

          <Container.Input className='nocopy'>
            <p> Password</p>
            <Input onchange={handleChange} mwidth={'220px'} mpadding={'0px 14px'} msize={"18px"} mradius={'5px'} mheight={'40px'}  width={'310px'} height={'45px'} padding={'0px 20px'} radius={'5px'}  type={passwordShown ? "text" : "password"}  size={'20px'}/>
            <Show className='show' onClick={togglePassword}/>
          </Container.Input>
          <Button onclick={()=>CheckAll()} width={'260px'} mwidth={'180px'} mpadding={'0px 14px'} msize={"18px"} mradius={'5px'} mheight={'40px'}  height={'45px'} radius={'5px'} margin={'10px 0px'}>Kirish</Button>
        </div>
      </Container.Box>
      </Container>
  )
}
export default LoginCom