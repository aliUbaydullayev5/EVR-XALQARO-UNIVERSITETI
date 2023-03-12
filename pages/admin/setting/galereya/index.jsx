import React from 'react'
import AdminRootToken from '../../../../components/adminPage/outlet/index.jsx'
import RootSidebarMenu from '../../../../components/adminPage/RootSidebarMenu/index.jsx'
import GaleryaComponet from '../../../../components/adminPage/setting/galereya/index.jsx'

export const LibraryPage = () => {
    return (
        <RootSidebarMenu>
            <AdminRootToken>
                <GaleryaComponet />
            </AdminRootToken>
        </RootSidebarMenu>
    )
}
export default LibraryPage