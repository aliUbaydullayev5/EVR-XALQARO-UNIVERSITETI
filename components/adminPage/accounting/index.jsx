import Container from './style'
import {Menu} from "antd";
import {AiOutlineDatabase} from "react-icons/ai"
import {TbPigMoney, TbReportMoney} from "react-icons/tb"
import {FaRegMoneyBillAlt} from "react-icons/fa"
import {GiReceiveMoney} from "react-icons/gi"
import {MdOutlineWorkspacePremium} from "react-icons/md";
import {useState} from "react";
import Tolovlar from "./accountingComponents/Tolovlar";
import Logo from "../../../assets/icons/logo.svg"
import {useRouter} from "next/router";
import Xarajatlar from "./accountingComponents/Xarajatlar";
import Kirim from "./accountingComponents/Kirim";
import MaoshNarxlari from "./accountingComponents/MaoshNarxlari";
import Premium from "./accountingComponents/Premium";
const AccountingComponent = () => {

    const router = useRouter()
    const [page, setPage] = useState('berilganOyliklar')
    function getItem(label, key, icon, children, type) {return {key, icon, children, label, type,}}

    const items = [
        // getItem('Barcha ma\'lumotlar', 'barchaMalumotlar', <AiOutlineDatabase size={'24px'} color={'#fff'} />),
        getItem('Berilgan oyliklar', 'berilganOyliklar', <TbPigMoney size={'24px'} color={'#fff'} />),
        getItem('Xarajatlar', 'xarajatlar', <FaRegMoneyBillAlt size={'24px'} color={'#fff'} /> ),
        getItem('Kirim', 'kirim', <GiReceiveMoney size={'24px'} color={'#fff'} />),
        getItem('Maosh narxlari', 'maoshNarxlari', <TbReportMoney size={'24px'} color={'#fff'} />),
        getItem('Premium', 'premium', <MdOutlineWorkspacePremium size={'24px'} color={'#fff'} />),
    ]
// #211E51

    const returnComFunc = (type) => {
        switch (type) {
            case 'barchaMalumotlar': return <div>1</div>
            case 'berilganOyliklar': return <Tolovlar subTitle={'Berilgan oyliklar'} />
            case 'xarajatlar': return <Xarajatlar subTitle={'Xarajatlar'} />
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

export default AccountingComponent