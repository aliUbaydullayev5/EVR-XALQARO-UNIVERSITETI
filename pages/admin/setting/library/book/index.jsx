import AdminRootToken from "../../../../../components/adminPage/outlet/index.jsx"
import RootSidebarMenu from "../../../../../components/adminPage/RootSidebarMenu/index.jsx"
import BookComponet from "../../../../../components/adminPage/setting/libary/book/index.jsx"
import BookComponetTable from "../../../../../components/adminPage/setting/libary/book/indexx";


export const LibraryAfterPage = () => {
    return (
            <RootSidebarMenu>
                <AdminRootToken>
                    {/*<BookComponet />*/}
                    <BookComponetTable/>

                </AdminRootToken>
            </RootSidebarMenu>
    )
}
export default LibraryAfterPage