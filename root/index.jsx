import { useRouter } from "next/router";
import Navbar from "../components/navbar/Navbar";
import SideBar from "../components/SideBar";
import Container from "./style.js";
import LineComponent from "../components/LineComponent";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Root = ({ children }) => {
    const { pathname } = useRouter()
    const { status, pushToHome } = useSelector((store) => store.firstSmsCodeFetch)
    const router = useRouter()


    useEffect(() => {
        if (!localStorage.getItem('firstToken')) router.push('/firstPage')
        window.replainSettings = { id: 'f015f04b-fe70-4d86-af18-e206da7d1159' };
        (function (u) {
            var s = document.createElement('script'); s.async = true; s.src = u;
            var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
        })('https://widget.replain.cc/dist/client.js');
   }, [])

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
                                <SideBar />
                            </Container.SideBarLaptop>
                        }
                    </Container.MainMiniBlock>

                    {
                        pathname !== '/firstPage' &&
                        <Container.SideBarMobile>
                            <SideBar />
                        </Container.SideBarMobile>
                    }
                </Container.MainOfInset>
            </Container.Inset>
        </Container>
    )
}

export default Root