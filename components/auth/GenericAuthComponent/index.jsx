import Container from './style'
import {Button, Input} from "../../generic";
import PersonIcon from '../../../assets/icon/inputIcon.svg'
import BlockIcon from '../../../assets/icon/inputBlock.svg'

import {useRouter} from "next/router";
const GenericAuthComponent = ({title, pushPath, royxat = true}) => {
    const router = useRouter()
    const pushFunc = () => {
        if(pushPath){
            router.push(pushPath)
        }
    }
    return(
        <Container>
            <Container.Block>
                <Container.Top>
                    <Container.Title>{title}</Container.Title>
                </Container.Top>
                <Container.Bottom>
                    <Container.InputArea>
                        <PersonIcon className={'personIcon'} />
                        <Input borderBoT={'2px solid #fff'} radius={'0px'} placeholder={'ID raqamingiz'} width={'333px'} height={'32px'} bc={'rgba(255,255,255,0)'} shadowOff={true} size={'24px'} padding={'0 0 0 40px'} />
                    </Container.InputArea>
                    <Container.InputArea>
                        <BlockIcon className={'blockIcon'} />
                        <Input borderBoT={'2px solid #fff'} radius={'0px'} placeholder={'Pasport seriyangiz'} width={'333px'} height={'32px'} bc={'rgba(255,255,255,0)'} shadowOff={true} size={'24px'} padding={'0 0 0 40px'} />
                    </Container.InputArea>
                    <Container.ButtonArea>
                        <div>
                            <Button color={'#221F51'} bc={'#fff'} radius={'6px'} width={'333px'} height={'52px'} onclick={()=> pushFunc()}>KIRISH</Button>
                        </div>
                        <Container.Desc className={'nocopy'}>ID raqamingizni esdan chiqardingizmi?</Container.Desc>
                        {
                            royxat &&
                            <Container.SubDesc className={'nocopy'} >Ro’yxatdan o’tish</Container.SubDesc>
                        }
                    </Container.ButtonArea>
                </Container.Bottom>
            </Container.Block>
        </Container>
    )
}
export default GenericAuthComponent