import React from 'react'
import HomeComponent from '../../../components/adminPage/Home/index.jsx'
import AdminRootToken from '../../../components/adminPage/outlet/index.jsx'
import RootAdmin from '../../../components/adminPage/RootLogo/index.jsx'
export const AdminHomePage = () => {
  return (
    <RootAdmin>
      <AdminRootToken>
          <HomeComponent/>
      </AdminRootToken>
      </RootAdmin>
  )
}

export default AdminHomePage