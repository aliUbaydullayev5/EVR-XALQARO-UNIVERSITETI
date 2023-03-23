import { Menu } from 'antd'
import Container from './style'
import Logo from "../../../assets/icons/logo.svg";
import {useState} from "react";
import {FcTodoList ,FcViewDetails ,FcDam} from "react-icons/fc"
import {GrGallery} from "react-icons/gr"
import {FaUsers} from "react-icons/fa"
import TalimYunalishAbuturent from "./talimYunalish/TalimYunalishAbuturent";
import TalimYunlishMaster from "./talimYunalish/TalimYunalishMaster";
import TalimYunalishTypeAddCom from "./talimYunalish/TalimYunalishTypeAdd";
import { useRouter } from "next/router"
import QuationCom from "./testCom/Quation";
import QuationResalt from "./testCom/QuationResalt";
import ExsamStandart from "./testCom/exsamStandart";
import AfterComponet from "./libary/after";
import BookComponet from "./libary/book";
import BookLaunguage from "./libary/bookLaunguage";
import BookTypesComponet from "./libary/bookTypes";
import GalleryaComponet from "./galereya";
import AboutUsComponents from "./aboutUs";
import ExamSubjectCreate from "./exsam/examSubject";
import FacultetsImthonCom from "./exsam/Facultets";
import SubjectMandatory from "./exsam/subjectMandatory";



const SettingComponent = () => {
    const quarey = useRouter()

    const [page, setPage] = useState('Biz haqimizda')
    function getItem(label, key, icon, children, type) {return {key, icon, children, label, type,}}

    const items = [
        getItem('Ta’lim yo’nalishlari', 'sub1', <FcTodoList/>, [
            getItem('Abuturent', 'Abuturent'),
            getItem('Magistratura', 'Magistratura'),
            getItem('Yunalishlar Tartiblash ', 'Yunalishlar Tartiblash'),

        ]),

        getItem('Imtxon', 'sub2', <FcTodoList/>, [
            getItem('Imtxon Fan', 'Imtxon Fan'),
            getItem('Imthon Majburiy Fan', 'Imthon Majburiy Fan'),
            getItem('Talim Yunalish Fan Qo`shish', 'Talim Yunalish Fan Qo`shish')
        ]),

        getItem('Test', 'sub4', <FcTodoList/>, [
            getItem('Test Savollar Qo`shsih', 'Test Savollar Qo`shsih'),
            getItem('Test Savollar', 'Test Savollar'),
            getItem('Test Boshqaruv', 'Test Boshqaruv'),
        ]),
        getItem('Kutubxona', 'sub5',<FcTodoList/> , [
            getItem('Mualif', 'Mualif'),
            getItem('Yunalishlar', 'Yunalishlar'),
            getItem('Til', 'Til'),
            getItem('Kitoblar', 'Kitoblar'),
        ]),

        getItem('Biz haqimizda', 'Biz haqimizda', <FcTodoList/>),
        getItem('Gallery', 'Gallery', <FcTodoList/>),
    ]
    const returnComFunc = (type) => {
        switch (type) {
            case 'Abuturent': return <TalimYunalishAbuturent/>
            case 'Magistratura': return <TalimYunlishMaster/>
            case 'Yunalishlar Tartiblash': return <TalimYunalishTypeAddCom />
            case 'Imtxon Fan': return <ExamSubjectCreate/>
            case 'Imthon Majburiy Fan': return <SubjectMandatory />
            case 'Talim Yunalish Fan Qo`shish': return <FacultetsImthonCom />
            case 'Test Savollar Qo`shsih': return <QuationCom />
            case 'Test Savollar': return <QuationResalt />
            case 'Test Boshqaruv': return <ExsamStandart />
            case 'Mualif': return <AfterComponet />
            case 'Til': return <BookComponet />
            case 'Yunalishlar': return <BookLaunguage />
            case 'Kitoblar': return <BookTypesComponet />
            case 'Biz haqimizda': return <AboutUsComponents />
            case 'Gallery': return <GalleryaComponet />

        }
    }

    return(
        <>
            <Container.LeftMenu>
                <Container.Logo onClick={() => quarey.push('/admin/home')} >
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
                    onClick={(e)=> setPage(e.key ) }
                    style={{width: 280}}
                    defaultSelectedKeys= {['Biz haqimizda']}
                    defaultOpenKeys={['Biz haqimizda']}
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