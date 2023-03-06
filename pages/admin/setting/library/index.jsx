import React from 'react'
import AdminRootToken from '../../../../components/adminPage/outlet/index.jsx'
import RootAdmin from '../../../../components/adminPage/RootLogo/index.jsx'
import RootSidebarMenu from '../../../../components/adminPage/RootSidebarMenu/index.jsx'
import AccessComponent from '../../../../components/adminPage/setting/libary/access/index.jsx'

export const LibraryPage = () => {
    return (
        <RootAdmin>
            <RootSidebarMenu>
                <AdminRootToken>
                    <AccessComponent />
                </AdminRootToken>
            </RootSidebarMenu>
        </RootAdmin>
    )
}
export default LibraryPage