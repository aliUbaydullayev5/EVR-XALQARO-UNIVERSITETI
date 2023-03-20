import React from 'react'
import AdminRootToken from '../../../../components/adminPage/outlet/index.jsx'
import RootSidebarMenu from '../../../../components/adminPage/RootSidebarMenu/index.jsx'
import ExamSubjectCreate from '../../../../components/adminPage/setting/exsam/examSubject/index.jsx'

export const TestPage = () => {
    return (
            <RootSidebarMenu>
                < AdminRootToken>
                    <ExamSubjectCreate />
                </AdminRootToken>
            </RootSidebarMenu>
    )
}
export default TestPage