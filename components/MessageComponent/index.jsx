import Container from './style'
import MiniClose from '../../assets/icon/miniClose.svg'
import Telegram from '../../assets/icon/telegram.svg'
import {useState} from "react";

const MassageComponent = ({changeHidden}) => {

    const [message, setMessage] = useState('')

    const [chat, setChat] = useState(
        [
            {
                id: 1,
                type: 'data',
                data: '02.12.2022'
            },
            {
                id: 2,
                type: 'chat',
                chat: 'Assalomu alaykum',
                who: 'adminPage'
            }
        ]
    )


    const addMessage = () => {
        if(message.length){
            const allchat = [
                ...chat,{
                    id: Date.now(),
                    type: 'chat',
                    chat: message,
                    who: 'client'
                }
            ]
            setChat(allchat)
            setMessage('')
        }
    }

    return(
        <Container>
            <Container.Top>
                <Container.Title>
                    EVR Xalqaro Universiteti
                    <p>Qabul Bo’limi</p>
                </Container.Title>
                <div className={'center'}>
                    <MiniClose onClick={()=> changeHidden()} />
                </div>
            </Container.Top>
            <Container.Bottom>
                {
                    chat.map((select)=> {
                        if(select.type === 'data'){
                            return <p className="data">{select?.data}</p>
                        }
                        if(select.type === 'chat'){
                            return <Container.Messages who={select.who}>
                                <Container.Message who={select.who}>
                                    {select.chat}
                                </Container.Message>
                            </Container.Messages>
                        }
                    })
                }
            </Container.Bottom>

            <Container.PushMessageArea>
                <Container.PushMessage placeholder={'| Type here...'} onClick={()=> addMessage()} onKeyDown={(e)=> e.key === 'Enter' && addMessage()} value={message} onChange={(e)=> setMessage(e.target.value)} />
                <Telegram className={'telegram'} />
            </Container.PushMessageArea>

        </Container>
    )
}

export default MassageComponent