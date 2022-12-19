import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import Image from "next/image.js";


const Container = styled.div`
  border-radius: 25px;
  height: 100%;
  display: grid;
  grid-template-rows: 67px 1fr 40px;
`
Container.Header = styled.div`
  height: 67px;
  background: #221F51;
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
`

const carouselWidth = '400px'


Container.MainCarousel = styled.div`
  
`
  
const Carousels = styled(Carousel)`
  height: ${carouselWidth} !important;
  border-radius: 25px;
  .control-dots{
    top: 150px !important;
    left: 0px !important;
    z-index: 99999999 !important;
  }
`
Carousels.CaruselImg = styled(Image)`
  max-height: ${carouselWidth} !important;
  width: 100%;
  border-radius: 25px;

`


const CaruselContainer = styled.div`
  height: 400px;
  width: 100%;
  position: relative;
  padding: 0 15px 0 0;
 >p{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: justify;
    color: #FFFFFF;
    position: absolute;
    z-index: 9999;
    left: 0px;
    bottom: 15px;
    right: 0px;
    margin: 0 auto;
    padding: 0 60px;
    text-shadow: 0 0 8px #333;
}
`
const Blur = styled.div`
  position: absolute ;
  top: 8px;
  bottom:  0px ;
  right: 0px ;
  left: 0px ;
  /* background-color: rgba(0,0,0,0.2); */
  height: 500px !important;
  max-width: 97.5%;
  border-radius: 25px;
  margin: 0 auto;
`
const ContainerDow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 2fr;
  width: 95%;
  margin: 0 auto;
  gap: 15px;
`
const ButtonCon = styled.div`
   height:40px;
   display:flex;
   justify-content:center;
   align-items: center;
   padding-right:35px ;
   cursor: pointer;
  transition: 0.2s;
   :hover {transform: scale(1.02)}
    background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
    box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 105.9%;
    display: flex;
    align-items: center;
    letter-spacing: -0.025em;
    color: rgba(255, 255, 255, 0.5);
    position: relative;
    top: 0px;

    
    >div{
        position: absolute;
        right: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

`


export { Carousels, CaruselContainer, Blur, ContainerDow, ButtonCon,  }
export default Container