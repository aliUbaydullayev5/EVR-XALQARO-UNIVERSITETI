import AdminRootToken from "../../../components/adminPage/outlet/index.jsx"
import RootAdmin from "../../../components/adminPage/RootLogo/index.jsx"
import { SidebarAdmin } from "../../../components/adminPage/setting/sidebarMenu/index.jsx"
import Container from "./style.js"



const SettingPage = () => {
  return (
    <RootAdmin>
      <AdminRootToken>
        <Container>
        <SidebarAdmin />
        <TalimYunalishCom/>
        </Container>
      </AdminRootToken>
    </RootAdmin>
  )

}
export default SettingPage