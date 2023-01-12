import { useRouter } from 'next/router.js'
import Container from './style'


const Home = () => {
    const router = useRouter()

    return(
        <Container >
            <div onClick={() => router.push('homePage/management')}>
                    <p>Boshqaruv</p>
                    <p>bo’limi</p>
           </div>
            <div >
                <p>Dekanat</p>
                <p>bo’limi</p>
            </div>
            <div>
                <p>Buxgalteriya</p>
            </div>
            <div>
                <p>Sozlamalar</p>
            </div>
            <div onClick={() => router.push('homePage/arizalar')} >
                <p>Arizalar</p>
            </div>
            <div onClick={() => router.push('homePage/qabuldanotganlar')}>
                
                <p>Qabuldan</p>
                <p>o’tganlar</p>
            </div>
            <div>
                <p>Imtihondan</p>
                <p> o’tganlar</p>
            </div>
            <div>
                <p>Agent</p>
            </div>
        </Container>
    )
}

export default Home