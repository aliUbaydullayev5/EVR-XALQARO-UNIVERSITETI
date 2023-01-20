import React from 'react'
import RootAdmin from '../../../../components/adminPage/RootLogo/index.jsx'
import RootSidebarMenu from '../../../../components/adminPage/RootSidebarMenu/index.jsx'
import FacultetsCom from '../../../../components/adminPage/setting/testCom/Facultets/index.jsx'

export const FacultetsPage = () => {
  return (
      <RootAdmin>
          <RootSidebarMenu>
          <FacultetsCom/>
          </RootSidebarMenu>
      </RootAdmin>
  )
}

export default FacultetsPage