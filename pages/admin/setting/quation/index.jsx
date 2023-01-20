import React from 'react'
import RootAdmin from '../../../../components/adminPage/RootLogo/index.jsx'
import RootSidebarMenu from '../../../../components/adminPage/RootSidebarMenu/index.jsx'
import QuationCom from '../../../../components/adminPage/setting/testCom/Quation/index.jsx'

export const QuationPage = () => {
  return (
      <RootAdmin>
          <RootSidebarMenu>
          <QuationCom/>
          </RootSidebarMenu>
      </RootAdmin>
  )
}

export default QuationPage