import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1.1fr 2fr;
@media only screen and (max-width: 800px) {
 grid-template-columns: auto;

}
`

Container.Inset = styled.div`
  width: 100%;
  background: #221F51;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.81);
  border-radius: 30px;
  height: 474px;
  display: grid;
  grid-template-rows: 84px 1fr;
  @media only screen and (max-width: 1000px) {
    grid-template-rows: 31px 1fr;
  }


`
Container.Top = styled.div`
  background: #221F51;
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 30px 30px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1000px) {
     background: #221F51;
    box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
    border-radius: 30px 30px 0px 0px;
    height: 31px;
  }
`
Container.TopTitle = styled.div`
  font-weight: 500;
  font-size: 40px;
  line-height: 49px;
  color: #FFFFFF;
  @media only screen and (max-width: 1000px) {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  } 

`

Container.Bottom = styled.div`
  /* padding: 0px 25px; */
  display: grid;
  grid-gap: 8px;
  padding: 20px 0px;
  @media only screen and (max-width: 1000px) {
    padding: 25px 0px;
  }
  
`

Container.BottomCopy = styled.div`
  /* padding: 0px 25px; */
  display: grid;
  grid-gap: 8px;
  padding: 20px 0px;
  @media only screen and (max-width: 1000px) {
    padding: 25px 0px;
    display: none;
  }
`
Container.BottomDesc = styled.div`
  height: 247px !important;
  height: 100% !important;
  border-bottom: 3px solid #ffffff !important;
  @media only screen and (max-width: 1000px) {
    height: 430px !important;
  }
`
Container.BottomDescCopy = styled.div`
  height: 247px !important;
  height: 100% !important;
  border-bottom: 3px solid #ffffff !important;
  @media only screen and (max-width: 1000px) {
    height: 430px !important;
  }
`

Container.BottomDescInset = styled.div`
  width: 100%;
  height: 470px !important;
  overflow-y: scroll;
  display: flex;
  flex-direction:column;
  gap:10px;
  padding: 10px;
  @media only screen and (max-width: 1000px) {
    height: 390px !important;
  }
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */

  ::-webkit-scrollbar-track {
    width: 10px !important;
    padding: 0 5px 0 0;
    background: #9a9a9a;
    opacity: 0.5;
    border-radius: 30px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    transform: matrix(-1, 0, 0, 1, 0, 0);
    padding: 10px !important;
  }
  /* Handle */

  ::-webkit-scrollbar-thumb {
    background: #FFFFFF;
    border-radius: 30px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }
  /* Handle on hover */
`


Container.BottomDescInsetCopy = styled.div`
  width: 100%;
  height: 470px !important;
  overflow-y: scroll;
  display: flex;
  flex-direction:column;
  gap:10px;
  padding: 10px;
  @media only screen and (max-width: 1000px) {
    height: 390px !important;
  }
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */

  ::-webkit-scrollbar-track {
    width: 10px !important;
    padding: 0 5px 0 0;
    background: #9a9a9a;
    opacity: 0.5;
    border-radius: 30px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    transform: matrix(-1, 0, 0, 1, 0, 0);
    padding: 10px !important;
  }
  /* Handle */

  ::-webkit-scrollbar-thumb {
    background: #FFFFFF;
    border-radius: 30px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }
  /* Handle on hover */
`


const UserCon = styled.div`
  width: 100%;
  max-width:412px;
  background: #221F51;
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  padding:0px 0px 0px 10px ;
  align-items: center;
  display: flex;
  gap: 10px;
  `
UserCon.Image = styled.div`
  >img{
    border-radius: 50%;
    width: 45px;
    height: 45px;
    cursor: pointer;
    transition: all 0.4 ease-in-out ;
    :hover{
    transform: scale(1.05);
}

  } 
`
UserCon.Box = styled.div`
display:flex;
align-items: center;
width: 100%;
justify-content:space-between;
`
UserCon.Name = styled.div`
display: flex;
align-self: center;
flex-direction:column;
      cursor: pointer;
    transition: all 0.4 ease-in-out ;
    :hover{
    transform: scale(1.05);
}


>h1 {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  color: #FFFFFF;
  
}
>p{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
  opacity: 0.7;
}
`
UserCon.Notif = styled.div`
  width: 26px;
  height: 17px;
  background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 42px;
  margin-right: 10px;
>p{
  text-align: center;
  display: flex;
  align-items:center;
  justify-content: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
}
`


const ChatCont = styled.div`
  width: 99%;
  height: 75px;
  background: #221F51;
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  display: flex;
  align-items: center;  
  margin:  0px auto;
  gap:20px;
  padding:0px 20px ;
  >img{
    border-radius: 50%;
    width: 55px;
    height: 55px; 
  }
`
ChatCont.Text = styled.div`
display: flex;
flex-direction: column;
  >h1{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
}
  >p{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
    opacity: 0.7;
  }
`

const ChatAtvet = styled.div`
  display: flex;
  flex-direction:column ;
  justify-content: space-between;
  background: #2E2A6E;
  box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.25);
  border-radius: 0px 15px 15px 15px;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  min-height: 200px;
  min-height: 35px;
  >h3{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
    text-align: center;
  }
`
ChatAtvet.Main = styled.div`
  display: flex;
  justify-content: ${({ position }) =>  position === 'admin' ? 'start' : 'end'};
`
const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`
ChatContainer.Send = styled.div`
 position: relative;
 .Send{
  position: absolute;
  top: 10px;
  right: 10px;

 }
`
export { UserCon, ChatCont, ChatAtvet, ChatContainer }
export default Container