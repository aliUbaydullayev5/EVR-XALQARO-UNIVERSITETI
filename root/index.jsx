import {useRouter} from "next/router";
import Navbar from "../components/navbar/Navbar";
import SideBar from "../components/SideBar";
import Container from "./style.js";
import LineComponent from "../components/LineComponent";
import {useSelector} from "react-redux";
import {useEffect} from "react";

const Root = ({ children }) => {

    const { pathname } = useRouter()

    const {pushToHome} = useSelector((store)=> store.firstSmsCodeFetch)

    const router = useRouter()

    // useEffect(()=> {
    //     if(pushToHome){
    //         router.push('/homePage')
    //     }
    //     if(!localStorage.getItem('firstToken')){
    //         router.push('/firstPage')
    //     }
    // }, [pushToHome])

    return (
        <Container>
            <Container.Inset firstPage={pathname === '/firstPage' ? true : false}>
                <Container.MainOfInset>
                    {
                        pathname !== '/firstPage' &&
                        <Container.NavbarArea>
                            <Navbar />
                        </Container.NavbarArea>
                    }
                    {
                        pathname !== '/firstPage' &&
                        <Container.Line>
                            <LineComponent />
                        </Container.Line>
                    }

                    <Container.MainMiniBlock firstPage={pathname === '/firstPage' ? true : false}>
                        <Container.MiniContent>
                            {children}
                        </Container.MiniContent>
                        {
                            pathname !== '/firstPage' &&
                            <Container.SideBarLaptop>
                                <SideBar/>
                            </Container.SideBarLaptop>
                        }
                    </Container.MainMiniBlock>

                    {
                        pathname !== '/firstPage' &&
                        <Container.SideBarMobile>
                            <SideBar/>
                        </Container.SideBarMobile>
                    }
                </Container.MainOfInset>
            </Container.Inset>
        </Container>
    )
}

export default Root