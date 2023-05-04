import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react"

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 3fr 1fr;
  .mySwiper{
    max-width: 900px;
    width: 100%;
    border-radius: 25px;
    cursor: pointer;
    height: 100%;
    .SwiperSlide{
      height: 100%;
    }
  }
  @media only screen and (max-width: 1000px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
    .mySwiper{
      width: 400px;
    }
  }
  
`
Container.CaruselInset = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("http://185.217.131.147:8088/api/v1/attachment/download/${({imgBack})=> imgBack && imgBack}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`
Container.Top = styled.div`
  color: red;
  grid-row: 1/2;
  grid-column: 1/2;
  @media only screen and (max-width: 1000px) {
    grid-row: 1/2;
    grid-column: 1/2;
  }
`
Container.Bottom = styled.div`
  color: #fff;
  padding: 10px;
  grid-row: 2/3;
  grid-column: 1/2;
  @media only screen and (max-width: 1000px) {
    grid-row: 2/3;
    grid-column: 1/2;
  }
`
Container.Right = styled.div`
  grid-row: 1/3;
  grid-column: 2/3;
  width: 100%;
  height: 500px !important;
  overflow-y: scroll;
  padding: 0 16px 15px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`



export default Container