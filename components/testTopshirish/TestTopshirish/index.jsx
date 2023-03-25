import Container from './style.js'
import LogoEvr from "../../../assets/icons/EvrLogoTest.svg"
import Button from "../../generic/Button/index.jsx"
import {useRouter} from "next/router"
import {useEffect, useState} from "react";


export const TestTopshirishComp = () => {

    const query = useRouter()

    const [token ,setToken] = useState()
    useEffect(()=> {setToken(!!localStorage?.getItem('access-token'))}, [])


    return (
        <Container>

            <Container.Logo>
                <LogoEvr/>
                <b></b>
                <div className='nocopy'>
                    <h1>EVR XALQARO</h1><h1>universiteti</h1>
                </div>
            </Container.Logo>

            <Container.Text>
                <h1 className='nocopy'>
                    Evr Xalqaro Universiteti jamoasi
                    testni muvaffaqiyatli topshirishingiz
                    uchun omad tilaydi.
                </h1>
            </Container.Text>

            <Container.Btn>
                {
                    token ?
                        <Button onclick={() => query.push('/testTopshirish/testBoshlash')} width={'300px'} height={'61px'} radius={'74px'}>Test Ishlash</Button>
                        :
                        <Button onclick={() => query.push('/auth')} width={'244px'} height={'61px'} radius={'74px'}>Kirsh</Button>
                }
            </Container.Btn>

        </Container>
    )
}

{/*<Button onclick={() => query.push('/testTopshirish/testBoshlash')} width={'244px'} height={'61px'} radius={'74px'}>Kirsh</Button>*/}


export default TestTopshirishComp