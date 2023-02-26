import React from 'react'
import AdminRootToken from '../../../../../components/adminPage/outlet/index.jsx'
import RootAdmin from '../../../../../components/adminPage/RootLogo/index.jsx'
import RootSidebarMenu from '../../../../../components/adminPage/RootSidebarMenu/index.jsx'
import TalimYunlishMaster from '../../../../../components/adminPage/setting/talimYunalish/TalimYunalish/TalimYunalishMaster/index.jsx'

export const AddAbuturentpage = () => {
    return (
        <RootAdmin>
            <RootSidebarMenu>
                <AdminRootToken>
                    
                    <TalimYunlishMaster/>
                </AdminRootToken>
            </RootSidebarMenu>
        </RootAdmin>
    )
}

export default AddAbuturentpage