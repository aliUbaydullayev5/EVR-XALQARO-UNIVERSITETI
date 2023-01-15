import { useRouter } from 'next/router.js'
import Container from './style'


const HomeComponent = () => {
    const router = useRouter()

    return(
        <Container >
            <div onClick={() => router.push('admin/management')}>
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
            <div onClick={() => router.push('admin/arizalar')} >
                <p>Arizalar</p>
            </div>
            <div onClick={() => router.push('admin/qabuldanotganlar')}>
                
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

export default HomeComponent