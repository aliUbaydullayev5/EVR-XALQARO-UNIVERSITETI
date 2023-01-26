import AdminRootToken from "../../../components/adminPage/outlet/index.jsx"
import RootAdmin from "../../../components/adminPage/RootLogo/index.jsx"
import { SidebarAdmin } from "../../../components/adminPage/setting/sidebarMenu/index.jsx"




const SettingPage = () => {
  return (
    <RootAdmin>
      <AdminRootToken>
      <SidebarAdmin />
      </AdminRootToken>
    </RootAdmin>
  )

}
export default SettingPage