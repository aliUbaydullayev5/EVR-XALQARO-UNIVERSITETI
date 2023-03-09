import React from 'react'
import AdminRootToken from '../../../../components/adminPage/outlet/index.jsx'
import RootSidebarMenu from '../../../../components/adminPage/RootSidebarMenu/index.jsx'
import TalimYunalishType from '../../../../components/adminPage/setting/talimYunalishType/index.jsx'

export const TalimYunlaishPage  = () => {
  return (
          <RootSidebarMenu>
              <AdminRootToken>
                  <TalimYunalishType/>
              </AdminRootToken>
          </RootSidebarMenu>
  )
}


export default TalimYunlaishPage