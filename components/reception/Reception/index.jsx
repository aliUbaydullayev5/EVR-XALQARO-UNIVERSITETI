import { useRouter } from 'next/router.js'
import { Button } from '../../generic/index.jsx'
import Container, { Box, BtnCon , Text } from './style.js'


export const Reception = () => {
    const query = useRouter()

    return (
        <Container>
            <Box>
                <Text>
                    <p>Qabul</p>
                </Text>
                <BtnCon>
                    <Button mwidth={'214px'} msize={'16px'} mheight={'37px'} size={'32px'} width={'345px'}  height={'51px'} onclick={() => query.push('receptionPage/abiturient')} >Abiturient</Button>
                    <Button mwidth={'214px'} msize={'16px'} mheight={'37px'} size={'32px'}  height={'51px'} width={'345px'} onclick={() => query.push('receptionPage/oqishnikochirish')}>O‘qishni ko‘chirish</Button>
                    <Button mwidth={'214px'} msize={'16px'} mheight={'37px'} size={'32px'}  height={'51px'} width={'345px'} onclick={() => query.push('receptionPage/magistratura')}>Magistratura</Button>
                    <Button mwidth={'214px'} msize={'16px'} mheight={'37px'} size={'32px'}  height={'51px'} width={'345px'} onclick={() => query.push('receptionPage/agent')}>Agent</Button>
                </BtnCon>
            </Box>
        </Container>

    )
}

export default Reception