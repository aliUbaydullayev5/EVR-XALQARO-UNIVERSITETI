import React from 'react'
import AdminRootToken from '../../../../components/adminPage/outlet/index.jsx'
import RootAdmin from "../../../../components/adminPage/RootLogo/index.jsx"
import RootSidebarMenu from '../../../../components/adminPage/RootSidebarMenu/index.jsx'
import ExamSubjectCreate from '../../../../components/adminPage/setting/testCom/examSubject/index.jsx'

export const TestPage = () => {
    return (
        <RootAdmin>
            <RootSidebarMenu>
                < AdminRootToken>
                    <ExamSubjectCreate />
                </AdminRootToken>
            </RootSidebarMenu>

        </RootAdmin>
    )
}
export default TestPage