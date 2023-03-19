import React from 'react'
import AdminRootToken from '../../../../../components/adminPage/outlet/index.jsx'
import RootSidebarMenu from '../../../../../components/adminPage/RootSidebarMenu/index.jsx'
import TalimYunalishTypeAddCom from '../../../../../components/adminPage/setting/talimYunalish/TalimYunalishTypeAdd/index'
export const FacultetTypeAddPage = () => {
  return (
          <RootSidebarMenu>
              <AdminRootToken>
                  <TalimYunalishTypeAddCom/>
              </AdminRootToken>
          </RootSidebarMenu>

  )
}

export default FacultetTypeAddPage