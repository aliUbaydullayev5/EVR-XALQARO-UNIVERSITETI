import React from 'react'
import AdminRootToken from '../../../../components/adminPage/outlet/index.jsx'
import RootAdmin from '../../../../components/adminPage/RootLogo/index.jsx'
import RootSidebarMenu from '../../../../components/adminPage/RootSidebarMenu/index.jsx'
import QuationCom from '../../../../components/adminPage/setting/testCom/Quation/index.jsx'

export const QuationPage = () => {
  return (
      <RootAdmin>
      <RootSidebarMenu>
       <AdminRootToken>
          <QuationCom/>
        </AdminRootToken>
        </RootSidebarMenu>
      </RootAdmin>
  )
}

export default QuationPage