import React from 'react'
import AdminRootToken from '../../../../components/adminPage/outlet/index.jsx'
import RootSidebarMenu from '../../../../components/adminPage/RootSidebarMenu/index.jsx'
import AccessComponent from '../../../../components/adminPage/setting/libary/access/index.jsx'

export const LibraryPage = () => {
    return (
            <RootSidebarMenu>
                <AdminRootToken>
                    <AccessComponent />
                </AdminRootToken>
            </RootSidebarMenu>
    )
}
export default LibraryPage