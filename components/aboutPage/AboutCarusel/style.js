import styled from "styled-components";


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
  width: 100%;
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
 max-width: 1276px;
 height: 380px;
 .mySwiper{
  width: 100%;
  height: 100%;
  cursor: pointer;
  .wrap{
    display: flex;
    flex-direction: column;
  }
 
  .SwiperSlide{
    height: 380px;
    .img{
      width: 100%;
      height: 100%;
    }
    p{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    text-align: justify;
    color: #FFFFFF;
    position: absolute;
    z-index: 2;
    bottom: 30px;
    padding: 0 50px;
    }
  }
 }
 @media only screen and (max-width: 1000px){
  .mySwiper{
    max-width: 355px;
    width: 100%;
  }
  .SwiperSlide{
    margin-top: 10px;
  }
  .mySwiper .SwiperSlide p{
    font-size: 12px;
    line-height: 12px;
    padding: 0 20px;
    bottom: 40px;
  }
 }
`


Container.MainCarousel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-size: cover;
  .text{
    text-shadow: 1px 1px 8px black;
  }
`

const ContainerDow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 48px;
  align-items: center;
  justify-content: center;
  a{
    >button{
      background: #241F69;
    }
  }
 

  @media only screen and (max-width: 1000px){
   gap: 12px;
  }
`

export { ContainerDow, }
export default Container