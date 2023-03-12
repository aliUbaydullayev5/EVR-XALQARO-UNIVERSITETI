import AdminRootToken from "../../../../../components/adminPage/outlet/index.jsx"
import RootSidebarMenu from "../../../../../components/adminPage/RootSidebarMenu/index.jsx"
import AllInformationComponet from "../../../../../components/adminPage/setting/finance/AllInformation/index.jsx"


export const AllInformationPage = () => {
    return (
            <RootSidebarMenu>
                <AdminRootToken>
                    <AllInformationComponet />
                </AdminRootToken>
            </RootSidebarMenu>
    )
}
export default AllInformationPage