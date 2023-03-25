import AdminRootToken from "../../../../../components/adminPage/outlet/index.jsx"
import RootSidebarMenu from "../../../../../components/adminPage/RootSidebarMenu/index.jsx"
import SalariesPaid from "../../../../../components/adminPage/setting/finance/SalariesPaid";


export const AllInformationPage = () => {
    return (
            <RootSidebarMenu>
                <AdminRootToken>
                    <SalariesPaid />
                </AdminRootToken>
            </RootSidebarMenu>
    )
}
export default AllInformationPage