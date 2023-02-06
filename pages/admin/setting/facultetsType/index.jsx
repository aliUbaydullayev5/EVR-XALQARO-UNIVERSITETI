import React from 'react'
import AdminRootToken from '../../../../components/adminPage/outlet/index.jsx'
import RootAdmin from '../../../../components/adminPage/RootLogo/index.jsx'
import RootSidebarMenu from '../../../../components/adminPage/RootSidebarMenu/index.jsx'
import TalimYunalishType from '../../../../components/adminPage/setting/talimYunalishTurlari/index.jsx'

export const TalimYunlaishPage  = () => {
  return (
      <RootAdmin>
          <RootSidebarMenu>
              <AdminRootToken>
                  <TalimYunalishType/>
              </AdminRootToken>
          </RootSidebarMenu>
      </RootAdmin>
  )
}


export default TalimYunlaishPage