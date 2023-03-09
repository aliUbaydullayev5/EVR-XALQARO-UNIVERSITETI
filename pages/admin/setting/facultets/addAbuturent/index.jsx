import React from 'react'
import AdminRootToken from '../../../../../components/adminPage/outlet/index.jsx'
import RootSidebarMenu from '../../../../../components/adminPage/RootSidebarMenu/index.jsx'
import TalimYunlishAddCom from '../../../../../components/adminPage/setting/talimYunalish/TalimYunalish/TalimYunalishAdd/index.jsx'
export const AddAbuturentpage = () => {
    return (
            <RootSidebarMenu>
                <AdminRootToken>
                    <TalimYunlishAddCom />
                </AdminRootToken>
            </RootSidebarMenu>
    )
}

export default AddAbuturentpage