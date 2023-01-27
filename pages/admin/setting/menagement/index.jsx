import React from 'react'
import AdminRootToken from '../../../../components/adminPage/outlet/index.jsx'
import RootAdmin from '../../../../components/adminPage/RootLogo/index.jsx'
import RootSidebar from "../../../../components/adminPage/RootSidebarMenu/index.jsx"
export const Menagement = () => {
  return (
    <RootAdmin>
      <RootSidebar>
        <AdminRootToken>
              Menagement
        </AdminRootToken>
      </RootSidebar>
    </RootAdmin>
  )
}

export default Menagement