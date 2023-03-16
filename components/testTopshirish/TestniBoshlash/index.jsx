import Container from './style.js'
import CursTuri from '../../../assets/image/TesTuri.png'
import Image from 'next/image'

import { Button } from '../../generic'
import { useRouter } from 'next/router'

export const TestBoshlashCom = () => {
    const router = useRouter()
    return (
        <Container>
            <Container.Text>
                <h1>Test</h1>
            </Container.Text>

            <Container.Img>
                <Image src={CursTuri} alt='big'/>
            </Container.Img>

            <Container.Btn>
                <Button margin={'0 auto'} size={'36px'} height={'71px'} width={'434px'} onclick={() => router.push('/testTopshirish/solveTheTest')}>Testni boshlash</Button>
            </Container.Btn>
        </Container>
    )
}
export default TestBoshlashCom
