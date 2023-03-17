import Container from './style'
import {GiReceiveMoney} from "react-icons/gi"

const Kirim = ({subTitle}) => {
    return(
        <Container>
            <div className={'title nocopy'}>
                <GiReceiveMoney size={'38px'} color={'#fff'} />&nbsp;&nbsp;Moliya&nbsp;<span className={'subTitle'}> &gt; {subTitle}</span>
            </div>
            <div className={'filter'}>
            </div>
            <div className={'dataArea'}>

            </div>
        </Container>
    )
}

export default Kirim