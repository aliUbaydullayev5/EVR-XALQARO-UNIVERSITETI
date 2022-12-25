import Container, { ChatAtvet, ChatCont, UserCon } from "./style"
import {Button} from "../../generic";
import {useRouter} from "next/router";
import chatData from "../../Mock/chatData/index.js";
import { useState } from "react";
import Image from "next/image.js";

const ChatComponents = () => {
    const router = useRouter()
    const [data, setData] = useState(chatData)
    
    const [idChat, setIdChat] = useState(0)
    const [message, setMessage] = useState([])

    const findId = (id) => {
        setIdChat(id)
        const messageConst = data.filter((value) => value.id == id)[0]
        setMessage(messageConst)
    }

    return (
        <> 
         <Container.Top>
                <Container.TopTitle>Shaxsiy xabarlar</Container.TopTitle>
          </Container.Top>

            
        <Container>
                <Container.Bottom>
                    <Container.BottomDesc>
                        <Container.BottomDescInset>
                            {data.map((val) => {
                                return (
                                    <UserCon onClick={() => findId(val.id)} key={val.id}>
                                      <UserCon.Image>
                                        <Image src={val.img} alt='user'/>
                                        </UserCon.Image>
                                        <UserCon.Box>
                                         <UserCon.Name>
                                            <h1>{val.name}</h1>
                                            <p>{val.status}</p>
                                            </UserCon.Name>
                                          <UserCon.Notif>
                                                <p>+{val.notif}</p>
                                          </UserCon.Notif>
                                     </UserCon.Box>
                                    </UserCon> 
                              )
                          })}  
                        </Container.BottomDescInset>
                    </Container.BottomDesc>
                 </Container.Bottom>
                <Container.Bottom>
                    <Container.BottomDesc>
                        <Container.BottomDescInset>
                            <ChatCont>
                                <Image alt={'img of person'} src={message?.img} />
                              <ChatCont.Text>
                                    <h1>{message?.name}</h1>
                                    <p>{message.status}</p>
                              </ChatCont.Text>
                            </ChatCont>
                            {message?.messanger?.map(({ id, by, messege }) => (
                                <ChatAtvet.Main position={by}>
                                    <ChatAtvet key={id}>
                                        <h3>{by} : {messege}</h3>
                                    </ChatAtvet>
                                </ChatAtvet.Main>
                            ))}
                        </Container.BottomDescInset>
                    </Container.BottomDesc>
                </Container.Bottom>
                <div></div>
              </Container>
            
        </>
    )
}

export default ChatComponents