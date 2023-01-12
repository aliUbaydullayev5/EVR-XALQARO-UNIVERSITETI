import { Modal } from "antd";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    grid-template-columns: auto;
    height: 100%;
    padding: 0px 0px 0px 50px;
    @media only screen and (max-width: 1000px) {
    padding: 0px 0px 0px 20px;

    }

`
const TextCon = styled.div`
    width: 100%;
    margin: 0 auto;
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
}
@media only screen and (max-width: 1000px) {
  >h1{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 105.9%;
    display: flex;
    align-items: center;
    letter-spacing: -0.025em;
    color: #FFFFFF;
  }
}


`
const BoxCon = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  position: relative;
  align-items: center;
  align-items:center;
  gap: 5px;
  
  /* gap: 10px; */
  .formatMain{
    position: relative;
  }
  .format{
    position: absolute;
    z-index: 999;
    line-height: 105.9%;
    letter-spacing: -0.025em;
    color: white;
    font-size: 30px;
    bottom: 12px;
    left: 33px;
@media only screen and (max-width: 1000px) {
   position: absolute;
    z-index: 999;
    line-height: 105.9%;
    letter-spacing: -0.025em;
    color: white;
    font-size: 17px;
    bottom: 2px;
    left: 17px;
}
  }
  .InputLeft{
    margin-left: 20px;
    @media only screen and (max-width: 1000px) {
    margin-left: 0px;     
    }
  }
  .BtnCon{
    position: absolute;
    bottom: 10px;
    left:20px;
    top: 14px;
    @media only screen and (max-width: 1000px) {
    position: absolute;
    bottom: 10px;
    left:20px;
    top: 2px;
    }
  }
  .btnEnd{
    margin-left: 170px;
@media only screen and (max-width: 1000px) {
     margin-left: 0px;
    }

  }
  
`
const ImgBox = styled.div`
    width: 178px; 
    height: 65px;
    background-color: #ffff;
    display:flex;
    justify-content:center;
    align-items:center;
    background: #FFFFFF;
    box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
    border-radius: 19px;
    cursor: pointer;
    display:grid;
    margin-top: 10px;

@media only screen and (max-width: 1000px) {
  .border{
    display: none;
  }
}
@media only screen and (min-width: 1000px) {
.ClickMobile{
display: none;
}
}
@media only screen and (max-width: 1000px) {
    width: 138px;
    height: 35px;
    background-color: #ffff;
    display:flex;
    justify-content:center;
    align-items:center;
    background: #FFFFFF;
    box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
   border-radius:5px;
   cursor: pointer;

}
`

const AntModal = styled(Modal)`
box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
border-radius: 15px;
padding:  50px;
display: flex;
justify-content: center;
align-items: center;
margin:  0 auto;

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
  }
}
`
const BtnText = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #221F51;
 @media only screen and (max-width: 1000px) {
    font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #221F51;
 } 
`
const AntTimeCon = styled.div`
 display: flex;
 justify-content: space-between;
 margin-top: 10px;
`
export { TextCon, BoxCon, BtnText, ImgBox, AntModal, AntTimeCon }
export default Container