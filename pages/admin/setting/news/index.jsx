import React from 'react'
import AdminRootToken from '../../../../components/adminPage/outlet/index.jsx'
import RootSidebarMenu from '../../../../components/adminPage/RootSidebarMenu/index.jsx'
import NewsComponents from '../../../../components/adminPage/setting/news/index.jsx'

export const LibraryPage = () => {
    return (
        <RootSidebarMenu>
            <AdminRootToken>
                <NewsComponents/>
            </AdminRootToken>
        </RootSidebarMenu>
    )
}
export default LibraryPage