import { useRouter } from 'next/router.js'

import Container from './style'



const HomeComponent = () => {
const router =useRouter()
    return (
        <Container>
            <div onClick={() => router.push('/admin//management')}>
                <p>Boshqaruv</p>
                <p>bo’limi</p>
            </div>
            <div>
                <p>Dekanat</p>
                <p>bo’limi</p>
            </div>
            <div onClick={() => router.push('/admin/accounting')}>
                <p>Buxgalteriya</p>
            </div>
            <div onClick={() => router.push('/admin/setting')}>
                <p>Sozlamalar</p>
            </div>
            <div onClick={() => router.push('/admin/arizalar')}>
                <p>Arizalar</p>
            </div>
            <div onClick={() => router.push('/admin/qabuldanotganlar')}>

                <p>Qabuldan</p>
                <p>o’tganlar</p>
            </div>
            <div onClick={() => router.push('/admin/imthonotganlar')}>
                <p>Imtihondan</p>
                <p> o’tganlar</p>
            </div>
            <div onClick={() => router.push('/admin/agent')}>
                <p>Agent</p>
            </div>
        </Container>
    );
}

export default HomeComponent