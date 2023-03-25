import React from 'react'
import AdminRootToken from '../../../../components/adminPage/outlet/index.jsx'
import RootSidebarMenu from '../../../../components/adminPage/RootSidebarMenu/index.jsx'
import FinanceMenu from '../../../../components/adminPage/setting/finance/access/index.jsx'

export const LibraryPage = () => {
    return (
            <RootSidebarMenu>
                <AdminRootToken>
                    <FinanceMenu />
                </AdminRootToken>
            </RootSidebarMenu>
    )
}
export default LibraryPage