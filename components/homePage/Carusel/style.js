import styled from "styled-components";


const Container = styled.div`
  height: 100%;
  .mySwiper{
   max-width: 1276px;
   width: 100%;
   border-radius: 25px;
   cursor: pointer;
   height: 520px;


   .SwiperSlide{
    height: 100%;
    .img{
      width: 100%;
      height: 100%;
    }
   
   }
  }
  @media only screen and (max-width: 1000px) {
    .mySwiper{
      max-width: 330px;
      width: 100%;
      height: 490px;
      border-radius: 10px;
    }
   
   .mySwiper .SwiperSlide p{
    font-size: 12px;
    line-height: 14px;
    padding: 0 20px;
    bottom: 40px;
   }

  }
`

export default Container