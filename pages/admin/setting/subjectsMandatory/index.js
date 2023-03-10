import React from 'react'
import AdminRootToken from '../../../../components/adminPage/outlet/index.jsx'
import RootAdmin from '../../../../components/adminPage/RootLogo/index.jsx'
import RootSidebar from "../../../../components/adminPage/RootSidebarMenu/index.jsx"
import SubjectMandatory from "../../../../components/adminPage/setting/testCom/subjectMandatory";

export const subjectMandatoryPage = () => {
  return (
      <RootAdmin>
          <RootSidebar>
              <AdminRootToken>
                  <SubjectMandatory />
              </AdminRootToken>
          </RootSidebar>
      </RootAdmin>
  )
}

export default subjectMandatoryPage