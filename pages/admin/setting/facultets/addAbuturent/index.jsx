import React from 'react'
import AdminRootToken from '../../../../../components/adminPage/outlet/index.jsx'
import RootSidebarMenu from '../../../../../components/adminPage/RootSidebarMenu/index.jsx'
import TalimYunalishAbuturent from "../../../../../components/adminPage/setting/talimYunalish/TalimYunalishAbuturent";
export const AddAbuturentpage = () => {
    return (
            <RootSidebarMenu>
                <AdminRootToken>
                    <TalimYunalishAbuturent />
                </AdminRootToken>
            </RootSidebarMenu>
    )
}

export default AddAbuturentpage