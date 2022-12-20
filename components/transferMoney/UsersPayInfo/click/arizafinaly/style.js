import { Modal } from "antd";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: grid ;
  grid-template-columns: 5fr 5fr;
  gap: 10px; 
  >div{
    display: flex;
    justify-content: end;
    flex-direction: column;
    gap: 10px;
  }
`
const BoxCon = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 100px ;
  padding-bottom: 20px ;

  
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
}
`

const BtnCon = styled.div`
display: flex;
justify-content: end;
align-items: flex-end ;
margin: 15px 40px;
position: relative;
.Orqaga{
  position: absolute;
  right: 220px;
  top:10px ;
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
  }
}

`

export { BoxCon, BtnCon, AntModal }
export default Container