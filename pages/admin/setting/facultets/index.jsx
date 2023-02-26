import React from 'react'
import AdminRootToken from '../../../../components/adminPage/outlet/index.jsx'
import RootAdmin from '../../../../components/adminPage/RootLogo/index.jsx'
import RootSidebarMenu from '../../../../components/adminPage/RootSidebarMenu/index.jsx'
import TalimYunalishCom from "../../../../components/adminPage/setting/talimYunalish/TalimYunalish/index.jsx"

export const TalimYunlaishPage  = () => {
  return (
      <RootAdmin>
          <RootSidebarMenu>
              <AdminRootToken>
                  <TalimYunalishCom/>
              </AdminRootToken>
          </RootSidebarMenu>
      </RootAdmin>
  )
}


export default TalimYunlaishPage