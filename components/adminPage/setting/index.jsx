import { SettingOutlined, AppstoreOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import Container from './style'
import Logo from "../../../assets/icons/logo.svg";
import {useState} from "react";
import {useRouter} from "next/router";
import {FcTodoList ,FcViewDetails ,FcDam} from "react-icons/fc"
import TalimYunalishAbuturent from "./talimYunalish/TalimYunalishAbuturent";
import TalimYunlishMaster from "./talimYunalish/TalimYunalishMaster";
import TalimYunalishTypeAddCom from "./talimYunalish/TalimYunalishTypeAdd";

const SettingComponent = () => {
    const router = useRouter()

    const [page, setPage] = useState('berilganOyliklar')
    function getItem(label, key, icon, children, type) {return {key, icon, children, label, type,}}

    const items = [
        getItem('Ta’lim yo’nalishlari', 'sub1', <FcTodoList/>, [
            getItem('Abuturent', 'Abuturent'),
            getItem('Magistratura', 'Magistratura'),
            getItem('Yunalishlar Tartiblash ', 'Yunalishlar Tartiblash'),

        ]),

        getItem('Navigation Two', 'sub2', <FcViewDetails/>, [
            getItem('Option 5', '5'),
            getItem('Option 6', '6'),
            getItem('Option 7', '7')
        ]),

        getItem('Navigation Three', 'sub4', <FcDam/>, [
            getItem('Option 9', '9'),
            getItem('Option 10', '10'),
            getItem('Option 11', '11'),
            getItem('Option 12', '12'),
        ]),
        getItem('Navigation foo', 'sub5', <FcTodoList/>, [
            getItem('Option 13', '13'),
            getItem('Option 14', '14'),
            getItem('Option 15', '15'),
            getItem('Option 16', '16'),
        ]),

        getItem('Navigation fiyf', 'sub6', <FcTodoList/>, [
            getItem('Option 17', '17'),
            getItem('Option 18', '18'),
            getItem('Option 19', '19'),
            getItem('Option 20', '20'),
        ]),
    ]
    const returnComFunc = (type) => {
        switch (type) {
            case 'Abuturent': return <TalimYunalishAbuturent/>
            case 'Magistratura': return <TalimYunlishMaster/>
            case 'Yunalishlar Tartiblash': return <TalimYunalishTypeAddCom />
            case 'kirim': return <Kirim subTitle={'Kirim'} />
            case 'maoshNarxlari': return <MaoshNarxlari subTitle={'Maosh narxlari'} />
            case 'premium': return <Premium subTitle={'Premium'} />
        }
    }

    return(
        <>
            <Container.LeftMenu>
                <Container.Logo onClick={() => router.push('/admin/home')} >
                    <div>
                        <Logo />
                    </div>
                    <div className={'nocopy'}>
                        <p>EVR XALQARO</p>
                        <p>universiteti</p>
                    </div>
                </Container.Logo>
                <Menu
                    theme={'dark'}
                    onClick={(e)=> setPage(e.key)}
                    style={{width: 280}}
                    defaultSelectedKeys={['berilganOyliklar']}
                    defaultOpenKeys={['berilganOyliklar']}
                    mode="inline"
                    items={items}
                    className={'nocopy'}
                />
            </Container.LeftMenu>
            <Container>
                {returnComFunc(page)}
            </Container>
        </>
    )
}

export default SettingComponent