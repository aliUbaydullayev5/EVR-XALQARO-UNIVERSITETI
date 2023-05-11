import React, { useEffect } from 'react'
import { useState } from 'react'
import Button from '../../generic/Button/index.jsx'
import Input from '../../generic/Input/index.jsx'
import Container from './style.js'
import Show from "../../../assets/icons/admin/show.svg"
import CustomInput from 'react-phone-number-input/input'
import { useRouter } from 'next/router.js'
import { useDispatch, useSelector } from 'react-redux'
import { foundToken, getAallLoginFetch } from '../../../redux/slices/loginAdmin'
import { startMessage } from '../../../redux/slices/message/index.js'
import { Spin } from "antd"

export const LoginCom = () => {
  const query = useRouter()
  const dispatch = useDispatch()

  const [phonecheck, setPhonecheck] = useState('');
  const [password, setpassword] = useState('');
  const [phoneFace, setPhoneface] = useState('+998');


  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const handleChange = (event) => {
    setpassword(event.target.value);
  };


  const loginAdminThunk = useSelector((store) => store.loginAdminThunk)

  useEffect(() => {
    dispatch(foundToken())
    if (localStorage.getItem('admin_AccessToken')) {
      query.push('admin/home')
    }
  }, [])

  useEffect(() => {
    if (loginAdminThunk.status === 'success') {
      query.push('admin/home')
      dispatch(startMessage({ time: 3, message: 'siz muvofiyaqatli kirdingiz', type: 'success' }))
    } else if (loginAdminThunk.status === 'notFound') {
      dispatch(startMessage({ time: 2, message: 'phone number, yoki password xato kiritilgan' }))
    }
  }, [loginAdminThunk])

  const loginFunc = () => {
    if (phonecheck.length === 13 && password.length) {
      dispatch(getAallLoginFetch({
        userName: (phonecheck.match(/[0-9]+/g) || []).join(''),
        password: password,
      }))
    } else {
      dispatch(startMessage({ time: 2, message: 'Toliq toldiring' }))
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
              onChange={(e) => setPhonecheck(e)}
              value={phoneFace}
            />
          </Container.Number>
          <Container.Input className='nocopy'>
            <p> Password</p>
            <Input onchange={handleChange} mwidth={'220px'} mpadding={'0px 14px'} msize={"18px"} mradius={'5px'} mheight={'40px'} width={'310px'} height={'45px'} padding={'0px 20px'} radius={'5px'} type={passwordShown ? "text" : "password"} size={'20px'} />
            <Show className='show' onClick={togglePassword} />
          </Container.Input>

          {
            loginAdminThunk.status === 'loading' ?
              <Container.ButtonLoader>
                <Button width={'260px'} mwidth={'180px'} mpadding={'0px 14px'} msize={"18px"} mradius={'5px'} mheight={'40px'} height={'45px'} radius={'5px'} margin={'10px 0px'} disabled='true'>
                  <Spin />
                </Button>
              </Container.ButtonLoader>
              :
              <Button onclick={() => loginFunc()} width={'260px'} mwidth={'180px'} mpadding={'0px 14px'} msize={"18px"} mradius={'5px'} mheight={'40px'} height={'45px'} radius={'5px'} margin={'10px 0px'}>Kirish</Button>
          }
        </div>
      </Container.Box>
    </Container>
  )
}
export default LoginCom