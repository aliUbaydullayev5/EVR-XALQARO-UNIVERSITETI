import React from 'react'
import AdminRootToken from '../../../../components/adminPage/outlet/index.jsx'
import RootSidebar from "../../../../components/adminPage/RootSidebarMenu/index.jsx"
import QuationResalt from '../../../../components/adminPage/setting/testCom/QuationResalt/index.jsx'
export const Menagement = () => {
  return (
      <RootSidebar>   
        <AdminRootToken>
          <QuationResalt />
        </AdminRootToken>
      </RootSidebar>
  )
}

export default Menagement