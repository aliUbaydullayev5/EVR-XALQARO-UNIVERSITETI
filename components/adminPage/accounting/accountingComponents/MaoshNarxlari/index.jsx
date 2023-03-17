import Container from './style'
import {TbReportMoney} from "react-icons/tb"

const MaoshNarxlari = ({subTitle}) => {
    return(
        <Container>
            <div className={'title nocopy'}>
                <TbReportMoney size={'38px'} color={'#fff'} />&nbsp;&nbsp;Moliya&nbsp;<span className={'subTitle'}> &gt; {subTitle}</span>
            </div>
            <div className={'filter'}>
            </div>
            <div className={'dataArea'}>

            </div>
        </Container>
    )
}

export default MaoshNarxlari