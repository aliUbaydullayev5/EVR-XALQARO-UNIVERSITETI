import styled from 'styled-components'
import Image from "next/image";

const Container = styled.div`
  height: 64px;
  display: grid;
  grid-template-columns: 1.1fr 3.3fr 0.8fr;
  grid-template-rows: 1fr;
  align-items: center;
  padding: 0 0 20px 0;
  grid-gap: 20px;
  >div{
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    gap: 15px;
  }
  
  .scale{
    transition: .15s;
    :hover{
      transform: scale(1.1);
    }
    :active{
      transform: scale(1.1);
    }
  }
  
  @media only screen and (max-width: 1000px) {
    width: 100%;
    height: 86px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    padding: 0;
    gap: 0;
    grid-column-gap: 10px;
    .forMobileCenter{
      grid-column: 1/4;
      grid-row: 2/3;
      gap: 3vw !important;
      
    }
  }
`

Container.Image = styled(Image)`
  height: 100%;
  
`

Container.UserBlock = styled.div`
  position: relative;

`

Container.Logo = styled.div`
  .logoIcon{
    transform: rotate3d(0);
  }
  display: flex;
  justify-content: center;
  gap: 8px !important;
  .logo{
    animation: 10s slidein infinite;
  }
  .mobileLogo{
    display: none;
  }
  @media only screen and (max-width: 1000px) {
    grid-column: 1/2;
    width: 146px;
    .logo{
      display: none;
    }
    .mobileLogo{
      display: block;
      width: 40px !important;
      height: 40px !important;
      max-width: 95px;
    }
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

Container.LogoText = styled.div`
  font-family: 'Bebas Neue';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 32px;
  color: #FFFFFF;
  white-space: nowrap;
  transition: .15s;
  letter-spacing: 1px;
  :hover{
    letter-spacing: 2px;
  }
  @media only screen and (max-width: 1000px) {
    font-weight: 700;
    font-size: 22px;
    line-height: 24px;
    color: #FFFFFF;
    :hover{
      letter-spacing: 1px !important;
    }
  }
  
`

Container.MenuArea = styled.div`
  position: relative;
`

Container.IconArea = styled.div`
  display: block;
  .iconMobile{
    display: none;
  }
  @media only screen and (max-width: 1000px) {
    .iconLaptop {
      display: none;
    }
    .iconMobile{
      display: block;
    }
    display: flex !important;
    justify-content: end !important;
    align-items: center !important;
    gap: 2vw !important;
  }
`

export default Container