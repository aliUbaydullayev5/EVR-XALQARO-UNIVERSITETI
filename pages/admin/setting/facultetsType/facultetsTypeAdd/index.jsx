import React from 'react'
import AdminRootToken from '../../../../../components/adminPage/outlet/index.jsx'
import RootAdmin from '../../../../../components/adminPage/RootLogo/index.jsx'
import RootSidebarMenu from '../../../../../components/adminPage/RootSidebarMenu/index.jsx'
import TalimYunalishTypeAddCom from '../../../../../components/adminPage/setting/talimYunalishType/TalimYunalishTypeAdd/index.jsx'

export const FacultetTypeAddPage = () => {
  return (
           <RootAdmin>
          <RootSidebarMenu>
              <AdminRootToken>
                  <TalimYunalishTypeAddCom/>
              </AdminRootToken>
          </RootSidebarMenu>
      </RootAdmin>

  )
}

export default FacultetTypeAddPage