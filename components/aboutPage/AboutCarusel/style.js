import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import Image from "next/image.js";


const Container = styled.div`
  height: 100%;
  background: #221F51;
  border-radius: 30px;  
  display: grid;
  grid-template-rows: 84px 1fr;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media only screen and (max-width: 1000px){
   grid-template-rows: 40px 1fr;
  }
`

Container.Header = styled.div`
  width: 97%;
  height: 84px;
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 30px 30px 0px 0px;
  font-weight: 500;
  font-size: 32px;
  line-height: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  position: relative;
  .icon{
    position: absolute;
    top: 21px;
    right: 29px;
    cursor: pointer;
  }
  @media only screen and (max-width: 1000px){
   font-size: 20px;
   height: 42px;
   .icon{
    top: 10px;
    right: 20px;
   }
  }
`

Container.Img=styled.div`
 width: 100%;
 height: 380px;
 position: relative;

 p{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: justify;
    color: #FFFFFF;
    position: absolute;
    z-index: 2;
    bottom: 10px;
    padding: 0 50px;
  }

  @media only screen and (max-width: 1000px){
   >p{
    font-weight: 350;
    font-size: 10px;
    line-height: 12px;
    padding: 0 30px;
   }
  }
`


Container.MainCarousel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-size: cover;
`

const ContainerDow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1000px){
   gap: 12px;
  }
`

const Carousels = styled(Carousel)`
  height: 455px !important;
  border-radius: 25px;
`
Carousels.CaruselImg = styled(Image)`
  max-height: 520px !important;
  max-width: 100%;
  border-radius: 25px;
  @media only screen and (max-width: 1000px) {
    max-height: 467px !important;
  }
`

export { Carousels, ContainerDow, }
export default Container