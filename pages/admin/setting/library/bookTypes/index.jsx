import AdminRootToken from "../../../../../components/adminPage/outlet/index.jsx"
import RootSidebarMenu from "../../../../../components/adminPage/RootSidebarMenu/index.jsx"
import BookTypesComponet from "../../../../../components/adminPage/setting/libary/bookTypes/index.jsx"


export const LibraryAfterPage = () => {
    return (
            <RootSidebarMenu>
                <AdminRootToken>
                    <BookTypesComponet />
                </AdminRootToken>
            </RootSidebarMenu>
    )
}
export default LibraryAfterPage