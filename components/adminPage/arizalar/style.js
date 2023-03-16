import styled from "styled-components";
import { Modal } from 'antd'


const Container = styled.div`
  gap: 24px;
  width: 100%;
  margin: 0 auto;
  max-width: 1273px;
  display: flex;
  background: #211E51;
  box-shadow: 0px 0px 28px rgba(0, 0, 0, 0.5);
  border-radius: 45px;
  padding: 40px 40px;


  
  
 @media only screen and (max-width: 1000px) {
  }
`
// left

Container.Top=styled.div`
max-width: 830px;
height: 100%;
display: flex;
flex-direction: column;
gap: 12px;
width: 100%;
`
Container.Map=styled.div`
 display: flex;
 flex-direction: column;
 gap: 12px;
`

Container.Search=styled.div`
 position: relative;
 .search{
  position: absolute;
  z-index: 4;
  top: 10px;
  left: 10px;
 }
`

Container.Scrool = styled.div`
  /* width : ; */
   height: 400px;
   overflow-y: scroll;
   padding: 0 15px 0 0;
   width: 670px;
   ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-track {
      width: 10px !important;
      background: #9a9a9a;
      opacity: 0.5;
      border-radius: 30px;
      transform: matrix(-1, 0, 0, 1, 0, 0);
      padding: 10px !important;
    }
    ::-webkit-scrollbar-thumb {
      background: #FFFFFF;
      border-radius: 30px;
      transform: matrix(-1, 0, 0, 1, 0, 0);
    }
`

Container.Input=styled.div`
  width: 40px;
  height: 40px;
  background: #241F69;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  input{
    width: 18px;
    height: 18px;
    border: 1px solid #ffff;
  }
`

Container.Info=styled.div`
  max-width: 651px;
  width: 100%;
  height: 40px;
  background: #241F69;
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  h1{
    font-family: 'Montserrat';
    font-style: normal;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    height: 24px;
    font-weight: 400;
  }
  .id{
    width: 10%;
    font-size: 16px;
    line-height: 20px;
  }
  .fio{
    font-size: 18px;
    line-height: 22px;
    width: 40%;
    border-left: 1px solid #FFFFFF;
  }
  .tel{
    font-size: 18px;
    line-height: 22px;
    width: 30%;
    border-left: 1px solid #FFFFFF;
  }
  .kun{
    font-size: 18px;
    line-height: 22px;
    width: 20%;
    border-left: 1px solid #FFFFFF;
  }
`

Container.Nav = styled.div`
  display: flex;
  max-width: 651px;
  width: 100%;
  gap: 6px;
  height: 40px;
`

// right

const ConHero = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  >button{
    background: #241F69;
  }
  @media only screen and (max-width: 1000px) {
    justify-content: space-evenly;
    .UserImg{
      display: none;
    }
  }

 .TextPsamal{
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 49px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
  justify-content:center;
  align-items:center;
  background: transparent;
  border: 0;
  cursor: pointer;
  @media only screen and (max-width: 1000px) {
  font-size: 20px;
  }
}
`
ConHero.Date = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  >button{
    background: #241F69;
  }
  @media only screen and (max-width: 1000px) {
   display: flex;
   flex-direction: column;
  }
`
ConHero.Exel = styled.div`
  display:flex;
  flex-direction:column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  >button{
    background: #241F69;
    display: flex;
    gap: 34px;
    span{
      font-size: 34px;
    }
    h1{
      color: #fff;
      font-weight: 500;
      font-size: 36px;
      line-height: 44px;
    }
    .sms{
      margin-right: 70px;
    }
    .exel{
      margin-right: 10px;
    }
  }
  
  @media only screen and (max-width: 1000px) {
  
  }
`
const SendModal=styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  position: relative;
  height: 300px;
  padding: 20px;
  h1{
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffff;
    margin: 10px;
  }

  input{
    width: 350px;
    height: 45px;
    border-radius: 20px;
    padding: 0 8px 0 35px;
    background: #295196;
    font-weight: 500;
    line-height: 22px;
    font-size: 18px;
    color: #ffff;
  }

  .sendSms{
    position: absolute;
    z-index: 2;
    top: 98px;
    left: 33px;
  }
`

export { ConHero,SendModal }
export default Container