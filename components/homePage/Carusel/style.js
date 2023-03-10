import styled from "styled-components";


const Container = styled.div`
  padding: 0px 15px 0 15px;
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
    margin-top: 10px;
    .mySwiper{
      max-width: 300px;
      width: 100%;
      height: 480px;
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