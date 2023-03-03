import React from 'react'
import AdminRootToken from '../../../../components/adminPage/outlet/index.jsx'
import RootAdmin from "../../../../components/adminPage/RootLogo/index.jsx"
import RootSidebarMenu from '../../../../components/adminPage/RootSidebarMenu/index.jsx'
import AboutUss from "../../../../components/adminPage/setting/aboutUs";

export const AboutUs = () => {
    return (
        <RootAdmin>
            <RootSidebarMenu>
                <AdminRootToken>
                    <AboutUss />
                </AdminRootToken>
            </RootSidebarMenu>
        </RootAdmin>
    )
}
export default AboutUs