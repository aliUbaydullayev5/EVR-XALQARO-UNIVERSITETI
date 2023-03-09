import React from 'react'
import AdminRootToken from '../../../../components/adminPage/outlet/index.jsx'
import RootSidebar from "../../../../components/adminPage/RootSidebarMenu/index.jsx"
import SubjectMandatory from "../../../../components/adminPage/setting/testCom/subjectMandatory";

export const subjectMandatoryPage = () => {
  return (
          <RootSidebar>
              <AdminRootToken>
                  <SubjectMandatory />
              </AdminRootToken>
          </RootSidebar>
  )
}

export default subjectMandatoryPage