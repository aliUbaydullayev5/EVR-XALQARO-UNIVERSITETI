import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import Image from 'next/image.js';


const Container = styled.div`
  padding: 0px 15px 0 15px;
  border-radius: 25px;
  height: 100%;
  @media only screen and (max-width: 1000px) {
    padding: 0px 15px 0 15px;
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

export { Carousels }
export default Container