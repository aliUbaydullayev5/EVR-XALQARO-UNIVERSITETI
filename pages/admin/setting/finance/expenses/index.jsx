import AdminRootToken from "../../../../../components/adminPage/outlet/index.jsx"
import RootSidebarMenu from "../../../../../components/adminPage/RootSidebarMenu/index.jsx"
import Expenses from "../../../../../components/adminPage/setting/finance/Expenses";



export const AllInformationPage = () => {
    return (
            <RootSidebarMenu>
                <AdminRootToken>
                    <Expenses />
                </AdminRootToken>
            </RootSidebarMenu>
    )
}
export default AllInformationPage