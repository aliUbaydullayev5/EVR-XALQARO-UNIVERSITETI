import React from "react";
import Container, { Carousels, ContainerDow } from "./style.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Down from "../../../assets/icon/personDown.svg";
import Button from "../../generic/Button";
import ImagCar from "../../../assets/icons/EvrLogo.png";
import { useState } from "react";
import { useEffect } from "react";
import Close from '../../../assets/icon/rahmariyatCloseIcon.svg'
import { useRouter } from "next/router.js";


export const AboutCaruselComp = () => {
  const [state, setState] = useState()
  const query = useRouter()

  useEffect(()=> {
      setState(window.innerWidth)
  }, [])

 
  return (
    <Container>
      <Container.Header>Biz haqimizda
      <Close className={'icon'} onClick={() => query.push('/homePage')} />
      </Container.Header>

      <Container.MainCarousel>
        <Container.Img>
            <Carousels autoPlay={state < 1000 ? false : true} showThumbs={false}>
                <Carousels.CaruselImg src={ImagCar} alt='carusel' />
                <Carousels.CaruselImg src={ImagCar} alt='carusel' />
                <Carousels.CaruselImg src={ImagCar} alt='carusel' />
                <Carousels.CaruselImg src={ImagCar} alt='carusel' />
                <Carousels.CaruselImg src={ImagCar} alt='carusel' />
            </Carousels>
            <p>loocuihygfuhsijc Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi cum ab debitis dolor sunt dignissimos autem et ducimus modi enim!</p>
        </Container.Img>
        <ContainerDow>
          <a href="" download={true}>
          <Button msize={"15px"} mheight={"26px"} mwidth={"143px"} radius={"5px"} size={"20px"} height={"44px"} width={"240px"}>
            <p>Litsenziya</p> &nbsp; &nbsp;
            <Down />
          </Button>
          </a>
          <a href="" download={true}>
          <Button msize={"15px"} mheight={"26px"} mwidth={"143px"} radius={"5px"} size={"20px"} height={"44px"} width={"240px"}>
            <p>O'tish bali</p> &nbsp; &nbsp;
            <Down />
          </Button>
          </a>
          <a href="" download={true}>
          <Button msize={"10px"} mheight={"26px"} mwidth={"143px"} radius={"5px"} size={"20px"} height={"44px"} width={"346px"}>
            <p>Kontrakt ma'lumotlari</p> &nbsp; &nbsp;
            <Down />
          </Button>
          </a>
          <a href="" download={true}>
          <Button msize={"10px"} mheight={"26px"} mwidth={"143px"} radius={"5px"} size={"20px"} height={"44px"} width={"304px"}>
            <p>O'qish davomiyligi</p> &nbsp; &nbsp;
            <Down />
          </Button>
          </a>
        </ContainerDow>
      </Container.MainCarousel>
    </Container>
  );
};

export default AboutCaruselComp;

// const data = [
//     {
//       idL: 1,
//       element: (
//         <CaruselContainer>
//           <Carousels.CaruselImg src={imagCar} alt="carusel" />
//           <Carousels.CaruselImg />
//           <p>
//             Lorem ipsum dolor sit amet consectetur. Consequat neque cursus lacus
//             bibendum. Accumsan vestibulum eu aliquam lectus nunc scelerisque a
//             semper sed.
//           </p>
//         </CaruselContainer>
//       ),
//     },
//     {
//       idL: 2,
//       element: (
//         <CaruselContainer>
//           <p>
//             Lorem ipsum dolor sit amet consectetur. Consequat neque cursus lacus
//             bibendum. Accumsan vestibulum eu aliquam lectus nunc scelerisque a
//             semper sed.
//           </p>
//         </CaruselContainer>
//       ),
//     },
//     {
//       idL: 3,
//       element: (
//         <CaruselContainer>
//           <Carousels.CaruselImg src={imagCar} alt="carusel" />
//           <p>
//             Lorem ipsum dolor sit amet consectetur. Consequat neque cursus lacus
//             bibendum. Accumsan vestibulum eu aliquam lectus nunc scelerisque a
//             semper sed.
//           </p>
//         </CaruselContainer>
//       ),
//     },
//   ];
