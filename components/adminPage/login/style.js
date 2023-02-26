import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ;
  height: 100vh;
`

Container.Box = styled.div`
  height: 378px;
  background: rgba(34, 31, 81, 0.95);
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 15px;
  width: 367px;
  >div{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    height: 100%;
    p{
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      display: flex;
      align-items: center;
      color: #FFFFFF;
    }
  }
`
Container.Input = styled.div`
 position: relative;
 >p{
  margin: 5px 0px;
 }

 .show {
  position: absolute;
  top: 45px;
  right: 20px;
  bottom: 0px;
 }
   @media only screen and (max-width: 800px) {
    >p{
      margin: 5px auto;
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: center;
      
    }
   }
`

Container.Number = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
>p{
  margin: 5px 0px;
}
  .customPhoneInput{
    border-radius: 15px !important;
    background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%) !important;
    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.25) !important;    
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 105.9%;
    letter-spacing: -0.025em;
    color: #fff;
    width: 310px !important;
    padding: 0 0 0 20px !important;
    height: 46px;
    border-radius: 5px!important;
    @media only screen and (max-width: 800px) {
      width: 220px !important;
      font-size: 16px;
      height:35px !important;
      border-radius: 5px !important;  
      margin: 0 auto !important;
    }
  } 
  @media only screen and (max-width: 800px) {
    width: 100%;
    >p{
      margin: 5px auto;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;

    }
  }
`

Container.ButtonLoader = styled.div`
  text-align: center;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
`

export default Container

