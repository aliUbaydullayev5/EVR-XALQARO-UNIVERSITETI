import Container from './style'
import {FaRegMoneyBillAlt} from "react-icons/fa"

const Xarajatlar = ({subTitle}) => {
    return(
        <Container>
            <div className={'title nocopy'}>
                <div><FaRegMoneyBillAlt size={'38px'} color={'#fff'} />&nbsp;&nbsp;Moliya&nbsp;<span className={'subTitle'}> &gt; {subTitle}</span></div>
                <div>dsadsa</div>
            </div>
            <div className={'filter'}>
            </div>
            <div className={'dataArea'}>

            </div>
        </Container>
    )
}

export default Xarajatlar