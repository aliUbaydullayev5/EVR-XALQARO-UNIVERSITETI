import React from 'react'
import AdminRootToken from '../../../../components/adminPage/outlet/index.jsx'
import RootSidebar from "../../../../components/adminPage/RootSidebarMenu/index.jsx"
import FacultetsImthonCom from '../../../../components/adminPage/setting/exsam/Facultets/index.jsx'

export const FacultyImtxonSelectPage = () => {
  return (
          <RootSidebar>
              <AdminRootToken>
                  <FacultetsImthonCom/>
              </AdminRootToken>
          </RootSidebar>
  )
}

export default FacultyImtxonSelectPage 