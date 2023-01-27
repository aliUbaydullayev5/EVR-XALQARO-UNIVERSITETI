import React from 'react'
import LoginCom from '../../../components/adminPage/login/index.jsx'
import AdminRootToken from '../../../components/adminPage/outlet/index.jsx'

export const LoginPage = () => {
  return (
    <div>
      <AdminRootToken>
          <LoginCom/>
      </AdminRootToken>
    </div>
  )
}

export default LoginPage