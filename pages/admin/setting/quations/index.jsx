import React from 'react'
import AdminRootToken from '../../../../components/adminPage/outlet/index.jsx'
import RootAdmin from '../../../../components/adminPage/RootLogo/index.jsx'
import RootSidebar from "../../../../components/adminPage/RootSidebarMenu/index.jsx"
import TableTest from '../../../../components/adminPage/setting/testCom/QuationResaltTeset/index.jsx'
// import QuationCom from '../../../../components/adminPage/setting/testCom/Quation/index.jsx'

export const Menagement = () => {
  return (
    <RootAdmin>
      <RootSidebar>
        <AdminRootToken>
          {/* <QuationCom/> */}
          <TableTest/>
        </AdminRootToken>
      </RootSidebar>
    </RootAdmin>
  )
}

export default Menagement