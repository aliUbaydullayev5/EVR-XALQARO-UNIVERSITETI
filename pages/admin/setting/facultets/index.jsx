import React from 'react'
import AdminRootToken from '../../../../components/adminPage/outlet/index.jsx'
import RootSidebarMenu from '../../../../components/adminPage/RootSidebarMenu/index.jsx'
import TalimYunalishCom from "../../../../components/adminPage/setting/talimYunalish/TalimYunalish/index.jsx"

export const TalimYunlaishPage  = () => {
  return (
          <RootSidebarMenu>
              <AdminRootToken>
                  <TalimYunalishCom/>
              </AdminRootToken>
          </RootSidebarMenu>
  )
}


export default TalimYunlaishPage