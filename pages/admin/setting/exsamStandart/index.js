import React from 'react'
import AdminRootToken from '../../../../components/adminPage/outlet/index.jsx'
import RootAdmin from "../../../../components/adminPage/RootLogo/index.jsx"
import RootSidebarMenu from '../../../../components/adminPage/RootSidebarMenu/index.jsx'
import ExsamStandart from '../../../../components/adminPage/setting/testCom/exsamStandart/index.jsx'


export const exsamStandart = () => {
    return (
        <RootAdmin>
            <RootSidebarMenu>
                < AdminRootToken>
                    <ExsamStandart />
                </AdminRootToken>
            </RootSidebarMenu>

        </RootAdmin>
    )
}
export default exsamStandart