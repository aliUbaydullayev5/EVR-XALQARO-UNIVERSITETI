import AdminRootToken from "../../../../../components/adminPage/outlet/index.jsx"
import RootAdmin from "../../../../../components/adminPage/RootLogo/index.jsx"
import RootSidebarMenu from "../../../../../components/adminPage/RootSidebarMenu/index.jsx"
import AfterComponet from "../../../../../components/adminPage/setting/libary/after/index.jsx"


export const LibraryAfterPage = () => {
    return (
            <RootSidebarMenu>
                <AdminRootToken>
                    <AfterComponet />
                </AdminRootToken>
            </RootSidebarMenu>
    )
}
export default LibraryAfterPage