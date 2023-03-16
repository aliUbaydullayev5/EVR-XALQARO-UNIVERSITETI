import Container from './style'
import NavBar from "../NavBar";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";

const AdminRoot = ({children, menu = false, center = true, padding = '0 0 0 0'}) => {

    const router = useRouter()
    const [tokenBool, setTokenBool] = useState('pending')

    useEffect(()=> {
        setTokenBool(localStorage.getItem('admin_AccessToken') ? 'success' : 'rejected')
    }, [])
    useEffect(()=> {
        if(tokenBool === 'rejected') router.push('/admin')
    }, [tokenBool])


    return tokenBool === 'success' && (
        <Container menu={menu} center={center} padding={padding} >
            {
                menu ?
                    <Container.Menu>
                        {children}
                    </Container.Menu>
                    :
                    <Container.Navbar>
                        <NavBar/>
                        <div>
                            {children}
                        </div>
                    </Container.Navbar>
            }

        </Container>
    );
}

export default AdminRoot