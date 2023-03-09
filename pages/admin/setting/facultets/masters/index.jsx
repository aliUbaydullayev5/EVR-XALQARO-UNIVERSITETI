import React from 'react'
import AdminRootToken from '../../../../../components/adminPage/outlet/index.jsx'
import RootSidebarMenu from '../../../../../components/adminPage/RootSidebarMenu/index.jsx'
import TalimYunlishMaster from '../../../../../components/adminPage/setting/talimYunalish/TalimYunalish/TalimYunalishMaster/index.jsx'

export const AddAbuturentpage = () => {
    return (
            <RootSidebarMenu>
                <AdminRootToken>
                    
                    <TalimYunlishMaster/>
                </AdminRootToken>
            </RootSidebarMenu>
    )
}

export default AddAbuturentpage