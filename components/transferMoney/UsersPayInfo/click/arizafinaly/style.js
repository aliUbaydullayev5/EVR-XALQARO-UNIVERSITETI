import { Modal } from "antd";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: grid ;
  grid-template-columns: 5fr 5fr ;
  >div{
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    padding: 0px 50px;

  }
  @media only screen and (max-width: 1000px) {
   >div{
    padding: 0px 10px;
   }
}
`
const BoxCon = styled.div`
  display: flex;
  height: 65vh;

`
BoxCon.Text = styled.div`
>h1{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 105.9%;
  display: flex;
  align-items: center;
  letter-spacing: -0.025em;
  color: #FFFFFF;
  width: 100%;
@media only screen and (max-width: 1000px) {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 105.9%;
  display: flex;
  align-items: center;
  letter-spacing: -0.025em;
  color: #FFFFFF;
}}
`
BoxCon.TextP = styled.div`
>p{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 105.9%;
  display: flex;
  align-items: center;
  letter-spacing: -0.025em;
  color: rgba(255, 255, 255, 0.7);
@media only screen and (max-width: 1000px) {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 105.9%;
  display: flex;
  align-items: center;
  letter-spacing: -0.025em;
  color: rgba(255, 255, 255, 0.7);
}
}
>input{
  min-width: 170px;
}

`

const BtnCon = styled.div`
position: relative;

.Orqaga{
position: absolute;
top: 10px;
bottom: 20px;
left: 20px;
}
`
const AntModal = styled(Modal)`
box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
border-radius: 15px;
padding:  50px;
.ant-modal-body {
  >p{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 105.9%;
    display: flex;
    align-items: center;
    text-align: justify;
    letter-spacing: -0.085em;
    color: #FFFFFF;
    @media only screen and (max-width: 800px) {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      line-height: 105.9%;
      /* or 11px */

      display: flex;
      align-items: center;
      text-align: justify;
      letter-spacing: -0.085em;

      color: #FFFFFF;

     }
  }
}
`

// 2 box shaxsiy cabinet `otish 
const BoxContainer = styled.div`
 
`
const TexContainer = styled.div`
    display: flex;
   flex-direction: column;
   justify-content:  space-around ;
   height: 65vh;
   align-items: center;
`
TexContainer.InputCon = styled.div`
 display: flex;
 flex-direction: column;
 gap: 10px;
 
`
TexContainer.Frist = styled.div`
 >h1{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 105.9%;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.025em;
  color: #FFFFFF;
    @media only screen and (max-width: 800px) {
      font-size: 19px;
      font-weight: 200;
    } 
} 

`
export { BoxCon, BtnCon, AntModal, BoxContainer, TexContainer }
export default Container