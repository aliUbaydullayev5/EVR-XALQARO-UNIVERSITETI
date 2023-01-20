import React from 'react'
import RootAdmin from "../../../../components/adminPage/RootLogo/index.jsx"
import RootSidebarMenu from '../../../../components/adminPage/RootSidebarMenu/index.jsx'
import TestCom from '../../../../components/adminPage/setting/testCom/index.jsx'

export const TestPage = () => {
    return (
        <RootAdmin>
            <RootSidebarMenu>
                <TestCom/>
            </RootSidebarMenu>   
       
        </RootAdmin>
    )
}
export default TestPage