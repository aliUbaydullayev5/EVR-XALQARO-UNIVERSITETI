import React from 'react'
import AdminRootToken from '../../../../components/adminPage/outlet/index.jsx'
import RootAdmin from '../../../../components/adminPage/RootLogo/index.jsx'
import RootSidebarMenu from '../../../../components/adminPage/RootSidebarMenu/index.jsx'
import FacultetsCom from '../../../../components/adminPage/setting/testCom/Facultets/index.jsx'

export const FacultetsPage = () => {
  return (
      <RootAdmin>
      <RootSidebarMenu>
        <AdminRootToken>
          <FacultetsCom/>
        </AdminRootToken>
          </RootSidebarMenu>
      </RootAdmin>
  )
}

export default FacultetsPage