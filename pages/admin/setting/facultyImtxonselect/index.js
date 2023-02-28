import React from 'react'
import AdminRootToken from '../../../../components/adminPage/outlet/index.jsx'
import RootAdmin from '../../../../components/adminPage/RootLogo/index.jsx'
import RootSidebar from "../../../../components/adminPage/RootSidebarMenu/index.jsx"
import FacultetsImthonCom from '../../../../components/adminPage/setting/testCom/Facultets/index.jsx'

export const FacultyImtxonSelectPage = () => {
  return (
      <RootAdmin>
          <RootSidebar>
              <AdminRootToken>
                  <FacultetsImthonCom/>
              </AdminRootToken>
          </RootSidebar>
      </RootAdmin>
  )
}

export default FacultyImtxonSelectPage 