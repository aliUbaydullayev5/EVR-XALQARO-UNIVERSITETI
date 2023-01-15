import styled from 'styled-components'
import Image from "next/image";

const Container = styled.div`
  padding: 20px 105px;
  @media only screen and (max-width: 1000px) {
    padding: 42px 11px;
    height: 100%;
    width: 100%;
  }
  
`

Container.Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 60px;
  line-height: 105.9%;
  display: flex;
  align-items: center;
  letter-spacing: -0.025em;
  color: #FFFFFF;
  @media only screen and (max-width: 1000px) {
    font-weight: 600;
    font-size: 23px;
    line-height: 105.9%;
    letter-spacing: -0.025em;
    color: #FFFFFF;
    margin: 61px 0 0 0;
    text-align: center;
    display: flex;
    justify-content: center;
  }

`
Container.SubTitle = styled.div`
  font-weight: 400;
  font-size: 28px;
  line-height: 105.9%;
  display: flex;
  align-items: center;
  letter-spacing: -0.025em;
  color: rgba(255, 255, 255, 0.7);
  margin: 15px 0 0 0;
  @media only screen and (max-width: 1000px) {
    font-weight: 400;
    font-size: 16px;
    line-height: 105.9%;
    letter-spacing: -0.025em;
    color: rgba(255, 255, 255, 0.7);
    margin: 29px 0 0 0;
    text-align: center;
    display: flex;
    justify-content: center;
  }
`

Container.Row = styled.div`
  margin: 15px 0 0 0;
  display: flex;
  justify-content: ${({js})=> js ? js : 'start'};
  align-items: start;
  gap: 31px;
  max-width: 1050px;
  @media only screen and (max-width: 800px) {
    display: grid;
    gap: 19px;
    width: 100%;
    justify-content: ${({mjs})=> mjs ? mjs : 'start'};
  }

`
Container.AreaLogo = styled.div`
  display: grid;
  grid-template-columns: 182px 5px 400px;
  grid-gap: 22px;
  .logo{
    animation: 10s slidein infinite;
    height: 184px;
  }
  @media only screen and (max-width: 1000px) {
    display: none;
  }
  
  @keyframes slidein {
    0% {
      transform: rotateY(0deg);
    }
    10%{ 
    }
    20%{
    }
    30%{
      transform: rotateY(360deg);

    }
    40%{

    }
    50% {
      transform: rotateY(0deg);
    }
    60% {
      transform: rotateY(0deg);
    }
    70% {
      transform: rotateY(0deg);
    }
    80% {
      transform: rotateY(0deg);
    }
    90% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(0deg);
    }
  }
`

Container.Logo = styled(Image)`
  max-height: 184px;
  max-width: 601px;
`
Container.LogoLine = styled.div`
  height: 100%;
  width: 3px;
  background-color: #fff;
`
Container.LogoTitle = styled.div`
  font-weight: 700;
  font-size: 90px;
  line-height: 100px;
  color: #FFFFFF;
  white-space: nowrap;
  vertical-align: baseline;

`
Container.MobileText = styled.div`
  font-family: 'Bebas Neue';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 40px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
  gap:10px;
 
 
  >b{
    background-color:white ;
    height: 74px;
    border: 1px solid white;
  }
`

Container.Number = styled.div`
  width: 100%;
  position: relative;
  .customPhoneInput{
    border-radius: 15px !important;
    height: 60px !important;
    width: 100% !important;
    background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%) !important;
    box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.25) !important;
    padding: 0 20px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 105.9%;

    display: flex;
    align-items: center;
    letter-spacing: -0.025em;
    color: #fff;

    @media only screen and (max-width: 1000px) {
      height: 52px !important;
      border-radius: 5px !important;
      font-size: 26px;
      padding: 0 10px;
    }
    
  }
`
Container.FormatNumber = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  font-size: 32px;
  font-weight: 400;
  line-height: 105.9%;
  letter-spacing: -0.025em;
  color: white;
  @media only screen and (max-width: 800px) {
    top: 15px;
    left: 10px;
    font-size: 26px;
  }
`

 







// ----- Mobile ----

Container.AreaLogoMobile = styled.div`
  @media only screen and (min-width: 1000px) {
    display: none;
  }
  padding: 0 0 0 20px;
  width: 100%;
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  >div{
    display: flex;
    align-items: center;
  }
  
  .logo{
    width: 20vw;
    height: 20vw;
    animation: 10s slidein infinite;
  }
  .textLogo{
    width: 50vw;
    height: 30vw;
    max-width: 350px;
    max-height: 200px;
  }
  @keyframes slidein {
    0% {
      transform: rotateY(0deg);
    }
    10%{
    }
    20%{
    }
    30%{
      transform: rotateY(360deg);

    }
    40%{

    }
    50% {
      transform: rotateY(0deg);
    }
    60% {
      transform: rotateY(0deg);
    }
    70% {
      transform: rotateY(0deg);
    }
    80% {
      transform: rotateY(0deg);
    }
    90% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(0deg);
    }
  }
  
`






export default Container