import AdminRootToken from "../../../../../components/adminPage/outlet/index.jsx"
import RootSidebarMenu from "../../../../../components/adminPage/RootSidebarMenu/index.jsx"
import BookLaunguage from "../../../../../components/adminPage/setting/libary/bookLaunguage/index.jsx"


export const LibraryAfterPage = () => {
    return (
            <RootSidebarMenu>
                <AdminRootToken>
                    <BookLaunguage />
                </AdminRootToken>
            </RootSidebarMenu>
    )
}
export default LibraryAfterPage