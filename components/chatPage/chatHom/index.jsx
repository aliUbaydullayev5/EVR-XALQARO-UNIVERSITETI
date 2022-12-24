import Container from "./style"
import {Button} from "../../generic";
import {useRouter} from "next/router";


const ChatComponents = () => {
    const router = useRouter()
    return (
        <> 
         <Container.Top>
                <Container.TopTitle>Shaxsiy xabarlar</Container.TopTitle>
          </Container.Top>
        
      
        <Container>
                <Container.Bottom>
                    <Container.BottomDesc>
                        <Container.BottomDescInset>
                                    chat
                        </Container.BottomDescInset>
                    </Container.BottomDesc>
                 </Container.Bottom>

                <Container.Bottom>
                   <Container.BottomDesc>
                        <Container.BottomDescInset>
                            chat
                        </Container.BottomDescInset>
                    </Container.BottomDesc>
                </Container.Bottom>
                <div></div>
              </Container>
            
        </>
    )
}

export default ChatComponents